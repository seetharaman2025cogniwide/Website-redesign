'use client'
import Image from 'next/image';

const CogniAssistDiagram = () => {
  return (
    <section className="py-16 bg-[#0D0C1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
            CogniAssist Architecture
          </h2>
          <p className="text-lg text-[#B8B6C4] max-w-3xl mx-auto">
            A visual overview of the CogniAssist platform architecture.
          </p>
        </div>
        <div className="relative bg-gradient-to-br from-[#EDE9FE] via-[#F5F3FF] to-[#EDE9FE] rounded-2xl border border-[#C4B5FD] shadow-[0_10px_35px_rgba(139,92,246,0.15)] p-4 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8B5CF6]/60 to-transparent" />
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(167,139,250,0.12),transparent_70%)]" />
          <div className="relative w-full max-w-[2400px] mx-auto" style={{ minHeight: '60vh' }}>
            <Image
              src="/images/nav/new.png"
              alt="CogniAssist Architecture Diagram"
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

export default CogniAssistDiagram;