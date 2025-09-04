-- Create businesses table
CREATE TABLE IF NOT EXISTS businesses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  company_name text NOT NULL,
  short_description text NOT NULL,
  category text NOT NULL,
  phone text NOT NULL,
  website text,
  address text NOT NULL,
  opening_hours text NOT NULL,
  closing_hours text NOT NULL,
  services text[] DEFAULT '{}',
  facade_image_url text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Public can read approved businesses"
  ON businesses
  FOR SELECT
  TO public
  USING (status = 'approved');

CREATE POLICY "Anyone can insert business applications"
  ON businesses
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create storage bucket for business images
INSERT INTO storage.buckets (id, name, public)
VALUES ('business-images', 'business-images', true)
ON CONFLICT (id) DO NOTHING;

-- Create storage policies
CREATE POLICY "Public can view business images"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'business-images');

CREATE POLICY "Anyone can upload business images"
  ON storage.objects
  FOR INSERT
  TO public
  WITH CHECK (bucket_id = 'business-images');

CREATE POLICY "Users can update their own business images"
  ON storage.objects
  FOR UPDATE
  TO public
  USING (bucket_id = 'business-images');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
CREATE TRIGGER update_businesses_updated_at
  BEFORE UPDATE ON businesses
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_businesses_status ON businesses(status);
CREATE INDEX IF NOT EXISTS idx_businesses_category ON businesses(category);
CREATE INDEX IF NOT EXISTS idx_businesses_created_at ON businesses(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_businesses_email ON businesses(email);