import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Shield,
  FileText,
  AlertTriangle,
  CheckCircle,
  Scale,
  Users,
  Clock,
  Mail,
} from "lucide-react";

const Terms: React.FC = () => {
  const lastUpdated = "1 de setembro de 2025";

  return (
    <div className="legal-page">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="legal-hero">
          <div className="container">
            <div className="text-center">
              <div className="legal-badge">
                <Scale className="w-4 h-4" />
                Termos Legais
              </div>

              <h1 className="legal-title">
                Termos de
                <span className="legal-title-highlight">Uso</span>
              </h1>

              <p className="legal-subtitle">
                Leia atentamente nossos termos e condições de uso da plataforma.
                <span className="legal-subtitle-highlight">
                  {" "}
                  Última atualização: {lastUpdated}
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="legal-content-section">
          <div className="container">
            <div className="legal-content">
              {/* Acceptance */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <CheckCircle className="legal-section-icon" />
                  <h2>1. Aceitação dos Termos</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    Ao acessar e utilizar a plataforma Ache Irecê, você concorda
                    em cumprir e estar vinculado aos presentes Termos de Uso. Se
                    você não concordar com qualquer parte destes termos, não
                    deve utilizar nossos serviços.
                  </p>
                  <p>
                    Estes termos constituem um acordo legal entre você e nossa
                    plataforma de diretório de comércios locais.
                  </p>
                </div>
              </div>

              {/* Services */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <FileText className="legal-section-icon" />
                  <h2>2. Descrição dos Serviços</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    A plataforma Ache Irecê oferece um serviço de diretório
                    online que permite:
                  </p>
                  <ul className="legal-list">
                    <li>Busca e descoberta de comércios e serviços locais</li>
                    <li>Visualização de informações de estabelecimentos</li>
                    <li>Acesso a dados de contato e localização</li>
                    <li>
                      Solicitação de cadastro de estabelecimentos comerciais
                    </li>
                  </ul>
                  <p>
                    Reservamo-nos o direito de modificar, suspender ou
                    descontinuar qualquer aspecto do serviço a qualquer momento,
                    com ou sem aviso prévio.
                  </p>
                </div>
              </div>

              {/* User Responsibilities */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <Users className="legal-section-icon" />
                  <h2>3. Responsabilidades do Usuário</h2>
                </div>
                <div className="legal-section-content">
                  <p>Ao utilizar nossa plataforma, você se compromete a:</p>
                  <ul className="legal-list">
                    <li>
                      Fornecer informações verdadeiras, precisas e atualizadas
                    </li>
                    <li>
                      Não utilizar o serviço para fins ilegais ou não
                      autorizados
                    </li>
                    <li>Não interferir no funcionamento da plataforma</li>
                    <li>Respeitar os direitos de propriedade intelectual</li>
                    <li>Não enviar spam, vírus ou códigos maliciosos</li>
                    <li>
                      Utilizar as informações disponíveis apenas para fins
                      legítimos
                    </li>
                  </ul>
                </div>
              </div>

              {/* Business Registration */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <Shield className="legal-section-icon" />
                  <h2>4. Cadastro de Estabelecimentos</h2>
                </div>
                <div className="legal-section-content">
                  <p>Para cadastrar um estabelecimento em nossa plataforma:</p>
                  <ul className="legal-list">
                    <li>
                      O solicitante deve ser o proprietário ou representante
                      legal autorizado
                    </li>
                    <li>
                      Todas as informações fornecidas devem ser verdadeiras e
                      verificáveis
                    </li>
                    <li>
                      O estabelecimento deve estar em funcionamento regular
                    </li>
                    <li>
                      Reservamo-nos o direito de aprovar ou rejeitar cadastros
                    </li>
                  </ul>
                  <p>
                    O cadastro não garante posicionamento específico nos
                    resultados de busca.
                  </p>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <FileText className="legal-section-icon" />
                  <h2>5. Propriedade Intelectual</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    Todo o conteúdo da plataforma, incluindo mas não limitado a
                    textos, gráficos, logotipos, ícones, imagens, clipes de
                    áudio, downloads digitais e software, é de propriedade da
                    Comércios Locais ou de seus fornecedores de conteúdo.
                  </p>
                  <p>
                    É proibida a reprodução, distribuição, modificação ou uso
                    comercial do conteúdo sem autorização expressa por escrito.
                  </p>
                </div>
              </div>

              {/* Disclaimers */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <AlertTriangle className="legal-section-icon" />
                  <h2>6. Isenção de Responsabilidade</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    A plataforma Ache Irecê atua apenas como intermediário,
                    fornecendo informações sobre estabelecimentos comerciais.
                    Não somos responsáveis por:
                  </p>
                  <ul className="legal-list">
                    <li>
                      Qualidade dos produtos ou serviços oferecidos pelos
                      estabelecimentos
                    </li>
                    <li>
                      Transações realizadas entre usuários e estabelecimentos
                    </li>
                    <li>
                      Informações incorretas ou desatualizadas fornecidas pelos
                      estabelecimentos
                    </li>
                    <li>Disponibilidade contínua da plataforma</li>
                    <li>Perdas ou danos decorrentes do uso da plataforma</li>
                  </ul>
                </div>
              </div>

              {/* Privacy */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <Shield className="legal-section-icon" />
                  <h2>7. Privacidade e Proteção de Dados</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    O tratamento de dados pessoais é regido por nossa Política
                    de Privacidade, em conformidade com a Lei Geral de Proteção
                    de Dados (LGPD - Lei 13.709/2018).
                  </p>
                  <p>
                    Ao utilizar nossos serviços, você consente com a coleta e
                    uso de informações conforme descrito em nossa Política de
                    Privacidade.
                  </p>
                </div>
              </div>

              {/* Modifications */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <Clock className="legal-section-icon" />
                  <h2>8. Modificações dos Termos</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    Reservamo-nos o direito de modificar estes Termos de Uso a
                    qualquer momento. As alterações entrarão em vigor
                    imediatamente após sua publicação na plataforma.
                  </p>
                  <p>
                    É responsabilidade do usuário verificar periodicamente os
                    termos atualizados. O uso continuado da plataforma após as
                    modificações constitui aceitação dos novos termos.
                  </p>
                </div>
              </div>

              {/* Governing Law */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <Scale className="legal-section-icon" />
                  <h2>9. Lei Aplicável e Jurisdição</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    Estes Termos de Uso são regidos pelas leis da República
                    Federativa do Brasil.
                  </p>
                  <p>
                    Qualquer disputa decorrente destes termos será submetida à
                    jurisdição exclusiva dos tribunais brasileiros,
                    especificamente do foro da comarca de São Paulo/SP.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <Mail className="legal-section-icon" />
                  <h2>10. Contato</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    Para dúvidas sobre estes Termos de Uso, entre em contato
                    conosco:
                  </p>
                  <div className="legal-contact-info">
                    <p>
                      <strong>Email:</strong> acheirece@gmail.com
                    </p>
                    <p>
                      <strong>Endereço:</strong> Irecê, BA - Brasil
                    </p>
                  </div>
                </div>
              </div>

              {/* Last Updated */}
              <div className="legal-footer">
                <p className="legal-last-updated">
                  <Clock className="w-4 h-4" />
                  Última atualização: {lastUpdated}
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

export default Terms;
