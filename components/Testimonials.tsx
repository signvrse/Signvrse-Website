import React, { useEffect, useState } from "react";

const testimonials = [
  {
    img: "https://i.pravatar.cc/100?img=1",
    name: "Bradley Sinzole",
    role: "Deaf Web Developer",
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