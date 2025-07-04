const moods = [
  { name: 'happy', label: 'Happy 😊', color: 'bg-yellow-400' },
  { name: 'sad', label: 'Sad 😢', color: 'bg-blue-400' },
  { name: 'chill', label: 'Chill 😌', color: 'bg-green-400' },
  { name: 'party', label: 'Party 🎉', color: 'bg-pink-500' },
  { name: 'love', label: 'Love ❤️', color: 'bg-red-400' },
  { name: 'focus', label: 'Focus 🧠', color: 'bg-indigo-500' },
  { name: 'angry', label: 'Angry 😡', color: 'bg-orange-500' },
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
            text-white px-5 py-2 rounded-full shadow-md 
            font-semibold text-sm sm:text-base transition-all duration-300 ease-in-out 
            hover:scale-105 active:scale-95 hover:brightness-110 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
            animate-button-wiggle
          `}
        >
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
