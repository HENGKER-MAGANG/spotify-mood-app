import {
  Smile,
  Frown,
  Coffee,
  PartyPopper,
  Heart,
  Brain,
  Flame,
  Music
} from 'lucide-react';

export default function MoodFace({ mood }) {
  const moodMap = {
    happy: <Smile size={80} className="text-yellow-400" />,
    sad: <Frown size={80} className="text-blue-500" />,
    chill: <Coffee size={80} className="text-green-500" />,
    party: <PartyPopper size={80} className="text-purple-500" />,
    love: <Heart size={80} className="text-rose-500" />,
    focus: <Brain size={80} className="text-sky-500" />,
    angry: <Flame size={80} className="text-orange-500" />,
    default: <Music size={80} className="text-gray-400" />,
  };

  return (
    <div className="mb-4 animate-pop flex justify-center">
      {moodMap[mood] || moodMap['default']}
    </div>
  );
}
