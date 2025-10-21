import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CategorySidebar from "../components/CategorySidebar";
import BusinessList from "../components/BusinessList";
import BusinessModal from "../components/BusinessModal";
import Footer from "../components/Footer";
import { mockBusinesses } from "../data/mockBusinesses";
import { supabase } from "../lib/supabase";
import type { Business as SupabaseBusiness } from "../lib/supabase";

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
console.log(React);
function Home() {
  const [selectedCategory, setSelectedCategory] = useState("latest");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [supabaseBusinesses, setSupabaseBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSupabaseBusinesses = async () => {
      try {
        const { data, error } = await supabase
          .from("businesses")
          .select("*")
          .eq("status", "approved")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching businesses:", error);
          return;
        }

        const transformedBusinesses: Business[] = data.map(
          (business: SupabaseBusiness) => ({
            id: business.id,
            name: business.company_name,
            category: business.category,
            description: business.short_description,
            address: business.address,
            coordinates: business.coordinates || business.address,
            imageUrl:
              business.facade_image_url ||
              "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            phone: business.phone,
            email: business.email,
            website: business.website,
            hours: `${business.opening_hours} às ${business.closing_hours}`,
            services: business.services || [],
          })
        );

        setSupabaseBusinesses(transformedBusinesses);
      } catch (error) {
        console.error("Error fetching businesses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSupabaseBusinesses();
  }, []);

  const allBusinesses = [...supabaseBusinesses, ...mockBusinesses];

  const handleCategorySelect = (filter: string) => {
    setSelectedCategory(filter);
    setSearchTerm("");
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setSelectedCategory("");
  };

  const handleViewMore = (business: Business) => {
    setSelectedBusiness(business);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBusiness(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero onSearch={handleSearch} businesses={allBusinesses} />

      <main className="main-content">
        <div className="container">
          <div className="content-layout">
            <CategorySidebar
              onCategorySelect={handleCategorySelect}
              selectedCategory={selectedCategory}
            />
            <BusinessList
              businesses={allBusinesses}
              selectedCategory={selectedCategory}
              searchTerm={searchTerm}
              onViewMore={handleViewMore}
              loading={loading}
            />
          </div>
        </div>
      </main>

      <BusinessModal
        business={selectedBusiness}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <Footer />
    </div>
  );
}

export default Home;
