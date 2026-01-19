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
    img: "https://i.pravatar.cc/100?img=3",
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
  {
    img: "https://i.pravatar.cc/100?img=5",
    name: "Nadine",
    role: "CTO, Future Systems",
    text: "Seamless integration and excellent performance. A must-have for any tech company.",
  },
  {
    img: "https://i.pravatar.cc/100?img=6",
    name: "Emily Davis",
    role: "Product Owner, Creative Minds",
    text: "Our team's productivity has skyrocketed since we started using this tool.",
  },
  {
    img: "https://i.pravatar.cc/100?img=7",
    name: "David Wilson",
    role: "UX Designer, Design Hub",
    text: "A beautifully designed product that is a joy to use.",
  },
  {
    img: "https://i.pravatar.cc/100?img=8",
    name: "Jessica Miller",
    role: "Data Scientist, Insights Corp",
    text: "The analytics features are powerful and intuitive.",
  },
  {
    img: "https://i.pravatar.cc/100?img=9",
    name: "Chris Taylor",
    role: "Founder, Startup XYZ",
    text: "Essential for any startup looking to scale quickly.",
  },
  {
    img: "https://i.pravatar.cc/100?img=10",
    name: "Amanda Green",
    role: "HR Manager, PeopleFirst",
    text: "Our employees love the new system.",
  },
  {
    img: "https://i.pravatar.cc/100?img=11",
    name: "Robert Anderson",
    role: "CFO, Moneywise",
    text: "Great value and a solid return on investment.",
  },
  {
    img: "https://i.pravatar.cc/100?img=12",
    name: "Laura Martinez",
    role: "Operations, Efficient Co.",
    text: "Streamlined our operations from day one.",
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