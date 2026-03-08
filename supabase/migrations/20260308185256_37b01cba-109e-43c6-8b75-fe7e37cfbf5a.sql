
-- Create workshop type enum
CREATE TYPE public.workshop_type AS ENUM ('phototherapy', 'soul-collage', 'general');

-- Create workshops table
CREATE TABLE public.workshops (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  date DATE NOT NULL,
  location TEXT NOT NULL,
  description TEXT NOT NULL,
  target_audience TEXT NOT NULL DEFAULT '',
  cost TEXT NOT NULL DEFAULT '',
  types workshop_type[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.workshops ENABLE ROW LEVEL SECURITY;

-- Public read
CREATE POLICY "Workshops are publicly readable"
ON public.workshops FOR SELECT
USING (true);

-- Admin CRUD
CREATE POLICY "Admins can insert workshops"
ON public.workshops FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update workshops"
ON public.workshops FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete workshops"
ON public.workshops FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));
