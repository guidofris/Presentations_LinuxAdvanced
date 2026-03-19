import { SlideType } from './types';
import { useEffect } from 'react';

const FeedbackButton = () => {
  const navigateToFeedback = (e: React.MouseEvent) => {
    e.preventDefault();
    // Get total number of slides and navigate to the last one
    const params = new URLSearchParams(window.location.search);
    // Count all slides by checking the sections in the page
    // Since feedback is the last slide, we can use a large number or calculate dynamically
    const currentSlide = params.get('slide');
    const currentNum = currentSlide ? parseInt(currentSlide, 10) : 1;
    // Navigate to next slide (which is the feedback form)
    const feedbackSlide = currentNum + 1;
    window.location.href = `?slide=${feedbackSlide}`;
  };

  return (
    <a
      href="#feedback"
      onClick={navigateToFeedback}
      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      <span>Share Your Feedback</span>
    </a>
  );
};

const FeedbackEmbed = () => {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-screen">
      <iframe
        data-tally-src="https://tally.so/r/QK5JKg?transparentBackground=1"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="AI Native Developer Feedback"
        style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, border: 0 }}
      />
    </div>
  );
};

export const closingSlides: SlideType[] = [
  {
    title: "",
    subtitle: "",
    content: (
      <div className="flex flex-col justify-center h-full max-w-4xl mx-auto space-y-3 px-3 md:px-0">
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-3 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Linux Advanced is pas echt af als je het morgen opnieuw doet zonder spiekbrief.
          </h2>
        </div>

        <div className="bg-white p-3 rounded-lg shadow border border-blue-200">
          <h3 className="text-sm font-bold text-blue-900 mb-2">Praktische recap</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Je automatiseert beheer met shell en systemd in plaats van handwerk.</li>
            <li>• Je beveiligt de host met least privilege, logging en gerichte hardening.</li>
            <li>• Je beheert netwerkdiensten met inzicht in poorten, routes en policies.</li>
            <li>• Je valideert elke wijziging met meetbare checks voor je verder gaat.</li>
          </ul>
        </div>

        <div className="bg-green-50 p-3 rounded-lg border border-green-200 space-y-2">
          <h3 className="text-sm font-bold text-green-900">Volgende stap: mini-lab van 30 minuten</h3>
          <div className="text-xs md:text-sm text-gray-700 space-y-1">
            <p>
              1) Baseline en updates: <span className="font-mono">sudo apt update && sudo apt upgrade -y</span>
              <span className="text-green-800"> | Checkpoint: geen failed packages.</span>
            </p>
            <p>
              2) Dienstcontrole: <span className="font-mono">systemctl --failed && sudo ss -tulpn</span>
              <span className="text-green-800"> | Checkpoint: enkel verwachte services en poorten.</span>
            </p>
            <p>
              3) Hardening-check: <span className="font-mono">sudo journalctl -p err -b --no-pager</span>
              <span className="text-green-800"> | Checkpoint: kritieke fouten opgelost of geticket.</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <FeedbackButton />
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600 italic">
            "Sterke Linux-admins gokken niet, ze meten, valideren en verbeteren."
          </p>
        </div>
      </div>
    )
  },
  {
    title: "",
    subtitle: "",
    content: <FeedbackEmbed />
  }
];
