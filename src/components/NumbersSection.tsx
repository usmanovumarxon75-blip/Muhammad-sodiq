import React, { useState } from 'react';
import { Volume2, Play, Square, Sparkles, Hash, Search, HelpCircle } from 'lucide-react';
import { NUMBERS_LIST, NumberItem } from '../data/learningData';
import { audioService } from '../utils/audio';
import { DetailModal } from './DetailModal';

export const NumbersSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | '1-10' | '11-20' | '21-50' | '51-100' | 'tens'>('1-10');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNumber, setSelectedNumber] = useState<NumberItem | null>(null);
  const [isCounting, setIsCounting] = useState(false);
  const [countingNumber, setCountingNumber] = useState<number | null>(null);

  // Filter logic
  const filteredNumbers = NUMBERS_LIST.filter(item => {
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      return (
        item.number.toString().includes(q) ||
        item.word.toLowerCase().includes(q) ||
        item.uzbek.toLowerCase().includes(q)
      );
    }

    if (activeTab === '1-10') return item.number >= 1 && item.number <= 10;
    if (activeTab === '11-20') return item.number >= 11 && item.number <= 20;
    if (activeTab === '21-50') return item.number >= 21 && item.number <= 50;
    if (activeTab === '51-100') return item.number >= 51 && item.number <= 100;
    if (activeTab === 'tens') return item.number % 10 === 0;
    return true;
  });

  const handleCardClick = (item: NumberItem) => {
    audioService.playPop();
    audioService.speak(item.word);
  };

  // Auto count sequence
  const stopCounting = () => {
    setIsCounting(false);
    setCountingNumber(null);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  const startCounting = () => {
    setIsCounting(true);
    let index = 0;
    const currentList = filteredNumbers;

    const countNext = () => {
      if (index >= currentList.length) {
        setIsCounting(false);
        setCountingNumber(null);
        audioService.playSuccess();
        return;
      }

      const item = currentList[index];
      setCountingNumber(item.number);
      audioService.speak(item.word, () => {
        index++;
        setTimeout(countNext, 500);
      });
    };

    countNext();
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 opacity-10 flex items-center pr-6 pointer-events-none text-9xl font-black">
          123
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              2-Boʻlim: 1 dan 100 gacha sonlar
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Inglizcha Sonlar (Numbers 1-100)
            </h1>
            <p className="text-blue-100 text-sm md:text-base mt-1 max-w-xl font-medium">
              Istalgan son ustiga bosing — masalan, 1 ni bossangiz &quot;One&quot;, 10 ni bossangiz &quot;Ten&quot; deb aytib beradi!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {!isCounting ? (
              <button
                onClick={startCounting}
                className="flex items-center gap-2 bg-white text-indigo-700 hover:bg-yellow-100 px-4 py-2.5 rounded-2xl font-black text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-indigo-700" />
                Ketma-ket sanash
              </button>
            ) : (
              <button
                onClick={stopCounting}
                className="flex items-center gap-2 bg-rose-500 text-white hover:bg-rose-600 px-4 py-2.5 rounded-2xl font-black text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Square className="w-4 h-4 fill-white" />
                Sanashni toʻxtatish
              </button>
            )}
          </div>
        </div>

        {/* Search & Tabs */}
        <div className="mt-5 pt-4 border-t border-white/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Tab Filters */}
          <div className="flex flex-wrap items-center gap-1.5 bg-black/20 p-1 rounded-2xl text-xs font-bold">
            <button
              onClick={() => { setActiveTab('1-10'); setSearchQuery(''); }}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                activeTab === '1-10' && !searchQuery ? 'bg-white text-indigo-800 shadow-sm' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              1 - 10
            </button>
            <button
              onClick={() => { setActiveTab('11-20'); setSearchQuery(''); }}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                activeTab === '11-20' && !searchQuery ? 'bg-white text-indigo-800 shadow-sm' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              11 - 20
            </button>
            <button
              onClick={() => { setActiveTab('21-50'); setSearchQuery(''); }}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                activeTab === '21-50' && !searchQuery ? 'bg-white text-indigo-800 shadow-sm' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              21 - 50
            </button>
            <button
              onClick={() => { setActiveTab('51-100'); setSearchQuery(''); }}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                activeTab === '51-100' && !searchQuery ? 'bg-white text-indigo-800 shadow-sm' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              51 - 100
            </button>
            <button
              onClick={() => { setActiveTab('tens'); setSearchQuery(''); }}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                activeTab === 'tens' && !searchQuery ? 'bg-white text-indigo-800 shadow-sm' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              Oʻnliklar (10, 20...100)
            </button>
            <button
              onClick={() => { setActiveTab('all'); setSearchQuery(''); }}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                activeTab === 'all' && !searchQuery ? 'bg-white text-indigo-800 shadow-sm' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              Barchasi (1-100)
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-indigo-200 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Sonni qidirish (1, ten...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-48 pl-9 pr-3 py-1.5 text-xs bg-white/20 text-white placeholder-indigo-200 rounded-xl focus:bg-white focus:text-slate-800 focus:outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* Visual Counter Helper for 1-10 if activeTab is 1-10 */}
      {activeTab === '1-10' && !searchQuery && (
        <div className="bg-amber-100/70 border-2 border-amber-300 rounded-2xl p-3 flex flex-wrap items-center justify-between gap-2 text-xs text-amber-900 font-semibold">
          <span className="flex items-center gap-1.5">
            <span className="text-lg">⭐</span> 7-10 yoshli bolalar uchun: Sonlarni bosib, ovozini diqqat bilan eshiting va orqasidan qaytaring!
          </span>
          <span className="bg-amber-200/80 px-2.5 py-1 rounded-xl text-amber-800 font-bold">
            1 dan 10 gacha asosiy sonlar
          </span>
        </div>
      )}

      {/* Grid of Numbers */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
        {filteredNumbers.map((item) => {
          const isCurrentActive = countingNumber === item.number;
          return (
            <div
              key={item.number}
              onClick={() => handleCardClick(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCardClick(item);
                }
              }}
              className={`group relative bg-white rounded-3xl p-4 border-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between ${
                isCurrentActive
                  ? 'border-indigo-600 ring-4 ring-indigo-300 scale-105 bg-indigo-50'
                  : 'border-indigo-100 hover:border-indigo-300'
              }`}
            >
              {/* Digit & Info Button */}
              <div className="flex items-start justify-between">
                <span className="text-3xl font-black text-indigo-600 group-hover:scale-110 transition-transform">
                  {item.number}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedNumber(item);
                  }}
                  className="p-1 text-slate-300 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all"
                  title="Batafsil"
                >
                  <HelpCircle className="w-4 h-4" />
                </button>
              </div>

              {/* Visual Quantity Display for 1-10 */}
              {item.number <= 10 && (
                <div className="my-2 flex flex-wrap gap-1 justify-center min-h-[24px]">
                  {Array.from({ length: item.number }).map((_, idx) => (
                    <span key={idx} className="text-xs leading-none">
                      🍎
                    </span>
                  ))}
                </div>
              )}

              {/* Number English Name & Uzbek */}
              <div className="my-2 text-center">
                <div className="font-extrabold text-slate-800 text-lg group-hover:text-indigo-600 transition-colors">
                  {item.word}
                </div>
                <div className="text-xs font-bold text-emerald-600 mt-0.5">
                  {item.uzbek}
                </div>
              </div>

              {/* Phonetic & Speaker */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 bg-slate-50 px-2 py-1 rounded-xl">
                <span className="font-mono text-[10px]">{item.phonetic}</span>
                <Volume2 className="w-3.5 h-3.5 text-indigo-500 group-hover:animate-bounce" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Number Detail Modal */}
      {selectedNumber && (
        <DetailModal
          isOpen={!!selectedNumber}
          onClose={() => setSelectedNumber(null)}
          title={`${selectedNumber.number} - ${selectedNumber.word}`}
          subtitle={`Inglizcha son: ${selectedNumber.word}`}
          phonetic={selectedNumber.phonetic}
          uzbekTranslation={selectedNumber.uzbek}
          emoji={selectedNumber.number <= 10 ? '🔢' : '💯'}
          tag={`Son: ${selectedNumber.number}`}
          sentence={`I have ${selectedNumber.word.toLowerCase()} pencils.`}
          funFact={`Ingliz tilida "${selectedNumber.number}" soni "${selectedNumber.word}" deb yoziladi va o'qiladi.`}
          onSpeak={() => {
            audioService.speak(selectedNumber.word);
          }}
        />
      )}
    </div>
  );
};
