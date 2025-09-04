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
            "calçados",
            "sandálias",
            "chinelos",
            "sapatilhas",
            "tênis",
            "bota",
            "botina",
          ],
          roupas: [
            "roupas",
            "moda",
            "vestuário",
            "boutique",
            "clothing",
            "camisa",
            "blusa",
            "calça",
            "short",
            "saia",
            "vestido",
          ],
          advogado: [
            "advogado",
            "advocacia",
            "jurídico",
            "direito",
            "lawyer",
            "causa",
            "defensor",
          ],
          dentista: [
            "dentista",
            "odontologia",
            "dental",
            "odontológica",
            "aparelho",
            "clareamento",
            "sorriso",
          ],
          alimentacao: [
            "alimentação",
            "restaurante",
            "comida",
            "food",
            "pizzaria",
            "lanchonete",
            "lanche",
            "bar",
            "marmita",
            "self service",
            "salgado",
            "padaria",
            "açai",
          ],
          mercado: [
            "mercado",
            "supermercado",
            "mercadinho",
            "grocery",
            "hortifruti",
            "feira",
            "atacado",
          ],
          eletronicos: [
            "eletrônicos",
            "informática",
            "computadores",
            "tech",
            "electronics",
            "celular",
            "telefone",
            "tablet",
            "notebook",
            "tv",
            "televisão",
            "som",
          ],
          beleza: [
            "beleza",
            "salão",
            "estética",
            "beauty",
            "cabeleireiro",
            "manicure",
            "pedicure",
            "unha",
            "maquiagem",
            "sobrancelha",
            "barbearia",
          ],
          saude: [
            "saúde",
            "clínica",
            "médico",
            "health",
            "medicina",
            "posto",
            "hospital",
            "farmácia",
            "remédio",
            "vacina",
          ],
          educacao: [
            "educação",
            "escola",
            "ensino",
            "education",
            "colégio",
            "faculdade",
            "curso",
            "aula",
            "professor",
            "ensino médio",
            "universidade",
          ],
          automotivo: [
            "automotivo",
            "oficina",
            "mecânica",
            "auto",
            "automotive",
            "carro",
            "moto",
            "peças",
            "autopeças",
            "borracharia",
            "pneus",
          ],
          fitness: [
            "fitness",
            "academia",
            "gym",
            "esporte",
            "exercício",
            "malhar",
            "treino",
            "personal",
            "musculação",
            "corrida",
            "crossfit",
            "pilates",
          ],
          utilidades: [
            "utilidades",
            "loja de utilidades",
            "1,99",
            "casa",
            "utensílios",
            "cozinha",
            "plásticos",
            "loja de variedades",
            "presentes",
          ],
          oticas: [
            "ótica",
            "óptica",
            "óculos",
            "armação",
            "lentes",
            "lentes de contato",
            "óculos de sol",
            "consultório de óculos",
            "optometrista",
            "acessórios para óculos",
          ],
          "produtos-naturais": [
            "produtos naturais",
            "orgânicos",
            "ervas",
            "fitoterápicos",
            "suplementos naturais",
            "saúde natural",
            "armazém natural",
          ],
          entretenimento: [
            "entretenimento",
            "cinema",
            "shows",
            "eventos",
            "teatro",
            "música",
            "balada",
            "lazer",
            "diversão",
          ],
          "servicos-financeiros": [
            "serviços financeiros",
            "banco",
            "finanças",
            "financeiro",
            "empréstimo",
            "investimento",
            "contabilidade",
            "cartão",
            "seguro",
          ],
          "presentes-brindes": [
            "presentes",
            "brindes",
            "lembrancinhas",
            "gift",
            "souvenir",
            "personalizados",
            "caixa de presente",
            "artigos para presente",
          ],
          "papelaria-livros": [
            "papelaria",
            "livros",
            "cadernos",
            "canetas",
            "material escolar",
            "material de escritório",
            "livraria",
            "apostilas",
            "artigos de papelaria",
          ],
          agro: [
            "agro",
            "agricultura",
            "fazenda",
            "agronegócio",
            "rural",
            "pecuária",
            "sementes",
            "fertilizantes",
            "tratores",
          ],
          servicos: [
            "serviços",
            "manutenção",
            "assistência",
            "conserto",
            "ajuda",
            "prestação de serviços",
            "atendimento",
            "consultoria",
          ],
          construcao: [
            "construção",
            "materiais de construção",
            "obra",
            "engenharia",
            "cimento",
            "tijolo",
            "ferro",
            "madeira",
            "hidráulica",
            "elétrica",
            "reforma",
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
