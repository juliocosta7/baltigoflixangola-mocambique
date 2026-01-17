import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O BaltigoFlix funciona com internet móvel?",
    answer: "Sim! O nosso serviço está optimizado para funcionar bem mesmo com dados móveis ou internet limitada. Muitos clientes em Angola e Moçambique usam com pacotes de dados normais."
  },
  {
    question: "Como faço para instalar o BaltigoFlix?",
    answer: "É muito simples! Após o pagamento, enviamos um link com a aplicação e um guia passo a passo. Se precisares de ajuda, o nosso suporte faz a instalação contigo por chamada ou mensagem."
  },
  {
    question: "Posso usar em mais do que um dispositivo?",
    answer: "Sim, dependendo do plano escolhido, podes usar em até 3 dispositivos diferentes. Smart TV, telemóvel, tablet ou computador - escolhes tu!"
  },
  {
    question: "O serviço inclui canais de desporto?",
    answer: "Claro! Tens acesso a todos os principais canais de desporto para assistir futebol, basquetebol e outros eventos ao vivo sem pagar mais por isso."
  },
  {
    question: "Posso testar antes de comprar?",
    answer: "Sim! Oferecemos um período de teste gratuito para que possas verificar a qualidade do serviço antes de fazeres qualquer pagamento. Basta entrar em contacto pelo WhatsApp."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos transferência bancária, Multicaixa Express (Angola), M-Pesa (Moçambique) e outras formas de pagamento móvel. Escolhes a que for mais prática para ti."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-gradient-fire mb-4">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo o que precisas saber sobre o BaltigoFlix.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
