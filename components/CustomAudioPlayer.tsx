import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Download, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
  title: string;
  src?: string; // In real app, this is the audio URL
}

const CustomAudioPlayer: React.FC<AudioPlayerProps> = ({ title, src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Mock duration for UI since we might not have real audio files loaded
  // In a real app, use onLoadedMetadata
  const duration = 1800; // 30 mins in seconds

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Handle mock error or missing source
        console.log("Simulating playback for UI demo");
      });
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 0.5 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-rose-100 flex items-center gap-4 w-full">
        {/* Hidden audio element for logic structure (would work with real src) */}
        <audio ref={audioRef} src={src} />

        <button 
            onClick={togglePlay}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center hover:bg-rose-200 transition-colors"
        >
            {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
        </button>

        <div className="flex-1 min-w-0">
            <h4 className="font-serif text-rose-900 font-medium truncate">{title}</h4>
            <div className="flex items-center gap-2 text-xs text-rose-400 mt-1">
                <span>{Math.floor((progress/100) * (duration/60))}:{String(Math.floor(((progress/100) * duration) % 60)).padStart(2, '0')}</span>
                <div className="flex-1 h-1.5 bg-rose-50 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-rose-400 rounded-full transition-all duration-300" 
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <span>30:00</span>
            </div>
        </div>

        <button className="text-rose-300 hover:text-rose-500 transition-colors">
            <Download size={20} />
        </button>
    </div>
  );
};

export default CustomAudioPlayer;