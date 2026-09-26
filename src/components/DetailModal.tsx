import React from 'react';
import { X, Volume2, Sparkles, Repeat } from 'lucide-react';
import { audioService } from '../utils/audio';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  phonetic?: string;
  uzbekTranslation: string;
  emoji: string;
  tag?: string;
  sentence?: string;
  color?: string;
  funFact?: string;
  onSpeak: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  phonetic,
  uzbekTranslation,
  emoji,
  tag,
  sentence,
  funFact,
  onSpeak,
}) => {
  if (!isOpen) return null;

  const handleSpeakWithFX = () => {
    audioService.playPop();
    onSpeak();
  };

  const handleSpeakSentence = () => {
    if (sentence) {
      audioService.playPop();
      audioService.speak(sentence);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-gradient-to-b from-white to-amber-50 rounded-3xl p-6 shadow-2xl border-4 border-amber-300 transform transition-all animate-scaleUp"
      >
        {/* Close Button */}
        <button
          onClick={() => {
            audioService.playPop();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 bg-rose-100 hover:bg-rose-200 text-rose-700 rounded-full transition-transform active:scale-90"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center text-center pt-2">
          {tag && (
            <span className="mb-2 px-3 py-1 bg-amber-100 text-amber-800 text-xs font-black uppercase tracking-wider rounded-full border border-amber-300">
              {tag}
            </span>
          )}

          {/* Big Emoji / Icon */}
          <div className="relative my-2">
            <div className="w-32 h-32 rounded-3xl bg-amber-100/70 border-4 border-dashed border-amber-300 flex items-center justify-center text-6xl shadow-inner select-none transition-transform hover:scale-110">
              {emoji}
            </div>
            <button
              onClick={handleSpeakWithFX}
              className="absolute -bottom-2 -right-2 p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg border-2 border-white transition-transform active:scale-95"
              title="Talaffuz qilish"
            >
              <Volume2 className="w-6 h-6 animate-pulse" />
            </button>
          </div>

          {/* Main Title & Subtitle */}
          <h2 className="text-4xl font-extrabold text-slate-800 mt-2 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg font-bold text-amber-700">{subtitle}</p>
          )}

          {/* Phonetic Pronunciation Guide */}
          {phonetic && (
            <div className="inline-block mt-1 px-3 py-0.5 bg-slate-100 text-slate-600 font-mono text-sm rounded-lg border border-slate-200">
              {phonetic}
            </div>
          )}

          {/* Uzbek Translation */}
          <div className="mt-4 px-5 py-2.5 bg-white rounded-2xl border-2 border-emerald-300 shadow-sm w-full max-w-sm">
            <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">
              Oʻzbekcha maʼnosi:
            </div>
            <div className="text-xl font-bold text-emerald-800">
              {uzbekTranslation}
            </div>
          </div>

          {/* Example Sentence */}
          {sentence && (
            <div className="mt-3 px-4 py-2.5 bg-sky-50 rounded-2xl border-2 border-sky-200 shadow-sm w-full max-w-sm">
              <div className="text-xs font-semibold text-sky-600 uppercase tracking-wide">
                Misol:
              </div>
              <p className="text-sm font-bold text-sky-900 mt-0.5">{sentence}</p>
              <button
                onClick={handleSpeakSentence}
                className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-lg shadow-sm"
              >
                <Volume2 className="w-3.5 h-3.5" /> Jumlani eshitish
              </button>
            </div>
          )}

          {/* Fun Fact for Kids */}
          {funFact && (
            <div className="mt-3 p-3 bg-amber-100/60 rounded-2xl border border-amber-200 text-xs text-amber-900 font-medium max-w-sm">
              <span className="font-bold flex items-center justify-center gap-1 text-amber-800 mb-0.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Bilib oling:
              </span>
              {funFact}
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 w-full">
            <button
              onClick={handleSpeakWithFX}
              className="flex-1 py-3 px-5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 text-base"
            >
              <Volume2 className="w-5 h-5" />
              Qayta talaffuz qilish
            </button>
            <button
              onClick={() => {
                audioService.playPop();
                audioService.speak(title, () => {
                  setTimeout(() => {
                    audioService.speak(title);
                  }, 400);
                });
              }}
              className="py-3 px-4 bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold rounded-2xl shadow-md transition-all active:scale-95 flex items-center gap-1.5 text-sm"
              title="2 marta qaytarish"
            >
              <Repeat className="w-4 h-4" /> 2x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
