import React from "react";
import { MapPin } from "lucide-react";

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

interface BusinessCardProps {
  business: Business;
  onViewMore: (business: Business) => void;
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  business,
  onViewMore,
}) => {
  const imageAltText = `${business.name} | ${business.category} em Irecê`;

  // 1. Criação do Schema Markup (JSON-LD) para LocalBusiness
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    image: business.imageUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: "Irecê",
      addressRegion: "BA",
      addressCountry: "BR",
    },
    description: business.description,
    telephone: business.phone,
    url: business.website,
    // Adicione mais campos conforme a relevância
  };

  return (
    <div className="business-card">
      {/* 2. Injeção Direta do Schema Markup (Alternativa ao Helmet) */}
      {/* O Google é compatível com dados estruturados no <body> e no <head>. */}
      <script
        type="application/ld+json"
        // dangerouslySetInnerHTML é usado para injetar HTML/JSON raw no React.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <div className="business-card-glow"></div>
      <div>
        <img
          src={business.imageUrl}
          alt={imageAltText}
          className="business-image"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
          }}
        />
      </div>

      <h3 className="business-name">
        {business.name}
        <span className="sr-only"> - {business.category} em Irecê</span>
      </h3>

      <p className="business-category">{business.category}</p>

      <p className="business-description">{business.description}</p>

      <div className="business-address">
        <MapPin size={14} className="address-icon" />
        <span className="address-text">{business.address}</span>
      </div>

      <button
        className="business-button-aesthetic"
        onClick={() => onViewMore(business)}
      >
        Ver mais
      </button>
    </div>
  );
};

export default BusinessCard;
