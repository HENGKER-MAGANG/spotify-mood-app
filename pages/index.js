import { useState } from 'react';
import MoodSelector from '../components/MoodSelector';
import Playlist from '../components/Playlist';
import { getPlaylistByMood } from '../lib/spotify';

export default function Home() {
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleMoodSelect(mood) {
    setLoading(true);
    const data = await getPlaylistByMood(mood);
    setPlaylist(data);
    setLoading(false);
  }

  return (
    <main className="min-h-screen p-6 bg-gray-100 text-center">
      <h1 className="text-3xl font-bold mb-4">🎧 Mood Playlist Finder</h1>
      <p>Pilih mood kamu dan temukan playlist yang cocok 🎶</p>

      <MoodSelector onSelect={handleMoodSelect} />

      {loading && <p className="mt-4 text-blue-500">Memuat playlist...</p>}
      <Playlist playlist={playlist} />
    </main>
  );
}
