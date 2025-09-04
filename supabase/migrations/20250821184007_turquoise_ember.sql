DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'businesses' AND column_name = 'coordinates'
  ) THEN
    ALTER TABLE businesses ADD COLUMN coordinates text;
  END IF;
END $$;