
# Deploying to Render

To properly deploy this application to Render, please follow these steps:

1. In your Render dashboard, create a new **Static Site** service
2. Connect to your GitHub repository
3. Configure the build settings as follows:
   - **Build Command**: `npm ci && npm run build`
   - **Publish Directory**: `dist`
4. Add the following environment variable:
   - `NODE_VERSION`: `18`
5. Click "Create Static Site"

## Important: Package.json Scripts

Ensure your package.json contains these scripts:
```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview"
}
```

## Common Issues

If you see errors like `Could not load /opt/render/project/src/src/components/ui`, check your import paths. Make sure all imports use the `@` alias correctly:

```typescript
// Correct
import { Button } from "@/components/ui/button";

// Incorrect - causes duplicate 'src' in path
import { Button } from "src/components/ui/button";
```

## Manual Deployment Steps

If the automatic deployment is still failing, try these manual steps:

1. Clone your repository locally
2. Run `npm ci` to install dependencies
3. Run `npm run build` to build the project
4. Verify that the build succeeds locally
5. Use the Render manual deploy option to upload your built files

## Troubleshooting Import Paths

To find any incorrect imports in your codebase:

1. Search your entire project for imports that use `from "src/` or `from 'src/`
2. Replace all instances with the correct alias `from "@/`
3. Commit these changes and push to your repository
4. Trigger a new deployment on Render
