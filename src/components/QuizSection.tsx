import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, Trophy, RotateCcw, CheckCircle, XCircle, Sparkles, Star } from 'lucide-react';
import { ALPHABET_LIST, NUMBERS_LIST, TRANSPORT_LIST, COLORS_LIST, BIRDS_LIST } from '../data/learningData';
import { audioService } from '../utils/audio';

type QuizCategory = 'all' | 'alphabet' | 'numbers' | 'transport' | 'colors' | 'birds';

interface Question {
  promptText: string;
  speakText: string;
  correctAnswer: {
    title: string;
    uzbek: string;
    emoji: string;
  };
  options: {
    title: string;
    uzbek: string;
    emoji: string;
  }[];
}

export const QuizSection: React.FC = () => {
  const [category, setCategory] = useState<QuizCategory>('all');
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Generate a new random question based on active category
  const generateQuestion = (cat: QuizCategory = category): Question => {
    let pool: { title: string; uzbek: string; emoji: string }[] = [];

    const alphaItems = ALPHABET_LIST.map(a => ({ title: a.letter, uzbek: a.word, emoji: a.emoji }));
    const numItems = NUMBERS_LIST.slice(0, 30).map(n => ({ title: n.word, uzbek: n.uzbek, emoji: `${n.number}` }));
    const transItems = TRANSPORT_LIST.map(t => ({ title: t.name, uzbek: t.uzbek, emoji: t.emoji }));
    const colorItems = COLORS_LIST.map(c => ({ title: c.name, uzbek: c.uzbek, emoji: c.examples[0]?.emoji || '🎨' }));
    const birdItems = BIRDS_LIST.map(b => ({ title: b.name, uzbek: b.uzbek, emoji: b.emoji }));

    if (cat === 'alphabet') pool = alphaItems;
    else if (cat === 'numbers') pool = numItems;
    else if (cat === 'transport') pool = transItems;
    else if (cat === 'colors') pool = colorItems;
    else if (cat === 'birds') pool = birdItems;
    else {
      // mix all
      pool = [...alphaItems.slice(0, 10), ...transItems, ...colorItems, ...birdItems, ...numItems.slice(0, 10)];
    }

    // Pick 4 random items from pool
    const shuffledPool = [...pool].sort(() => 0.5 - Math.random());
    const correct = shuffledPool[0];
    const options = shuffledPool.slice(0, 4).sort(() => 0.5 - Math.random());

    return {
      promptText: `Qaysi biri "${correct.title}" (${correct.uzbek})?`,
      speakText: `Find: ${correct.title}!`,
      correctAnswer: correct,
      options,
    };
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    const q = generateQuestion(category);
    setCurrentQuestion(q);
    setTimeout(() => {
      audioService.speak(q.speakText);
    }, 200);
  };

  useEffect(() => {
    nextQuestion();
  }, [category]);

  const handleSelectOption = (optTitle: string) => {
    if (isAnswered || !currentQuestion) return;

    setSelectedOption(optTitle);
    setIsAnswered(true);
    setTotalAnswered(prev => prev + 1);

    if (optTitle === currentQuestion.correctAnswer.title) {
      // Correct!
      audioService.playSuccess();
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);

      // Trigger Confetti
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // Fallback
      }

      audioService.speak(`Excellent! That is ${currentQuestion.correctAnswer.title}!`);
    } else {
      // Wrong
      audioService.playWrong();
      setStreak(0);
      audioService.speak(`Oops! Try next time. The answer is ${currentQuestion.correctAnswer.title}`);
    }
  };

  const handleRepeatVoice = () => {
    if (currentQuestion) {
      audioService.playPop();
      audioService.speak(currentQuestion.speakText);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Trophy className="w-3.5 h-3.5 text-yellow-300" />
              Oʻyin & Viktorina: Oʻrganganlaringizni sinab koʻring!
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Ingliz Tili Viktorinasi (Quiz Game)
            </h1>
            <p className="text-violet-100 text-sm md:text-base mt-1 max-w-xl font-medium">
              Ovozni diqqat bilan eshiting va toʻgʻri javobni tanlang. Har bir toʻgʻri javob uchun yulduzcha ⭐ oling!
            </p>
          </div>

          {/* Stats Badges */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20">
            <div className="text-center px-3 py-1 bg-white/20 rounded-xl">
              <div className="flex items-center gap-1 text-yellow-300 font-extrabold text-lg justify-center">
                <Star className="w-4 h-4 fill-yellow-300" />
                {score}
              </div>
              <div className="text-[10px] text-violet-200 uppercase font-bold">Ball</div>
            </div>
            <div className="text-center px-3 py-1 bg-white/20 rounded-xl">
              <div className="text-emerald-300 font-extrabold text-lg">
                🔥 {streak}
              </div>
              <div className="text-[10px] text-violet-200 uppercase font-bold">Ketma-ket</div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-5 pt-4 border-t border-white/20 flex flex-wrap items-center gap-1.5 text-xs font-bold">
          <span className="text-white/80 mr-1">Mavzu:</span>
          {(['all', 'alphabet', 'numbers', 'transport', 'colors', 'birds'] as QuizCategory[]).map((cat) => {
            const labels: Record<QuizCategory, string> = {
              all: 'Aralash (Barchasi)',
              alphabet: '🔤 Alifbo',
              numbers: '🔢 Sonlar',
              transport: '🚗 Transport',
              colors: '🎨 Ranglar',
              birds: '🦅 Qushlar',
            };
            return (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  category === cat
                    ? 'bg-white text-purple-700 shadow-sm'
                    : 'text-white/90 hover:bg-white/10'
                }`}
              >
                {labels[cat]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Question Card */}
      {currentQuestion && (
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 md:p-8 border-4 border-violet-200 shadow-xl text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="bg-violet-100 text-violet-800 text-xs font-black uppercase px-3 py-1 rounded-full">
              Savol #{totalAnswered + 1}
            </span>
            <button
              onClick={handleRepeatVoice}
              className="inline-flex items-center gap-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold transition-all"
            >
              <Volume2 className="w-4 h-4 text-indigo-600 animate-pulse" />
              Ovozni qayta eshitish
            </button>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
            {currentQuestion.promptText}
          </h2>

          <div className="mt-2 text-violet-600 font-mono text-sm font-semibold">
            Listen: &quot;{currentQuestion.correctAnswer.title}&quot;
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {currentQuestion.options.map((opt) => {
              const isSelected = selectedOption === opt.title;
              const isCorrect = opt.title === currentQuestion.correctAnswer.title;

              let cardStyle = 'border-slate-200 hover:border-violet-400 bg-slate-50 hover:bg-violet-50/50';
              if (isAnswered) {
                if (isCorrect) {
                  cardStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 ring-4 ring-emerald-200';
                } else if (isSelected) {
                  cardStyle = 'border-rose-400 bg-rose-50 text-rose-900 ring-2 ring-rose-200';
                } else {
                  cardStyle = 'border-slate-200 opacity-60';
                }
              }

              return (
                <button
                  key={opt.title}
                  onClick={() => handleSelectOption(opt.title)}
                  disabled={isAnswered}
                  className={`relative p-5 rounded-3xl border-3 transition-all duration-200 flex flex-col items-center justify-center gap-2 group cursor-pointer shadow-sm hover:shadow-md ${cardStyle}`}
                >
                  <span className="text-5xl group-hover:scale-125 transition-transform duration-200">
                    {opt.emoji}
                  </span>
                  <span className="text-xl font-black text-slate-800 mt-1">
                    {opt.title}
                  </span>
                  <span className="text-xs font-semibold text-emerald-600">
                    {opt.uzbek}
                  </span>

                  {/* Feedback icon */}
                  {isAnswered && isCorrect && (
                    <CheckCircle className="w-6 h-6 text-emerald-600 absolute top-3 right-3" />
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-6 h-6 text-rose-500 absolute top-3 right-3" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          {isAnswered && (
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center">
              <button
                onClick={nextQuestion}
                className="py-3 px-8 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-extrabold text-base rounded-2xl shadow-lg transition-transform active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Keyingi savol</span>
                <Sparkles className="w-5 h-5 text-yellow-300" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
