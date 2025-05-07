import { FAQItem } from "@/components/ui/FAQItem";

const faqItems = [
  {
    question: "O que é o SERIx?",
    answer: "SERIx é um aplicativo de streaming que ajuda você a descobrir, organizar e acompanhar suas séries e filmes favoritos. Com ele, você pode criar lembretes para novos episódios, manter um catálogo do que já assistiu e receber recomendações personalizadas."
  },
  {
    question: "O SERIx é gratuito?",
    answer: "Sim, o SERIx possui uma versão gratuita com recursos essenciais. Também oferecemos uma versão premium com recursos adicionais, como sincronização entre dispositivos, lembretes avançados e experiência sem anúncios."
  },
  {
    question: "Em quais plataformas o SERIx está disponível?",
    answer: "O SERIx estará disponível para dispositivos Android através do Google Play e para dispositivos iOS através da App Store. Também estamos desenvolvendo uma versão web para acesso pelo navegador."
  },
  {
    question: "Quais permissões o aplicativo requer?",
    answer: "O SERIx requer permissão de câmera (para que você possa fazer upload de sua foto de perfil) e permissão de acesso à internet (para buscar e atualizar dados de séries e filmes). Não solicitamos outras permissões desnecessárias."
  },
  {
    question: "O SERIx permite assistir filmes e séries diretamente?",
    answer: "Não, o SERIx é um aplicativo organizador e não um serviço de streaming. Ele ajuda você a descobrir conteúdo e manter controle do que está assistindo, mas você precisará acessar os serviços de streaming (como Netflix, Amazon Prime, Disney+, etc.) para assistir ao conteúdo."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-neutral-100 dark:bg-neutral-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre o SERIx
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem 
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
