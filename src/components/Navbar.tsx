import React from 'react';
import { AudioControls } from './AudioControls';
import { audioService } from '../utils/audio';

export type TabType = 'alphabet' | 'numbers' | 'transport' | 'colors' | 'birds' | 'quiz';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const tabs: { id: TabType; label: string; icon: string; badge?: string }[] = [
    { id: 'alphabet', label: 'Alifbo (A-Z)', icon: '🔤', badge: '26 ta' },
    { id: 'numbers', label: 'Sonlar (1-100)', icon: '🔢', badge: '100 ta' },
    { id: 'transport', label: 'Transport', icon: '🚗', badge: '10 ta' },
    { id: 'colors', label: 'Ranglar', icon: '🎨', badge: '10 ta' },
    { id: 'birds', label: 'Qushlar', icon: '🦅', badge: '10 ta' },
    { id: 'quiz', label: 'Viktorina', icon: '🎮', badge: 'Oʻyin' },
  ];

  const handleTabClick = (tabId: TabType) => {
    audioService.playPop();
    setActiveTab(tabId);
  };

  return (
    <header className="sticky top-0 z-40 bg-amber-50/90 backdrop-blur-md border-b-2 border-amber-200 py-2.5 px-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Brand / Logo */}
        <div 
          onClick={() => handleTabClick('alphabet')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-500 flex items-center justify-center text-2xl shadow-md group-hover:rotate-6 transition-transform">
            🎈
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-black text-slate-800 tracking-tight">
                Kids English
              </span>
              <span className="bg-amber-400 text-amber-950 text-[10px] font-black px-1.5 py-0.5 rounded-md uppercase">
                7-10 Yosh
              </span>
            </div>
            <p className="text-xs font-bold text-slate-500">
              Ovozli ingliz tili oʻrganish
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                type="button"
                className={`flex items-center gap-1.5 px-3 py-1.8 rounded-2xl font-black text-xs md:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer shadow-xs ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md scale-102 ring-2 ring-indigo-300'
                    : 'bg-white/80 hover:bg-white text-slate-700 hover:text-indigo-600 border border-amber-200/80'
                }`}
              >
                <span className="text-base">{tab.icon}</span>
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? 'bg-indigo-500 text-white'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Audio Controls */}
        <div className="flex items-center justify-end">
          <AudioControls />
        </div>
      </div>
    </header>
  );
};
