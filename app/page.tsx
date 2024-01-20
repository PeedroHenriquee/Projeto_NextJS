import { lusitana } from '@/app/ui/fonts';
import RestaurantButtons from './ui/pages/cponentes/RestaurantButtons';
import Link from 'next/link';
import PromoCarousel from './ui/pages/cponentes/PromoCarousel'; // Importe o componente de carousel
import BotaoComida from './ui/pages/cponentes/botaoComida';
import Header from './ui/pages/cponentes/Header';
import Footer from './ui/pages/cponentes/Footer';



export default function Page() {
  return (

<div>


    {/* Header da pagina */}
    <Header />
    
    <div>
    {/* Conteudo Restaurantes, permissionarios */}
    <RestaurantButtons />
    {/* ... outro conteúdo ... */}
  </div>
   
    {/* PromoCarousel */}
    <PromoCarousel />

    
    
     {/* Adicione os botões abaixo do texto "Restaurantes" */}
     <BotaoComida />

     {/* Use o componente Footer */}
    <Footer />
 </div>
  );
}
