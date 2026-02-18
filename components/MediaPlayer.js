function extractVimeoId(source) {
  if (!source) return null;

  const trimmed = source.trim();
  const numericIdPattern = /^\d+$/;
  if (numericIdPattern.test(trimmed)) return trimmed;

  const directMatch = trimmed.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
  if (directMatch) return directMatch[1];

  return null;
}

export default function MediaPlayer({ source, title = "Video", autoPlay = false }) {
  const vimeoId = extractVimeoId(source);

  if (!vimeoId) {
    return null;
  }

  const query = autoPlay ? "?autoplay=1" : "";
  return (
    <div className="media-frame-wrap">
      <iframe
        src={`https://player.vimeo.com/video/${vimeoId}${query}`}
        title={title}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
