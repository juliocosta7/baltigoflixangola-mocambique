import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "António M.",
    location: "Luanda, Angola",
    text: "Já experimentei outros serviços de IPTV mas nenhum funciona tão bem com a minha internet. BaltigoFlix é diferente, não trava mesmo!",
    rating: 5
  },
  {
    name: "Maria J.",
    location: "Maputo, Moçambique",
    text: "O suporte respondeu-me em minutos e ajudou-me a configurar tudo no telemóvel. Agora a família toda assiste.",
    rating: 5
  },
  {
    name: "Carlos F.",
    location: "Benguela, Angola",
    text: "Canais de desporto funcionam perfeitamente. Assisti todos os jogos da última temporada sem problemas.",
    rating: 5
  },
  {
    name: "Fátima A.",
    location: "Matola, Moçambique",
    text: "Qualidade de imagem excelente e muitos canais de filmes. As crianças adoram os desenhos animados!",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-primary/10">
        <Quote className="w-32 h-32" />
      </div>
      <div className="absolute bottom-20 right-10 text-primary/10 rotate-180">
        <Quote className="w-32 h-32" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-gradient-fire mb-4">
            O QUE DIZEM OS NOSSOS CLIENTES
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milhares de famílias em Angola e Moçambique já fazem parte da comunidade BaltigoFlix.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 text-lg leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-fire flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
