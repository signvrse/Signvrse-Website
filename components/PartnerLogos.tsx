import React from 'react';

const partnerLogos = [
  'afosi_logo22.png',
  'alu-logo.svg',
  'alx.svg',
  'ashoka.svg',
  'at-scale.webp',
  'at4d.png',
  'ATscale-UNOPS_stacked_transp.png',
  'cmu.png',
  'commonwealth.png',
  'GDI-Hub-logo_Black-WhiteBG.jpg',
  'GDS.svg',
  'genu.png',
  'ict.png',
  'kbta.avif',
  'kenia.png',
  'mastercard.png',
  'millenium.png',
  'precision.png',
  'rae_logo_black.png',
  'undp-logo.png',
  'unfpa.png',
  'unicef.png',
  'villgro-logo.png',
  'WAFF_Logo_Stacked_RegMarkNEW.png',
  'youth.jpeg',
];

export const PartnerLogos: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">Our Proud Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
              <img src={`/images/partners/${logo}`} alt={`Partner ${index + 1}`} className="max-h-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
