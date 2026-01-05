import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { introSlides, llmSlides, fluencySlides, modelsSlides, copilotSlides, instructionsSlides, skillsSlides, repeatingSlides, contextSlides, worktreesSlides } from './sections';
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
    ...fluencySlides,
    ...modelsSlides,
    ...copilotSlides,
    ...instructionsSlides,
    ...contextSlides,
    ...repeatingSlides,
    ...skillsSlides,
    ...worktreesSlides,
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
      <div className="flex-1 flex flex-col p-8">
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl text-gray-600">
            {slides[currentSlide].subtitle}
          </p>
        </div>

        <div className="flex-1 overflow-auto flex items-center justify-center">
          {slides[currentSlide].content}
        </div>

        <div className="mt-6 flex items-center justify-between px-4">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>

          <div className="text-sm text-gray-500">
            Slide {currentSlide + 1} of {slides.length} | AI Native Software Engineering
          </div>

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
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FourDSlides />
  </React.StrictMode>,
);
