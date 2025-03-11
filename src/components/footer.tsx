
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <Link to="/" className="text-xl font-bold tracking-tight">
            <span className="text-primary font-bold">Adama</span> LO
          </Link>
          <p className="text-muted-foreground max-w-xs">
            Ingénieur en data et informatique décisionnelle, passionné par la
            data et les défis technologiques.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://bit.ly/adamalo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:adamalo205@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Navigation</h3>
          <nav className="flex flex-col space-y-2">
            <Link
              to="/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Accueil
            </Link>
            <Link
              to="/about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              À propos
            </Link>
            <Link
              to="/experience"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Expérience
            </Link>
            <Link
              to="/projects"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projets
            </Link>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Contact</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-muted-foreground">
              <MapPin size={18} />
              <span>33800 Bordeaux, France</span>
            </div>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <Phone size={18} />
              <span>+33 6 29 93 81 26</span>
            </div>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <Mail size={18} />
              <span>adamalo205@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-muted">
        <p className="text-center text-muted-foreground text-sm">
          © {currentYear} Adama LO. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
