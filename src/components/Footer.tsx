const Footer = () => {
  return (
    <footer className="py-10 bg-background border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-display text-3xl text-gradient-fire mb-4">BALTIGOFLIX</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            O melhor serviço de IPTV para Angola e Moçambique. 
            Entretenimento de qualidade ao alcance de todos.
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <span className="text-2xl">🇦🇴</span>
            <span className="text-2xl">🇲🇿</span>
          </div>

          <div className="text-sm text-muted-foreground space-y-2">
            <p>Suporte disponível: 8h às 22h (horário de Luanda/Maputo)</p>
            <p>© 2024 BaltigoFlix. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
