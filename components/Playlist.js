export default function Playlist({ playlist }) {
  if (!playlist) return null;

  return (
    <div className="mt-8 text-center">
      <h2 className="text-xl font-bold mb-4">{playlist.name}</h2>
      <iframe
        src={`https://open.spotify.com/embed/playlist/${playlist.id}`}
        width="100%"
        height="380"
        frameBorder="0"
        allow="encrypted-media"
        allowFullScreen
        className="rounded"
      />
    </div>
  );
}
