/*
  # Create waitlist table for Project Echo

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key, auto-generated)
      - `email` (text, unique, not null) — the subscriber's email address
      - `created_at` (timestamptz) — when they joined
      - `source` (text) — which CTA they used (hero/waitlist-section)

  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for anonymous inserts (public waitlist signup)
    - No read policy — emails are private, only accessible via service role
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  source text DEFAULT 'waitlist'
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join the waitlist"
  ON waitlist
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
