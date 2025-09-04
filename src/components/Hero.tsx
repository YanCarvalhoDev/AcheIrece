import React, { useState } from "react";
import { Search, Sparkles } from "lucide-react";

interface HeroProps {
  onSearch: (searchTerm: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <section className="hero">
      {/* Floating Elements */}
      <div className="hero-floating-elements">
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <div className="floating-element floating-3"></div>
      </div>

      {/* Content */}
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles className="w-4 h-4" />
            Descubra em Irecê
          </div>

          <h1>
            Descubra os melhores
            <span className="hero-title-highlight">comércios e serviços</span>
            de Irecê
          </h1>

          <p className="hero-subtitle">
            Busque por categoria ou palavra-chave e encontre
            <span className="hero-subtitle-highlight">
              {" "}
              estabelecimentos próximos
            </span>{" "}
            a você com facilidade.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-container">
              <div className="search-input-container">
                <Search className="search-icon" size={20} />
                <input
                  type="text"
                  placeholder="Digite o que procura..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              <button type="submit" className="search-button-aesthetic">
                Procurar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
