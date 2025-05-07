import { Link } from "wouter";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileMenu } from "@/components/ui/MobileMenu";

const navigationItems = [
  { label: "Recursos", href: "#recursos" },
  { label: "Lançamento", href: "#countdown" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
  { label: "Termos de Uso", href: "/terms" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-neutral-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center cursor-pointer">
            <Logo />
          </a>
        </Link>
        
        <nav className="hidden md:flex space-x-8 text-neutral-400 dark:text-neutral-100">
          {navigationItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className="hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <MobileMenu items={navigationItems} />
        </div>
      </div>
    </header>
  );
}
