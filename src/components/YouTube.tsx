import { Youtube, Play, Users, Eye, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const getYouTubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const getThumbnailUrl = (url: string) => {
  const videoId = getYouTubeId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "";
};

interface VideoData {
  title: string;
  views: string;
  url: string;
  loading: boolean;
}

const VideoCard = ({ url }: { url: string }) => {
  const [data, setData] = useState<VideoData>({
    title: "Loading...",
    views: "...",
    url,
    loading: true,
  });

  useEffect(() => {
    const fetchVideoData = async () => {
      const videoId = getYouTubeId(url);
      if (!videoId) return;

      try {
        // Fetch Title using NoEmbed (OEmbed)
        const noEmbedRes = await fetch(
          `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`,
        );
        const noEmbedJson = await noEmbedRes.json();

        // Fetch View Count using ReturnYouTubeDislike API (Public workaround)
        const rydRes = await fetch(`https://returnyoutubedislikeapi.com/votes?videoId=${videoId}`);
        const rydJson = await rydRes.json();

        // Format view count (e.g., 12500 -> 12.5K)
        const formatViews = (num: number) => {
          if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
          if (num >= 1000) return (num / 1000).toFixed(1) + "K";
          return num.toString();
        };

        setData({
          title: noEmbedJson.title || "Video Title",
          views: rydJson.viewCount ? formatViews(rydJson.viewCount) : "N/A",
          url,
          loading: false,
        });
      } catch (error) {
        console.error("Error fetching video data:", error);
        setData((prev) => ({ ...prev, title: "Video Unavailable", loading: false }));
      }
    };

    fetchVideoData();
  }, [url]);

  return (
    <a
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group cursor-pointer block"
    >
      <div className="relative mb-4 rounded-xl overflow-hidden aspect-video bg-muted">
        <img
          src={getThumbnailUrl(data.url)}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 group-hover:scale-110 transition-spring">
            {data.loading ? (
              <Loader2 className="h-8 w-8 text-white animate-spin" />
            ) : (
              <Play className="h-8 w-8 text-white" />
            )}
          </div>
        </div>
        <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-white text-sm flex items-center gap-1">
          <Eye className="h-4 w-4" />
          {data.views}
        </div>
      </div>
      <h3 className="font-semibold text-foreground group-hover:text-primary transition-smooth font-display line-clamp-2">
        {data.title}
      </h3>
    </a>
  );
};

const YouTubeSection = () => {
  const videos = [
    "https://youtu.be/wFvTossdD00",
    "https://www.youtube.com/watch?v=AOrdNy_zB-c",
    "https://www.youtube.com/watch?v=4u8bkofZpKI",
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 shadow-glow">
                <Youtube className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-display">
              YouTube Channel
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing knowledge and helping developers grow through tutorials and insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {videos.map((url, index) => (
              <VideoCard key={index} url={url} />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-display">15K+ Subscribers</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                <span className="font-display">1.75M+ Views</span>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-red-500 to-red-600 hover:shadow-glow text-white font-display"
            >
              <a href="https://www.youtube.com/@amanjat7" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-5 w-5" />
                Visit Channel
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
