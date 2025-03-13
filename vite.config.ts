
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Détection si nous sommes en environnement Render
  const isRender = process.env.RENDER === 'true';
  const isGitHubPages = process.env.GITHUB_PAGES === 'true';
  
  // Base URL appropriée selon l'environnement
  const base = isGitHubPages ? '/adamaloportfolio/' : '/';
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "dist",
      // Configuration simplifiée pour éviter les problèmes de chunks
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom']
          }
        }
      }
    },
    // Base URL
    base: base,
  };
});
