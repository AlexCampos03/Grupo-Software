import React from 'react';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import service from '../assets/service.png';
import comentarios from '../assets/comentarios.png';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <div className="flex flex-col mr-20 ml-20">
          <span className="font-bold text-white uppercase mb-2">Servicios</span>
          <span className="my-2"><a href="trabajosuo" className="text-white text-sm hover:text-blue-300">Empleos</a></span>
          <span className="my-2"><a href="pasantiasuo" className="text-white text-sm hover:text-blue-300">Pasantías</a></span>
        </div>
        <div className="flex flex-col mr-20 ml-20">
          <span className="font-bold text-white uppercase mb-2">Nosotros</span>

          <div className="my-2 flex items-center">
            <img src={service} alt="ayuda" className="mr-2 w-6 h-6" />
            <a href="Ayuda" className="text-white text-sm hover:text-blue-300">Ayuda</a>
          </div>

          <div className="my-2 flex items-center">
            <img src={comentarios} alt="comentarios" className="mr-2 w-6 h-6" />
            <a href="Seguridad" className="text-white text-sm hover:text-blue-300">Innovación</a>
          </div>

        </div>
        <div className="flex flex-col mr-20 ml-20">
          <span className="font-bold text-white uppercase mb-2">Síguenos</span>
          
          <div className="my-2 flex items-center">
            <img src={instagram} alt="instagram" className="mr-2 w-6 h-6" />
            <a href="https://instagram.com/professionnet_proyectowebsito?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr" className="text-white text-sm hover:text-blue-300">Instagram</a>
          </div>

          <div className="my-2 flex items-center">
            <img src={facebook} alt="facebook" className="mr-2 w-6 h-6" />
            <a href="https://facebook.com" className="text-white text-sm hover:text-blue-300">Facebook</a>
          </div>

        </div>
        <div className="flex flex-col ml-20">
          <span className="font-bold text-white uppercase mb-2">Políticas</span>
          <span className="my-2"><a href="Politicas" className="text-white text-sm hover:text-blue-300">Política de privacidad</a></span>
        </div>
        {/* Icono de flecha hacia arriba, reemplázalo con tu propio icono */}
        <div className="ml-auto">
          <a href="#top" className="text-white">
            {/* Aquí iría tu icono de flecha */}
            ⬆️
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;