import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Snail, Rabbit, Sparkles } from 'lucide-react';
import { audioService } from '../utils/audio';

interface AudioControlsProps {
  onTestSound?: () => void;
}

export const AudioControls: React.FC<AudioControlsProps> = () => {
  const [isSlow, setIsSlow] = useState(audioService.isSlowMode);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    audioService.isSlowMode = isSlow;
  }, [isSlow]);

  const toggleSpeed = () => {
    const next = !isSlow;
    setIsSlow(next);
    audioService.isSlowMode = next;
    audioService.playPop();
    audioService.speak(next ? 'Slow mode' : 'Normal mode');
  };

  const toggleMute = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      if (!muted) {
        window.speechSynthesis.cancel();
      }
    }
    setMuted(!muted);
  };

  return (
    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-md border-2 border-amber-200">
      <button
        onClick={toggleSpeed}
        type="button"
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
          isSlow
            ? 'bg-amber-500 text-white shadow-sm'
            : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
        }`}
        title="Ovoz tezligi (Sekin / Oddiy)"
      >
        {isSlow ? <Snail className="w-4 h-4 text-emerald-200 animate-pulse" /> : <Rabbit className="w-4 h-4 text-amber-700" />}
        <span>{isSlow ? 'Sekin (0.6x)' : 'Oddiy'}</span>
      </button>

      <button
        onClick={() => {
          audioService.playSparkle();
          audioService.speak('Hello kids! Let\'s learn English together!');
        }}
        type="button"
        className="p-1.5 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 rounded-xl transition-all"
        title="Salomlashish ovozi"
      >
        <Sparkles className="w-4 h-4 text-yellow-600" />
      </button>

      <button
        onClick={toggleMute}
        type="button"
        className={`p-1.5 rounded-xl transition-all ${
          muted ? 'bg-red-100 text-red-600' : 'bg-emerald-100 hover:bg-emerald-200 text-emerald-700'
        }`}
        title={muted ? 'Ovoz oʻchiq' : 'Ovoz yoniq'}
      >
        {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    </div>
  );
};
