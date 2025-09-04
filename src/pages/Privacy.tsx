import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Shield,
  Eye,
  Lock,
  Database,
  UserCheck,
  Settings,
  AlertCircle,
  Mail,
  Clock,
  FileText,
} from "lucide-react";

const Privacy: React.FC = () => {
  const lastUpdated = "01 de setembro de 2025";

  return (
    <div className="legal-page">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="legal-hero">
          <div className="container">
            <div className="text-center">
              <div className="legal-badge">
                <Shield className="w-4 h-4" />
                LGPD Compliance
              </div>

              <h1 className="legal-title">
                Política de
                <span className="legal-title-highlight">Privacidade</span>
              </h1>

              <p className="legal-subtitle">
                Transparência total sobre como coletamos, usamos e protegemos
                seus dados pessoais.
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
              {/* Introduction */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <FileText className="legal-section-icon" />
                  <h2>1. Introdução</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    A Ache Irecê está comprometida com a proteção da privacidade
                    e dos dados pessoais de nossos usuários. Esta Política de
                    Privacidade descreve como coletamos, usamos, armazenamos e
                    protegemos suas informações pessoais.
                  </p>
                  <p>
                    Esta política está em conformidade com a Lei Geral de
                    Proteção de Dados (LGPD - Lei 13.709/2018) e demais
                    regulamentações aplicáveis sobre proteção de dados no
                    Brasil.
                  </p>
                </div>
              </div>

              {/* Data Controller */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <UserCheck className="legal-section-icon" />
                  <h2>2. Controlador de Dados</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    A Comércios Locais atua como controladora dos dados pessoais
                    coletados através de nossa plataforma.
                  </p>
                  <div className="legal-contact-info">
                    <p>
                      <strong>Razão Social:</strong> Yan Almeida de Carvalho -
                      Pessoa Física
                    </p>
                    <p>
                      <strong>CNPJ:</strong> Não se aplica (pessoa física)
                    </p>
                    <p>
                      <strong>Endereço:</strong> Irecê, BA - Brasil
                    </p>
                    <p>
                      <strong>Email do DPO:</strong> acheirece@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Collection */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <Database className="legal-section-icon" />
                  <h2>3. Dados Coletados</h2>
                </div>
                <div className="legal-section-content">
                  <h3>3.1 Dados fornecidos voluntariamente:</h3>
                  <ul className="legal-list">
                    <li>
                      Informações de contato fornecidas em formulários (email,
                      telefone)
                    </li>
                    <li>Informações de estabelecimentos comerciais</li>
                    <li>Endereços e dados de localização</li>
                    <li>
                      Mensagens enviadas através de formulários de contato
                    </li>
                  </ul>

                  <h3>3.2 Dados coletados automaticamente:</h3>
                  <ul className="legal-list">
                    <li>Endereço IP e informações de dispositivo</li>
                    <li>Dados de navegação e uso da plataforma</li>
                    <li>Cookies e tecnologias similares</li>
                    <li>Logs de acesso e interações</li>
                  </ul>
                </div>
              </div>

              {/* Legal Basis */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <Lock className="legal-section-icon" />
                  <h2>4. Base Legal para o Tratamento</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    Tratamos seus dados pessoais com base nas seguintes
                    hipóteses legais:
                  </p>
                  <ul className="legal-list">
                    <li>
                      <strong>Consentimento:</strong> Para coleta de dados
                      através de formulários
                    </li>
                    <li>
                      <strong>Legítimo interesse:</strong> Para prestação dos
                      serviços da plataforma
                    </li>
                    <li>
                      <strong>Legítimo interesse:</strong> Para melhorias da
                      plataforma e segurança
                    </li>
                    <li>
                      <strong>Cumprimento de obrigação legal:</strong> Para
                      atendimento a requisições legais
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Usage */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <Eye className="legal-section-icon" />
                  <h2>5. Como Utilizamos os Dados</h2>
                </div>
                <div className="legal-section-content">
                  <p>Utilizamos seus dados pessoais para:</p>
                  <ul className="legal-list">
                    <li>Fornecer e operar nossos serviços de diretório</li>
                    <li>Processar cadastros de estabelecimentos</li>
                    <li>Responder a consultas e solicitações de suporte</li>
                    <li>Melhorar a experiência do usuário na plataforma</li>
                    <li>Enviar comunicações importantes sobre o serviço</li>
                    <li>Cumprir obrigações legais e regulamentares</li>
                    <li>
                      Prevenir fraudes e garantir a segurança da plataforma
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Sharing */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <Settings className="legal-section-icon" />
                  <h2>6. Compartilhamento de Dados</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    Não vendemos, alugamos ou comercializamos seus dados
                    pessoais. Podemos compartilhar informações apenas nas
                    seguintes situações:
                  </p>
                  <ul className="legal-list">
                    <li>
                      Com prestadores de serviços terceirizados (sob contrato de
                      confidencialidade)
                    </li>
                    <li>
                      Para cumprimento de obrigações legais ou ordens judiciais
                    </li>
                    <li>
                      Para proteção de nossos direitos, propriedade ou segurança
                    </li>
                    <li>
                      Em caso de fusão, aquisição ou venda de ativos (com
                      notificação prévia)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <Shield className="legal-section-icon" />
                  <h2>7. Segurança dos Dados</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    Implementamos medidas técnicas e organizacionais apropriadas
                    para proteger seus dados pessoais contra acesso não
                    autorizado, alteração, divulgação ou destruição:
                  </p>
                  <ul className="legal-list">
                    <li>Criptografia de dados em trânsito e em repouso</li>
                    <li>Controles de acesso rigorosos</li>
                    <li>Monitoramento contínuo de segurança</li>
                    <li>
                      Treinamento regular da equipe sobre proteção de dados
                    </li>
                    <li>Auditorias periódicas de segurança</li>
                  </ul>
                </div>
              </div>

              {/* Data Retention */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <Clock className="legal-section-icon" />
                  <h2>8. Retenção de Dados</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    Mantemos seus dados pessoais apenas pelo tempo necessário
                    para as finalidades para as quais foram coletados:
                  </p>
                  <ul className="legal-list">
                    <li>
                      <strong>Dados de usuários:</strong> Não mantemos dados de
                      usuários
                    </li>
                    <li>
                      <strong>Dados de estabelecimentos:</strong> Enquanto o
                      cadastro estiver ativo
                    </li>
                    <li>
                      <strong>Logs de acesso:</strong> Por até 12 meses
                    </li>
                    <li>
                      <strong>Dados para cumprimento legal:</strong> Conforme
                      exigido por lei
                    </li>
                  </ul>
                </div>
              </div>

              {/* User Rights */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <UserCheck className="legal-section-icon" />
                  <h2>9. Seus Direitos (LGPD)</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    Conforme a LGPD, você tem os seguintes direitos sobre seus
                    dados pessoais:
                  </p>
                  <ul className="legal-list">
                    <li>
                      <strong>Confirmação e acesso:</strong> Saber se tratamos
                      seus dados e acessá-los (não mantemos dados sensíveis)
                    </li>
                    <li>
                      <strong>Correção:</strong> Corrigir dados incompletos,
                      inexatos ou desatualizados
                    </li>
                    <li>
                      <strong>Anonimização ou eliminação:</strong> Quando
                      desnecessários ou excessivos
                    </li>
                    <li>
                      <strong>Portabilidade:</strong> Receber seus dados em
                      formato estruturado
                    </li>
                    <li>
                      <strong>Informação sobre compartilhamento:</strong> Saber
                      com quem compartilhamos
                    </li>
                    <li>
                      <strong>Revogação do consentimento:</strong> Retirar
                      consentimento a qualquer momento
                    </li>
                    <li>
                      <strong>Oposição:</strong> Opor-se ao tratamento em certas
                      circunstâncias
                    </li>
                  </ul>
                </div>
              </div>

              {/* Cookies */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <Settings className="legal-section-icon" />
                  <h2>10. Cookies e Tecnologias Similares</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    Utilizamos cookies e tecnologias similares para melhorar sua
                    experiência. Para informações detalhadas, consulte nossa
                    Política de Cookies.
                  </p>
                  <p>
                    Você pode gerenciar suas preferências de cookies através das
                    configurações do seu navegador.
                  </p>
                </div>
              </div>

              {/* International Transfers */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <AlertCircle className="legal-section-icon" />
                  <h2>11. Transferência Internacional</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    Alguns de nossos prestadores de serviços podem estar
                    localizados fora do Brasil. Nestes casos, garantimos que:
                  </p>
                  <ul className="legal-list">
                    <li>A transferência atende aos requisitos da LGPD</li>
                    <li>
                      Existem salvaguardas adequadas para proteção dos dados
                    </li>
                    <li>
                      Os prestadores atendem a padrões equivalentes de proteção
                    </li>
                  </ul>
                </div>
              </div>

              {/* Changes */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <FileText className="legal-section-icon" />
                  <h2>12. Alterações nesta Política</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    Podemos atualizar esta Política de Privacidade
                    periodicamente. Alterações significativas serão comunicadas
                    através de:
                  </p>
                  <ul className="legal-list">
                    <li>Notificação na plataforma</li>
                    <li>Email para usuários cadastrados</li>
                    <li>Aviso em nosso site</li>
                  </ul>
                </div>
              </div>

              {/* Contact */}
              <div className="legal-section">
                <div className="legal-section-header">
                  <Mail className="legal-section-icon" />
                  <h2>13. Contato e Exercício de Direitos</h2>
                </div>
                <div className="legal-section-content">
                  <p>
                    Para exercer seus direitos ou esclarecer dúvidas sobre esta
                    política:
                  </p>
                  <div className="legal-contact-info">
                    <p>
                      <strong>Email geral:</strong> acheirece@gmail.com
                    </p>
                    <p>
                      <strong>Endereço:</strong> Irecê, BA - Brasil
                    </p>
                  </div>
                  <p>
                    <strong>Prazo de resposta:</strong> Até 15 dias úteis
                    conforme a LGPD.
                  </p>
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

export default Privacy;
