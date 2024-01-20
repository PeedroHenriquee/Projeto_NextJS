import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

const BotaoComida = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap space-x-8">
        {/* Coluna 1 */}
        <div className="flex flex-col space-y-4">
          {/* Botão 1 */}
          <button className="flex items-center space-x-4 p-4 border border-gray-300 rounded">
            <div>
              <span className={`${lusitana.className} text-base md:text-xl md:leading-tight text-black`}>Hamburguer</span>
              <p className="text-sm text-gray-500 mb-2">Pão de brioche, maionese temperada, cebola salteada, 2 fatias de queijo, carne alta e suculenta (120g).</p>
              <p className="text-sm text-black">R$:22.90</p>
            </div>
            <Image
              src="/burguer.jpg"
              width={190}
              height={30}
              alt="Ícone do Botão 1"
              className="ml-5"
              objectFit="cover"
            />
          </button>

          {/* Botão 2 */}
          <button className="flex items-center space-x-4 p-4 border border-gray-300 rounded">
            <div>
              <span className={`${lusitana.className} text-base md:text-xl md:leading-tight text-black`}>Cerveja</span>
              <p className="text-sm text-gray-500 mb-2">Pão de brioche, maionese temperada, cebola salteada, 2 fatias de queijo, carne alta e suculenta (120g).</p>
              <p className="text-sm text-black">R$:22.90</p>
            </div>
            <Image
              src="/cerva.jpg"
              width={190}
              height={30}
              alt="Ícone do Botão 2"
              className="ml-5"
              objectFit="cover"
            />
          </button>

          {/* Botão 3 */}
          <button className="flex items-center space-x-4 p-4 border border-gray-300 rounded">
            <div>
              <span className={`${lusitana.className} text-base md:text-xl md:leading-tight text-black`}>Sushi</span>
              <p className="text-sm text-gray-500 mb-2">Pão de brioche, maionese temperada, cebola salteada, 2 fatias de queijo, carne alta e suculenta (120g).</p>
              <p className="text-sm text-black">R$:22.90</p>
            </div>
            <Image
              src="/sushi.jpg"
              width={190}
              height={30}
              alt="Ícone do Botão 3"
              className="ml-5"
              objectFit="cover"
            />
          </button>
        </div>

        {/* Coluna 2 */}
        <div className="flex flex-col space-y-4">
          {/* Outros Botões na Coluna 2 */}
          <button className="flex items-center space-x-4 p-4 border border-gray-300 rounded">
            {/* Conteúdo do Botão 1 */}
            <div>
              <span className={`${lusitana.className} text-base md:text-xl md:leading-tight text-black`}>Hamburguer</span>
              <p className="text-sm text-gray-500 mb-2">Pão de brioche, maionese temperada, cebola salteada, 2 fatias de queijo, carne alta e suculenta (120g).</p>
              <p className="text-sm text-black">R$:22.90</p>
            </div>
            <Image
              src="/burguer.jpg"
              width={190}
              height={30}
              alt="Ícone do Botão 1"
              className="ml-5"
              objectFit="cover"
            />
          </button>

          {/* Outros Botões na Coluna 2 */}
          <button className="flex items-center space-x-4 p-4 border border-gray-300 rounded">
            {/* Conteúdo do Botão 2 */}
            <div>
              <span className={`${lusitana.className} text-base md:text-xl md:leading-tight text-black`}>Churrasco</span>
              <p className="text-sm text-gray-500 mb-2">Pão de brioche, maionese temperada, cebola salteada, 2 fatias de queijo, carne alta e suculenta (120g).</p>
              <p className="text-sm text-black">R$:22.90</p>
            </div>
            <Image
              src="/chu.jpg"
              width={190}
              height={30}
              alt="Ícone do Botão 2"
              className="ml-5"
              objectFit="cover"
            />
          </button>

          {/* Outros Botões na Coluna 2 */}
          <button className="flex items-center space-x-4 p-4 border border-gray-300 rounded">
            {/* Conteúdo do Botão 3 */}
            <div>
              <span className={`${lusitana.className} text-base md:text-xl md:leading-tight text-black`}>Sushi</span>
              <p className="text-sm text-gray-500 mb-2">Pão de brioche, maionese temperada, cebola salteada, 2 fatias de queijo, carne alta e suculenta (120g).</p>
              <p className="text-sm text-black">R$:22.90</p>
            </div>
            <Image
              src="/sushi.jpg"
              width={190}
              height={30}
              alt="Ícone do Botão 3"
              className="ml-5"
              objectFit="cover"
            />
          </button>
          <br/>
      <br/>
      
        </div>
      </div>
    </div>
  );
};

export default BotaoComida;
