# Deploying Zenpad Website to GitHub Pages

1. **Build the Project**
   Run the build command to generate the static files in the `dist` folder:
   ```bash
   npm run build
   ```

2. **Commit and Push**
   Ensure all your changes are committed:
   ```bash
   git add .
   git commit -m "feat: website release build"
   git push origin main
   ```

3. **Configure GitHub Pages**
   - Go to your repository settings on GitHub.
   - Navigate to **Pages**.
   - Under **Build and deployment**, select **GitHub Actions** (recommended) OR **Deploy from a branch**.
   
   **Option A: Deploy from `gh-pages` branch (Classic)**
   - You need to push the `dist` folder to a `gh-pages` branch.
   - `npx gh-pages -d dist` (requires `gh-pages` package: `npm i -D gh-pages`).
   
   **Option B: Deploy using GitHub Actions (Modern - Recommended)**
   - Create a file `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy static content to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

4. **Verify Deployment**
   - Wait for the Action to complete.
   - Visit `https://zenpad.github.io` (Ensure your repository is under the `zenpad` organization).
