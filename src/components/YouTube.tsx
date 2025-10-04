import { Youtube, Play, Users, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const YouTubeSection = () => {
  const videos = [
    {
      title: "React Performance Optimization",
      views: "25K",
      thumbnail: "from-primary to-accent",
    },
    {
      title: "Advanced Hooks Patterns",
      views: "18K",
      thumbnail: "from-secondary to-primary",
    },
    {
      title: "State Management Deep Dive",
      views: "32K",
      thumbnail: "from-accent to-secondary",
    },
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
              Sharing knowledge and helping developers grow through tutorials
              and insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {videos.map((video, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="relative mb-4 rounded-xl overflow-hidden">
                  <div
                    className={`w-full h-48 bg-gradient-to-br ${video.thumbnail} opacity-60 group-hover:opacity-80 transition-smooth`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 group-hover:scale-110 transition-spring">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-white text-sm flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {video.views}
                  </div>
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-smooth font-display">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-display">10K+ Subscribers</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                <span className="font-display">500K+ Views</span>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 to-red-600 hover:shadow-glow text-white font-display"
            >
              <Youtube className="mr-2 h-5 w-5" />
              Visit Channel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
