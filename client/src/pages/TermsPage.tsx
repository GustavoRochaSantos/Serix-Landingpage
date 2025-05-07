import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Termos de Uso - SERIx App</title>
        <meta name="description" content="Termos de uso e política de privacidade do aplicativo SERIx. Leia nossos termos antes de utilizar o aplicativo." />
        <meta property="og:title" content="Termos de Uso - SERIx App" />
        <meta property="og:description" content="Leia nossos termos de uso e política de privacidade." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://serix.app/terms" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow py-16 bg-white dark:bg-neutral-900">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-900 dark:text-white">
              Termos de Uso e Política de Privacidade
            </h1>
            
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl p-8 mb-10">
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                Última atualização: {new Date().toLocaleDateString()}
              </p>
              
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <h2>1. Introdução</h2>
                <p>
                  Bem-vindo ao SERIx ("nós", "nosso", "nos"). Ao usar o aplicativo SERIx, você concorda com estes Termos de Uso e nossa Política de Privacidade. Por favor, leia-os cuidadosamente.
                </p>
                
                <h2>2. Uso do Serviço</h2>
                <p>
                  O SERIx é um aplicativo que permite aos usuários descobrir, organizar e acompanhar séries e filmes. Ao utilizar o aplicativo, você concorda em:
                </p>
                <ul>
                  <li>Fornecer informações precisas e atualizadas quando solicitado;</li>
                  <li>Usar o serviço apenas para fins legais e de acordo com estes termos;</li>
                  <li>Não usar o serviço de maneira que possa prejudicar, desativar, sobrecarregar ou comprometer o funcionamento do aplicativo;</li>
                  <li>Não tentar obter acesso não autorizado a partes do serviço, outros sistemas ou redes conectadas ao serviço.</li>
                </ul>
                
                <h2>3. Conta de Usuário</h2>
                <p>
                  Para usar alguns recursos do SERIx, você pode precisar criar uma conta. Você é responsável por manter a confidencialidade de sua senha e por todas as atividades que ocorrem em sua conta. Você concorda em nos notificar imediatamente sobre qualquer uso não autorizado de sua conta ou qualquer outra violação de segurança.
                </p>
                
                <h2>4. Permissões Solicitadas</h2>
                <p>
                  O aplicativo SERIx solicita as seguintes permissões:
                </p>
                <ul>
                  <li><strong>Câmera:</strong> Utilizada exclusivamente para permitir que você faça upload de sua foto de perfil. Não coletamos nem armazenamos imagens sem sua autorização explícita.</li>
                  <li><strong>Acesso à Internet:</strong> Necessário para buscar e atualizar dados de séries e filmes, sincronizar suas preferências e enviar notificações.</li>
                </ul>
                <p>
                  Não solicitamos nenhuma outra permissão que não seja necessária para o funcionamento do aplicativo.
                </p>
                
                <h2>5. Conteúdo</h2>
                <p>
                  O SERIx fornece informações sobre séries e filmes que estão disponíveis em vários serviços de streaming. Não fornecemos acesso direto ao conteúdo de streaming e você precisará ter assinaturas válidas com os serviços relevantes para assistir ao conteúdo. Todos os direitos autorais, marcas registradas e outros direitos de propriedade intelectual relacionados a séries e filmes pertencem aos seus respectivos proprietários.
                </p>
                
                <h2>6. Política de Privacidade</h2>
                <h3>6.1. Informações Coletadas</h3>
                <p>
                  Para fornecer e melhorar nossos serviços, coletamos as seguintes informações:
                </p>
                <ul>
                  <li><strong>Informações da conta:</strong> nome, endereço de e-mail e foto de perfil (se fornecida);</li>
                  <li><strong>Informações de uso:</strong> séries e filmes que você adiciona à sua lista, lembretes que você configura e suas interações com o aplicativo;</li>
                  <li><strong>Informações do dispositivo:</strong> modelo do dispositivo, sistema operacional, idioma e versão do aplicativo.</li>
                </ul>
                
                <h3>6.2. Uso das Informações</h3>
                <p>
                  Usamos as informações coletadas para:
                </p>
                <ul>
                  <li>Fornecer, manter e melhorar o aplicativo;</li>
                  <li>Personalizar sua experiência e fornecer recomendações;</li>
                  <li>Enviar notificações sobre novos episódios, lançamentos e atualizações do aplicativo;</li>
                  <li>Analisar tendências de uso para melhorar o desempenho e a usabilidade do aplicativo;</li>
                  <li>Proteger contra atividades fraudulentas e abusos.</li>
                </ul>
                
                <h3>6.3. Compartilhamento de Informações</h3>
                <p>
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
                </p>
                <ul>
                  <li>Com provedores de serviços que nos ajudam a operar o aplicativo (processamento de pagamentos, análise de dados, etc.);</li>
                  <li>Quando exigido por lei ou para proteger nossos direitos;</li>
                  <li>Com seu consentimento explícito.</li>
                </ul>
                
                <h3>6.4. Segurança de Dados</h3>
                <p>
                  Implementamos medidas técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro.
                </p>
                
                <h3>6.5. Direitos do Usuário</h3>
                <p>
                  Você tem direito a:
                </p>
                <ul>
                  <li>Acessar e corrigir suas informações pessoais;</li>
                  <li>Solicitar a exclusão de suas informações pessoais;</li>
                  <li>Recusar o recebimento de comunicações de marketing;</li>
                  <li>Retirar seu consentimento a qualquer momento.</li>
                </ul>
                
                <h2>7. Alterações nos Termos</h2>
                <p>
                  Reservamos o direito de modificar estes termos a qualquer momento. Notificaremos os usuários sobre alterações significativas publicando os novos termos no aplicativo ou enviando uma notificação.
                </p>
                
                <h2>8. Rescisão</h2>
                <p>
                  Podemos encerrar ou suspender o acesso ao nosso serviço imediatamente, sem aviso prévio, por qualquer motivo, incluindo violação destes Termos. Você pode encerrar sua conta a qualquer momento nas configurações do aplicativo.
                </p>
                
                <h2>9. Limitação de Responsabilidade</h2>
                <p>
                  Na máxima extensão permitida por lei, o SERIx não será responsável por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, ou quaisquer perdas de lucros ou receitas, seja incorrida direta ou indiretamente, ou quaisquer perdas de dados, uso, boa vontade ou outras perdas intangíveis.
                </p>
                
                <h2>10. Lei Aplicável</h2>
                <p>
                  Estes termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar suas disposições sobre conflitos de leis.
                </p>
                
                <h2>11. Contato</h2>
                <p>
                  Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco pelo e-mail: contato@serix.app
                </p>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
