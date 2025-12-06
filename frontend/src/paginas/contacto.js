import React, { useState } from 'react';

const Contacto = () => {
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setEnviado(true);
        setTimeout(() => setEnviado(false), 3000); 
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900">Contáctanos</h1>
                    <p className="mt-4 text-xl text-gray-500">
                        ¿Tienes dudas sobre algún equipo? Estamos aquí para ayudarte.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-xl overflow-hidden">
                    
                    {/* Sección Izquierda: Información */}
                    <div className="bg-indigo-900 p-10 text-white flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                            <p className="mb-8 text-indigo-200">
                                Visítanos en nuestra oficina central o envíanos un mensaje directo. Respondemos más rápido de lo que tarda en renderizar un video 4K.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <span className="text-2xl">📍</span>
                                    <span>Lima 775, CABA</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-2xl">📞</span>
                                    <span>+54 11 1234-5678</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-2xl">✉️</span>
                                    <span>photorentalgmail.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h4 className="font-bold mb-4">Horarios de Atención</h4>
                            <div className="text-indigo-200 text-sm">
                                <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                                <p>Sábados: 10:00 AM - 2:00 PM</p>
                                <p className="mt-2 italic opacity-75">*Domingos cerrado (día de estudio y Netflix)</p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="p-10">
                        {enviado ? (
                            <div className="h-full flex flex-col items-center justify-center text-center animate-pulse">
                                <div className="text-6xl mb-4">✅</div>
                                <h3 className="text-2xl font-bold text-green-600">¡Mensaje Enviado!</h3>
                                <p className="text-gray-500 mt-2">Te contactaremos a la brevedad.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                                    <input required type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Juan Pérez" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input required type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="juan@ejemplo.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Mensaje</label>
                                    <textarea required rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Hola, quisiera consultar por la disponibilidad de la Sony A7..."></textarea>
                                </div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150">
                                    Enviar Mensaje
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacto;