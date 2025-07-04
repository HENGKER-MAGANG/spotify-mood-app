const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

export async function getAccessToken() {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
  });

  const data = await res.json();
  return data.access_token;
}

export async function getPlaylistByMood(mood) {
  const token = await getAccessToken();
  const moodMap = {
    bahagia: 'happy',
    sedih: 'sad',
    fokus: 'focus',
    energi: 'energy'
  };

  const q = moodMap[mood] || 'mood';
  const res = await fetch(`https://api.spotify.com/v1/search?q=${q}&type=playlist&limit=1`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const data = await res.json();
  return data.playlists.items[0];
}
