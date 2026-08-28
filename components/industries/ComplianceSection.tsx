'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { LockIcon, HeartIcon, ChartBarIcon, ShieldIcon, BankIcon, TrendingUpIcon, CheckCircleIcon } from '@/components/ui/icons';

interface ComplianceRequirement {
  name: string;
  description: string;
  aiSolution: string;
  benefits: string[];
}

interface ComplianceSectionProps {
  industry: string;
  requirements: ComplianceRequirement[];
}

export function ComplianceSection({ industry, requirements }: ComplianceSectionProps) {
  const complianceIcons = {
    'GDPR': LockIcon,
    'HIPAA': HeartIcon,
    'SOX': ChartBarIcon,
    'PCI DSS': ShieldIcon,
    'CCPA': ShieldIcon,
    'Basel III': BankIcon,
    'MiFID II': TrendingUpIcon,
    'COSO': ShieldIcon,
    'ISO 27001': LockIcon,
    'SOC 2': CheckCircleIcon,
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-brand-dark-grey via-brand-medium-grey to-brand-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Regulatory Compliance & AI
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ensure compliance while leveraging AI to streamline regulatory processes and reduce risk
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {requirements.map((requirement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full bg-white/5 backdrop-blur-sm border border-white/30 hover:bg-white/10 hover:border-brand-yellow/50 hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-brand-yellow/30 rounded-xl flex items-center justify-center text-brand-yellow border-2 border-brand-yellow/50 shadow-lg">
                    {(() => {
                      const IconComponent = complianceIcons[requirement.name as keyof typeof complianceIcons] || CheckCircleIcon;
                      return <IconComponent className="w-7 h-7" />;
                    })()}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {requirement.name}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-base leading-relaxed">
                  {requirement.description}
                </p>

                <div className="bg-brand-yellow/15 rounded-xl p-4 mb-6 border border-brand-yellow/40 shadow-inner">
                  <h4 className="font-semibold text-brand-yellow mb-2 text-base">AI Solution:</h4>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {requirement.aiSolution}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3 text-base">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {requirement.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-3">
                        <svg className="w-4 h-4 text-brand-yellow mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300 text-sm leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Compliance Assurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-gradient-to-r from-brand-yellow/20 to-brand-yellow/10 rounded-2xl p-8 border border-brand-yellow/40 text-center shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Compliance-First AI Implementation
          </h3>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Our AI solutions are designed with regulatory compliance at their core, ensuring your organization 
            meets all industry standards while maximizing intelligent automation benefits.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-brand-yellow/25 rounded-xl px-4 py-2 border border-brand-yellow/50 shadow-lg hover:bg-brand-yellow/30 transition-colors">
              <span className="font-semibold text-brand-yellow text-base">Privacy by Design</span>
            </div>
            <div className="bg-brand-yellow/25 rounded-xl px-4 py-2 border border-brand-yellow/50 shadow-lg hover:bg-brand-yellow/30 transition-colors">
              <span className="font-semibold text-brand-yellow text-base">Audit Trail</span>
            </div>
            <div className="bg-brand-yellow/25 rounded-xl px-4 py-2 border border-brand-yellow/50 shadow-lg hover:bg-brand-yellow/30 transition-colors">
              <span className="font-semibold text-brand-yellow text-base">Data Governance</span>
            </div>
            <div className="bg-brand-yellow/25 rounded-xl px-4 py-2 border border-brand-yellow/50 shadow-lg hover:bg-brand-yellow/30 transition-colors">
              <span className="font-semibold text-brand-yellow text-base">Risk Management</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}