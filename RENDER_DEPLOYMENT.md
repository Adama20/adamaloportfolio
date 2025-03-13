
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

## Critical: Import Path Errors

The most common error when deploying to Render is related to import paths. **DO NOT** use `src/` in your import paths, as it causes duplicate `src` in the resolved paths. 

### Correct vs Incorrect Imports

```typescript
// Correct - Use this pattern
import { Button } from "@/components/ui/button";

// Incorrect - This will cause deployment failures
import { Button } from "src/components/ui/button";
```

## Manual Deployment Steps

If the automatic deployment is still failing, try these manual steps:

1. Clone your repository locally
2. Run `npm ci` to install dependencies
3. Run `npm run build` to build the project
4. Verify that the build succeeds locally
5. Use the Render manual deploy option to upload your built files

## Finding and Fixing Import Path Issues

We've included a helper script to identify import path issues in your codebase:

1. Run this command locally: `node src/import-check.js`
2. The script will list all files with incorrect import paths
3. Update each file to use `@/` instead of `src/`
4. Commit and push these changes
5. Trigger a new deployment on Render

## Common Error Pattern

If your Render logs show this error:
```
Error: Could not load /opt/render/project/src/src/components/ui: EISDIR: illegal operation on a directory, read
```

This indicates you have a duplicate `src` path issue. Notice the `/src/src/` in the error message. This is caused by using `from "src/..."` in your imports instead of `from "@/..."`.
