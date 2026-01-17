const logos = [
  { name: "Claro TV", src: "https://fireplaytv.com/wp-content/uploads/2025/06/CLARO-TV.webp" },
  { name: "Combate", src: "https://fireplaytv.com/wp-content/uploads/2025/06/COMBATE.webp" },
  { name: "Crunchyroll", src: "https://fireplaytv.com/wp-content/uploads/2025/06/CRUNCHROLL.webp" },
  { name: "Disney+", src: "https://fireplaytv.com/wp-content/uploads/2025/06/DISNEY.webp" },
  { name: "Globoplay", src: "https://fireplaytv.com/wp-content/uploads/2025/06/GLOBOPLAY.webp" },
  { name: "Max", src: "https://fireplaytv.com/wp-content/uploads/2025/06/MAX.webp" },
  { name: "Netflix", src: "https://fireplaytv.com/wp-content/uploads/2025/06/NETFLIX.webp" },
  { name: "Premiere", src: "https://fireplaytv.com/wp-content/uploads/2025/06/PREMIERE.webp" },
  { name: "Prime Video", src: "https://fireplaytv.com/wp-content/uploads/2025/06/PRIME-VIDEO.webp" },
  { name: "Sky", src: "https://fireplaytv.com/wp-content/uploads/2025/06/SKY.webp" },
  { name: "Telecine", src: "https://fireplaytv.com/wp-content/uploads/2025/06/TELECINE.webp" },
  { name: "Apple TV+", src: "https://fireplaytv.com/wp-content/uploads/2025/06/APPLE-TV.webp" },
];

const LogosMarquee = () => {
  return (
    <section className="py-6 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-y border-border/30 overflow-hidden">
      <div className="flex animate-marquee">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-6">
            <img 
              src={logo.src} 
              alt={logo.name}
              className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogosMarquee;
