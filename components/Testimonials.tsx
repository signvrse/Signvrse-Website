import React, { useEffect, useState } from "react";

const testimonials = [
  {
    img: "data:image/jpeg;base64,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",
    name: "Bradley Sinzole",
    role: "IT Specialist",
    text: "Signvrse represents the kind of technology I believe in: technology that is built with purpose, empathy, and inclusion at its core. Being part of a team that prioritizes accessibility and Deaf representation while pushing the boundaries of AI and immersive media has been incredibly meaningful. The work we are doing has the potential to change how digital communication works for millions.",
  },
  {
    img: "/images/team/andrew.png",
    name: "Andrew Olubala",
    role: "Community Engagement Lead, Signvrse",
    text: "Incredible results and an amazing team to work with. Highly recommended!",
  },
  {
    img: "data:image/jpeg;base64,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",
    name: "Winnie Wambui",
    role: "Data Scientist",
    text: "A game-changer for our development process. The support is top-notch.",
  },
  {
    img: "/images/team/ndurumo.jpg",
    name: "Prof. Michael M. Ndurumo",
    role: "Lecturer, University of Nairobi",
    text: "The best investment we've made this year. The ROI is simply outstanding.",
  },
];

// --- Utility Functions ---

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const generateRandomSequence = (itemsPerColumn: number): typeof testimonials => {
  const sequence: typeof testimonials = [];
  for (let i = 0; i < 4; i++) {
    sequence.push(...shuffleArray(testimonials));
  }
  return sequence.slice(0, itemsPerColumn);
};

// --- Sub-Components ---

// 1. The Card Component (Reused)
const TestimonialCard = ({ data }: { data: typeof testimonials[0] }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800 flex-shrink-0 w-[280px] md:w-auto">
    <div className="flex flex-col items-center text-center">
      <img
        src={data.img}
        alt={data.name}
        className="mb-4 h-14 w-14 rounded-full border-2 border-gray-100 object-cover dark:border-slate-700"
      />
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
        {data.name}
      </h3>
      <p className="text-sm font-medium text-brand-600">
        {data.role}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-slate-300">
        "{data.text}"
      </p>
    </div>
  </div>
);

// 2. Main Component
const Testimonials: React.FC = () => {
  const [columns, setColumns] = useState<Array<Array<typeof testimonials[number]>>>([]);

  useEffect(() => {
    const generatedColumns = Array.from({ length: 4 }, () =>
      generateRandomSequence(16)
    );
    setColumns(generatedColumns);
  }, []);

  if (columns.length === 0) return null;

  return (
    <div className="w-full py-12 bg-gray-50 dark:bg-slate-900/50 flex flex-col items-center">
      
      {/* Styles for animation keyframes (Drop-in support) */}
      <style>{`
        @keyframes scroll-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-horizontal-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-vertical {
          animation: scroll-vertical var(--animation-duration, 40s) linear infinite;
        }
        .animate-scroll-horizontal {
          animation: scroll-horizontal var(--animation-duration, 40s) linear infinite;
        }
        .animate-scroll-horizontal-reverse {
          animation: scroll-horizontal-reverse var(--animation-duration, 40s) linear infinite;
        }
        /* Pause on hover for readability */
        .group:hover .animate-scroll-vertical,
        .group:hover .animate-scroll-horizontal,
        .group:hover .animate-scroll-horizontal-reverse {
          animation-play-state: paused;
        }
      `}</style>

      {/* --- DESKTOP VIEW (Vertical Grid) --- */}
      <div 
        className="hidden md:flex group relative w-full flex-col items-center justify-center overflow-hidden rounded-lg"
        style={{ height: "600px" }}
      >
        {/* Top/Bottom Fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-gray-50 via-gray-50/80 to-transparent dark:from-slate-900 dark:via-slate-900/90 dark:to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent dark:from-slate-900 dark:via-slate-900/90 dark:to-transparent" />
        
        <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden px-4">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="relative h-full overflow-hidden">
              <div
                className="animate-scroll-vertical flex flex-col gap-4 pb-4"
                style={{ "--animation-duration": `${35 + colIndex * 3}s` } as React.CSSProperties}
              >
                {[...col, ...col].map((testimonial, i) => (
                  <TestimonialCard key={i} data={testimonial} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MOBILE VIEW (Horizontal Marquee) --- */}
      <div className="flex md:hidden flex-col gap-6 w-full overflow-hidden group">
        
        {/* Row 1: Left Scroll */}
        <div className="relative w-full">
           {/* Left/Right Fade */}
           <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-gray-50 to-transparent dark:from-slate-900" />
           <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-gray-50 to-transparent dark:from-slate-900" />
           
           <div 
             className="flex gap-4 animate-scroll-horizontal w-max px-4"
             style={{ "--animation-duration": "40s" } as React.CSSProperties}
           >
              {/* Triple repeat for smoother infinite scroll on wide mobile/tablets */}
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, i) => (
                  <TestimonialCard key={i} data={testimonial} />
              ))}
           </div>
        </div>

        {/* Row 2: Right Scroll (Reverse) */}
        <div className="relative w-full">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-gray-50 to-transparent dark:from-slate-900" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-gray-50 to-transparent dark:from-slate-900" />
            
            <div 
              className="flex gap-4 animate-scroll-horizontal-reverse w-max px-4"
              style={{ "--animation-duration": "45s" } as React.CSSProperties}
            >
               {[...testimonials, ...testimonials, ...testimonials].reverse().map((testimonial, i) => (
                   <TestimonialCard key={i} data={testimonial} />
               ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;