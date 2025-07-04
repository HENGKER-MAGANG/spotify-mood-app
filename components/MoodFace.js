export default function MoodFace({ mood }) {
  const moodMap = {
    happy: '😄',
    sad: '😢',
    chill: '😌',
    party: '🎉',
    love: '😍',
    focus: '🧠',
    angry: '😡',
    default: '🎵',
  };

  return (
    <div className="text-[4rem] md:text-[5rem] mb-4 animate-pop">
      {moodMap[mood] || moodMap['default']}
    </div>
  );
}
