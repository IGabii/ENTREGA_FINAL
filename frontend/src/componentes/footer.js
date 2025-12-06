import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <span>📷</span> PhotoRental
                        </h2>
                        <p className="text-gray-400 text-sm mt-1">Tu socio creativo de confianza.</p>
                    </div>
                    <div className="flex gap-6 text-sm text-gray-400">
                        <span className="hover:text-white transition cursor-pointer">Términos</span>
                        <span className="hover:text-white transition cursor-pointer">Privacidad</span>
                        <span className="hover:text-white transition cursor-pointer">Contacto</span>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} PhotoRental. Proyecto Final Full Stack.
                </div>
            </div>
        </footer>
    );
};

export default Footer;