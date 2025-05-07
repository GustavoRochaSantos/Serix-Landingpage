import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";

export function NewsletterSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const { toast } = useToast();
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Here you would normally send the data to your backend
    console.log("Newsletter form submitted:", formData);
    
    toast({
      title: "Inscrição realizada!",
      description: "Você foi inscrito com sucesso na nossa newsletter.",
    });
    
    setFormData({ name: "", email: "" });
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  return (
    <section id="contato" className="py-16 md:py-24 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Fique por dentro das novidades
              </h2>
              <p className="text-white/90 mb-6">
                Assine nossa newsletter e receba atualizações sobre o lançamento, novos recursos e dicas para aproveitar melhor o SERIx.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Seu email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full px-6 py-3 bg-white text-primary hover:bg-opacity-90 rounded-lg font-medium transition-all"
                >
                  Assinar newsletter
                </Button>
                <p className="text-xs text-white/80">
                  Ao assinar, você concorda com nossos <Link href="/terms" className="underline">Termos de Uso</Link> e <Link href="/terms" className="underline">Política de Privacidade</Link>.
                </p>
              </form>
            </div>
            <div className="md:w-1/2 flex items-center justify-center p-8 md:p-0">
              <img
                src="https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?auto=format&fit=crop&w=600&q=80"
                alt="Pessoa assistindo conteúdo em múltiplas telas"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
