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
    answer: "Também. Atualmente temos quatro opções:\n\n– Plano Mensal: R$ 25,90\n– Plano Trimestral: R$ 59,90\n– Plano Semestral: R$ 89,90\n– Plano Anual: R$ 129,90\n\nVocê escolhe a que melhor se adapta a você."
  },
  {
    question: "Em quantos aparelhos posso usar?",
    answer: "Nosso plano padrão permite 3 telas simultâneas. Também oferecemos opções para quem deseja mais acessos."
  },
  {
    question: "Quantos canais são liberados?",
    answer: "Você terá acesso a milhares de canais, incluindo canais abertos, fechados e conteúdos de Netflix, Amazon Prime, Disney+, Max, Globoplay, Premiere e muito mais — tudo em um só lugar!"
  },
  {
    question: "Como vou receber o acesso?",
    answer: "De forma imediata! Após a confirmação do pagamento, você receberá por e-mail:\n\n– ✅ Acesso à plataforma\n– ✅ Tutoriais completos para usar em qualquer aparelho"
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
  const whatsappSupport = "https://wa.me/+5567981030648";

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-12">
          Perguntas <span className="text-primary">frequentes</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="font-display text-lg md:text-xl hover:no-underline hover:text-primary py-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-10">
            <a href={whatsappSupport} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg px-10 py-6">
                <MessageCircle className="mr-2 h-5 w-5" />
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
