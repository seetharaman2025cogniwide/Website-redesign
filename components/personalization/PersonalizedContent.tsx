'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { usePersonalization } from './PersonalizationProvider';
import { ContentRecommendation } from '@/lib/personalization';
import { RocketLaunchIcon, CogIcon, ChartBarIcon, DocumentTextIcon, BookOpenIcon, DocumentIcon } from '@heroicons/react/24/outline';

interface PersonalizedContentProps {
  contentType?: 'all' | 'products' | 'services' | 'resources' | 'case_studies';
  limit?: number;
  className?: string;
}

export function PersonalizedContent({ 
  contentType = 'all', 
  limit = 6, 
  className = '' 
}: PersonalizedContentProps) {
  const { recommendations, hasConsent, userProfile, trackInteraction } = usePersonalization();
  const [filteredRecommendations, setFilteredRecommendations] = useState<ContentRecommendation[]>([]);

  useEffect(() => {
    let filtered = recommendations;
    
    if (contentType !== 'all') {
      // Map plural contentType to singular type
      const typeMap: Record<string, string> = {
        'products': 'product',
        'services': 'service',
        'resources': 'resource',
        'case_studies': 'case_study'
      };
      const mappedType = typeMap[contentType] || contentType;
      filtered = recommendations.filter(rec => rec.type === mappedType);
    }
    
    setFilteredRecommendations(filtered.slice(0, limit));
  }, [recommendations, contentType, limit]);

  const handleRecommendationClick = (recommendation: ContentRecommendation) => {
    trackInteraction({
      type: 'click',
      target: recommendation.id,
      metadata: {
        type: recommendation.type,
        reason: recommendation.reason,
      },
    });
  };

  if (!hasConsent || filteredRecommendations.length === 0) {
    return null;
  }

  return (
    <section className={`py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Recommended for You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Based on your interests and activity, here are some resources that might be valuable for your organization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecommendations.map((recommendation, index) => (
            <motion.div
              key={recommendation.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <RecommendationCard
                recommendation={recommendation}
                onClick={() => handleRecommendationClick(recommendation)}
              />
            </motion.div>
          ))}
        </div>

        {userProfile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="bg-blue-50 rounded-lg p-6 inline-block">
              <p className="text-blue-800 text-sm">
                <span className="font-semibold">Personalization Active:</span> Content tailored for{' '}
                {userProfile.industry && <span className="font-medium">{userProfile.industry}</span>}
                {userProfile.interests.length > 0 && (
                  <span> with interests in {userProfile.interests.slice(0, 2).join(', ')}</span>
                )}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

interface RecommendationCardProps {
  recommendation: ContentRecommendation;
  onClick: () => void;
}

function RecommendationCard({ recommendation, onClick }: RecommendationCardProps) {
  const getTypeIcon = (type: string) => {
    const icons = {
      product: <RocketLaunchIcon className="w-5 h-5" />,
      service: <CogIcon className="w-5 h-5" />,
      case_study: <ChartBarIcon className="w-5 h-5" />,
      blog_post: <DocumentTextIcon className="w-5 h-5" />,
      resource: <BookOpenIcon className="w-5 h-5" />,
    };
    return icons[type as keyof typeof icons] || <DocumentIcon className="w-5 h-5" />;
  };

  const getTypeLabel = (type: string) => {
    const labels = {
      product: 'Product',
      service: 'Service',
      case_study: 'Case Study',
      blog_post: 'Blog Post',
      resource: 'Resource',
    };
    return labels[type as keyof typeof labels] || 'Content';
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 text-green-800';
    if (score >= 70) return 'bg-blue-100 text-blue-800';
    if (score >= 50) return 'bg-yellow-100 text-yellow-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{getTypeIcon(recommendation.type)}</span>
          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
            {getTypeLabel(recommendation.type)}
          </span>
        </div>
        <div className={`px-2 py-1 rounded text-xs font-medium ${getScoreColor(recommendation.score)}`}>
          {recommendation.score}% match
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
        {recommendation.title}
      </h3>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {recommendation.description}
      </p>

      <div className="bg-blue-50 rounded-lg p-3 mb-4">
        <p className="text-blue-800 text-xs">
          <span className="font-medium">Why this matters:</span> {recommendation.reason}
        </p>
      </div>

      <Link href={recommendation.url}>
        <Button
          variant="primary"
          className="w-full"
          onClick={onClick}
        >
          Learn More
        </Button>
      </Link>
    </Card>
  );
}

// Industry-specific content component
interface IndustryContentProps {
  industry: string;
  className?: string;
}

export function IndustryContent({ industry, className = '' }: IndustryContentProps) {
  const { getIndustryContent, trackInteraction } = usePersonalization();
  const [content, setContent] = useState<any[]>([]);

  useEffect(() => {
    const industryContent = getIndustryContent(industry);
    setContent(industryContent);
  }, [industry, getIndustryContent]);

  const handleContentClick = (item: any) => {
    trackInteraction({
      type: 'click',
      target: item.id,
      metadata: {
        industry,
        contentType: item.type,
      },
    });
  };

  if (content.length === 0) {
    return null;
  }

  return (
    <section className={`py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {industry.charAt(0).toUpperCase() + industry.slice(1)} Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover AI solutions specifically designed for the {industry} industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description || `Learn more about our ${item.type} for ${industry}`}
                </p>
                <div className="flex items-center justify-between">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                    {item.score}% relevant
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleContentClick(item)}
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}