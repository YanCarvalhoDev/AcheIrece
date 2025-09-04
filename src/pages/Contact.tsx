import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Users,
  Star,
  ArrowRight,
  Building2,
  Sparkles,
} from "lucide-react";

const Contact: React.FC = () => {
  const phoneNumber = "5574988112783";
  const hour = new Date().getHours();
  let greeting = "";

  if (hour >= 6 && hour < 12) {
    greeting = "Bom dia!";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Boa tarde!";
  } else {
    greeting = "Boa noite!";
  }

  const message = `${greeting} Gostaria de mais informações.`;
  const encodedMessage = encodeURIComponent(message);
  const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Lista de contatos
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "acheirece@gmail.com",
      description: "Resposta em até 24 horas",
      link: "mailto:acheirece@gmail.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(74) 98811-2783",
      description: "Segunda a Sexta, 9h às 18h",
      link: waLink,
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "Irecê, BA - Brasil",
      description: "Atendimento em todo território municipal",
      link: "#",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      info: "Segunda a Sexta",
      description: "9h às 18h (horário de Brasília)",
      link: "#",
    },
  ];

  const reasons = [
    {
      icon: Users,
      title: "Mais Visibilidade",
      description: "Alcance milhares de clientes potenciais na sua região",
    },
    {
      icon: Star,
      title: "Credibilidade",
      description: "Ganhe confiança com um perfil profissional completo",
    },
    {
      icon: Building2,
      title: "Crescimento",
      description: "Expanda seus negócios com nossa plataforma",
    },
  ];

  return (
    <div className="contact-page">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="container">
            <div className="text-center">
              <div className="contact-badge">
                <MessageCircle className="w-4 h-4" />
                Entre em contato
              </div>

              <h1 className="contact-title">
                Estamos Aqui Para
                <span className="contact-title-highlight">Ajudar Você</span>
              </h1>

              <p className="contact-subtitle">
                Tem dúvidas, sugestões ou quer saber mais sobre nossos serviços?
                <span className="contact-subtitle-highlight">
                  {" "}
                  Nossa equipe está pronta
                </span>{" "}
                para atendê-lo.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="contact-info-section">
          <div className="extra-container">
            <div className="contact-info-grid">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-info-card">
                  <div className="contact-info-icon">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="contact-info-content">
                    <h3 className="contact-info-title">{item.title}</h3>
                    {item.link !== "#" ? (
                      <a href={item.link} className="contact-info-link">
                        {item.info}
                      </a>
                    ) : (
                      <p className="contact-info-text">{item.info}</p>
                    )}
                    <p className="contact-info-description">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="contact-cta-section">
          <div className="container">
            <div className="contact-cta-content">
              <div className="contact-cta-header">
                <div className="contact-badge">
                  <Building2 className="w-4 h-4" />
                  Para Empresários
                </div>

                <h2 className="contact-cta-title">
                  Cadastre Seu
                  <span className="contact-title-highlight">
                    Comércio ou Serviço
                  </span>
                </h2>

                <p className="contact-cta-description">
                  Faça parte da maior plataforma de comércios locais e
                  <span className="contact-subtitle-highlight">
                    {" "}
                    aumente sua visibilidade
                  </span>{" "}
                  na região.
                </p>
              </div>

              <div className="contact-reasons-grid">
                {reasons.map((reason, index) => (
                  <div key={index} className="contact-reason-card">
                    <div className="contact-reason-icon">
                      <reason.icon className="w-8 h-8" />
                    </div>
                    <h3 className="contact-reason-title">{reason.title}</h3>
                    <p className="contact-reason-description">
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="contact-cta-buttons">
                <a href="/cadastre-se" className="contact-cta-button-primary">
                  Saiba Como Cadastrar
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="mailto:acheirece@gmail.com"
                  className="contact-cta-button-secondary"
                >
                  Falar Conosco
                  <Send className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="contact-faq-section">
          <div className="container">
            <div className="contact-faq-header" id="duvidas">
              <div className="contact-badge">
                <Sparkles className="w-4 h-4" />
                Perguntas Frequentes
              </div>
              <h2 className="contact-faq-title">
                Dúvidas
                <span className="contact-title-highlight">Comuns</span>
              </h2>
            </div>

            <div className="contact-faq-grid">
              <div className="contact-faq-item">
                <h3>Como cadastrar meu negócio?</h3>
                <p>
                  Acesse nossa página de cadastro, preencha as informações e
                  nossa equipe avaliará seu negócio para inclusão na plataforma.
                </p>
              </div>

              <div className="contact-faq-item">
                <h3>O cadastro é gratuito?</h3>
                <p>
                  Sim! O cadastro básico é totalmente gratuito. Oferecemos
                  também planos premium com recursos adicionais.
                </p>
              </div>

              <div className="contact-faq-item">
                <h3>Quanto tempo leva a aprovação?</h3>
                <p>
                  Nossa equipe analisa cada solicitação em até 3 dias úteis.
                  Você receberá um email com o resultado da avaliação.
                </p>
              </div>

              <div className="contact-faq-item">
                <h3>Posso editar as informações depois?</h3>
                <p>
                  Sim! Após a aprovação, você poderá solicitar alterações nas
                  informações do seu negócio através do nosso suporte.
                </p>
              </div>
              <div className="contact-faq-item">
                <h3>Quais são os benefícios do cadastro?</h3>
                <p>
                  Com o cadastro, você ganha visibilidade, credibilidade e
                  acesso a novos clientes na sua região.
                </p>
              </div>

              <div className="contact-faq-item">
                <h3>Como entro em contato com o suporte?</h3>
                <p>
                  Envie sua dúvida por e-mail ou acesse nossa seção de suporte
                  para assistência rápida.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
