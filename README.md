# Kashif Ali Wadhar — Portfolio

A responsive personal portfolio built with React and Vite.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Vite prints the local preview URL, usually `http://localhost:5173`.

## Build and preview

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy to Vercel

1. Push this project to the `main` branch of `https://github.com/wadharkashifali000-ux/kashif_ali`.
2. In Vercel, select **Add New → Project** and import the `kashif_ali` GitHub repository.
3. Keep the detected **Vite** framework settings:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Select **Deploy**. No environment variables or extra Vercel configuration are required.

Future pushes to `main` are automatically deployed when the Vercel project is connected to GitHub.

## Portfolio content

- Edit `src/data/projects.js` to add projects and their source or demo links.
- Edit `src/data/skills.js` to update skills and learning goals.
- Add certificate images to `public/assets/certificates/` using the filenames in `src/data/certificates.js`.
- The contact form opens the visitor's email app; this static site does not send email through a backend.

The hero uses a remotely hosted Unsplash photo and Google Fonts, so those assets require an internet connection.
