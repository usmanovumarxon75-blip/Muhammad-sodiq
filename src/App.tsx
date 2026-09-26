/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar, TabType } from './components/Navbar';
import { AlphabetSection } from './components/AlphabetSection';
import { NumbersSection } from './components/NumbersSection';
import { TransportSection } from './components/TransportSection';
import { ColorsSection } from './components/ColorsSection';
import { BirdsSection } from './components/BirdsSection';
import { QuizSection } from './components/QuizSection';
import { Sparkles, Heart, Award, Volume2, BookOpen } from 'lucide-react';
import { audioService } from './utils/audio';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('alphabet');

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-slate-800 flex flex-col font-['Nunito',sans-serif]">
      {/* Top Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Render Active Section */}
        {activeTab === 'alphabet' && <AlphabetSection />}
        {activeTab === 'numbers' && <NumbersSection />}
        {activeTab === 'transport' && <TransportSection />}
        {activeTab === 'colors' && <ColorsSection />}
        {activeTab === 'birds' && <BirdsSection />}
        {activeTab === 'quiz' && <QuizSection />}
      </main>

      {/* Encouraging Footer for Kids and Parents */}
      <footer className="bg-amber-100/70 border-t-2 border-amber-200 py-6 px-4 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌟</span>
            <div>
              <h4 className="font-extrabold text-amber-900 text-sm">
                7–10 yoshli bolalar uchun ingliz tili darsligi
              </h4>
              <p className="text-xs text-amber-800">
                Harflar, 1-100 sonlar, 10 transport, 10 rang va 10 qush talaffuzi bilan.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                audioService.playSuccess();
                audioService.speak("Well done! You are doing great! Keep learning!");
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-400 hover:bg-amber-500 text-amber-950 font-black rounded-2xl shadow-sm transition-transform active:scale-95 text-xs cursor-pointer"
            >
              <Award className="w-4 h-4 text-amber-900" />
              <span>Ragʻbatlantiruvchi ovoz ⭐</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
