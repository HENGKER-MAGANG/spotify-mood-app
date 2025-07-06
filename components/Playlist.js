export default function Playlist({ playlist }) {
  if (!playlist) {
    return (
      <div className="text-center text-gray-500 mt-8">
        Playlist tidak tersedia 😞
      </div>
    );
  }

  return (
    <div className="mt-10 text-center animate-fade-slide">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 drop-shadow-sm">
        {playlist.name}
      </h2>

      <div className="w-full max-w-3xl mx-auto shadow-2xl rounded-xl overflow-hidden">
        <iframe
          key={playlist.id}
          src={`https://open.spotify.com/embed/playlist/${playlist.id}`}
          width="100%"
          height="400"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="rounded-xl border border-gray-200"
        />
      </div>
    </div>
  );
}
