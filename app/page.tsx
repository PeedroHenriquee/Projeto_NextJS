import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import RestaurantButtons from './cponentes/RestaurantButtons';
import Link from 'next/link';
import PromoCarousel from './cponentes/PromoCarousel'; // Importe o componente de carousel
import BotaoComida from './cponentes/botaoComida';
import Header from './cponentes/Header';
import Footer from './cponentes/Footer';



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

    <span className={`${lusitana.className} text-base md:text-xl md:leading-tight text-black`}>Peçã o SEU!</span>
    
     {/* Adicione os botões abaixo do texto "Restaurantes" */}
     <BotaoComida />

     {/* Use o componente Footer */}
    <Footer />
 </div>
  );
}
