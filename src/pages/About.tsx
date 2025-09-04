import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  MapPin,
  Users,
  Target,
  Award,
  Heart,
  Sparkles,
  ArrowRight,
  Star,
  Building2,
  Zap,
  Send,
} from "lucide-react";

const About: React.FC = () => {
  const values = [
    {
      icon: MapPin,
      title: "Foco Local",
      description:
        "Valorizamos e promovemos os negócios da nossa comunidade local.",
    },
    {
      icon: Users,
      title: "Comunidade",
      description:
        "Construímos pontes entre pessoas e estabelecimentos locais.",
    },
    {
      icon: Target,
      title: "Precisão",
      description: "Informações sempre atualizadas e resultados relevantes.",
    },
    {
      icon: Award,
      title: "Qualidade",
      description:
        "Comprometidos com a excelência em cada detalhe da plataforma.",
    },
    {
      icon: Star,
      title: "Inovação",
      description:
        "Buscamos soluções criativas para transformar o futuro dos negócios locais.",
    },
    {
      icon: Heart,
      title: "Compromisso",
      description:
        "Dedicados a promover o bem-estar e o crescimento da comunidade.",
    },
  ];

  const stats = [
    { number: "70+", label: "Comércios Cadastrados", icon: Building2 },
    // { number: "10K+", label: "Buscas Mensais", icon: Target },
    { number: "15+", label: "Categorias", icon: Star },
    { number: "24/7", label: "Disponibilidade", icon: Zap },
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
    <div className="about-page">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <div className="text-center">
              <div className="about-badge">
                <Sparkles className="w-4 h-4" />
                Conectando Irecê
              </div>

              <h1 className="about-title">
                Sobre Nossa
                <span className="about-title-highlight">Missão</span>
              </h1>

              <p className="about-subtitle">
                Transformamos a forma como você descobre e se conecta com os
                <span className="about-subtitle-highlight">
                  {" "}
                  melhores comércios locais
                </span>
                , criando uma ponte digital entre comunidades e negócios.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section" id="values-header">
          <div className="container">
            <div className="mission-grid">
              <div className="mission-content">
                <div className="about-badge">
                  <Heart className="w-4 h-4" />
                  Nossa Missão
                </div>
                <h2>
                  Fortalecendo
                  <span className="about-title-highlight">
                    Comunidades Locais
                  </span>
                </h2>
                <p>
                  Acreditamos que cada cidade tem{" "}
                  <span className="story-highlight">tesouros escondidos</span> -
                  pequenos comércios, serviços especializados e profissionais
                  dedicados que merecem ser descobertos.
                </p>
                <p>
                  Nossa plataforma foi criada para ser a{" "}
                  <span className="story-highlight">ponte digital</span> entre
                  você e esses estabelecimentos locais, fortalecendo a economia
                  de Irecê e sua região.
                </p>
                <a href="/" className="cta-button-primary">
                  Explorar Comércios
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="mission-image">
                <img src="/Praca_1.webp" alt="Equipe trabalhando" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="container">
            <div className="values-header">
              <div className="about-badge">
                <Star className="w-4 h-4" />
                Nossos Valores
              </div>
              <h2>
                O que nos
                <span className="about-title-highlight">Move</span>
              </h2>
              <p>
                Nossos valores fundamentais guiam cada decisão e moldam nossa
                visão de futuro.
              </p>
            </div>

            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section">
          <div className="container">
            <div className="story-container">
              <div className="story-header">
                <div className="about-badge">
                  <Sparkles className="w-4 h-4" />
                  Nossa História
                </div>
                <h2>
                  Como Tudo
                  <span className="about-title-highlight">Começou</span>
                </h2>
              </div>

              <div className="story-content">
                <div>
                  <p>Uma ideia simples, mas poderosa...</p>

                  <p>
                    Tudo começou quando percebemos como era{" "}
                    <span className="story-highlight">
                      difícil encontrar informações confiáveis
                    </span>{" "}
                    sobre comércios e serviços locais. Muitas vezes, os melhores
                    estabelecimentos ficavam "escondidos" porque não tinham
                    visibilidade online.
                  </p>

                  <p>
                    Decidimos criar uma plataforma que fosse{" "}
                    <span className="story-highlight">
                      simples, intuitiva e focada exclusivamente
                    </span>{" "}
                    em conectar moradores locais com os negócios da sua região.
                    Nosso foco era criar uma ferramenta que realmente
                    facilitasse a vida das pessoas.
                  </p>

                  <p>
                    <span className="story-highlight">
                      {/* principal referência */}
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <Sparkles className="cta-icon" />

              <h2>
                Faça Parte da Nossa
                <span className="cta-highlight">Comunidade</span>
              </h2>

              <p>
                Descubra os melhores estabelecimentos de Irecê e apoie o
                comércio local. Juntos, construímos uma comunidade mais forte e
                conectada.
              </p>

              <div className="cta-buttons">
                <a href="/" className="cta-button-primary">
                  Explorar Comércios
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/acheirece/" target="blank">
                  <button className="cta-button-secondary">
                    Nos siga no Instagram
                    <Heart className="w-5 h-5" />
                  </button>
                </a>
              </div>
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

                <a href="/contato" className="contact-cta-button-secondary">
                  Falar Conosco
                  <Send className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
