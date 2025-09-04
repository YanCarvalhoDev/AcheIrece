export interface Business {
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

export const mockBusinesses: Business[] = [];
