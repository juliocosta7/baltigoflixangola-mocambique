import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    question: "Preciso pagar mensalidade?",
    answer: "Sim. Com o BaltigoFlix, você recebe um código de acesso equivalente a sua assinatura, sem a necessidade de pagamentos extras por conteúdo."
  },
  {
    question: "Como é a instalação?",
    answer: "Basta seguir o passo passo que é enviado para o E-mail do comprador e instalar na tv box, tv smart, celular ou computador."
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "Pagamentos via Multicaixa Express, por Referência e Transferência Bancária | Pagamento e-Mola e M-Pesa: acesso em minutos."
  }
];

const BenefitsFAQ = () => {
  return (
    <section className="py-12 sm:py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12 px-2">
          Com a BaltigoFlix você só tem <span className="text-primary">benefícios!</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {benefits.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card border border-border/50 rounded-xl px-4 sm:px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="font-display text-lg sm:text-xl hover:no-underline hover:text-primary py-4 sm:py-6 text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 sm:pb-6 text-sm sm:text-base">
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
