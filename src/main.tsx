import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { introSlides, llmSlides, windowsSlides, fluencySlides, modelsSlides, copilotSlides, instructionsSlides, skillsSlides, repeatingSlides, spacesSlides, contextSlides, multiagentSlides } from './sections';
import './index.css';

const FourDSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(() => {
    // Read initial slide from query parameter (1-based)
    const params = new URLSearchParams(window.location.search);
    const slideParam = params.get('slide');
    if (slideParam) {
      const slideNumber = parseInt(slideParam, 10);
      if (!isNaN(slideNumber) && slideNumber > 0) {
        return slideNumber - 1; // Convert to 0-based index
      }
    }
    return 0;
  });

  // Combine all slide sections
  const slides = [
    ...introSlides,
    ...llmSlides,
    ...windowsSlides,
    ...fluencySlides,
    ...modelsSlides,
    ...copilotSlides,
    ...instructionsSlides,
    ...contextSlides,
    ...repeatingSlides,
    ...spacesSlides,
    ...skillsSlides,
    ...multiagentSlides,
  ];

  // Update URL when slide changes
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set('slide', String(currentSlide + 1)); // Convert to 1-based for URL
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Validate and clamp currentSlide to valid range
  useEffect(() => {
    if (currentSlide >= slides.length) {
      setCurrentSlide(slides.length - 1);
    } else if (currentSlide < 0) {
      setCurrentSlide(0);
    }
  }, [currentSlide, slides.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <div className="flex-1 flex flex-col p-4 md:p-8">
        <div className="mb-4 md:mb-6 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-1 md:mb-2">
            {slides[currentSlide].title}
          </h1>
          <p className="text-base md:text-xl text-gray-600">
            {slides[currentSlide].subtitle}
          </p>
        </div>

        <div className="flex-1 overflow-auto flex items-center justify-center">
          {slides[currentSlide].content}
        </div>

        <div className="mt-4 md:mt-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 px-2 md:px-4">
          <div className="flex items-center justify-between w-full md:w-auto md:flex-1">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center space-x-1 md:space-x-2 px-3 py-1.5 md:px-4 md:py-2 bg-white rounded-lg shadow hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm md:text-base"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="text-xs md:text-sm text-gray-500 text-center md:hidden">
              {currentSlide + 1} / {slides.length}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center space-x-1 md:space-x-2 px-3 py-1.5 md:px-4 md:py-2 bg-white rounded-lg shadow hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm md:text-base md:hidden"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          <div className="hidden md:block text-sm text-gray-500">
            Slide {currentSlide + 1} of {slides.length} | AI Native Software Engineering
          </div>

          <div className="hidden md:flex md:flex-1 md:justify-end">
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FourDSlides />
  </React.StrictMode>,
);
