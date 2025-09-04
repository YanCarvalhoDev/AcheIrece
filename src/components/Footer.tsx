import React from "react";
import { MapPin, Mail, Phone, Globe, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Empresa",
      links: [
        { label: "Sobre nós", href: "/sobre" },
        { label: "Nossa missão", href: "/sobre#values-header" },
      ],
    },
    {
      title: "Serviços",
      links: [
        { label: "Buscar comércios", href: "/" },
        { label: "Adicionar negócio", href: "/cadastre-se" },
      ],
    },
    {
      title: "Suporte",
      links: [
        { label: "Contato", href: "/contato" },
        { label: "FAQ", href: "/contato#duvidas" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Termos de uso", href: "/termos" },
        { label: "Política de privacidade", href: "/privacidade" },
        { label: "Cookies", href: "/cookies" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/acheirece/",
      label: "Instagram",
    },
  ];

  const contactInfo = [
    { icon: MapPin, text: "Irecê, BA - Brasil" },
    { icon: Mail, text: "acheirece@gmail.com" },
    { icon: Phone, text: "(74) 98811-2783" },
    { icon: Globe, text: "www.acheirece.com.br" },
  ];

  return (
    <footer className="footer-professional">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Company Info */}
          <div className="footer-company">
            <div className="footer-logo">
              <img
                src="/logo_ache_irece_branco5.png"
                alt="Logo Ache Irecê"
                className="footer-logo-img"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const textElement = target.nextElementSibling as HTMLElement;
                  if (textElement) {
                    textElement.classList.remove("hidden");
                    textElement.style.display = "block";
                  }
                }}
              />
              <h3 className="footer-logo-text hidden">Comércios Locais</h3>
            </div>

            <p className="footer-description">
              Conectando comunidades locais aos melhores comércios e serviços da
              sua região. Descubra, explore e apoie o comércio local.
            </p>

            {/* Contact Info */}
            <div className="footer-contact">
              {contactInfo.map((item, index) => (
                <div key={index} className="footer-contact-item">
                  <item.icon className="footer-contact-icon" size={16} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="footer-social">
              <h4 className="footer-social-title">Siga-nos no Instagram</h4>
              <div className="footer-social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="footer-social-link"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="footer-links-grid">
            {footerSections.map((section, index) => (
              <div key={index} className="footer-section">
                <h4 className="footer-section-title">{section.title}</h4>
                <ul className="footer-section-links">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className="footer-link ">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Comércios Locais. Todos os direitos reservados.
            </p>

            <div className="footer-bottom-links">
              <p>Desenvolvido por</p>
              <a
                href="https://www.yancarvalhodev.com.br/"
                className="footer-bottom-link"
              >
                Yan Carvalho
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
