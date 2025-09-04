import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Building2,
  CheckCircle,
  Users,
  Star,
  TrendingUp,
  Shield,
  Clock,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Target,
  Heart,
  Zap,
  HeartHandshake,
} from "lucide-react";

const Signup: React.FC = () => {
  const benefits = [
    {
      icon: Users,
      title: "Mais Clientes",
      description:
        "Alcance milhares de pessoas que buscam seus serviços diariamente",
    },
    {
      icon: Star,
      title: "É Grátis",
      description:
        "Cadastre seu negócio sem custo e comece a atrair clientes hoje mesmo",
    },
    {
      icon: TrendingUp,
      title: "Crescimento",
      description:
        "Aumente suas vendas e expanda sua base de clientes na região",
    },
    {
      icon: Shield,
      title: "Confiança",
      description:
        "Faça parte de uma plataforma confiável e reconhecida pelos usuários",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Preencha o Formulário",
      description:
        "Complete todas as informações sobre seu negócio no formulário de cadastro",
    },
    {
      number: "02",
      title: "Aguarde a Avaliação",
      description: "Nossa equipe analisará seu negócio em até 3 dias úteis",
    },
    {
      number: "03",
      title: "Receba a Confirmação",
      description: "Você receberá um email com o resultado da avaliação",
    },
    {
      number: "04",
      title: "Comece a Receber Clientes",
      description: "Seu negócio ficará visível para milhares de usuários",
    },
  ];

  const requirements = [
    "Negócio estabelecido e em funcionamento",
    "Endereço físico verificável",
    "Informações completas e verdadeiras",
    "Compromisso com a qualidade no atendimento",
  ];

  const stats = [
    { number: "70+", label: "Negócios Cadastrados", icon: Building2 },
    { number: "10K+", label: "Buscas Mensais", icon: Target },
    { number: "24h", label: "Tempo Médio de Resposta", icon: Zap },
  ];

  return (
    <div className="signup-page">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="signup-hero">
          <div className="container">
            <div className="text-center">
              <div className="signup-badge">
                <Building2 className="w-4 h-4" />
                Para Empresários
              </div>

              <h1 className="signup-title">
                Cadastre Seu Negócio e
                <span className="signup-title-highlight">
                  Alcance Mais Clientes
                </span>
              </h1>

              <p className="signup-subtitle">
                Faça parte da maior plataforma de Irecê e
                <span className="signup-subtitle-highlight">
                  {" "}
                  transforme sua visibilidade
                </span>{" "}
                na região.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="signup-stats-section">
          <div className="container">
            <div className="signup-stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="signup-stat-card">
                  <div className="signup-stat-icon">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="signup-stat-number">{stat.number}</div>
                  <div className="signup-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="signup-benefits-section">
          <div className="extra-container">
            <div className="signup-benefits-header">
              <div className="signup-badge">
                <Sparkles className="w-4 h-4" />
                Vantagens
              </div>
              <h2 className="signup-benefits-title">
                Por Que Cadastrar Seu
                <span className="signup-title-highlight">Negócio Conosco?</span>
              </h2>
              <p className="signup-benefits-description">
                Descubra como nossa plataforma pode impulsionar seu negócio
              </p>
            </div>

            <div className="signup-benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="signup-benefit-card">
                  <div className="signup-benefit-icon">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="signup-benefit-title">{benefit.title}</h3>
                  <p className="signup-benefit-description">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="signup-steps-section">
          <div className="container">
            <div className="signup-steps-header">
              <div className="signup-badge">
                <Clock className="w-4 h-4" />
                Como Funciona
              </div>
              <h2 className="signup-steps-title">
                Processo Simples em
                <span className="signup-title-highlight">4 Passos</span>
              </h2>
            </div>

            <div className="signup-steps-grid">
              {steps.map((step, index) => (
                <div key={index} className="signup-step-card">
                  <div className="signup-step-number">{step.number}</div>
                  <h3 className="signup-step-title">{step.title}</h3>
                  <p className="signup-step-description">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="signup-step-arrow">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="signup-requirements-section">
          <div className="container">
            <div className="signup-requirements-content">
              <div className="signup-requirements-text">
                <div className="signup-badge">
                  <Shield className="w-4 h-4" />
                  Critérios de Avaliação
                </div>
                <h2 className="signup-requirements-title">
                  Requisitos Para
                  <span className="signup-title-highlight">Aprovação</span>
                </h2>
                <p className="signup-requirements-description">
                  Para garantir a qualidade da nossa plataforma, avaliamos cada
                  negócio com base nos seguintes critérios:
                </p>

                <div className="signup-requirements-list">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="signup-requirement-item">
                      <CheckCircle className="signup-requirement-icon" />
                      <span>{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mission-image">
                <img src="/cadastro.webp" alt="Equipe avaliando negócios" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="signup-cta-section">
          <div className="container">
            <div className="signup-cta-content">
              <Sparkles className="signup-cta-icon" />

              <h2 className="signup-cta-title">
                Pronto Para Começar?
                <span className="signup-cta-highlight">Cadastre-se Agora!</span>
              </h2>

              <p className="signup-cta-description">
                Preencha nosso formulário e nossa equipe entrará em contato em
                até 24 horas. O processo é rápido, simples e totalmente
                gratuito.
              </p>

              <div className="signup-cta-buttons">
                <a
                  href="https://forms.gle/ao8UXmi1hWxbsGqP6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="signup-cta-button-primary"
                >
                  Cadastrar Meu Negócio
                  <ExternalLink className="w-5 h-5" />
                </a>

                <a href="/contato" className="signup-cta-button-secondary">
                  Falar com Suporte
                  <Heart className="w-5 h-5" />
                </a>
              </div>

              <p className="signup-cta-note">
                * Cadastro gratuito • Avaliação em até 3 dias úteis • Suporte
                completo
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="contact-cta-section">
          <div className="container">
            <div className="contact-cta-content">
              <div className="contact-cta-header">
                <div className="contact-badge">
                  <HeartHandshake className="w-4 h-4" />
                  Comunidade
                </div>

                <h2 className="contact-cta-title">
                  Faça parte da nossa
                  <span className="contact-title-highlight">Comunidade</span>
                </h2>

                <p className="contact-cta-description">
                  Descubra os melhores estabelecimentos de Irecê e apoie o
                  comércio local. Juntos, construímos uma
                  <span className="contact-subtitle-highlight">
                    {" "}
                    comunidade mais forte e conectada
                  </span>{" "}
                  .
                </p>
              </div>

              <div className="contact-cta-buttons">
                <a href="/" className="contact-cta-button-primary">
                  Explorar comércios
                  <ArrowRight className="w-5 h-5" />
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

export default Signup;
