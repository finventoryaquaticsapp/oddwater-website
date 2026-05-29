# Oddwater Website with Supabase Beta Signup

This version connects the beta signup form to Supabase.

Required Vercel environment variables:
- VITE_SUPABASE_URL
- VITE_SUPABASE_ANON_KEY

Expected Supabase table:
beta_users

Expected columns:
- id
- email
- favorite_species
- notes
- created_at

Deploy:
- Upload contents to GitHub
- Redeploy in Vercel
