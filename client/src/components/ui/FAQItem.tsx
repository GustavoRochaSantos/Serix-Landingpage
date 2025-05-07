import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border-b border-neutral-200 dark:border-neutral-700 pb-4">
      <button 
        className="w-full flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-medium text-neutral-900 dark:text-white">
          {question}
        </h3>
        <ChevronDown 
          className={cn(
            "text-primary dark:text-primary transition-transform",
            isOpen && "transform rotate-180"
          )}
          size={20}
        />
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 pt-2" : "max-h-0"
        )}
      >
        <p className="text-neutral-600 dark:text-neutral-300">
          {answer}
        </p>
      </div>
    </div>
  );
}
