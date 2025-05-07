import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { CountdownSection } from "@/components/home/CountdownSection";
import { AppStoreSection } from "@/components/home/AppStoreSection";
import { FAQSection } from "@/components/home/FAQSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>SERIx - Seu aplicativo de streaming para organizar séries e filmes</title>
        <meta name="description" content="Descubra séries e filmes, crie lembretes e nunca mais perca um lançamento com o SERIx. Organize seu catálogo de entretenimento." />
        <meta property="og:title" content="SERIx - Seu aplicativo de streaming" />
        <meta property="og:description" content="Organize suas séries e filmes favoritos com o SERIx. Nunca mais perca um episódio!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://serix.app" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <HeroSection />
          <FeaturesSection />
          <CountdownSection />
          <AppStoreSection />
          <FAQSection />
          <NewsletterSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
