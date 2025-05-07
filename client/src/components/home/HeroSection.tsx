import { Bell, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Seu universo de entretenimento em um só lugar
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Descubra séries e filmes, crie lembretes e nunca mais perca um lançamento com o SERIx.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                className="bg-tertiary hover:bg-opacity-90 text-white"
              >
                <Bell className="mr-2 h-5 w-5" />
                Seja notificado no lançamento
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-primary hover:bg-opacity-90"
              >
                <Play className="mr-2 h-5 w-5" />
                Saiba mais
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src="https://images.unsplash.com/photo-1586899028174-e7098604235b?auto=format&fit=crop&w=600&q=80"
              alt="SERIx app interface mockup"
              className="rounded-xl shadow-2xl max-w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary rounded-full p-4 shadow-lg hidden md:block">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">EM BREVE</div>
                <div className="text-sm opacity-80">Aguarde!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-16 text-white dark:text-neutral-900 fill-current"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V69.81C57.85,71.55,132.65,51.69,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
