# GitHub Pages Deployment Guide

## Issues Fixed

1. **MIME Type Error**: Configured `base: "/"` in `vite.config.ts` to ensure proper asset paths
2. **404 Favicon Error**: GitHub Pages will now serve files from the `dist` folder correctly
3. **Module Loading**: GitHub Actions workflow will build and deploy properly

## Deployment Steps

### Option 1: Using GitHub Actions (Recommended - Automatic)

1. **Push your changes to GitHub**:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages in repository settings**:
   - Go to your repository on GitHub: `https://github.com/boqiny/boqiny.github.io`
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically trigger on push

3. **Wait for deployment** (usually takes 2-3 minutes):
   - Go to the **Actions** tab to see the deployment progress
   - Once complete, your site will be live at `https://boqiny.github.io`

### Option 2: Manual Build and Deploy

If you prefer manual deployment or the Actions don't work:

1. **Install gh-pages** (if not already installed):
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Build and deploy**:
   ```bash
   npm run build
   npx gh-pages -d dist
   ```

## Verification

After deployment, visit `https://boqiny.github.io` and check:
- ✅ No MIME type errors in console
- ✅ Favicon loads correctly
- ✅ All JavaScript modules load properly
- ✅ Site functions as expected

## Troubleshooting

### If the site still shows errors:

1. **Clear browser cache**: Hard refresh with `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

2. **Check GitHub Actions logs**: Look for any build errors in the Actions tab

3. **Verify GitHub Pages source**: Ensure it's set to "GitHub Actions" in Settings → Pages

4. **Check branch**: Make sure you're pushing to the `main` branch (or update the workflow file if using a different branch)

### Common Issues:

- **404 on assets**: Make sure `base: "/"` is in `vite.config.ts`
- **Old version showing**: Clear cache or wait a few minutes for GitHub's CDN to update
- **Build fails**: Check that all dependencies are in `package.json` (not just `devDependencies`)

## Local Testing

To test the production build locally before deploying:

```bash
npm run build
npm run preview
```

This will serve the production build locally at `http://localhost:4173`

