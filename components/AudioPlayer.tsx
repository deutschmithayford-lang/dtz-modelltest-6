import React, { useState, useRef, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

interface AudioPlayerProps {
  src: string;
  className?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, className }) => {
  const [error, setError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Reset error state when src changes
  useEffect(() => {
    setError(false);
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [src]);

  if (error) {
    return (
      <div className={`flex items-start gap-3 text-red-600 bg-red-50 p-3 rounded-lg text-sm border border-red-200 ${className}`}>
        <AlertCircle size={18} className="shrink-0 mt-0.5" />
        <div>
          <strong className="block font-semibold">Audio konnte nicht geladen werden</strong>
          <span className="text-xs text-red-500 break-all">Datei fehlt: {src}</span>
          <p className="text-xs text-gray-500 mt-1">Bitte stellen Sie sicher, dass die MP3-Datei im Ordner "audio" liegt.</p>
        </div>
      </div>
    );
  }

  return (
    <audio
      ref={audioRef}
      controls
      className={className}
      src={src}
      onError={() => setError(true)}
    >
      Ihr Browser unterstützt das Audio-Element nicht.
    </audio>
  );
};

export default AudioPlayer;