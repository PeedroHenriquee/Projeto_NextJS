// RestaurantButtons.js
import React from 'react';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';

const RestaurantButtons = () => (
  <li className="flex flex-row items-center justify-center space-x-8 mt-4 mb-4">
    <button>
      <Image
        src="/comida1.png"
        width={70}
        height={70}
        alt="Ícone de Inicio"
        className="mb-2"
        objectFit="cover"
      />
      <span className={`${lusitana.className} text-base md:text-xl md:leading-tight text-black`}>Restaurante 1</span>
    </button>

    <button>
      <Image
        src="/comida2.png"
        width={70}
        height={70}
        alt="Ícone do Novo Botão 1"
        className="mb-2"
        objectFit="cover"
      />
      <span className={`${lusitana.className} text-base md:text-xl md:leading-tight text-black`}>Restaurante 2</span>
    </button>

    <button>
      <Image
        src="/comida3.png"
        width={70}
        height={70}
        alt="Ícone do Novo Botão 2"
        className="mb-2"
        objectFit="cover"
      />
      <span className={`${lusitana.className} text-base md:text-xl md:leading-tight text-black`}>Restaurante 3</span>
    </button>

    <button>
      <Image
        src="/comida4.png"
        width={70}
        height={70}
        alt="Ícone do Novo Botão 3"
        className="mb-2"
        objectFit="cover"
      />
      <span className={`${lusitana.className} text-base md:text-xl md:leading-tight text-black`}>Restaurante 4</span>
    </button>

    <button>
      <Image
        src="/comida5.png"
        width={70}
        height={70}
        alt="Ícone do Novo Botão 4"
        className="mb-2"
        objectFit="cover"
      />
      <span className={`${lusitana.className} text-base md:text-xl md:leading-tight text-blakc`}>Restaurante 5</span>
    </button>
  </li>
);

export default RestaurantButtons;
