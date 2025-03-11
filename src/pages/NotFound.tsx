
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-24">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <p className="text-2xl font-medium mb-8">Oops! Page introuvable</p>
        <p className="text-muted-foreground text-center max-w-md mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Button size="lg" className="flex items-center gap-2" asChild>
          <a href="/">
            <Home size={18} />
            Retour à l'accueil
          </a>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
