import { Button } from "@/components/ui/button";

const filmes = [
  "https://fireplaytv.com/wp-content/uploads/2025/06/Filme-07.webp",
  "https://fireplaytv.com/wp-content/uploads/2025/06/Filme-16.webp",
  "https://fireplaytv.com/wp-content/uploads/2025/06/Filme-05.webp",
  "https://fireplaytv.com/wp-content/uploads/2025/06/Filme-04.webp",
  "https://fireplaytv.com/wp-content/uploads/2025/06/Filme-03.webp",
  "https://fireplaytv.com/wp-content/uploads/2025/06/Filme-06.webp",
  "https://fireplaytv.com/wp-content/uploads/2025/06/Filme-02.webp",
  "https://fireplaytv.com/wp-content/uploads/2025/06/Filme-10.webp",
  "https://fireplaytv.com/wp-content/uploads/2025/06/Filme-01.webp",
  "https://fireplaytv.com/wp-content/uploads/2025/06/image5.webp",
];

const series = [
  "https://fireplaytv.com/wp-content/uploads/2025/06/Serie-08.webp",
  "https://fireplaytv.com/wp-content/uploads/2025/06/Serie-10.webp",
  "https://fireplaytv.com/wp-content/uploads/2025/06/Serie-11.webp",
  "https://fireplaytv.com/wp-content/uploads/2025/06/FILME-6.webp",
  "https://fireplaytv.com/wp-content/uploads/2025/06/Serie-12.webp",
  "https://fireplaytv.com/wp-content/uploads/2025/06/Serie-13.webp",
  "https://fireplaytv.com/wp-content/uploads/2025/06/Serie-09.webp",
  "https://fireplaytv.com/wp-content/uploads/2025/06/Serie-14.webp",
  "https://fireplaytv.com/wp-content/uploads/2025/06/FILME-4.webp",
  "https://fireplaytv.com/wp-content/uploads/2025/06/image3.webp",
];

const ContentGallery = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4">
          Conteúdo premium para todos os gostos
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore nossa extensa biblioteca de filmes e séries. De blockbusters a produções premiadas, temos o melhor conteúdo para sua diversão.
        </p>
      </div>

      {/* Filmes Marquee */}
      <div className="mb-6 overflow-hidden">
        <div className="flex animate-marquee">
          {[...filmes, ...filmes].map((src, index) => (
            <div key={index} className="flex-shrink-0 mx-2">
              <img 
                src={src} 
                alt={`Filme ${index + 1}`}
                className="h-48 md:h-64 w-auto rounded-lg hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Series Marquee (reverse) */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee-reverse">
          {[...series, ...series].map((src, index) => (
            <div key={index} className="flex-shrink-0 mx-2">
              <img 
                src={src} 
                alt={`Série ${index + 1}`}
                className="h-48 md:h-64 w-auto rounded-lg hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <a href="#planos">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-6">
            Quero adquirir agora!
          </Button>
        </a>
      </div>
    </section>
  );
};

export default ContentGallery;
