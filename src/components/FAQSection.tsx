import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "O aplicativo precisa de internet para funcionar?",
    answer: "Sim! A BaltigoFlix requer conexão com a internet para funcionar. Graças ao nosso sinal potencializado por satélite próprio, uma conexão básica já é suficiente para transmitir vídeos em 4K sem travamentos. Muitos clientes utilizam apenas o 4G do celular para assistir sem problemas."
  },
  {
    question: "O pagamento é mensal?",
    answer: "Também. Atualmente temos quatro opções:\n\n– Plano Mensal: KZ 4.625 | MT 334\n– Plano Trimestral: KZ 10.696 | MT 772\n– Plano Semestral: KZ 16.054 | MT 1.159\n– Plano Anual: KZ 23.125 | MT 1.670\n\nVocê escolhe a que melhor se adapta a você."
  },
  {
    question: "Em quantos aparelhos posso usar?",
    answer: "Nosso plano padrão permite 2 telas simultâneas. Também oferecemos opções para quem deseja mais acessos."
  },
  {
    question: "Quantos canais são liberados?",
    answer: "Você terá acesso a milhares de canais, incluindo canais abertos, fechados e conteúdos de Netflix, Amazon Prime, Disney+, HBO Max, Globoplay, Premiere e muito mais — tudo em um só lugar!"
  },
  {
    question: "Como vou receber o acesso?",
    answer: "De forma imediata! Após a confirmação do pagamento, você receberá por e-mail ou whatsapp:\n\n– ✅ Acesso à plataforma\n– ✅ Tutoriais completos para usar em qualquer aparelho"
  },
  {
    question: "Preciso de um especialista para configurar?",
    answer: "Não! Nosso sistema é simples de instalar, e enviamos um tutorial passo a passo para você configurar sozinho, sem complicações."
  },
  {
    question: "Estou com dúvidas. Tem suporte?",
    answer: "Sim! Você terá acesso a um link direto para suporte especializado, pronto para te ajudar a qualquer momento — com atendimento rápido e eficiente."
  }
];

const FAQSection = () => {
  const whatsappSupport = "https://wa.me/244954668786?text=Olá!%20Preciso%20de%20suporte%20BaltigoFlix";

  return (
    <section className="py-12 sm:py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12">
          Perguntas <span className="text-primary">frequentes</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card border border-border/50 rounded-xl px-4 sm:px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="font-display text-base sm:text-lg md:text-xl hover:no-underline hover:text-primary py-4 sm:py-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 sm:pb-6 whitespace-pre-line text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8 sm:mt-10 px-4">
            <a href={whatsappSupport} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-6">
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                CONVERSAR COM SUPORTE
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
