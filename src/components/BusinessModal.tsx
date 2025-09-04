import React from "react";
import {
  X,
  MapPin,
  Phone,
  Globe,
  Clock,
  List,
  Navigation,
  Instagram,
} from "lucide-react";

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

interface BusinessModalProps {
  business: Business | null;
  isOpen: boolean;
  onClose: () => void;
}

const BusinessModal: React.FC<BusinessModalProps> = ({
  business,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !business) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  console.log("Coordenadas:", business.coordinates);
  console.log("address:", business.address);

  // Utility function to format phone number
  const formatPhoneNumber = (phone: string): string => {
    // Remove any non-digit characters
    const cleaned = phone.replace(/\D/g, "");

    // Check if the cleaned number has the expected length (11 digits for Brazilian phone numbers)
    if (cleaned.length === 11) {
      // Format as (XX) XXXXX-XXXX
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(
        7
      )}`;
    }

    // Return original if it doesn't match expected length
    return phone;
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{business.name}</h2>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-image-container">
            <img
              src={business.imageUrl}
              alt={`Imagem do comércio ${business.name}`}
              className="modal-image"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
              }}
            />
          </div>

          <div className="modal-info">
            <div className="modal-category">
              <span className="category-badge">{business.category}</span>
            </div>

            <p className="modal-description">{business.description}</p>

            <div className="modal-details">
              <div className="detail-item">
                <MapPin size={18} className="detail-icon" />
                <span>{business.address}</span>
              </div>

              {business.phone && (
                <div className="detail-item">
                  <Phone size={18} className="detail-icon" />
                  <a
                    href={`https://wa.me/55${business.phone}?text=Olá, vim pelo Ache Irecê!`}
                    className="detail-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {formatPhoneNumber(business.phone)}
                  </a>
                </div>
              )}

              {business.email && (
                <div className="detail-item">
                  <Instagram size={18} className="detail-icon" />
                  {/* <a href={`mailto:${business.email}`} className="detail-link"> */}
                  <a
                    href={`https://www.instagram.com/${business.email}/`}
                    className="detail-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {business.email}
                  </a>
                </div>
              )}

              {business.website && (
                <div className="detail-item">
                  <Globe size={18} className="detail-icon" />
                  <a
                    href={`${business.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-link"
                  >
                    {business.website}
                  </a>
                </div>
              )}

              {business.hours && (
                <div className="detail-item">
                  <Clock size={18} className="detail-icon" />
                  <span>{business.hours}</span>
                </div>
              )}

              {business.services &&
                business.services.filter((s) => s && s.trim() !== "").length >
                  0 && (
                  <div className="detail-item services-item">
                    <List size={18} className="detail-icon" />
                    <div className="services-content">
                      <span className="services-title">Serviços:</span>
                      <div className="services-list">
                        {business.services
                          .filter((s) => s && s.trim() !== "")
                          .map((service, index) => (
                            <span key={index} className="service-tag">
                              {service}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                )}
            </div>

            {/* Google Maps */}
            {business.coordinates && (
              <div className="map-section">
                <div className="map-header">
                  <Navigation size={18} className="detail-icon" />
                  <span className="map-title">Localização</span>
                </div>
                <div className="map-container">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      business.coordinates
                    )}&z=15&output=embed`}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Localização de ${business.name}`}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModal;
