import React, { useState } from 'react';
import { Volume2, Sparkles, HelpCircle, Gauge, Compass } from 'lucide-react';
import { TRANSPORT_LIST, TransportItem } from '../data/learningData';
import { audioService } from '../utils/audio';
import { DetailModal } from './DetailModal';

export const TransportSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<TransportItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredList = TRANSPORT_LIST.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const handleCardClick = (item: TransportItem) => {
    audioService.playPop();
    // Pronounce the English name clearly, e.g. "Car"
    audioService.speak(item.name);
  };

  const handleSpeakWithPhrase = (item: TransportItem, e: React.MouseEvent) => {
    e.stopPropagation();
    audioService.playPop();
    audioService.speak(`${item.name}. In Uzbek: ${item.uzbek}. ${item.soundEffect}`);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 opacity-10 flex items-center pr-6 pointer-events-none text-9xl">
          🚗
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              3-Boʻlim: 10 ta Transport vositasi
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Transport Vositalari (Transports)
            </h1>
            <p className="text-emerald-100 text-sm md:text-base mt-1 max-w-xl font-medium">
              Mashina (Car), Avtobus (Bus), Samolyot (Airplane) va boshqa 10 ta transportni bosing va toʻgʻri inglizcha talaffuzini eshiting!
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5 bg-black/20 p-1.5 rounded-2xl text-xs font-bold">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                activeCategory === 'all' ? 'bg-white text-emerald-800 shadow-sm' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              Hammasi (10)
            </button>
            <button
              onClick={() => setActiveCategory('Quruqlik')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                activeCategory === 'Quruqlik' ? 'bg-white text-emerald-800 shadow-sm' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              Quruqlik
            </button>
            <button
              onClick={() => setActiveCategory('Havo')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                activeCategory === 'Havo' ? 'bg-white text-emerald-800 shadow-sm' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              Havo
            </button>
            <button
              onClick={() => setActiveCategory('Suv')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                activeCategory === 'Suv' ? 'bg-white text-emerald-800 shadow-sm' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              Suv
            </button>
            <button
              onClick={() => setActiveCategory('Kosmos')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                activeCategory === 'Kosmos' ? 'bg-white text-emerald-800 shadow-sm' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              Kosmos
            </button>
          </div>
        </div>
      </div>

      {/* Grid of 10 Transports */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {filteredList.map((item) => (
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
            className="group relative bg-white rounded-3xl p-4 border-2 border-emerald-100 hover:border-emerald-400 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
          >
            {/* Top row with Category badge & Info button */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                {item.category}
              </span>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedItem(item);
                }}
                className="p-1.5 text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-full transition-all"
                title="Batafsil"
              >
                <HelpCircle className="w-4 h-4" />
              </button>
            </div>

            {/* Transport Icon */}
            <div className="my-3 py-2 flex items-center justify-center">
              <div className="w-24 h-24 rounded-2xl bg-emerald-50/70 border-2 border-dashed border-emerald-200 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                {item.emoji}
              </div>
            </div>

            {/* English & Uzbek Names */}
            <div className="text-center">
              <h3 className="text-2xl font-black text-slate-800 group-hover:text-emerald-600 transition-colors">
                {item.name}
              </h3>
              <div className="text-sm font-bold text-emerald-700 mt-0.5">
                {item.uzbek}
              </div>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                {item.phonetic}
              </p>
            </div>

            {/* Sound effect hint */}
            <div className="mt-3 p-2 bg-amber-50 rounded-xl text-center border border-amber-200/70">
              <div className="text-[11px] font-bold text-amber-800 italic">
                &ldquo;{item.soundEffect}&rdquo;
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <button
                onClick={(e) => handleSpeakWithPhrase(item, e)}
                type="button"
                className="text-[11px] font-bold text-emerald-600 hover:text-emerald-800 flex items-center gap-1"
                title="To'liq jumla bilan aytish"
              >
                <Compass className="w-3.5 h-3.5" /> Gapirish
              </button>

              <div className="flex items-center gap-1 text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Volume2 className="w-3.5 h-3.5" />
                <span className="text-[11px]">Eshitish</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <DetailModal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          title={selectedItem.name}
          subtitle={`Transport: ${selectedItem.uzbek}`}
          phonetic={selectedItem.phonetic}
          uzbekTranslation={selectedItem.uzbek}
          emoji={selectedItem.emoji}
          tag={`Transport: ${selectedItem.category}`}
          sentence={`This is a ${selectedItem.name.toLowerCase()}. ${selectedItem.soundEffect}`}
          funFact={`${selectedItem.description} (${selectedItem.speed})`}
          onSpeak={() => {
            audioService.speak(selectedItem.name);
          }}
        />
      )}
    </div>
  );
};
