import {
  Smile,
  Frown,
  Coffee,
  PartyPopper,
  Heart,
  Brain,
  Flame,
} from 'lucide-react';

const moods = [
  { name: 'happy', label: 'Happy', icon: <Smile className="w-5 h-5 mr-2" />, color: 'bg-yellow-500' },
  { name: 'sad', label: 'Sad', icon: <Frown className="w-5 h-5 mr-2" />, color: 'bg-blue-600' },
  { name: 'chill', label: 'Chill', icon: <Coffee className="w-5 h-5 mr-2" />, color: 'bg-green-600' },
  { name: 'party', label: 'Party', icon: <PartyPopper className="w-5 h-5 mr-2" />, color: 'bg-purple-700' },
  { name: 'love', label: 'Love', icon: <Heart className="w-5 h-5 mr-2" />, color: 'bg-rose-600' },
  { name: 'focus', label: 'Focus', icon: <Brain className="w-5 h-5 mr-2" />, color: 'bg-sky-700' },
  { name: 'angry', label: 'Angry', icon: <Flame className="w-5 h-5 mr-2" />, color: 'bg-orange-600' },
];

export default function MoodSelector({ onSelect }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {moods.map((mood) => (
        <button
          key={mood.name}
          onClick={() => onSelect(mood.name)}
          className={`
            ${mood.color}
            text-white px-5 py-2 rounded-full shadow-lg flex items-center
            font-semibold text-sm sm:text-base transition-all duration-300 ease-in-out 
            hover:scale-105 active:scale-95 hover:brightness-110 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200
            animate-button-wiggle
          `}
        >
          {mood.icon}
          {mood.label}
        </button>
      ))}
      <style jsx>{`
        @keyframes buttonWiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
          75% { transform: rotate(-1deg); }
        }
        .animate-button-wiggle:hover {
          animation: buttonWiggle 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}
