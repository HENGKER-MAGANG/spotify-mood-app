export default function MoodSelector({ onSelect }) {
  const moods = ['bahagia', 'sedih', 'fokus', 'energi'];

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-6">
      {moods.map((mood) => (
        <button
          key={mood}
          onClick={() => onSelect(mood)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {mood.charAt(0).toUpperCase() + mood.slice(1)}
        </button>
      ))}
    </div>
  );
}
