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
  return (
    <div className="business-card">
      <div className="business-card-glow"></div>
      <div>
        <img
          src={business.imageUrl}
          alt={`Imagem do comércio ${business.name}`}
          className="business-image"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
          }}
        />
      </div>

      <h3 className="business-name">{business.name}</h3>

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
