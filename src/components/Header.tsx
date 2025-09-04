import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { label: "Início", link: "/" },
    { label: "Sobre", link: "/sobre" },
    { label: "Contato", link: "/contato" },
    { label: "Cadastre seu negócio", link: "/cadastre-se" },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(false);
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo-container">
            <Link to="/" onClick={handleMenuClick}>
              <img
                src="/logo_ampliada_ache_irece.png"
                alt="Logo do Ache Irecê"
                className="logo"
              />
            </Link>
            {/* </a> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navigation.map((item) => (
              <Link
                key={item.label}
                to={item.link}
                onClick={handleMenuClick}
                className={
                  location.pathname === item.link
                    ? "text-green-600 font-semibold"
                    : ""
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="nav-mobile">
            <div className="nav-mobile-content">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  to={item.link}
                  onClick={handleMenuClick}
                  className={
                    location.pathname === item.link
                      ? "text-green-600 font-semibold"
                      : ""
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
