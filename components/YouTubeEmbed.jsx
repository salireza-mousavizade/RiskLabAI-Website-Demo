// components/YouTubeEmbed.js
export default function YouTubeEmbed({ videoId }) {
    return (
        <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allowFullScreen>
            </iframe>
        </div>
    );
}
