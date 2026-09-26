import React, { useState } from 'react';
import { Volume2, Sparkles, HelpCircle, Palette, CheckCircle2 } from 'lucide-react';
import { COLORS_LIST, ColorItem } from '../data/learningData';
import { audioService } from '../utils/audio';
import { DetailModal } from './DetailModal';

export const ColorsSection: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<ColorItem | null>(null);
  const [activeColorBg, setActiveColorBg] = useState<string | null>(null);

  const handleCardClick = (item: ColorItem) => {
    audioService.playPop();
    audioService.speak(item.name);
    setActiveColorBg(item.hex);
  };

  const handleSpeakWithTranslation = (item: ColorItem, e: React.MouseEvent) => {
    e.stopPropagation();
    audioService.playPop();
    audioService.speak(`${item.name}. In Uzbek: ${item.uzbek}`);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 opacity-10 flex items-center pr-6 pointer-events-none text-9xl">
          🎨
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              4-Boʻlim: 10 ta Rang
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Inglizcha Ranglar (Colors)
            </h1>
            <p className="text-pink-100 text-sm md:text-base mt-1 max-w-xl font-medium">
              Ranglar ustiga bosing — &quot;Red&quot; (Qizil), &quot;Blue&quot; (Koʻk), &quot;Green&quot; (Yashil) va boshqa 10 ta rangning talaffuzini oʻrganing!
            </p>
          </div>

          {activeColorBg && (
            <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 border border-white/30 text-xs font-bold">
              <span>Tanlangan rang:</span>
              <div
                className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
                style={{ backgroundColor: activeColorBg }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Grid of 10 Colors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {COLORS_LIST.map((item) => {
          const isWhite = item.id === 'white';
          return (
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
              className="group relative bg-white rounded-3xl p-4 border-2 border-slate-200 hover:border-purple-400 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Color Header & Info button */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  {item.hex}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedColor(item);
                  }}
                  className="p-1.5 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all"
                  title="Batafsil"
                >
                  <HelpCircle className="w-4 h-4" />
                </button>
              </div>

              {/* Big Color Swatch Circle */}
              <div className="my-3 py-2 flex items-center justify-center">
                <div
                  className="w-24 h-24 rounded-full shadow-lg border-4 border-white transition-transform group-hover:scale-110 flex items-center justify-center ring-4 ring-slate-100"
                  style={{ backgroundColor: item.hex }}
                >
                  <Palette className={`w-8 h-8 opacity-80 ${isWhite ? 'text-slate-400' : 'text-white'}`} />
                </div>
              </div>

              {/* Color English & Uzbek Name */}
              <div className="text-center">
                <h3 className="text-2xl font-black text-slate-800 group-hover:text-purple-600 transition-colors">
                  {item.name}
                </h3>
                <div className="text-sm font-bold text-emerald-600 mt-0.5">
                  {item.uzbek}
                </div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  {item.phonetic}
                </div>
              </div>

              {/* Examples of this color */}
              <div className="mt-3 p-2 bg-slate-50 rounded-2xl flex items-center justify-around border border-slate-100">
                {item.examples.map((ex, idx) => (
                  <span
                    key={idx}
                    className="text-lg transition-transform hover:scale-125 select-none"
                    title={`${ex.name} (${ex.uz})`}
                  >
                    {ex.emoji}
                  </span>
                ))}
              </div>

              {/* Card Footer / Buttons */}
              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={(e) => handleSpeakWithTranslation(item, e)}
                  className="text-[11px] font-bold text-purple-600 hover:text-purple-800"
                >
                  Oʻzbekcha bilan
                </button>

                <div className="flex items-center gap-1 text-purple-600 font-bold bg-purple-50 px-2.5 py-1 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Volume2 className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Eshitish</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail Modal */}
      {selectedColor && (
        <DetailModal
          isOpen={!!selectedColor}
          onClose={() => setSelectedColor(null)}
          title={selectedColor.name}
          subtitle={`Rang: ${selectedColor.uzbek}`}
          phonetic={selectedColor.phonetic}
          uzbekTranslation={selectedColor.uzbek}
          emoji={selectedColor.examples[0]?.emoji || '🎨'}
          tag="Rang (Color)"
          sentence={`This color is ${selectedColor.name.toLowerCase()}. ${selectedColor.examples.map(e => e.name).join(', ')} are ${selectedColor.name.toLowerCase()}.`}
          funFact={selectedColor.description}
          onSpeak={() => {
            audioService.speak(selectedColor.name);
          }}
        />
      )}
    </div>
  );
};
