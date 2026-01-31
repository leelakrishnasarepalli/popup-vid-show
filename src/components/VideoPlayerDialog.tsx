import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Video } from "@/data/videos";

interface VideoPlayerDialogProps {
  video: Video | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoPlayerDialog = ({
  video,
  isOpen,
  onClose,
}: VideoPlayerDialogProps) => {
  if (!video) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl border-4 border-kid-blue bg-card p-0 rounded-3xl overflow-hidden">
        <DialogHeader className="bg-kid-blue p-4">
          <DialogTitle className="pr-8 text-xl font-bold text-white">
            {video.title}
          </DialogTitle>
          <Button
            onClick={onClose}
            size="icon"
            className="absolute right-3 top-3 h-10 w-10 rounded-full bg-kid-red hover:bg-kid-red/80 text-white"
          >
            <X className="h-6 w-6" />
          </Button>
        </DialogHeader>
        <div className="aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
