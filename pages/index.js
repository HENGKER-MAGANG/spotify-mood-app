import { useState } from 'react';
import MoodSelector from '../components/MoodSelector';
import Playlist from '../components/Playlist';
import MoodFace from '../components/MoodFace';
import { getPlaylistByMood } from '../lib/spotify';
import {
  Music,
  Headphones,
  PartyPopper,
  Flame,
  Gamepad2,
  Waves
} from 'lucide-react';

export default function Home() {
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedMood, setSelectedMood] = useState(null);

  async function handleMoodSelect(mood) {
    setLoading(true);
    setShowConfetti(false);
    setSelectedMood(mood);
    const data = await getPlaylistByMood(mood);
    setPlaylist({ ...data, mood });
    setTimeout(() => setShowConfetti(true), 300);
    setLoading(false);
  }

  return (
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 md:p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

      {/* Icon Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-30 text-white animate-emoji-confetti">
          <PartyPopper className="absolute top-10 left-10 w-6 h-6" />
          <Headphones className="absolute top-20 right-16 w-6 h-6" />
          <Music className="absolute bottom-10 left-20 w-6 h-6" />
          <Flame className="absolute bottom-12 right-14 w-6 h-6" />
          <Gamepad2 className="absolute top-[45%] left-[48%] w-6 h-6" />
        </div>
      )}

      <div className="w-full max-w-4xl bg-gray-800/80 backdrop-blur-2xl rounded-xl shadow-lg p-6 md:p-10 relative z-10 border border-gray-700">
        <div className="text-center mb-6">
          <MoodFace mood={selectedMood} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white flex items-center justify-center gap-3 drop-shadow-md">
            <Headphones className="text-blue-400 animate-wiggle" size={34} />
            <span className="text-blue-300">Mood Playlist Finder</span>
          </h1>
          <p className="text-gray-300 mt-2 text-base md:text-lg font-medium tracking-wide">
            Pilih mood kamu dan nikmati playlist yang cocok dengan vibe-mu 🎧
          </p>
        </div>

        <div className="mb-8">
          <MoodSelector onSelect={handleMoodSelect} selected={selectedMood} />
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center mb-8 space-y-4">
            {/* Waveform loader */}
            <div className="flex items-end gap-1 h-6">
              <div className="w-1.5 h-full bg-blue-400 animate-wave1 rounded" />
              <div className="w-1.5 h-full bg-blue-400 animate-wave2 rounded" />
              <div className="w-1.5 h-full bg-blue-400 animate-wave3 rounded" />
              <div className="w-1.5 h-full bg-blue-400 animate-wave2 rounded" />
              <div className="w-1.5 h-full bg-blue-400 animate-wave1 rounded" />
            </div>
            <span className="text-blue-300 font-medium tracking-wide animate-pulse">
              Memuat playlist sesuai mood kamu...
            </span>
          </div>
        ) : (
          playlist && (
            <div className="relative z-10 animate-fade-slide">
              <Playlist playlist={playlist} />
            </div>
          )
        )}

        {!playlist && !loading && (
          <div className="text-center text-gray-500 text-sm mt-10">
            <Music className="mx-auto mb-2 w-7 h-7 text-blue-400 animate-bounce" />
            Playlist akan muncul setelah kamu memilih mood
          </div>
        )}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
          100% { transform: translateY(0); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-4deg); }
          50% { transform: rotate(4deg); }
        }
        @keyframes confetti {
          0% { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes wave1 {
          0%, 100% { height: 1rem; }
          50% { height: 2rem; }
        }
        @keyframes wave2 {
          0%, 100% { height: 0.5rem; }
          50% { height: 1.8rem; }
        }
        @keyframes wave3 {
          0%, 100% { height: 0.8rem; }
          50% { height: 2.2rem; }
        }

        .animate-wiggle {
          animation: wiggle 1.8s infinite ease-in-out;
        }
        .animate-fade-slide {
          animation: fadeSlide 0.5s ease-out forwards;
        }
        .animate-emoji-confetti > * {
          animation: confetti 1.5s ease-out forwards;
        }
        .animate-wave1 {
          animation: wave1 1s infinite ease-in-out;
        }
        .animate-wave2 {
          animation: wave2 1s infinite ease-in-out;
        }
        .animate-wave3 {
          animation: wave3 1s infinite ease-in-out;
        }
      `}</style>
    </main>
  );
}
