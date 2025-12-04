# Policy Table Issue

A React project with Cisco Design Systems (CDS) table component.

## Setup

Install dependencies:
```bash
yarn install
```

## Run

Start the development server:
```bash
yarn run start
```

The application will open in your browser at `http://localhost:1234`.

## Build

Build for production:
```bash
yarn run build
```

## Deploy to GitHub Pages

This project is configured to deploy to GitHub Pages by building locally and pushing the built files.

### Initial Setup

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/policy-table-issue.git
   git push -u origin main
   ```


### Deploy Steps

```bash
# Build the project
yarn build

# Deploy to gh-pages branch
gh-pages -d dist
```

### Notes

- The `.nojekyll` file is included to prevent Jekyll processing
- The build output goes to the `dist/` directory
- Assets are configured with relative paths (`--public-url ./`) for GitHub Pages compatibility
- The `gh-pages` branch will be created automatically on first deploy
- After deployment, updates may take a few minutes to appear on GitHub Pages

