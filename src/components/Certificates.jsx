import React, { useState } from 'react';
import { certificates } from '../data/portfolioData';

const CertificateCard = ({ cert, aosDelay, onPreview }) => (
  <div 
    data-aos="zoom-in"
    data-aos-delay={aosDelay}
    className="bg-black/25 backdrop-blur-md rounded-2xl p-5 border border-white/15 hover:border-white/40 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
  >
    {/* Background Ambient Glow */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

    <div>
      {/* Top Row: Icon & Title */}
      <div className="flex items-start gap-3.5 mb-3">
        <span className="text-3xl p-2.5 rounded-xl bg-white/10 border border-white/10 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shrink-0">
          {cert.icon}
        </span>
        <div>
          <h3 className="text-white font-bold text-base md:text-lg leading-snug mb-1">
            {cert.name}
          </h3>
          <p className="text-white/70 text-xs font-semibold uppercase tracking-wider">
            {cert.issuer}
          </p>
          {cert.date && (
            <p className="text-white/50 text-[11px] font-medium mt-0.5">
              Issued: {cert.date}
            </p>
          )}
        </div>
      </div>
    </div>

    {/* Bottom Action Row: Individual View & Preview Buttons */}
    <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-between gap-2">
      {/* Open PDF directly in new tab */}
      <a 
        href={cert.file}
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1 py-2 px-3 rounded-xl bg-white text-black font-bold text-xs hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md group/btn"
      >
        <svg className="w-3.5 h-3.5 text-[#ff2a2a] group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <span>View Certificate ↗</span>
      </a>

      {/* Instant Modal Image Preview Button */}
      {cert.image && (
        <button
          onClick={() => onPreview(cert)}
          className="py-2 px-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-xs hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-1 shrink-0"
          title="Quick Image Preview"
        >
          <span>👁️ Preview</span>
        </button>
      )}
    </div>
  </div>
);

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="bg-[#ff2a2a] pt-20 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <div data-aos="fade-up" className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">
            Certifications
          </h2>
          <p className="text-red-100 text-base md:text-lg font-semibold max-w-lg mx-auto">
            Official verified certificates validating my technical & digital expertise.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {certificates.featured.map((cert, index) => (
            <CertificateCard 
              key={cert.id || cert.name} 
              cert={cert} 
              aosDelay={String((index + 1) * 100)} 
              onPreview={(c) => setSelectedCert(c)}
            />
          ))}
        </div>
      </div>

      {/* Interactive Modal Preview Lightbox */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="bg-[#121212] border border-white/20 rounded-3xl p-4 md:p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Modal Button */}
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/60 p-2 rounded-full border border-white/20 transition-all z-30"
              aria-label="Close Preview"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Title & Issuer */}
            <div className="text-center mb-4">
              <h3 className="text-white font-black text-xl md:text-2xl">{selectedCert.name}</h3>
              <p className="text-white/60 text-sm">{selectedCert.issuer} {selectedCert.date && `• ${selectedCert.date}`}</p>
            </div>

            {/* Certificate Image Preview */}
            <div className="w-full rounded-2xl overflow-hidden border border-white/20 bg-black/80 shadow-inner mb-5 flex justify-center">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.name} 
                className="max-h-[60vh] w-auto object-contain rounded-xl"
              />
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap gap-4 justify-center w-full">
              <a 
                href={selectedCert.file} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-[#ff2a2a] text-white font-bold text-sm hover:bg-red-600 transition-all shadow-lg shadow-red-900/40 flex items-center gap-2"
              >
                <span>Open Full PDF Document ↗</span>
              </a>
              <a 
                href={selectedCert.file} 
                download
                className="px-6 py-2.5 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-sm hover:bg-white hover:text-black transition-all flex items-center gap-2"
              >
                <span>Download PDF 📥</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Decorative stars */}
      <div className="absolute top-16 left-6 md:left-16 text-black opacity-20 animate-pulse pointer-events-none">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-20 right-8 md:right-24 text-black opacity-20 animate-pulse pointer-events-none" style={{ animationDelay: '1.5s' }}>
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Certificates;
