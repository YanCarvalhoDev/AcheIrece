import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Cookie,
  Settings,
  BarChart3,
  Shield,
  Eye,
  Clock,
  AlertCircle,
  CheckCircle,
  Mail,
} from "lucide-react";

const Cookies: React.FC = () => {
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
                <Cookie className="w-4 h-4" />
                Transparência Digital
              </div>

              <h1 className="legal-title">
                Política de
                <span className="legal-title-highlight">Cookies</span>
              </h1>

              <p className="legal-subtitle">
                Entenda como utilizamos cookies e tecnologias similares para
                melhorar sua experiência.
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
              {/* What are Cookies */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <Cookie className="legal-section-icon" />
                  <h2>1. O que são Cookies?</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    Cookies são pequenos arquivos de texto armazenados no seu
                    dispositivo (computador, tablet ou smartphone) quando você
                    visita um site. Eles permitem que o site "lembre" de suas
                    ações e preferências durante um período de tempo.
                  </p>
                  <p>
                    Os cookies não contêm vírus ou malware e não podem acessar
                    informações pessoais armazenadas no seu dispositivo.
                  </p>
                </div>
              </div>

              {/* Why We Use Cookies */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <Eye className="legal-section-icon" />
                  <h2>2. Por que Utilizamos Cookies?</h2>
                </div>
                <div className="legal-section-content">
                  <p>Utilizamos cookies para:</p>
                  <ul className="legal-list">
                    <li>Garantir o funcionamento adequado da plataforma</li>
                    <li>Lembrar suas preferências e configurações</li>
                    <li>Melhorar a experiência de navegação</li>
                    <li>Analisar como os usuários interagem com nosso site</li>
                    <li>Personalizar conteúdo e funcionalidades</li>
                    <li>Garantir a segurança da plataforma</li>
                  </ul>
                </div>
              </div>

              {/* Types of Cookies */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <Settings className="legal-section-icon" />
                  <h2>3. Tipos de Cookies que Utilizamos</h2>
                </div>
                <div className="legal-section-content">
                  <div className="cookie-type-card">
                    <div className="cookie-type-header">
                      <CheckCircle className="cookie-type-icon essential" />
                      <h3>Cookies Essenciais</h3>
                      <span className="cookie-badge essential">
                        Sempre Ativos
                      </span>
                    </div>
                    <p>
                      Necessários para o funcionamento básico da plataforma. Não
                      podem ser desabilitados.
                    </p>
                    <ul className="cookie-examples">
                      <li>Manutenção da sessão do usuário</li>
                      <li>Configurações de segurança</li>
                      <li>Preferências de idioma</li>
                    </ul>
                  </div>

                  <div className="cookie-type-card">
                    <div className="cookie-type-header">
                      <BarChart3 className="cookie-type-icon analytics" />
                      <h3>Cookies de Análise</h3>
                      <span className="cookie-badge analytics">Opcional</span>
                    </div>
                    <p>
                      Coletam informações sobre como você usa nossa plataforma
                      para melhorarmos nossos serviços.
                    </p>
                    <ul className="cookie-examples">
                      <li>Google Analytics</li>
                      <li>Estatísticas de uso</li>
                      <li>Análise de performance</li>
                    </ul>
                  </div>

                  <div className="cookie-type-card">
                    <div className="cookie-type-header">
                      <Settings className="cookie-type-icon functional" />
                      <h3>Cookies Funcionais</h3>
                      <span className="cookie-badge functional">Opcional</span>
                    </div>
                    <p>
                      Permitem funcionalidades aprimoradas e personalização da
                      experiência.
                    </p>
                    <ul className="cookie-examples">
                      <li>Lembrar preferências de busca</li>
                      <li>Configurações de exibição</li>
                      <li>Histórico de navegação</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cookie Details */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <AlertCircle className="legal-section-icon" />
                  <h2>4. Detalhes dos Cookies Utilizados</h2>
                </div>
                <div className="legal-section-content">
                  <div className="cookie-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Nome</th>
                          <th>Tipo</th>
                          <th>Duração</th>
                          <th>Finalidade</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>_session</td>
                          <td>Essencial</td>
                          <td>Sessão</td>
                          <td>Funcionamento básico da plataforma</td>
                        </tr>
                        <tr>
                          <td>preferences</td>
                          <td>Funcional</td>
                          <td>30 dias</td>
                          <td>Lembrar preferências de navegação</td>
                        </tr>
                        <tr>
                          <td>_ga</td>
                          <td>Análise</td>
                          <td>2 anos</td>
                          <td>Google Analytics - análise de uso</td>
                        </tr>
                        <tr>
                          <td>_gid</td>
                          <td>Análise</td>
                          <td>24 horas</td>
                          <td>Google Analytics - sessões diárias</td>
                        </tr>
                        <tr>
                          <td>cookie_consent</td>
                          <td>Essencial</td>
                          <td>1 ano</td>
                          <td>Lembrar preferências de cookies</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Third Party Cookies */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <Shield className="legal-section-icon" />
                  <h2>5. Cookies de Terceiros</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    Alguns cookies são definidos por serviços de terceiros que
                    aparecem em nossas páginas:
                  </p>

                  <div className="third-party-service">
                    <h3>Google Analytics</h3>
                    <p>
                      Utilizamos o Google Analytics para entender como os
                      usuários interagem com nossa plataforma.
                    </p>
                    <p>
                      <strong>Política de Privacidade:</strong>
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://policies.google.com/privacy
                      </a>
                    </p>
                  </div>

                  <div className="third-party-service">
                    <h3>Google Maps</h3>
                    <p>
                      Utilizamos o Google Maps para exibir localizações de
                      estabelecimentos.
                    </p>
                    <p>
                      <strong>Política de Privacidade:</strong>
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://policies.google.com/privacy
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Managing Cookies */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <Settings className="legal-section-icon" />
                  <h2>6. Como Gerenciar Cookies</h2>
                </div>
                <div className="legal-section-content">
                  <h3>6.1 Através do seu navegador:</h3>
                  <p>
                    Você pode controlar e/ou excluir cookies conforme desejar.
                    Você pode excluir todos os cookies que já estão no seu
                    computador e configurar a maioria dos navegadores para
                    impedir que sejam colocados.
                  </p>

                  <div className="browser-instructions">
                    <h4>Instruções por navegador:</h4>
                    <ul className="legal-list">
                      <li>
                        <strong>Chrome:</strong>
                        <a
                          href="https://support.google.com/chrome/answer/95647"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Gerenciar cookies no Chrome
                        </a>
                      </li>
                      <li>
                        <strong>Firefox:</strong>
                        <a
                          href="https://support.mozilla.org/pt-BR/kb/cookies"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Gerenciar cookies no Firefox
                        </a>
                      </li>
                      <li>
                        <strong>Safari:</strong>
                        <a
                          href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Gerenciar cookies no Safari
                        </a>
                      </li>
                      <li>
                        <strong>Edge:</strong>
                        <a
                          href="https://support.microsoft.com/pt-br/help/4027947"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Gerenciar cookies no Edge
                        </a>
                      </li>
                    </ul>
                  </div>

                  <h3>6.2 Através de nossas configurações:</h3>
                  <p>
                    Você pode gerenciar suas preferências de cookies através do
                    banner de cookies que aparece na primeira visita ao site ou
                    através das configurações de privacidade.
                  </p>
                </div>
              </div>

              {/* Impact of Disabling */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <AlertCircle className="legal-section-icon" />
                  <h2>7. Impacto da Desabilitação de Cookies</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    Se você desabilitar cookies, algumas funcionalidades da
                    plataforma podem ser afetadas:
                  </p>
                  <ul className="legal-list">
                    <li>
                      Perda de preferências e configurações personalizadas
                    </li>
                    <li>Necessidade de fazer login repetidamente</li>
                    <li>
                      Funcionalidades de busca podem não funcionar adequadamente
                    </li>
                    <li>Experiência de navegação menos personalizada</li>
                  </ul>
                  <p>
                    <strong>Importante:</strong> Cookies essenciais não podem
                    ser desabilitados, pois são necessários para o funcionamento
                    básico da plataforma.
                  </p>
                </div>
              </div>

              {/* Updates */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <Clock className="legal-section-icon" />
                  <h2>8. Atualizações desta Política</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    Esta Política de Cookies pode ser atualizada periodicamente
                    para refletir mudanças em nossas práticas ou por outros
                    motivos operacionais, legais ou regulamentares.
                  </p>
                  <p>
                    Recomendamos que você revise esta política regularmente para
                    se manter informado sobre como utilizamos cookies.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <Mail className="legal-section-icon" />
                  <h2>9. Contato</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    Se você tiver dúvidas sobre nossa Política de Cookies, entre
                    em contato conosco:
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

export default Cookies;
