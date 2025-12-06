import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-white">
            
            <div className="relative bg-indigo-900 text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
                        alt="Fondo cámara" 
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                    {/* Títulos adaptables */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight drop-shadow-xl">
                        Tu Visión, <span className="text-indigo-400 block sm:inline">Nuestro Equipo</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-indigo-100 max-w-2xl mb-8 sm:mb-10 leading-relaxed px-2">
                        La plataforma de alquiler más rápida. Cámaras, lentes e iluminación profesional al alcance de tu mano.
                    </p>
                    
                    
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center px-4">
                        <Link to="/catalogo" className="w-full sm:w-auto text-center bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105">
                            Explorar Catálogo
                        </Link>
                        <Link to="/login" className="w-full sm:w-auto text-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-900 font-bold py-3 px-8 rounded-full transition duration-300">
                            Iniciar Sesion
                        </Link>
                    </div>
                </div>
            </div>

            
            <div className="py-12 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-sm sm:text-base text-indigo-600 font-semibold tracking-wide uppercase">Servicio Premium</h2>
                        <p className="mt-2 text-2xl sm:text-4xl leading-8 font-extrabold tracking-tight text-gray-900">
                            ¿Por qué elegirnos?
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 text-center md:text-left">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 mx-auto md:mx-0">⚡</div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Reserva Instantánea</h3>
                            <p className="text-sm sm:text-base text-gray-600">Revisa stock y alquila en segundos desde tu celular o computadora.</p>
                        </div>
                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 text-center md:text-left">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 mx-auto md:mx-0">🛡️</div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Seguro Incluido</h3>
                            <p className="text-sm sm:text-base text-gray-600">Cobertura total contra fallas técnicas para que trabajes tranquilo.</p>
                        </div>
                        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 text-center md:text-left">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 mx-auto md:mx-0">💎</div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Calidad Cine</h3>
                            <p className="text-sm sm:text-base text-gray-600">Marcas líderes de la industria: Sony, Canon, Blackmagic y ARRI.</p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="py-12 sm:py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="w-full md:w-1/2 relative">
                        <div className="hidden md:block absolute top-4 -left-4 w-full h-full bg-indigo-200 rounded-2xl transform -rotate-2"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                            alt="Equipo trabajando" 
                            className="relative w-full rounded-2xl shadow-xl"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">Sobre Nosotros</h2>
                        <div className="prose text-gray-500 text-base sm:text-lg">
                            <p className="mb-4">En <b>PhotoRental</b>, nos dedicamos a empoderar a los creadores de contenido...</p>
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg italic text-gray-700 my-6 text-sm sm:text-base">
                                "Pero en realidad soy  un estudiante de Desarrollo Full Stack corriendo contra el reloj para entregar este proyecto final. y poder recibirme"
                            </div>
                            <p>Este proyecto representa meses de aprendizaje en React y Python.</p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="py-8 sm:py-12 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <p className="text-gray-400 font-medium uppercase tracking-widest mb-6 sm:mb-8 text-xs sm:text-sm">Confían en nosotros</p>
                    <div className="flex justify-center gap-6 sm:gap-16 opacity-50 flex-wrap grayscale hover:grayscale-0 transition-all">
                        <span className="text-xl sm:text-2xl font-black text-gray-800">SONY</span>
                        <span className="text-xl sm:text-2xl font-black text-gray-800">Canon</span>
                        <span className="text-xl sm:text-2xl font-black text-gray-800">Nikon</span>
                        <span className="text-xl sm:text-2xl font-black text-gray-800">GoPro</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;