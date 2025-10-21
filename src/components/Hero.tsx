import React, { useState, useEffect, useRef } from "react";
import { Search, Sparkles } from "lucide-react";

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

interface HeroProps {
  onSearch: (searchTerm: string) => void;
  businesses: Business[];
}

const Hero: React.FC<HeroProps> = ({ onSearch, businesses }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Business[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Função para normalizar strings (remove acentos e converte para minúsculas)
  const normalizeString = (str: string) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  // Filtra sugestões ao digitar
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    const filtered = businesses.filter((business) =>
      normalizeString(business.name).includes(normalizeString(searchTerm))
    );
    setSuggestions(filtered.slice(0, 10)); // Limita a 10 sugestões
    setShowDropdown(filtered.length > 0);
  }, [searchTerm, businesses]);

  // Handler para submit do form
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      setShowDropdown(false);
    }
  };

  // Handler para selecionar sugestão
  const handleSuggestionClick = (name: string) => {
    setSearchTerm(name);
    onSearch(name);
    setShowDropdown(false);
  };

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="hero" aria-label="Busca de Comércios Locais em Irecê">
      <div className="hero-floating-elements">
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <div className="floating-element floating-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="w-4 h-4" />
            Descubra em Irecê
          </div>

          <h1>
            Encontre os melhores{" "}
            <span className="hero-title-highlight">
              comércios, lojas e serviços
            </span>{" "}
            em Irecê
          </h1>

          <p className="hero-subtitle">
            Busque por categoria ou palavra-chave e encontre
            <span className="hero-subtitle-highlight">
              {" "}
              estabelecimentos e profissionais próximos
            </span>{" "}
            a você na cidade de Irecê, Bahia.
          </p>

          <form onSubmit={handleSearch} className="search-form" role="search">
            <div className="search-container" ref={dropdownRef}>
              <div className="search-input-container">
                <Search className="search-icon" size={20} />
                <input
                  type="text"
                  placeholder="Ex: dentista, mercado, restaurante..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                  aria-label="Campo de busca por comércios ou serviços em Irecê"
                  autoComplete="off" // Desativa autocomplete nativo do navegador
                />
              </div>
              <button type="submit" className="search-button-aesthetic">
                Procurar em Irecê
              </button>

              {showDropdown && suggestions.length > 0 && (
                <ul className="search-dropdown">
                  {suggestions.map((business) => (
                    <li
                      key={business.id}
                      onClick={() => handleSuggestionClick(business.name)}
                      className="search-suggestion-item"
                    >
                      {business.name} <span>({business.category})</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
