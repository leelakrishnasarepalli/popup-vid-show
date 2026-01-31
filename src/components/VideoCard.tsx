import { Card } from "@/components/ui/card";
import { Video, getYouTubeThumbnail } from "@/data/videos";
import { Play } from "lucide-react";

interface VideoCardProps {
  video: Video;
  colorIndex: number;
  onClick: () => void;
}

const borderColors = [
  "border-kid-red",
  "border-kid-blue",
  "border-kid-yellow",
  "border-kid-green",
  "border-kid-purple",
  "border-kid-orange",
];

const shadowColors = [
  "hover:shadow-kid-red/40",
  "hover:shadow-kid-blue/40",
  "hover:shadow-kid-yellow/40",
  "hover:shadow-kid-green/40",
  "hover:shadow-kid-purple/40",
  "hover:shadow-kid-orange/40",
];

const bgColors = [
  "bg-kid-red",
  "bg-kid-blue",
  "bg-kid-yellow",
  "bg-kid-green",
  "bg-kid-purple",
  "bg-kid-orange",
];

export const VideoCard = ({ video, colorIndex, onClick }: VideoCardProps) => {
  const borderColor = borderColors[colorIndex % borderColors.length];
  const shadowColor = shadowColors[colorIndex % shadowColors.length];
  const bgColor = bgColors[colorIndex % bgColors.length];

  return (
    <Card
      onClick={onClick}
      className={`group cursor-pointer overflow-hidden border-4 ${borderColor} ${shadowColor} 
        transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-3xl`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={getYouTubeThumbnail(video.youtubeId)}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className={`${bgColor} rounded-full p-4 shadow-lg`}>
            <Play className="h-10 w-10 fill-white text-white" />
          </div>
        </div>
      </div>
      <div className={`${bgColor} p-3`}>
        <h3 className="truncate text-center text-lg font-bold text-white">
          {video.title}
        </h3>
      </div>
    </Card>
  );
};
