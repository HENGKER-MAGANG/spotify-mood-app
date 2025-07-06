// lib/spotify.js

export async function getPlaylistByMood(mood) {
  try {
    const res = await fetch(`/api/playlist?mood=${mood}`);
    const data = await res.json();
    return data.playlist;
  } catch (err) {
    console.error("Gagal mengambil playlist:", err);
    return null;
  }
}
