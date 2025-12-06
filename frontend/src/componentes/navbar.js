import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexto/authcontext';

const Navbar = () => {
    const { user, logoutUser } = useAuth();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar menú móvil

    // Función para resaltar el link activo
    const isActive = (path) => location.pathname === path ? "bg-indigo-700" : "hover:bg-indigo-600";

    return (
        <nav className="bg-indigo-800 text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    
                    {/* Logo y Marca */}
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">📷</span>
                        <Link to="/" className="font-bold text-xl tracking-wider">PhotoRental</Link>
                    </div>

                    {/* Botón Hamburguesa (Solo visible en Móvil) */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-indigo-900 inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-800 focus:ring-white"
                        >
                            <span className="sr-only">Abrir menú</span>
                            {/* Icono de menú (hamburguesa) o X (cerrar) */}
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Menú Desktop (Oculto en móvil) */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium transition ${isActive('/')}`}>Inicio</Link>
                            <Link to="/catalogo" className={`px-3 py-2 rounded-md text-sm font-medium transition ${isActive('/catalogo')}`}>Catálogo</Link>
                            {/* ENLACE DE AYUDA ELIMINADO */}
                            <Link to="/contacto" className={`px-3 py-2 rounded-md text-sm font-medium transition ${isActive('/contacto')}`}>Contacto</Link>
                            
                            {user ? (
                                <>
                                    <Link to="/dashboard" className={`px-3 py-2 rounded-md text-sm font-medium bg-indigo-900 border border-indigo-500 ${isActive('/dashboard')}`}>Dashboard</Link>
                                    <button onClick={logoutUser} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-sm font-medium transition">Salir</button>
                                </>
                            ) : (
                                <Link to="/login" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-sm font-medium transition shadow-md">Login Admin</Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Menú Móvil (Desplegable) */}
            {isOpen && (
                <div className="md:hidden bg-indigo-900 pb-4">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/')}`}>Inicio</Link>
                        <Link to="/catalogo" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/catalogo')}`}>Catálogo</Link>
                        {/* ENLACE DE AYUDA ELIMINADO */}
                        <Link to="/contacto" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contacto')}`}>Contacto</Link>
                        
                        {user ? (
                            <>
                                <Link to="/dashboard" onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium bg-indigo-800 border border-indigo-500 ${isActive('/dashboard')}`}>Dashboard</Link>
                                <button onClick={() => {logoutUser(); setIsOpen(false);}} className="w-full text-left bg-red-500 hover:bg-red-600 px-3 py-2 rounded-md text-base font-medium mt-2">Salir</button>
                            </>
                        ) : (
                            <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full text-center bg-green-500 hover:bg-green-600 px-3 py-2 rounded-md text-base font-medium mt-4">Login Admin</Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;