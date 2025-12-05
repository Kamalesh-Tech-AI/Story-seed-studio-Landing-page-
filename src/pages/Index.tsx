const Index = () => {
  const videoUrl =
    "https://wesybobuqaowewldvaop.supabase.co/storage/v1/object/public/videos/coming-soon.mp4";

  return (
    <div className="video-shell">
      <div className="video-frame">
        <video
          className="video-player"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="video-glow" />
      </div>
    </div>
  );
};

export default Index;
