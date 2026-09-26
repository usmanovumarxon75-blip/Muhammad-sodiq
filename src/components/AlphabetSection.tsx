import React, { useState } from 'react';
import { Volume2, Play, Square, Sparkles, HelpCircle, Layers } from 'lucide-react';
import { ALPHABET_LIST, AlphabetItem } from '../data/learningData';
import { audioService } from '../utils/audio';
import { DetailModal } from './DetailModal';

type SpeakMode = 'letter' | 'word' | 'both';

export const AlphabetSection: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<AlphabetItem | null>(null);
  const [speakMode, setSpeakMode] = useState<SpeakMode>('both');
  const [filter, setFilter] = useState<'all' | 'vowels' | 'consonants'>('all');
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [activePlayIndex, setActivePlayIndex] = useState<number | null>(null);

  const VOWELS = ['A', 'E', 'I', 'O', 'U'];

  const filteredList = ALPHABET_LIST.filter(item => {
    if (filter === 'vowels') return VOWELS.includes(item.letter);
    if (filter === 'consonants') return !VOWELS.includes(item.letter);
    return true;
  });

  const handleCardClick = (item: AlphabetItem) => {
    audioService.playPop();
    if (speakMode === 'letter') {
      audioService.speak(item.letter);
    } else if (speakMode === 'word') {
      audioService.speak(item.word);
    } else {
      audioService.speak(`${item.letter}. ${item.word}`);
    }
  };

  // Autoplay through the alphabet
  const stopPlayingAll = () => {
    setIsPlayingAll(false);
    setActivePlayIndex(null);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  const startPlayingAll = () => {
    setIsPlayingAll(true);
    let index = 0;

    const playNext = () => {
      if (index >= filteredList.length) {
        setIsPlayingAll(false);
        setActivePlayIndex(null);
        audioService.playSuccess();
        return;
      }
      setActivePlayIndex(index);
      const current = filteredList[index];
      audioService.speak(`${current.letter}, ${current.word}`, () => {
        index++;
        setTimeout(playNext, 400);
      });
    };

    playNext();
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Controls */}
      <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 opacity-10 flex items-center pr-6 pointer-events-none text-9xl font-black">
          ABC
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              1-Boʻlim: Ingliz Alifbosi (A dan Z gacha)
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Ingliz Alifbosi (Alphabet)
            </h1>
            <p className="text-rose-100 text-sm md:text-base mt-1 max-w-xl font-medium">
              Harflarni bosing va ularning inglizcha talaffuzi hamda misol soʻzlarni tinglang! A harfida Apple, B da Ball va boshqalar.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {!isPlayingAll ? (
              <button
                onClick={startPlayingAll}
                className="flex items-center gap-2 bg-white text-rose-600 hover:bg-yellow-100 px-4 py-2.5 rounded-2xl font-black text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-rose-600" />
                Ketma-ket tinglash
              </button>
            ) : (
              <button
                onClick={stopPlayingAll}
                className="flex items-center gap-2 bg-rose-900 text-white hover:bg-rose-800 px-4 py-2.5 rounded-2xl font-black text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Square className="w-4 h-4 fill-white" />
                Toʻxtatish
              </button>
            )}
          </div>
        </div>

        {/* Mode Selector and Filters */}
        <div className="mt-5 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Pronunciation options */}
          <div className="flex items-center gap-1.5 bg-black/20 p-1 rounded-2xl">
            <span className="px-2 font-bold text-white/80">Ovoz rejimi:</span>
            <button
              onClick={() => setSpeakMode('letter')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                speakMode === 'letter' ? 'bg-white text-rose-600 shadow-sm' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              Faqat harf (A)
            </button>
            <button
              onClick={() => setSpeakMode('word')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                speakMode === 'word' ? 'bg-white text-rose-600 shadow-sm' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              Soʻz (Apple)
            </button>
            <button
              onClick={() => setSpeakMode('both')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                speakMode === 'both' ? 'bg-white text-rose-600 shadow-sm' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              Harf + Soʻz (A, Apple)
            </button>
          </div>

          {/* Letter filter */}
          <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md p-1 rounded-2xl font-bold">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-xl transition-all ${
                filter === 'all' ? 'bg-white text-rose-700 shadow-sm' : 'text-white hover:bg-white/10'
              }`}
            >
              Barcha harflar (26)
            </button>
            <button
              onClick={() => setFilter('vowels')}
              className={`px-3 py-1 rounded-xl transition-all ${
                filter === 'vowels' ? 'bg-white text-rose-700 shadow-sm' : 'text-white hover:bg-white/10'
              }`}
            >
              Unlilar (A, E, I, O, U)
            </button>
            <button
              onClick={() => setFilter('consonants')}
              className={`px-3 py-1 rounded-xl transition-all ${
                filter === 'consonants' ? 'bg-white text-rose-700 shadow-sm' : 'text-white hover:bg-white/10'
              }`}
            >
              Undoshlar (21)
            </button>
          </div>
        </div>
      </div>

      {/* 26 Letters Alphabet Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
        {filteredList.map((item, index) => {
          const isCurrentActive = activePlayIndex === index;
          return (
            <div
              key={item.letter}
              onClick={() => handleCardClick(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCardClick(item);
                }
              }}
              className={`group relative bg-white rounded-3xl p-3.5 border-3 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between ${
                isCurrentActive
                  ? 'border-rose-500 ring-4 ring-rose-300 scale-105 bg-rose-50'
                  : item.borderColor
              }`}
            >
              {/* Header with Letter badge and Info icon */}
              <div className="flex items-start justify-between w-full">
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-black ${item.textColor} tracking-tight group-hover:scale-110 transition-transform inline-block`}>
                    {item.letter}
                  </span>
                  <span className="text-xl font-bold text-slate-400">
                    {item.lower}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedLetter(item);
                  }}
                  className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-100 rounded-full transition-all"
                  title="Batafsil ma'lumot"
                >
                  <HelpCircle className="w-4 h-4" />
                </button>
              </div>

              {/* Big Center Emoji illustration */}
              <div className="my-2 py-1 flex items-center justify-center">
                <span className="text-5xl group-hover:scale-125 transition-transform duration-200 select-none filter drop-shadow-sm">
                  {item.emoji}
                </span>
              </div>

              {/* Word & Uzbek Translation */}
              <div className="pt-2 border-t border-slate-100 text-center w-full">
                <div className="font-extrabold text-slate-800 text-base group-hover:text-indigo-600 transition-colors">
                  {item.word}
                </div>
                <div className="text-xs font-semibold text-emerald-600 truncate mt-0.5">
                  {item.uzbek}
                </div>
              </div>

              {/* Audio button indicator */}
              <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400 bg-slate-50 px-2 py-1 rounded-xl">
                <span className="font-mono text-[10px]">{item.phonetic}</span>
                <Volume2 className="w-3.5 h-3.5 text-rose-500 group-hover:animate-bounce" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail Flashcard Modal */}
      {selectedLetter && (
        <DetailModal
          isOpen={!!selectedLetter}
          onClose={() => setSelectedLetter(null)}
          title={`${selectedLetter.letter} - ${selectedLetter.word}`}
          subtitle={`Ingliz tili harfi: ${selectedLetter.letter} (${selectedLetter.lower})`}
          phonetic={selectedLetter.phonetic}
          uzbekTranslation={selectedLetter.uzbek}
          emoji={selectedLetter.emoji}
          tag="Alifbo Harfi"
          sentence={selectedLetter.sentence}
          funFact={selectedLetter.funFact}
          onSpeak={() => {
            audioService.speak(`${selectedLetter.letter}. ${selectedLetter.word}`);
          }}
        />
      )}
    </div>
  );
};
