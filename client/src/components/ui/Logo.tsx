import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withText?: boolean;
}

export function Logo({ className, size = "md", withText = true }: LogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
  };

  return (
    <div className={cn("font-bold text-primary flex items-center", className)}>
      <span className={cn("mr-1", sizeClasses[size])}>S</span>
      {withText && <span className={cn("text-xl")}>ERIx</span>}
    </div>
  );
}
