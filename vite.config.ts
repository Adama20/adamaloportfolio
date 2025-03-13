
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Détection si nous sommes en environnement GitHub Pages
  const isGitHubPages = process.env.GITHUB_PAGES === 'true';
  // Utilisons le nom exact de votre dépôt GitHub
  const base = isGitHubPages ? '/adamaloportfolio/' : '/';
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      // Le componentTagger est désactivé
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "dist",
      // Assurons-nous de configurer correctement pour GitHub Pages
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            ui: ['@/components/ui']
          }
        }
      }
    },
    // Configuration pour GitHub Pages
    base: base,
  };
});
