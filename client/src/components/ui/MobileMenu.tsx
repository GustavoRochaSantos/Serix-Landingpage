import { useState } from "react";
import { Link } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface MobileMenuProps {
  items: {
    label: string;
    href: string;
  }[];
}

export function MobileMenu({ items }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-neutral-400 dark:text-neutral-100"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="md:hidden pt-16 pb-6 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
        <nav className="flex flex-col space-y-4 pt-4 text-neutral-400 dark:text-neutral-100">
          {items.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 px-4 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
