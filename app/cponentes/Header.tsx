// Header.js
import React from 'react';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';

const Header = () => (
  <header className="bg-black">
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            src="/logo1.png"
            width={60}
            height={20}
            className="hidden md:block"
            alt="Logo"
          />
        </div>

        <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <li>
            <button>
              <span className={`${lusitana.className} text-base md:text-xl md:leading-tight text-white`}>Inicio</span>
            </button>
          </li>
          <li>
            <button>
              <span className={`${lusitana.className} text-base md:text-xl md:leading-tight text-white`}>Busca</span>
            </button>
          </li>
          <li>
            <button>
              <span className={`${lusitana.className} text-base md:text-xl md:leading-tight text-white`}>Promoções</span>
            </button>
          </li>
          <li>
            <button>
              <span className={`${lusitana.className} text-base md:text-xl md:leading-tight text-white`}>Pedidos</span>
            </button>
          </li>
          <li>
            <button>
              <span className={`${lusitana.className} text-base md:text-xl md:leading-tight text-white`}>Perfil</span>
            </button>
          </li>
          <li>
            <button className="flex items-center space-x-2">
              <span className={`${lusitana.className} text-base md:text-xl md:leading-tight text-white`}>Logout</span>
              <div className="rounded-full overflow-hidden">
                <Image
                  src="/amy-burns.png"
                  width={40}
                  height={40}
                  className="hidden md:block"
                  alt="Foto de perfil"
                />
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
