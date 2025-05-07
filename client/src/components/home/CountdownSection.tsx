import { FormEvent, useState } from "react";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function CountdownSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  
  // Set launch date to one month from now
  const launchDate = new Date();
  launchDate.setMonth(launchDate.getMonth() + 1);
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Here you would normally send the email to your backend
    console.log("Email submitted:", email);
    
    toast({
      title: "Inscrição realizada!",
      description: "Você será notificado quando o SERIx for lançado.",
    });
    
    setEmail("");
  };
  
  return (
    <section id="countdown" className="py-16 md:py-24 bg-neutral-100 dark:bg-neutral-800">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
          Estamos quase lá!
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-12">
          O SERIx será lançado em breve. Fique ligado e seja um dos primeiros a experimentar!
        </p>
        
        <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-primary dark:text-primary">
            Lançamento em:
          </h3>
          
          <CountdownTimer targetDate={launchDate} />
          
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
              <Input
                type="email"
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <Button 
                type="submit" 
                className="px-6 py-3 bg-primary hover:bg-opacity-90 text-white rounded-lg font-medium transition-all"
              >
                Quero ser notificado
              </Button>
            </form>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-3">
              Não enviamos spam. Você pode cancelar a qualquer momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
