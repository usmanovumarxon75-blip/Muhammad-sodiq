import React, { useState } from 'react';
import { Volume2, Sparkles, HelpCircle, Feather, Wind } from 'lucide-react';
import { BIRDS_LIST, BirdItem } from '../data/learningData';
import { audioService } from '../utils/audio';
import { DetailModal } from './DetailModal';

export const BirdsSection: React.FC = () => {
  const [selectedBird, setSelectedBird] = useState<BirdItem | null>(null);

  const handleCardClick = (item: BirdItem) => {
    audioService.playPop();
    audioService.speak(item.name);
  };

  const handleSpeakWithFact = (item: BirdItem, e: React.MouseEvent) => {
    e.stopPropagation();
    audioService.playPop();
    audioService.speak(`${item.name}. ${item.soundDescription}`);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 opacity-10 flex items-center pr-6 pointer-events-none text-9xl">
          🦅
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              5-Boʻlim: 10 ta Qush (Birds)
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Inglizcha Qushlar (Birds)
            </h1>
            <p className="text-amber-100 text-sm md:text-base mt-1 max-w-xl font-medium">
              Burgut (Eagle), Toʻtiqush (Parrot), Pingvin (Penguin) va boshqa 10 ta chiroyli qushni tanlang va talaffuzini tinglang!
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-2 rounded-2xl text-xs font-bold border border-white/30">
            <Feather className="w-4 h-4 text-amber-200" />
            <span>10 ta ajoyib qush</span>
          </div>
        </div>
      </div>

      {/* Grid of 10 Birds */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {BIRDS_LIST.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleCardClick(item);
              }
            }}
            className="group relative bg-white rounded-3xl p-4 border-2 border-amber-100 hover:border-amber-400 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
          >
            {/* Top row with Fly badge & Info button */}
            <div className="flex items-center justify-between">
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                item.canFly ? 'bg-sky-50 text-sky-700 border border-sky-200' : 'bg-amber-50 text-amber-800 border border-amber-200'
              }`}>
                {item.canFly ? <Wind className="w-3 h-3" /> : '❄️'}
                {item.canFly ? 'Ucha oladi' : 'Suzadi'}
              </span>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedBird(item);
                }}
                className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-full transition-all"
                title="Batafsil"
              >
                <HelpCircle className="w-4 h-4" />
              </button>
            </div>

            {/* Bird Emoji */}
            <div className="my-3 py-2 flex items-center justify-center">
              <div className="w-24 h-24 rounded-3xl bg-amber-50/80 border-2 border-dashed border-amber-200 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                {item.emoji}
              </div>
            </div>

            {/* Bird Name (English & Uzbek) */}
            <div className="text-center">
              <h3 className="text-2xl font-black text-slate-800 group-hover:text-amber-600 transition-colors">
                {item.name}
              </h3>
              <div className="text-sm font-bold text-emerald-600 mt-0.5">
                {item.uzbek}
              </div>
              <div className="text-xs text-slate-400 font-mono mt-0.5">
                {item.phonetic}
              </div>
            </div>

            {/* Habitat / Sound badge */}
            <div className="mt-3 p-2 bg-slate-50 rounded-xl text-center border border-slate-100">
              <div className="text-[11px] text-slate-600 font-medium truncate">
                🏡 {item.habitat}
              </div>
              <div className="text-[10px] text-amber-700 font-bold italic mt-0.5">
                🎵 {item.soundDescription}
              </div>
            </div>

            {/* Card Footer */}
            <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={(e) => handleSpeakWithFact(item, e)}
                className="text-[11px] font-bold text-amber-600 hover:text-amber-800"
              >
                Ovozi bilan
              </button>

              <div className="flex items-center gap-1 text-amber-600 font-bold bg-amber-50 px-2.5 py-1 rounded-xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Volume2 className="w-3.5 h-3.5" />
                <span className="text-[11px]">Eshitish</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bird Modal */}
      {selectedBird && (
        <DetailModal
          isOpen={!!selectedBird}
          onClose={() => setSelectedBird(null)}
          title={selectedBird.name}
          subtitle={`Qush: ${selectedBird.uzbek}`}
          phonetic={selectedBird.phonetic}
          uzbekTranslation={selectedBird.uzbek}
          emoji={selectedBird.emoji}
          tag="Qush (Bird)"
          sentence={`The ${selectedBird.name.toLowerCase()} is a wonderful bird.`}
          funFact={`${selectedBird.funFact} Yashash joyi: ${selectedBird.habitat}.`}
          onSpeak={() => {
            audioService.speak(selectedBird.name);
          }}
        />
      )}
    </div>
  );
};
