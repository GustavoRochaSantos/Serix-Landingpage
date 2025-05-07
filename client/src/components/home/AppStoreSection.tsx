import { Link } from "wouter";

export function AppStoreSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
              alt="Pessoa utilizando o aplicativo SERIx"
              className="rounded-xl shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
              Baixe o SERIx nas principais lojas
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
              Disponível para Android e iOS. Baixe agora e comece a organizar suas séries e filmes favoritos.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="#">
                <a className="inline-block">
                  <img 
                    src="/app-store-badge.svg" 
                    alt="Baixar na App Store" 
                    className="h-14 min-w-40 object-contain hover:opacity-90 transition-opacity" 
                  />
                </a>
              </Link>
              <Link href="#">
                <a className="inline-block">
                  <img 
                    src="/google-play-badge.svg" 
                    alt="Baixar no Google Play" 
                    className="h-14 min-w-40 object-contain hover:opacity-90 transition-opacity" 
                  />
                </a>
              </Link>
            </div>
            
            <div className="mt-10 flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary dark:text-primary">10K+</div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">Pré-cadastros</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary dark:text-primary">100+</div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">Plataformas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary dark:text-primary">4.8</div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">Avaliação beta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
