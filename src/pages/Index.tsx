const VIDEO_ID = "-FFwG6LOgmY";

const embedSrc = `https://www.youtube.com/embed/${VIDEO_ID}?modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&controls=1&color=white`;

const Index = () => {
  return (
    <div className="flex min-h-[100dvh] w-full items-center justify-center bg-black">
      <div className="relative aspect-video w-[min(100vw,calc(100dvh*16/9))] max-h-[100dvh]">
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          src={embedSrc}
          title="Video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Index;
