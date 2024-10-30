import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex justify-between items-center p-6" style={{ backgroundColor: '#172554' }}>
            <div className="flex items-center">
                <img src={Logo} alt="logo" className="mr-2 w-15 h-14" />
                <span className="font-semibold text-xl tracking-tight text-white">PROFESSIONET</span>
            </div>

            {/* Botón del Menú de Hamburguesa */}
            <button onClick={toggleMenu} className="text-white md:hidden z-20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            {/* Enlaces de Navegación */}
            <div className={`md:flex md:items-center md:justify-end ${
                isOpen ? 'fixed' : 'hidden'
              } inset-x-0 top-0 transform transition-transform duration-300 ease-in-out z-10 md:relative md:top-auto md:left-auto md:h-auto md:visible md:opacity-100 md:translate-x-0`} style={{ backgroundColor: isOpen ? '#172554' : 'transparent' }}>
                <div className="flex flex-col md:flex-row items-center justify-center h-screen md:h-auto">
                    <Link to="/" className="text-white hover:text-opacity-75 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link to="/PerfilU" className="text-white hover:text-opacity-75 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
                        Perfil
                    </Link>
                    <Link to="/Trabajos" className="text-white hover:text-opacity-75 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
                        Empleos
                    </Link>
                    <Link to="/Pasantias" className="text-white hover:text-opacity-75 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
                        Pasantías
                    </Link>
                    <div className="flex flex-col md:flex-row my-2 md:my-0 md:ml-4 space-y-2 md:space-y-0 md:space-x-2">
                        <Link to="/login" className="text-white hover:text-opacity-75 block px-3 py-2 rounded-md text-base font-medium border border-white border-solid" onClick={() => setIsOpen(false)}>
                            Iniciar sesión
                        </Link>
                        <Link to="/Registro" className="text-white hover:text-opacity-75 block px-3 py-2 rounded-md text-base font-medium border border-white border-solid" onClick={() => setIsOpen(false)}>
                            Registrarse
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
