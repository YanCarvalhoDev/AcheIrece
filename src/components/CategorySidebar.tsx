import React, { useState } from "react";
import {
  ShoppingBag,
  Shirt,
  Briefcase,
  Heart,
  Utensils,
  ShoppingCart,
  Laptop,
  Scissors,
  BookOpen,
  Car,
  Dumbbell,
  ChevronDown,
  X,
  Check,
  Wand,
  Glasses,
  Hospital,
  Leaf,
  Music,
  DollarSign,
  Gift,
  Tractor,
  Hammer,
} from "lucide-react";

interface Category {
  name: string;
  filter: string;
  icon: string;
}

interface CategorySidebarProps {
  onCategorySelect: (filter: string) => void;
  selectedCategory: string;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({
  onCategorySelect,
  selectedCategory,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  {
    isDropdownOpen; //Vefiricar isso aqui depois
  }

  const iconMap: { [key: string]: React.ReactNode } = {
    "shopping-cart": <ShoppingCart size={20} />,
    shoe: <ShoppingBag size={20} />,
    shirt: <Shirt size={20} />,
    briefcase: <Briefcase size={20} />,
    tooth: <Heart size={20} />,
    utensils: <Utensils size={20} />,
    laptop: <Laptop size={20} />,
    scissors: <Scissors size={20} />,
    heart: <Heart size={20} />,
    book: <BookOpen size={20} />,
    car: <Car size={20} />,
    dumbbell: <Dumbbell size={20} />,
    tools: <Wand size={20} />,
    glasses: <Glasses size={20} />,
    hospital: <Hospital size={20} />,
    leaf: <Leaf size={20} />,
    music: <Music size={20} />,
    "dollar-sign": <DollarSign size={20} />,
    gift: <Gift size={20} />,
    "book-open": <BookOpen size={20} />,
    tractor: <Tractor size={20} />,
    hammer: <Hammer size={20} />,
  };

  const categories: Category[] = [
    { name: "Todos", filter: "latest", icon: "shopping-cart" },
    { name: "Sapatos", filter: "sapatos", icon: "shoe" },
    { name: "Roupas", filter: "roupas", icon: "shirt" },
    { name: "Advogado", filter: "advogado", icon: "briefcase" },
    { name: "Saúde", filter: "saude", icon: "hospital" },
    { name: "Dentista", filter: "dentista", icon: "tooth" },
    { name: "Óticas", filter: "oticas", icon: "glasses" },
    { name: "Alimentação", filter: "alimentacao", icon: "utensils" },
    { name: "Mercado", filter: "mercado", icon: "shopping-cart" },
    { name: "Eletrônicos", filter: "eletronicos", icon: "laptop" },
    { name: "Beleza", filter: "beleza", icon: "scissors" },
    { name: "Educação", filter: "educacao", icon: "book" },
    { name: "Automotivo", filter: "automotivo", icon: "car" },
    { name: "Fitness", filter: "fitness", icon: "dumbbell" },
    { name: "Utilidades", filter: "utilidades", icon: "tools" },
    { name: "Produtos naturais", filter: "produtos-naturais", icon: "leaf" },
    { name: "Entretenimento", filter: "entretenimento", icon: "music" },
    {
      name: "Serviços financeiros",
      filter: "servicos-financeiros",
      icon: "dollar-sign",
    },
    { name: "Presentes e brindes", filter: "presentes-brindes", icon: "gift" },
    {
      name: "Papelaria e livros",
      filter: "papelaria-livros",
      icon: "book-open",
    },
    { name: "Agro", filter: "agro", icon: "tractor" },
    { name: "Serviços", filter: "servicos", icon: "briefcase" },
    { name: "Construção", filter: "construcao", icon: "hammer" },
  ];

  const selectedCategoryName =
    categories.find((cat) => cat.filter === selectedCategory)?.name || "Todos";

  const handleCategorySelect = (filter: string) => {
    onCategorySelect(filter);
    setIsDropdownOpen(false); // Fecha o dropdown após seleção
    setIsModalOpen(false); // Fecha o modal após seleção
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsDropdownOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <>
      <aside className="category-sidebar">
        <div className="category-header">
          <div className="category-header-decoration"></div>
          <h3>Categorias</h3>
        </div>

        {/* Desktop: Lista normal */}
        <div className="category-list-desktop">
          {categories.map((category) => (
            <button
              key={category.filter}
              onClick={() => handleCategorySelect(category.filter)}
              className={`category-button ${
                selectedCategory === category.filter ? "active" : ""
              }`}
            >
              <span className="category-icon">{iconMap[category.icon]}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Mobile: Botão para abrir modal */}
        <div className="category-mobile-trigger">
          <button className="category-modal-button" onClick={openModal}>
            <span className="category-icon">
              {
                iconMap[
                  categories.find((cat) => cat.filter === selectedCategory)
                    ?.icon || "shopping-cart"
                ]
              }
            </span>
            <span>{selectedCategoryName}</span>
            <ChevronDown size={20} />
          </button>
        </div>
      </aside>

      {/* Modal Mobile */}
      {isModalOpen && (
        <div className="category-modal-backdrop" onClick={handleModalBackdrop}>
          <div className="category-modal">
            <div className="category-modal-header">
              <h3>Escolha uma Categoria</h3>
              <button className="category-modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
            </div>

            <div className="category-modal-content">
              {categories.map((category) => (
                <button
                  key={category.filter}
                  onClick={() => handleCategorySelect(category.filter)}
                  className={`category-modal-item ${
                    selectedCategory === category.filter ? "active" : ""
                  }`}
                >
                  <div className="category-modal-item-content">
                    <span className="category-icon">
                      {iconMap[category.icon]}
                    </span>
                    <span className="category-name">{category.name}</span>
                  </div>
                  {selectedCategory === category.filter && (
                    <Check size={20} className="category-check" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategorySidebar;
