import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    question: "Preciso pagar mensalidade?",
    answer: "Não. Com o BaltigoFlix, você recebe um código de acesso equivalente a sua assinatura, sem a necessidade de pagamentos extras por conteúdo."
  },
  {
    question: "Como é a instalação?",
    answer: "Basta seguir o passo passo que é enviado para o E-mail do comprador e instalar na tv box, tv smart, celular ou computador."
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "Pagamentos via cartão, débito ou Pix: acesso em minutos. Boleto: até 2 dias úteis."
  }
];

const BenefitsFAQ = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-12">
          Com a BaltigoFlix você só tem <span className="text-primary">benefícios!</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {benefits.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="font-display text-xl hover:no-underline hover:text-primary py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default BenefitsFAQ;
