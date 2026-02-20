<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1gXj2YBT4TQRLQXBSBAi-nF5NhGySfl4t

## Run Locally

**Prerequisites:** Node.js (LTS)

1. Install dependencies:  
   `npm install`
2. Run the app for local development:  
   `npm run dev`

## Deploy to Vercel

This is a Vite + React app and is ready for deployment on Vercel.

1. Commit this folder to a Git repository (GitHub, GitLab, or Bitbucket).
2. In the Vercel dashboard, click **New Project** and import the repository.
3. When Vercel detects Vite, keep the defaults:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**. Vercel will build and host the site at your new URL.
