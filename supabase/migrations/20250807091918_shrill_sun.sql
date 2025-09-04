INSERT INTO businesses (
  email,
  company_name,
  short_description,
  category,
  phone,
  website,
  address,
  opening_hours,
  closing_hours,
  services,
  facade_image_url,
  status
) VALUES (
  'contato@padariabairro.com.br',
  'Padaria do Bairro',
  'Padaria tradicional com pães frescos diariamente, doces caseiros e salgados especiais. Atendimento familiar há mais de 20 anos.',
  'Alimentação',
  '(11) 3456-7890',
  'www.padariabairro.com.br',
  'Rua das Palmeiras, 456 - Vila Nova',
  '06:00',
  '19:00',
  ARRAY['Pães frescos', 'Doces caseiros', 'Salgados', 'Bolos personalizados', 'Café da manhã'],
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  'approved'
);