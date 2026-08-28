'use client'
import Image from 'next/image';
import Section from '@/components/layout/Section';

const CogniAssistDiagram = () => {
  return (
    <Section>
      <div className="max-w-7xl mx-auto sm:px-4">
        <div className="text-center mb-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            CogniAssist Architecture
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A visual overview of the CogniAssist platform architecture.
          </p>
        </div>
        <div className="p-0 rounded-lg h-screen flex flex-col">
                {/* <h3 className="text-2xl font-bold text-white text-center mb-1 leading-tight">
                  CogniAssist Architecture Diagram
                </h3> */}

                <div className="relative w-full max-w-[2400px] mx-auto h-[70vh]">
                  <Image
                    src="/images/nav/new.png"
                   alt="CogniAssist Architecture Diagram"
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

export default CogniAssistDiagram;