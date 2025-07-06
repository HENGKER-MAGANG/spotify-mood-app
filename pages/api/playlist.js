// pages/api/playlist.js
export default function handler(req, res) {
  const { mood } = req.query;

  const moodPlaylists = {
    happy: {
      name: "Happy Hits!",
      id: "37i9dQZF1DXdPec7aLTmlC"
    },
    sad: {
      name: "Life Sucks",
      id: "37i9dQZF1DX7qK8ma5wgG1"
    },
    chill: {
      name: "Lo-Fi Beats",
      id: "37i9dQZF1DXdbXrPNafg9d" // ✅ GANTI INI
    },
    party: {
      name: "Dance Party",
      id: "37i9dQZF1DXaXB8fQg7xif"
    },
    love: {
      name: "All About Love",
      id: "37i9dQZF1DX50QitC6Oqtn"
    },
    focus: {
      name: "Deep Focus",
      id: "37i9dQZF1DWZeKCadgRdKQ"
    },
    angry: {
      name: "Rock Hard",
      id: "37i9dQZF1DWXNFSTtym834"
    }
  };

  const playlist = moodPlaylists[mood] || null;
  res.status(200).json({ playlist });
}
