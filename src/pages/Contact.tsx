
import { useState, useRef } from "react";
import Layout from "@/components/layout";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configure EmailJS with your service ID, template ID, and public key
      // You need to create these in EmailJS dashboard and add them to your Supabase secrets
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current!,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      toast.success("Message envoyé avec succès!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error("Échec de l'envoi du message. Ouverture de l'application de messagerie par défaut...");

      // Fallback to mailto link if EmailJS fails
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `De: ${formData.name} (${formData.email})\n\n${formData.message}`
      );
      
      window.location.href = `mailto:adamalo205@gmail.com?subject=${subject}&body=${body}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Section title="Me contacter" subtitle="N'hésitez pas à me contacter pour discuter de vos projets">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-panel p-6">
              <h3 className="text-xl font-semibold mb-6">Informations de contact</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-3 bg-primary/10 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Adresse</h4>
                    <p className="text-muted-foreground">33800 Bordeaux, France</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-3 bg-primary/10 text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Téléphone</h4>
                    <p className="text-muted-foreground">+33 6 29 93 81 26</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-3 bg-primary/10 text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">adamalo205@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-3 bg-primary/10 text-primary">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a 
                      href="https://bit.ly/adamalo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      linkedin.com/in/adamalo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6">
              <h3 className="text-xl font-semibold mb-4">Disponibilité</h3>
              <p className="mb-4">
                Je suis actuellement disponible immédiatement pour de nouvelles opportunités 
                professionnelles, partout en France.
              </p>
              <p>
                N'hésitez pas à me contacter pour discuter de vos projets ou besoins
                en matière de data et d'informatique décisionnelle.
              </p>
            </div>
          </div>

          <div className="glass-panel p-8">
            <h3 className="text-xl font-semibold mb-6">Envoyez-moi un message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre.email@exemple.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Sujet de votre message"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Votre message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full flex items-center gap-2 justify-center relative overflow-hidden group"
                disabled={isSubmitting}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  <Send size={18} className={isSubmitting ? "animate-pulse" : ""} />
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-primary to-primary/70 transition-all duration-300 group-hover:h-full z-0"></span>
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
