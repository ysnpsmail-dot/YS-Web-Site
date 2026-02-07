"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function HeaderNav() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const updateIndicator = () => {
      const activeLink = document.querySelector(
        `[data-nav-index="${activeIndex}"]`
      ) as HTMLElement;
      if (activeLink) {
        setIndicatorStyle({
          left: activeLink.offsetLeft,
          width: activeLink.offsetWidth,
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeIndex]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl md:text-2xl font-bold text-white tracking-tight animate-breathe">
          YS Web Studio
        </span>

        <nav className="hidden md:flex gap-8 text-sm relative">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              data-nav-index={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-colors duration-300 hover:text-white ${
                activeIndex === index ? "text-white" : "text-gray-400"
              }`}
            >
              {link.name}
            </a>
          ))}
          <div
            className="absolute bottom-[-8px] h-[2px] bg-white transition-all duration-500 ease-out"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
            }}
          />
        </nav>

        <button className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <style jsx>{`
        @keyframes breathe {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.85;
          }
        }
        .animate-breathe {
          animation: breathe 4s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-breathe {
            animation: none;
          }
        }
      `}</style>
    </header>
  );
}
