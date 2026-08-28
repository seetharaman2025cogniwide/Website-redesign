'use client'
import Image from 'next/image';
import Section from '@/components/layout/Section';

const CogniLoomDiagram = () => {
  return (
    <Section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            CogniLoom Architecture
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive view of the CogniLoom DevSecOps orchestration platform architecture.
          </p>
        </div>
        <div className="bg-gradient-to-br bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-black text-center mb-8">CogniLoom Architecture Diagram</h3>
          <div className="flex justify-center">
            <Image
              src="/images/CogniLoom-architecture.png"
              alt="CogniLoom Architecture Diagram"
              width={1200}
              height={800}
              className="rounded-lg shadow-md"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CogniLoomDiagram;