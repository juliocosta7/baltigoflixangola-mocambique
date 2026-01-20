const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="font-display text-3xl mb-6">
            <span className="text-foreground">BALTIGO</span>
            <span className="text-primary">FLIX</span>
          </div>

          {/* Payment methods */}
          <div className="mb-8">
            <h3 className="font-display text-xl mb-4">Formas de pagamento</h3>
            <img 
              src="https://fireplaytv.com/wp-content/uploads/2025/06/FORMA-DE-PAGAMENTO.webp" 
              alt="Formas de pagamento"
              className="max-w-sm mx-auto"
            />
          </div>

          {/* Security */}
          <div className="mb-8">
            <h3 className="font-display text-xl mb-4">Site seguro</h3>
            <img 
              src="https://fireplaytv.com/wp-content/uploads/2025/06/SELO-SITE-SEGURO.webp" 
              alt="Site seguro"
              className="max-w-xs mx-auto"
            />
          </div>

          {/* Disclaimer */}
          <div className="text-xs text-muted-foreground max-w-4xl mx-auto space-y-4">
            <p>
              Esta página não tem qualquer vínculo com o Facebook S/A e suas empresas, apenas usamos a plataforma para promover os nossos produtos. Ao sair da plataforma toda responsabilidade sobre produtos vendidos e ofertados é de inteira responsabilidade da nossa empresa, bem como se houver quaisquer eventualidades legais.
            </p>
            <p>
              Declaramos que o Facebook S/A não tem qualquer vínculo de associação em processos cíveis ou criminais. Nosso email de suporte é: BaltigoFlix@gmail.com
            </p>
            <p>
              Não compre produtos piratas, não vendemos em marketplaces como: Mercado Livre, Shopee, Aliexpress, Facebook, Olx etc. Não damos suporte a produtos comprados nestes canais.
            </p>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              BaltigoFlix 2026 © Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
