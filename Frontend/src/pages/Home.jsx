import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Banner from '../assets/Banner.png';
import Empleados from '../assets/empleos.png';
import Servicios from '../assets/servicios.png';
import Experiencia from '../assets/experiencia.png';

import Trabajos from '../assets/trabajo.png';
import Pasantias from '../assets/pasantia.png';
import Datos from '../assets/datos.png';
import Ayuda from '../assets/ayuda.png';
import Innovacion from '../assets/innovacion.png';

import Testimonio1 from '../assets/testimonio1.png';
import Testimonio3 from '../assets/testimonio3.png';

import LogoDynatrace from '../assets/dyntrace.png';
import LogoOracle from '../assets/oracle.png';
import LogoVmware from '../assets/vmware.png';
import LogoQuest from '../assets/quest.png';




const NewPage = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500
    };

    return (
        <div className="new-page-container">


            <main>
                <section className="relative bg-blue-500 text-white">
                    <Slider {...settings}>
                        <div>
                            <img src={Banner} alt="Banner 1" />
                        </div>
                        <div>
                            <img src={Banner} alt="Banner 2" className="w-full h-auto object-cover" />
                        </div>
                        <div>
                            <img src={Banner} alt="Banner 3" className="w-full h-auto object-cover" />
                        </div>
                    </Slider>
                </section>


                {/* Sección Características */}
                <section className="container mx-auto p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        {/* Empleos personalizados */}
                        <div className="flex flex-col items-center">
                            <img src={Empleados} alt="Empleos" className="w-12 h-12 mx-auto" />
                            <p className="text-blue-600 font-semibold mt-2">Empleos personalizados</p>
                        </div>
                        {/* Servicios innovadores */}
                        <div className="flex flex-col items-center">
                            <img src={Servicios} alt="Servicios" className="w-12 h-12 mx-auto" />
                            <p className="text-blue-600 font-semibold mt-2">Servicios innovadores</p>
                        </div>
                        {/* Búsqueda con la mejor experiencia */}
                        <div className="flex flex-col items-center">
                            <img src={Experiencia} alt="Experiencia" className="w-12 h-12 mx-auto" />
                            <p className="text-blue-600 font-semibold mt-2">Búsqueda con la mejor experiencia</p>
                        </div>
                    </div>
                    {/* Línea Azul y Texto */}
                    <div className="w-full my-4 border-t-4 border-blue-600"></div>
                    <div className="text-center">
                    </div>
                </section>

                {/* Sección de Tarjetas */}
                <section className="grid grid-cols-1 md:grid-cols-5 text-center">

                    {[
                        { image: Trabajos, title: 'Trabajos', bgColor: 'bg-blue-600' },
                        { image: Pasantias, title: 'Pasantías', bgColor: 'bg-green-600' },
                        { image: Datos, title: 'Empresas', bgColor: 'bg-teal-600' },
                        { image: Ayuda, title: 'Ayuda', bgColor: 'bg-indigo-600' },
                        { image: Innovacion, title: 'Innovación y Seguridad', bgColor: 'bg-purple-600' },
                    ].map((card, index) => (
                        <div
                            key={index}
                            className={`${card.bgColor} relative cursor-pointer transition duration-300 ease-in-out transform hover:scale-105`}
                            onClick={() => handleClick(card.title)}
                            style={{ backgroundImage: `url(${card.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >
                            <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
                            <h3 className="relative z-10 text-white font-semibold p-20">{card.title}</h3>
                        </div>
                    ))}
                </section>


                <section className="bg-blue-500 py-10">
                    <h2 className="text-white text-center text-2xl font-bold mb-8">TESTIMONIOS</h2>
                    <div className="container mx-auto">
                        <div className="flex flex-wrap justify-center items-center gap-10">
                            {/* Tarjeta de Testimonio 1 */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg w-1/3">
                                <img src={Testimonio1} alt="Testimonio 1" className="w-full object-cover" style={{ height: '200px' }} />
                                <div className="p-4">
                                    <a href="/testimonios/1" className="text-blue-600 hover:text-blue-800 transition duration-300">Conoce más &gt;</a>
                                </div>
                            </div>

                            {/* Tarjeta de Testimonio 3 */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg w-1/3">
                                <img src={Testimonio3} alt="Testimonio 3" className="w-full object-cover" style={{ height: '200px' }} />
                                <div className="p-4">
                                    <a href="/testimonios/3" className="text-blue-600 hover:text-blue-800 transition duration-300">Conoce más &gt;</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>



                <section className="bg-gray-100 py-4">
                    <div className="container mx-auto flex items-center">
                        {/* Botón para desplazar a la izquierda */}
                        <button className="text-gray-600 hover:text-gray-800">
                            <span className="mr-2">&lt;</span>
                        </button>

                        {/* Título de la sección */}
                        <h2 className="flex-grow text-center text-lg font-bold uppercase">
                            Partners
                        </h2>

                        {/* Botón para desplazar a la derecha */}
                        <button className="text-gray-600 hover:text-gray-800">
                            <span className="ml-2">&gt;</span>
                        </button>
                    </div>

                    <div className="flex overflow-x-auto py-1">
                        <img src={LogoDynatrace} alt="Dynatrace" className="h-20 mx-4" />
                        <img src={LogoOracle} alt="Oracle" className="h-20 mx-4" />
                        <img src={LogoVmware} alt="Vmware" className="h-20 mx-4" />
                        <img src={LogoQuest} alt="Quest" className="h-20 mx-4" />
                    </div>
                </section>

            </main>

        </div>
    );
};

export default NewPage;