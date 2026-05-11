import poster1 from "@/assets/poster1.jpg";
import poster2 from "@/assets/poster2.jpg";
import poster3 from "@/assets/poster3.jpg";
import poster4 from "@/assets/poster4.jpg";

const streamingPosters = [
  { src: poster1, alt: "Série de ação popular" },
  { src: poster2, alt: "Série dramática popular" },
  { src: poster3, alt: "Série sci-fi popular" },
  { src: poster4, alt: "Série comédia popular" },
];

const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 bg-background border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="font-display text-2xl sm:text-3xl mb-4 sm:mb-6">
            <span className="text-foreground">BALTIGO</span>
            <span className="text-primary">FLIX</span>
          </div>

          {/* Streaming Content Gallery */}
          <div className="mb-8 sm:mb-10">
            <h3 className="font-display text-lg sm:text-xl mb-4 sm:mb-6">
              Conteúdos de streaming da <span className="text-primary">atualidade</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
              {streamingPosters.map((poster, index) => (
                <div 
                  key={index} 
                  className="relative aspect-[2/3] rounded-xl overflow-hidden group"
                >
                  <img 
                    src={poster.src} 
                    alt={poster.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Security */}
          <div className="mb-6 sm:mb-8">
            <h3 className="font-display text-lg sm:text-xl mb-3 sm:mb-4">Site seguro</h3>
            <img 
              src="https://fireplaytv.com/wp-content/uploads/2025/06/SELO-SITE-SEGURO.webp" 
              alt="Site seguro"
              className="max-w-[200px] sm:max-w-xs mx-auto w-full"
            />
          </div>

          {/* Disclaimer */}
          <div className="text-[10px] sm:text-xs text-muted-foreground max-w-4xl mx-auto space-y-3 sm:space-y-4 px-2">
            <p>
              Esta página não tem qualquer vínculo com o Facebook S/A e suas empresas, apenas usamos a plataforma para promover os nossos produtos. Ao sair da plataforma toda responsabilidade sobre produtos vendidos e ofertados é de inteira responsabilidade da nossa empresa, bem como se houver quaisquer eventualidades legais.
            </p>
            <p>
              Declaramos que o Facebook S/A não tem qualquer vínculo de associação em processos cíveis ou criminais. Nosso email de suporte é: baltigoflixangolamocambique@gmail.com
            </p>
            <p>
              Não compre produtos piratas, não vendemos em marketplaces como: Mercado Livre, Shopee, Aliexpress, Facebook, Olx etc. Não damos suporte a produtos comprados nestes canais.
            </p>
          </div>

          {/* Copyright */}
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/30">
            <p className="text-xs sm:text-sm text-muted-foreground">
              BaltigoFlix 2026 © Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
