import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <header className="bg-orange-500">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <ul className="flex items-center space-x-4">
            <li>
              <button>
                <span className={`${lusitana.className}  text-base md:text-xl md:leading-tight text-gray-800`}>Inicio</span>
              </button>
            </li>
            <li>
              <button>
              <span className={`${lusitana.className}  text-base md:text-xl md:leading-tight text-gray-800`}>Busca</span>
              </button>
            </li>
            <li>
              <button>
              <span className={`${lusitana.className}  text-base md:text-xl md:leading-tight text-gray-800`}>Promocões</span>
              </button>
            </li>
          </ul>

          <ul className="flex items-center space-x-4">
            <li>
              <button>
              <span className={`${lusitana.className}  text-base md:text-xl md:leading-tight text-gray-800`}>Pedidos</span>
              </button>
            </li>
            <li>
              <button>
              <span className={`${lusitana.className}  text-base md:text-xl md:leading-tight text-gray-800`}>Perfil</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
