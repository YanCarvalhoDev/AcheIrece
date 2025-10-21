import React, { useState, useEffect, useMemo } from "react";
import BusinessCard from "./BusinessCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Business {
  id: string;
  name: string;
  category: string;
  description: string;
  address: string;
  coordinates?: string;
  imageUrl: string;
  phone?: string;
  email?: string;
  website?: string;
  hours?: string;
  services?: string[];
}

interface BusinessListProps {
  businesses: Business[];
  selectedCategory: string;
  searchTerm: string;
  onViewMore: (business: Business) => void;
  loading?: boolean;
}

const ITEMS_PER_PAGE = 12;

const BusinessList: React.FC<BusinessListProps> = ({
  businesses,
  selectedCategory,
  searchTerm,
  onViewMore,
  loading = false,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Lista de stop words para ignorar na busca
  const stopWords = [
    "de",
    "a",
    "o",
    "as",
    "os",
    "em",
    "para",
    "com",
    "e",
    "da",
    "do",
  ];

  // Memoizar a filtragem para evitar cálculos desnecessários
  const filteredBusinesses = useMemo(() => {
    let result = businesses;

    if (searchTerm) {
      const searchWords = searchTerm
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 2 && !stopWords.includes(word));

      if (searchWords.length === 0) {
        return businesses;
      }

      return businesses.filter((business) => {
        const searchableText = `
          ${business.name.toLowerCase()}
          ${business.category.toLowerCase()}
          ${business.services ? business.services.join(" ").toLowerCase() : ""}
        `.replace(/\s+/g, " ");

        const matchingWords = searchWords.filter((word) =>
          searchableText.includes(word)
        );

        const minMatches = Math.max(1, Math.floor(searchWords.length * 0.7));
        const exactMatch = searchableText.includes(searchTerm.toLowerCase());

        return exactMatch || matchingWords.length >= minMatches;
      });
    } else if (selectedCategory && selectedCategory !== "latest") {
      return businesses.filter((business) => {
        const businessCategory = business.category.toLowerCase();
        const filterCategory = selectedCategory.toLowerCase();
        const categoryMappings: { [key: string]: string[] } = {
          sapatos: [
            "sapatos",
            "sapato",
            "calçados",
            "calcados",
            "calçado",
            "calcado",
            "sandálias",
            "sandalias",
            "sandália",
            "sandalia",
            "chinelos",
            "chinelo",
            "sapatilhas",
            "sapatilha",
            "tênis",
            "tenis",
            "ténis",
            "bota",
            "botas",
            "botina",
            "botinas",
            "sneaker",
            "sneakers",
            "sapatenis",
            "sapatênis",
            "calçado esportivo",
            "calcado esportivo",
          ],
          roupas: [
            "roupas",
            "roupa",
            "moda",
            "vestuário",
            "vestuario",
            "vestimenta",
            "vestimentas",
            "boutique",
            "clothing",
            "camisa",
            "camisas",
            "camiseta",
            "camisetas",
            "blusa",
            "blusas",
            "calça",
            "calcas",
            "calca",
            "short",
            "shorts",
            "saia",
            "saias",
            "vestido",
            "vestidos",
            "roupa feminina",
            "roupa masculina",
            "moda feminina",
            "moda masculina",
          ],
          advogado: [
            "advogado",
            "advogada",
            "advogados",
            "advogadas",
            "advocacia",
            "jurídico",
            "juridico",
            "direito",
            "lawyer",
            "lawyers",
            "causa",
            "causas",
            "defensor",
            "defensora",
            "consultoria jurídica",
            "consultoria juridica",
            "escritório de advocacia",
            "escritorio de advocacia",
            "assessoria jurídica",
            "assessoria juridica",
          ],
          dentista: [
            "dentista",
            "dentistas",
            "odontologia",
            "odontológico",
            "odontologico",
            "odontológica",
            "odontologica",
            "dental",
            "dentário",
            "dentario",
            "aparelho",
            "aparelhos",
            "clareamento",
            "sorriso",
            "ortodontia",
            "implante",
            "implantes",
            "consultório odontológico",
            "consultorio odontologico",
          ],
          alimentacao: [
            "alimentação",
            "alimentacao",
            "restaurante",
            "restaurantes",
            "comida",
            "comidas",
            "food",
            "pizzaria",
            "pizzarias",
            "pizza",
            "pizzas",
            "lanchonete",
            "lanchonetes",
            "lanche",
            "lanches",
            "bar",
            "bares",
            "marmita",
            "marmitas",
            "quentinha",
            "quentinhas",
            "self service",
            "self-service",
            "salgado",
            "salgados",
            "padaria",
            "padarias",
            "pão",
            "pao",
            "açaí",
            "acai",
            "açai",
            "cozinha",
            "culinária",
            "culinaria",
            "delivery",
            "entrega de comida",
          ],
          mercado: [
            "mercado",
            "mercados",
            "supermercado",
            "supermercados",
            "mercadinho",
            "mercadinhos",
            "grocery",
            "compras",
            "hortifruti",
            "horti fruti",
            "horti-fruti",
            "feira",
            "feiras",
            "atacado",
            "atacarejo",
            "mercado de bairro",
            "supermercado local",
          ],
          eletronicos: [
            "eletrônicos",
            "eletronicos",
            "eletrônico",
            "eletronico",
            "informática",
            "informatica",
            "computadores",
            "computador",
            "tech",
            "tecnologia",
            "electronics",
            "celular",
            "celulares",
            "telefone",
            "telefones",
            "tablet",
            "tablets",
            "notebook",
            "notebooks",
            "tv",
            "televisão",
            "televisao",
            "televisões",
            "televisoes",
            "som",
            "áudio",
            "audio",
            "eletroeletrônicos",
            "eletroeletronicos",
            "smartphone",
            "smartphones",
          ],
          beleza: [
            "beleza",
            "estética",
            "estetica",
            "beauty",
            "salão",
            "salao",
            "salões",
            "saloes",
            "cabeleireiro",
            "cabeleireiros",
            "cabelereiro",
            "cabelereiros",
            "manicure",
            "manicures",
            "pedicure",
            "pedicures",
            "unha",
            "unhas",
            "maquiagem",
            "maquigem",
            "makeup",
            "sobrancelha",
            "sobrancelhas",
            "barbearia",
            "barbearias",
            "depilação",
            "depilacao",
            "esteticista",
            "salão de beleza",
            "salao de beleza",
          ],
          saude: [
            "saúde",
            "saude",
            "clínica",
            "clinica",
            "clínicas",
            "clinicas",
            "médico",
            "medico",
            "médicos",
            "medicos",
            "health",
            "medicina",
            "posto",
            "postos",
            "posto de saúde",
            "posto de saude",
            "hospital",
            "hospitais",
            "farmácia",
            "farmacia",
            "farmácias",
            "farmacias",
            "remédio",
            "remedio",
            "remédios",
            "remedios",
            "vacina",
            "vacinas",
            "vacinação",
            "vacinacao",
            "consultório",
            "consultorio",
            "saúde pública",
            "saude publica",
          ],
          educacao: [
            "educação",
            "educacao",
            "escola",
            "escolas",
            "ensino",
            "education",
            "colégio",
            "colegio",
            "colégios",
            "colegios",
            "faculdade",
            "faculdades",
            "curso",
            "cursos",
            "aula",
            "aulas",
            "professor",
            "professores",
            "professora",
            "professoras",
            "ensino médio",
            "ensino medio",
            "universidade",
            "universidades",
            "estudo",
            "estudos",
            "educação infantil",
            "educacao infantil",
          ],
          automotivo: [
            "automotivo",
            "automóvel",
            "automovel",
            "oficina",
            "oficinas",
            "mecânica",
            "mecanica",
            "auto",
            "automotive",
            "carro",
            "carros",
            "moto",
            "motos",
            "motocicleta",
            "motocicletas",
            "peças",
            "pecas",
            "autopeças",
            "autopecas",
            "borracharia",
            "borracharias",
            "pneus",
            "pneu",
            "mecânico",
            "mecanico",
            "auto center",
          ],
          fitness: [
            "fitness",
            "academia",
            "academias",
            "gym",
            "esporte",
            "esportes",
            "exercício",
            "exercicio",
            "exercícios",
            "exercicios",
            "malhar",
            "treino",
            "treinos",
            "personal",
            "personal trainer",
            "musculação",
            "musculacao",
            "corrida",
            "crossfit",
            "pilates",
            "treinamento",
            "atividade física",
            "atividade fisica",
          ],
          utilidades: [
            "utilidades",
            "utilidade",
            "loja de utilidades",
            "lojas de utilidades",
            "1,99",
            "um e noventa e nove",
            "casa",
            "utensílios",
            "utensilios",
            "utensílio",
            "utensilio",
            "cozinha",
            "plásticos",
            "plasticos",
            "loja de variedades",
            "variedades",
            "presentes",
            "presente",
            "artigos para casa",
            "itens para casa",
          ],
          oticas: [
            "ótica",
            "otica",
            "óptica",
            "optica",
            "óculos",
            "oculos",
            "armação",
            "armacao",
            "armações",
            "armacoes",
            "lentes",
            "lente",
            "lentes de contato",
            "lente de contato",
            "óculos de sol",
            "oculos de sol",
            "consultório de óculos",
            "consultorio de oculos",
            "optometrista",
            "oculista",
            "acessórios para óculos",
            "acessorios para oculos",
          ],
          "produtos-naturais": [
            "produtos naturais",
            "produto natural",
            "orgânicos",
            "organicos",
            "orgânico",
            "organico",
            "ervas",
            "erva",
            "fitoterápicos",
            "fitoterapicos",
            "suplementos naturais",
            "suplemento natural",
            "saúde natural",
            "saude natural",
            "armazém natural",
            "armazem natural",
            "natural",
            "suplementos",
            "suplemento",
          ],
          entretenimento: [
            "entretenimento",
            "cinema",
            "cinemas",
            "shows",
            "show",
            "eventos",
            "evento",
            "teatro",
            "teatros",
            "música",
            "musica",
            "balada",
            "baladas",
            "lazer",
            "diversão",
            "diversao",
            "festa",
            "festas",
            "eventos culturais",
            "evento cultural",
          ],
          "servicos-financeiros": [
            "serviços financeiros",
            "servicos financeiros",
            "serviço financeiro",
            "servico financeiro",
            "banco",
            "bancos",
            "finanças",
            "financas",
            "financeiro",
            "empréstimo",
            "emprestimo",
            "empréstimos",
            "emprestimos",
            "investimento",
            "investimentos",
            "contabilidade",
            "cartão",
            "cartao",
            "cartões",
            "cartoes",
            "seguro",
            "seguros",
            "financeira",
            "financeiras",
          ],
          "presentes-brindes": [
            "presentes",
            "presente",
            "brindes",
            "brinde",
            "lembrancinhas",
            "lembrancinha",
            "gift",
            "souvenir",
            "souvenirs",
            "personalizados",
            "personalizado",
            "caixa de presente",
            "caixas de presente",
            "artigos para presente",
            "artigo para presente",
            "lembrança",
            "lembranca",
          ],
          "papelaria-livros": [
            "papelaria",
            "livros",
            "livro",
            "cadernos",
            "caderno",
            "canetas",
            "caneta",
            "material escolar",
            "materiais escolares",
            "material de escritório",
            "material de escritorio",
            "livraria",
            "livrarias",
            "apostilas",
            "apostila",
            "artigos de papelaria",
            "artigo de papelaria",
            "escritório",
            "escritorio",
          ],
          agro: [
            "agro",
            "agricultura",
            "fazenda",
            "fazendas",
            "agronegócio",
            "agronegocio",
            "rural",
            "pecuária",
            "pecuaria",
            "sementes",
            "semente",
            "fertilizantes",
            "fertilizante",
            "tratores",
            "trator",
            "insumos agrícolas",
            "insumos agricolas",
          ],
          servicos: [
            "serviços",
            "servicos",
            "serviço",
            "servico",
            "manutenção",
            "manutencao",
            "assistência",
            "assistencia",
            "conserto",
            "consertos",
            "ajuda",
            "prestação de serviços",
            "prestacao de servicos",
            "atendimento",
            "consultoria",
            "reparos",
            "reparo",
            "assistência técnica",
            "assistencia tecnica",
          ],
          construcao: [
            "construção",
            "construcao",
            "construções",
            "construcoes",
            "materiais de construção",
            "materiais de construcao",
            "obra",
            "obras",
            "engenharia",
            "cimento",
            "cimentos",
            "tijolo",
            "tijolos",
            "ferro",
            "ferros",
            "madeira",
            "madeiras",
            "hidráulica",
            "hidraulica",
            "elétrica",
            "eletrica",
            "reforma",
            "reformas",
            "construção civil",
            "construcao civil",
          ],
        };

        if (businessCategory.includes(filterCategory)) {
          return true;
        }

        const mappedCategories = categoryMappings[filterCategory] || [];
        return mappedCategories.some((mapped) =>
          businessCategory.includes(mapped)
        );
      });
    }

    return result;
  }, [businesses, searchTerm, selectedCategory]);

  // Reset para página 1 quando filtros mudarem
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  const totalPages = Math.ceil(filteredBusinesses.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBusinesses = filteredBusinesses.slice(startIndex, endIndex);

  const getTitle = () => {
    if (searchTerm) {
      return `Resultados para "${searchTerm}"`;
    }
    if (selectedCategory === "latest" || !selectedCategory) {
      return "Comércios Recentes";
    }
    return `Categoria: ${selectedCategory}`;
  };

  // Scroll otimizado: sem animação em dispositivos móveis
  const scrollToHeader = () => {
    const el = document.querySelector(".business-list-header");
    if (!el) return;

    const isMobile = window.innerWidth <= 768;
    const behavior = isMobile ? "auto" : "smooth";

    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior, block: "start" });
    });
  };

  // Mantém a tipagem e validação de limites
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    scrollToHeader();
  };

  // Mesma lógica para anterior/próxima
  const handlePrevNext = (page: number) => {
    const clamped = Math.max(1, Math.min(totalPages, page));
    if (clamped === currentPage) return;
    setCurrentPage(clamped);
    scrollToHeader();
  };

  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 3) {
      // Mostrar todas as páginas se houver 3 ou menos
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Sempre mostrar 1, currentPage, e totalPages
      pages.push(1);
      if (currentPage > 2) {
        pages.push("...");
      }
      if (currentPage !== 1 && currentPage !== totalPages) {
        pages.push(currentPage);
      }
      if (currentPage < totalPages - 1) {
        pages.push("...");
      }
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  // Loading state
  if (loading) {
    return (
      <div className="business-list">
        <div className="business-list-header">
          <div className="business-list-decoration">
            <div className="decoration-circle decoration-1"></div>
            <div className="decoration-circle decoration-2"></div>
            <div className="decoration-circle decoration-3"></div>
          </div>
          <h2>Carregando comércios...</h2>
          <p className="business-list-subtitle">
            Buscando os melhores estabelecimentos para você
          </p>
        </div>

        <div className="business-grid">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="business-card loading-skeleton">
              <div className="skeleton-image"></div>
              <div className="skeleton-text skeleton-title"></div>
              <div className="skeleton-text skeleton-category"></div>
              <div className="skeleton-text skeleton-description"></div>
              <div className="skeleton-text skeleton-address"></div>
              <div className="skeleton-button"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="business-list">
      <div className="business-list-header">
        <div className="business-list-decoration">
          <div className="decoration-circle decoration-1"></div>
          <div className="decoration-circle decoration-2"></div>
          <div className="decoration-circle decoration-3"></div>
        </div>
        <h2>{getTitle()}</h2>
        <p className="business-list-subtitle">
          {filteredBusinesses.length}{" "}
          {filteredBusinesses.length === 1
            ? "resultado encontrado"
            : "resultados encontrados"}
          {totalPages > 1 && (
            <span className="pagination-info">
              {" "}
              • Página {currentPage} de {totalPages}
            </span>
          )}
        </p>
      </div>

      {filteredBusinesses.length === 0 ? (
        <div className="no-results">
          <p>Nenhum comércio encontrado.</p>
          <p>Tente buscar por outro termo ou categoria.</p>
        </div>
      ) : (
        <>
          <div className="business-grid">
            {currentBusinesses.map((business) => (
              <BusinessCard
                key={business.id}
                business={business}
                onViewMore={onViewMore}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button
                type="button"
                className="pagination-button pagination-prev"
                onClick={() => handlePrevNext(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={20} />
              </button>

              <div className="pagination-numbers">
                {generatePageNumbers().map((page, index) => (
                  <React.Fragment key={`page-${index}`}>
                    {" "}
                    {/* Adicionei key para evitar erros no React */}
                    {page === "..." ? (
                      <span className="pagination-ellipsis">...</span>
                    ) : (
                      <button
                        type="button"
                        className={`pagination-number ${
                          currentPage === page ? "active" : ""
                        }`}
                        onClick={() => handlePageChange(page as number)}
                      >
                        {page}
                      </button>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <button
                type="button"
                className="pagination-button pagination-next"
                onClick={() => handlePrevNext(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight size={20} />
              </button>

              {/* Wrapper para botões no mobile */}
              <div className="pagination-buttons-mobile">
                <button
                  type="button"
                  className="pagination-button pagination-prev"
                  onClick={() => handlePrevNext(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  className="pagination-button pagination-next"
                  onClick={() => handlePrevNext(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BusinessList;
