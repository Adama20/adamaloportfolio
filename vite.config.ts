
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

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
      // Le componentTagger est ajouté mais désactivé comme demandé
      // mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "dist",
      // Assurons-nous de copier le fichier 404.html
      rollupOptions: {
        output: {
          manualChunks: {
            // Séparer les chunks pour performance
            vendor: ['react', 'react-dom'],
            ui: ['@/components/ui']
          }
        }
      }
    },
    // Configuration pour GitHub Pages
    base: base,
  };
});
