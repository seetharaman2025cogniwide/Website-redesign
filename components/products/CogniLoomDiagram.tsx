'use client'
import Image from 'next/image';

const CogniLoomDiagram = () => {
  return (
    <section className="py-16 bg-[#0B0A14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            CogniLoom Architecture
          </h2>
          <p className="text-lg text-[#B8B6C4] max-w-3xl mx-auto">
            A comprehensive view of the CogniLoom DevSecOps orchestration platform architecture.
          </p>
        </div>
        <div className="relative bg-gradient-to-br from-[#EDE9FE] via-[#F5F3FF] to-[#EDE9FE] p-8 rounded-2xl border border-[#C4B5FD] shadow-[0_10px_35px_rgba(139,92,246,0.15)] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8B5CF6]/60 to-transparent" />
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(167,139,250,0.12),transparent_70%)]" />
          <h3 className="text-2xl font-bold text-[#4C1D95] text-center mb-8">CogniLoom Architecture Diagram</h3>
          <div className="flex justify-center">
            <Image
              src="/images/CogniLoom-architecture.png"
              alt="CogniLoom Architecture Diagram"
              width={1200}
              height={800}
              className="rounded-lg"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CogniLoomDiagram;