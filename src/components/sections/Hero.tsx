import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <header className="relative h-screen w-full overflow-hidden bg-gray-900">
      <video 
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dcjufshrh/video/upload/v1771507203/masr_pay_-_owu5bs.mp4" 
        autoPlay 
        loop 
        muted={isMuted}
        playsInline
      />
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Controls Overlay */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4 bg-black/40 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 shadow-lg">
        <button onClick={togglePlay} className="text-white hover:text-red-400 transition-colors" aria-label="Toggle Play">
          {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
        </button>
        <div className="w-px h-6 bg-white/30"></div>
        <button onClick={toggleMute} className="text-white hover:text-red-400 transition-colors" aria-label="Toggle Mute">
          {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
        </button>
      </div>
    </header>
  );
};

export default Hero;
