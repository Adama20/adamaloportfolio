
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
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
  // Ajout d'une configuration pour la gestion des routes SPA
  // Ceci est crucial pour que les routes fonctionnent en production
  base: "/"
}));
