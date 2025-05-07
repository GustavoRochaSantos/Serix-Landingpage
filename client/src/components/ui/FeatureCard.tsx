import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn(
      "bg-neutral-100 dark:bg-neutral-800 rounded-xl p-8 shadow-lg transition-transform hover:-translate-y-1",
      className
    )}>
      <div className="text-primary dark:text-tertiary mb-6 flex justify-center">
        <Icon className="h-14 w-14" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white text-center">
        {title}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-300 text-center">
        {description}
      </p>
    </div>
  );
}
