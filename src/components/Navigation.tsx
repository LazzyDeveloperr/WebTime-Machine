import React, { useEffect, useState } from 'react';

const eras = [
  { id: 'era-1991', label: '1991' },
  { id: 'era-2004', label: '2004' },
  { id: 'era-2010', label: '2010' },
  { id: 'era-2016', label: '2016' },
  { id: 'era-2022', label: '2022' },
  { id: 'era-2025', label: '2025' },
  { id: 'era-2030', label: '2030+' },
];

export const Navigation = () => {
  const [activeEra, setActiveEra] = useState('era-1991');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = eras.length - 1; i >= 0; i--) {
        const section = document.getElementById(eras[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveEra(eras[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="z-50 pointer-events-none">
      <div className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-5 mix-blend-difference pointer-events-auto" style={{ zIndex: 100 }}>
        {eras.map(era => (
          <div
            key={era.id}
            onClick={() => scrollTo(era.id)}
            className="group relative flex items-center justify-end cursor-pointer p-2 -m-2"
            aria-label={`Scroll to ${era.label}`}
          >
            <div className={`absolute right-8 px-2 py-1 bg-white text-black text-[10px] sm:text-xs rounded font-bold font-mono opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-all duration-300 transform group-hover:translate-x-0 translate-x-2`}>
              {era.label}
            </div>
            <div className={`w-3 h-3 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.5)] ${activeEra === era.id ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/80'}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

