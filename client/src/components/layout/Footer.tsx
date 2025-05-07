import { Link } from "wouter";
import { Logo } from "@/components/ui/Logo";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Logo className="text-primary" />
            </div>
            <p className="text-neutral-400 mb-4">
              Seu aplicativo para descobrir e organizar séries e filmes.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#recursos" className="text-neutral-400 hover:text-white transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-neutral-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-neutral-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-neutral-400 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail className="text-primary mr-2 mt-1 h-4 w-4" />
                <span className="text-neutral-400">contato@serix.app</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-primary mr-2 mt-1 h-4 w-4" />
                <span className="text-neutral-400">(00) 1234-5678</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-primary mr-2 mt-1 h-4 w-4" />
                <span className="text-neutral-400">São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Download</h3>
            <div className="flex flex-col space-y-3">
              <a href="#" className="inline-block">
                <img
                  src="/app-store-badge.svg"
                  alt="Baixar na App Store"
                  className="h-10 min-w-36 object-contain hover:opacity-90 transition-opacity"
                />
              </a>
              <a href="#" className="inline-block">
                <img
                  src="/google-play-badge.svg"
                  alt="Baixar no Google Play"
                  className="h-10 min-w-36 object-contain hover:opacity-90 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SERIx. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <Link href="/terms" className="text-neutral-500 hover:text-primary transition-colors">
              Termos de Uso
            </Link>
            <Link href="/terms" className="text-neutral-500 hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/terms" className="text-neutral-500 hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
