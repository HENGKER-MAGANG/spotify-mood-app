import { useState } from 'react';
import MoodSelector from '../components/MoodSelector';
import Playlist from '../components/Playlist';
import MoodFace from '../components/MoodFace';
import { getPlaylistByMood } from '../lib/spotify';
import { Sparkles, Music } from 'lucide-react';

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
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 md:p-10 bg-gradient-to-r from-[#a18cd1] via-[#fbc2eb] to-[#fbc2eb]">

      {/* Colorful Confetti Emoji */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-30 animate-emoji-confetti text-3xl">
          <div className="absolute top-10 left-10">🎉</div>
          <div className="absolute top-20 right-16">💖</div>
          <div className="absolute bottom-10 left-20">🎶</div>
          <div className="absolute bottom-12 right-14">✨</div>
          <div className="absolute top-[45%] left-[48%]">🎧</div>
        </div>
      )}

      {/* Floating Blobs */}
      <div className="absolute w-96 h-96 bg-purple-300 rounded-full filter blur-3xl top-[-6rem] left-[-6rem] opacity-30 animate-float" />
      <div className="absolute w-96 h-96 bg-pink-300 rounded-full filter blur-3xl bottom-[-6rem] right-[-6rem] opacity-30 animate-float-delay" />

      {/* Music wave background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-10 animate-wave-pattern pointer-events-none" />

      <div className="w-full max-w-4xl bg-white/90 backdrop-blur-2xl rounded-3xl shadow-xl shadow-pink-200 p-6 md:p-10 relative z-10 border border-white/40 animate-glow">

        <div className="text-center mb-6">
          <MoodFace mood={selectedMood} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 flex items-center justify-center gap-3 drop-shadow-md">
            <Sparkles className="text-fuchsia-600 animate-wiggle" size={34} />
            <span className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-transparent bg-clip-text">
              Mood Playlist Finder
            </span>
          </h1>
          <p className="text-gray-500 mt-2 text-base md:text-lg font-medium tracking-wide">
            Pilih mood kamu dan nikmati playlist spesial 🎧✨
          </p>
        </div>

        <div className="mb-8">
          <MoodSelector onSelect={handleMoodSelect} selected={selectedMood} />
        </div>

        {loading ? (
          <div className="flex items-center justify-center mb-8">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-pink-400 rounded-full animate-ping opacity-75" />
              <div className="relative w-full h-full bg-pink-500 rounded-full" />
            </div>
            <span className="ml-4 text-pink-600 font-semibold animate-fade-in">Menyiapkan musik terbaik untukmu...</span>
          </div>
        ) : (
          playlist && (
            <div className="relative z-10 animate-fade-slide">
              <Playlist playlist={playlist} />
            </div>
          )
        )}

        {!playlist && !loading && (
          <div className="text-center text-gray-400 text-sm mt-10">
            <Music className="mx-auto mb-2 w-7 h-7 text-pink-400 animate-bounce" />
            Playlist akan muncul setelah kamu memilih mood 🎶
          </div>
        )}
      </div>

      {/* Animation Styles */}
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
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 25px rgba(255, 192, 203, 0.4); }
          50% { box-shadow: 0 0 35px rgba(255, 105, 180, 0.6); }
        }
        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 8s ease-in-out infinite;
        }
        .animate-wiggle {
          animation: wiggle 1.8s infinite ease-in-out;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        .animate-fade-slide {
          animation: fadeSlide 0.5s ease-out forwards;
        }
        .animate-emoji-confetti > div {
          animation: confetti 1.5s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
