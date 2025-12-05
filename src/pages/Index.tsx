const Index = () => {
  const videoUrl = "https://wesybobuqaowewldvaop.supabase.co/storage/v1/object/public/videos/coming-soon.mp4";

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default Index;
