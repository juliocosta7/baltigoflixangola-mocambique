const VideoSection = () => {
  return (
    <section className="py-12 sm:py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-center mb-4 px-2">
          Veja você mesmo a <span className="text-primary">BaltigoFlix por dentro!!</span>
        </h2>
        
        <div className="max-w-4xl mx-auto mt-6 sm:mt-10">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 shadow-fire">
            <iframe 
              src="https://www.youtube.com/embed/mzkMQt0QsMI"
              title="BaltigoFlix - Apresentação"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-8 sm:mt-12 text-center px-4">
          <img 
            src="https://fireplaytv.com/wp-content/uploads/2025/06/PROVAS.webp" 
            alt="Provas sociais"
            className="max-w-xs sm:max-w-md mx-auto rounded-lg w-full"
          />
          <p className="mt-4 text-sm sm:text-lg text-muted-foreground">
            <span className="text-primary font-bold">+ de 1.300 pessoas</span> já usam e recomendam a BaltigoFlix
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
