'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { Cpu, Cloud, Database, Code2, Layers, Shield, CheckCircle } from 'lucide-react';

const techCategories = [
  {
    id: 'ai',
    title: 'Generative AI & LLMs',
    icon: Cpu,
    description: 'State-of-the-art models and orchestration frameworks.',
    items: [
      { name: 'Python', logo: 'https://cdn.simpleicons.org/python' },
      { name: 'Anthropic', logo: 'https://cdn.simpleicons.org/anthropic' },
      { name: 'Meta Llama', logo: 'https://cdn.simpleicons.org/meta' },
      { name: 'LangChain', logo: 'https://cdn.simpleicons.org/langchain' },
      { name: 'Hugging Face', logo: 'https://cdn.simpleicons.org/huggingface' },
      { name: 'Java', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    description: 'Scalable, secure, and multi-cloud deployment environments.',
    items: [
      { name: 'AWS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Azure', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg' },
      { name: 'Google Cloud', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Kubernetes', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'Docker', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
      { name: 'Terraform', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg' },
      { name: 'DigitalOcean', logo: '/images/external-integrations/digitalocean_icon.png' }
    ]
  },
  {
    id: 'data',
    title: 'Data Engineering',
    icon: Database,
    description: 'High-performance data pipelines and real-time processing.',
    items: [
      { name: 'Snowflake', logo: 'https://cdn.simpleicons.org/snowflake' },
      { name: 'Databricks', logo: 'https://cdn.simpleicons.org/databricks' },
      { name: 'Apache Spark', logo: 'https://cdn.simpleicons.org/apachespark' },
      { name: 'Kafka', logo: 'https://cdn.simpleicons.org/apachekafka' },
      { name: 'Airflow', logo: 'https://cdn.simpleicons.org/apacheairflow' },
      { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb' },
      { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql' }
    ]
  },
  {
    id: 'app',
    title: 'Application Stack',
    icon: Code2,
    description: 'Modern, reactive, and type-safe application architecture.',
    items: [
      { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs' },
      { name: 'React', logo: 'https://cdn.simpleicons.org/react' },
      { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript' },
      { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs' },
      { name: 'FastAPI', logo: 'https://cdn.simpleicons.org/fastapi' },
      { name: 'GraphQL', logo: 'https://cdn.simpleicons.org/graphql' },
      { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss' },
      { name: 'Java', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
      { name: 'Python', logo: 'https://cdn.simpleicons.org/python' }
    ]
  },
  {
    id: 'devops',
    title: 'DevSecOps',
    icon: Layers,
    description: 'Automated CI/CD with baked-in security and monitoring.',
    items: [
      { name: 'GitHub', logo: '/images/external-integrations/github_icon.png' },
      { name: 'GitLab', logo: '/images/external-integrations/gitlab_icon.png' },
      { name: 'Jenkins', logo: '/images/external-integrations/jenkins_logo.png' },
      { name: 'ArgoCD', logo: 'https://cdn.simpleicons.org/argo' },
      { name: 'ELK Stack', logo: 'https://cdn.simpleicons.org/elastic' },
      { name: 'Grafana', logo: '/images/external-integrations/Grafana_icon.png' },
      { name: 'Bitbucket', logo: '/images/external-integrations/bitbucket_icon.webp' }
    ]
  },
  {
    id: 'quality',
    title: 'Quality Engineering',
    icon: CheckCircle,
    description: 'Comprehensive test automation and quality assurance tools.',
    items: [
      { name: 'Selenium', logo: '/images/external-integrations/selenium_icon.png' },
      { name: 'Playwright', logo: '/images/external-integrations/playwright_icon.png' },
      { name: 'Cypress', logo: '/images/external-integrations/cypress_icon.png' },
      { name: 'Jest', logo: '/images/external-integrations/jest_icon.jpg' },
      { name: 'TestRail', logo: '/images/external-integrations/testrail_icon.png' },
      { name: 'TestNG', logo: '/images/external-integrations/test_icon.png' },
      { name: 'Jira', logo: '/images/external-integrations/jira_icon.jpg' }
    ]
  }
];

const allCategories = [
  ...techCategories[0].items,
  ...techCategories[1].items,
  ...techCategories[2].items,
  ...techCategories[3].items,
  ...techCategories[4].items,
  ...techCategories[5].items,
];

// Split into 3 rows for visual balance
const row1 = [...techCategories[0].items, ...techCategories[1].items];
const row2 = [...techCategories[2].items, ...techCategories[3].items];
const row3 = [...techCategories[4].items, ...techCategories[5].items];

const MarqueeRow = ({ items, direction = 'left', speed = 50 }: { items: typeof row1, direction?: 'left' | 'right', speed?: number }) => {
  return (
    <div className="flex overflow-hidden relative w-full py-4">
      <motion.div
        initial={{ x: direction === 'left' ? 0 : '-50%' }}
        animate={{ x: direction === 'left' ? '-50%' : 0 }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex gap-8 flex-nowrap px-4"
        style={{ width: "max-content" }}
      >
        {[...items, ...items].map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="relative group/logo w-20 h-20 bg-white rounded-2xl border border-[#29263A] flex items-center justify-center p-4 shadow-[0_6px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(124,58,237,0.35)] hover:border-[#8B5CF6]/60 transition-all duration-300 flex-shrink-0"
            title={item.name}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {item.logo ? (
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  unoptimized
                  className="object-contain p-1"
                />
              ) : (
                <span className="text-xs font-bold text-[#0B0A14] text-center">{item.name}</span>
              )}
            </div>
            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#1A1829] border border-[#29263A] text-white text-xs rounded-lg opacity-0 group-hover/logo:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 shadow-[0_0_18px_rgba(124,58,237,0.35)]">
              {item.name}
            </div>
          </div>
        ))}
      </motion.div>
      
      {/* Gradient masks for smooth fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0B0A14] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0B0A14] to-transparent z-10" />
    </div>
  );
};

export const TechStack = () => {
  return (
    <section className="py-12 bg-[#0B0A14] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-[#8B5CF6]/10 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Built on a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#C084FC] drop-shadow-[0_0_20px_rgba(139,92,246,0.45)]">
              Modern Tech Stack
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#B8B6C4] max-w-2xl mx-auto"
          >
            We leverage best-in-class technologies to build scalable, secure, and future-proof AI solutions for the enterprise.
          </motion.p>
        </div>

        <div className="flex flex-col gap-6 -mx-4 md:mx-0">
          <MarqueeRow items={row1} direction="left" speed={40} />
          <MarqueeRow items={row2} direction="right" speed={45} />
          <MarqueeRow items={row3} direction="left" speed={35} />
        </div>
      </div>
    </section>
  );
};
