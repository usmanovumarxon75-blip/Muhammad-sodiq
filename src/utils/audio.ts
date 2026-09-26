// Kid-friendly Speech Synthesis & Web Audio sound effects

class AudioManager {
  private ctx: AudioContext | null = null;
  public speechRate: number = 0.9; // 0.8 to 1.0 is best for kids
  public pitch: number = 1.05; // slightly cheerful tone
  private preferredVoice: SpeechSynthesisVoice | null = null;
  public isSlowMode: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.initVoice();
      window.speechSynthesis.onvoiceschanged = () => {
        this.initVoice();
      };
    }
  }

  private initVoice() {
    if (!('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    // Prioritize natural English voices
    const enVoices = voices.filter(v => v.lang.startsWith('en'));
    const preferred = enVoices.find(v => 
      v.name.includes('Natural') || 
      v.name.includes('Google') || 
      v.name.includes('Samantha') || 
      v.name.includes('Daniel') || 
      v.name.includes('Karen') ||
      v.name.includes('Victoria')
    ) || enVoices[0] || voices[0];
    
    if (preferred) {
      this.preferredVoice = preferred;
    }
  }

  private getAudioContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtxClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Play spoken English with SpeechSynthesis
  speak(text: string, onEnd?: () => void) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    try {
      window.speechSynthesis.cancel(); // cancel previous phrase to avoid delay

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = this.isSlowMode ? 0.65 : this.speechRate;
      utterance.pitch = this.pitch;

      if (!this.preferredVoice) {
        this.initVoice();
      }
      if (this.preferredVoice) {
        utterance.voice = this.preferredVoice;
      }

      if (onEnd) {
        utterance.onend = onEnd;
      }

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis error:', e);
    }
  }

  // Synthesize pleasant cheerful sound effects using Web Audio API
  playPop() {
    try {
      const ctx = this.getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(700, now + 0.08);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch {
      // Fallback silent
    }
  }

  playSuccess() {
    try {
      const ctx = this.getAudioContext();
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      const now = ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.2, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.3);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.3);
      });
    } catch {
      // Fallback silent
    }
  }

  playSparkle() {
    try {
      const ctx = this.getAudioContext();
      const notes = [784, 880, 988, 1175, 1319];
      const now = ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);

        gain.gain.setValueAtTime(0.15, now + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.25);
      });
    } catch {
      // Fallback silent
    }
  }

  playWrong() {
    try {
      const ctx = this.getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(160, now + 0.2);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.2);
    } catch {
      // Fallback silent
    }
  }
}

export const audioService = new AudioManager();
