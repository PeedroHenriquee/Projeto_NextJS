// PromoCarousel.js
import React from 'react';
import Image from 'next/image'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
   
  } from "@/components/ui/carousel"
  
const PromoCarousel = () => (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 mt-4 mb-4">
          <Image
           src="/promo1.avif"  // Substitua pelo caminho da sua imagem
           width={770}
           height={70}  // Substitua pelo caminho da sua primeira imagem
            alt="Imagem 1"
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3  mt-4 mb-4">
          <Image
            src="/promo2.avif"  // Substitua pelo caminho da sua imagem
            width={770}
            height={70}  // Substitua pelo caminho da sua segunda imagem
            alt="Imagem 2"
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3  mt-4 mb-4">
          <Image
            src="/promo3.avif"  // Substitua pelo caminho da sua imagem
            width={770}
            height={70}  // Substitua pelo caminho da sua terceira imagem
            alt="Imagem 3"
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3  mt-4 mb-4">
          <Image
            src="/promo5.avif"  // Substitua pelo caminho da sua imagem
            width={770}
            height={70}  // Substitua pelo caminho da sua terceira imagem
            alt="Imagem 5"
          />
        </CarouselItem>
      </CarouselContent>
      
    </Carousel>
);
export default PromoCarousel;