import { FeatureCard } from "@/components/ui/FeatureCard";
import { Search, Bell, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeaturesSection() {
  return (
    <section id="recursos" className="py-16 md:py-24 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            Recursos exclusivos
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-200 max-w-2xl mx-auto">
            Simplifique sua experiência de streaming e descubra tudo que o SERIx tem a oferecer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Search}
            title="Descubra novos conteúdos"
            description="Encontre séries e filmes com base nos seus gostos. Nossa plataforma recomenda conteúdo personalizado para você."
          />
          
          <FeatureCard
            icon={Bell}
            title="Lembretes inteligentes"
            description="Nunca perca um episódio novamente! Crie lembretes para suas séries favoritas e receba notificações quando estiverem disponíveis."
          />
          
          <FeatureCard
            icon={ListChecks}
            title="Organize seu catálogo"
            description="Mantenha um registro organizado das séries e filmes que você está assistindo, planeja assistir ou já concluiu."
          />
        </div>
        
        <div className="mt-20">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Disponível em modo claro e escuro
                </h3>
                <p className="text-white/90 mb-6">
                  Escolha o tema que melhor se adapta às suas preferências. O SERIx foi projetado para proporcionar conforto visual em qualquer ambiente.
                </p>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    className="bg-white text-primary hover:bg-opacity-90"
                  >
                    Modo Claro
                  </Button>
                  <Button
                    className="bg-neutral-800 text-white hover:bg-opacity-90"
                  >
                    Modo Escuro
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 p-6 flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=600&q=80"
                  alt="SERIx em modo claro e escuro"
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
