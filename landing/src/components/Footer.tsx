const footerLinks = {
  Product: ["Identity Layer", "Trust Score", "Smart Router", "AI Agents", "Social Reputation"],
  Developers: ["Documentation", "API Reference", "SDK", "Changelog", "Status"],
  Community: ["Discord", "Twitter", "GitHub", "Blog", "Forum"],
  Company: ["About", "Careers", "Press Kit", "Contact", "Terms"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border/50 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display font-bold text-xl tracking-tight mb-3">
              <span className="glow-text">block</span>
              <span className="text-foreground">ID</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered trust infrastructure for Web3.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-sm mb-4 text-foreground">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 blockID. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
