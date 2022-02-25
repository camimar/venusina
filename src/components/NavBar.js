
import imagenLogo from './assets/logoVenusina.png';
import './NavBar.css';
import CartWidget from './CartWidget.js';


function NavBar() {
  
    return (
      <div className="NavBar">
          <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-lg">
                  <a href="/#"  class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                  <img src={imagenLogo} width="60px" height="40px" alt="logo"/>{' '}
                  </a>
                  <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                      <div class="relative inline-block text-left">
                         <a href="/#"  class="mr-5 hover:text-gray-900">Galería Virtual</a>
                        <a href="/#"  class="mr-5 hover:text-gray-900">Eventos</a>
                        <a href="/#"  class="mr-5 hover:text-gray-900">Sobre Venusina</a>
                        <a href="/#" class="mr-5 hover:text-gray-900">Contacto</a>
                      </div>
                  </nav>
                  <div>
                    <CartWidget></CartWidget>
                </div>
                </div>
            </header>
    </div>
    );
  }
  

export default NavBar;