import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Catalogo = () => {
    const [equipos, setEquipos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filtro, setFiltro] = useState('');
    const [modalAbierto, setModalAbierto] = useState(false);
    const [equipoSeleccionado, setEquipoSeleccionado] = useState(null);
    const [dias, setDias] = useState(1);
    
    const BASE_URL = 'http://127.0.0.1:8000/api/';

    // CORRECCIÓN DE URL DE IMAGEN
    const getImagenPorTipo = (tipo) => {
        switch(tipo) {
            case 'CAMARA': return "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80";
            case 'LENTE': return "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?auto=format&fit=crop&w=800&q=80"; // URL CORREGIDA
            case 'ACCESORIO': return "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&fit=crop&w=800&q=80";
            default: return "https://images.unsplash.com/photo-1500634245200-e5245c7574ef?auto=format&fit=crop&w=800&q=80";
        }
    };

    useEffect(() => {
        const fetchEquipos = async () => {
            try {
                const response = await axios.get(`${BASE_URL}equipos/`);
                setEquipos(response.data);
            } catch (error) {
                console.error("Error", error);
            } finally {
                setLoading(false);
            }
        };
        fetchEquipos();
    }, []);

    const abrirModal = (equipo) => {
        setEquipoSeleccionado(equipo);
        setDias(1);
        setModalAbierto(true);
    };

    const cerrarModal = () => {
        setModalAbierto(false);
        setEquipoSeleccionado(null);
    };

    const confirmarReserva = () => {
        const total = equipoSeleccionado.precio_alquiler_dia * dias;
        // Aquí puedes mostrar un modal de éxito más bonito, por ahora usamos alert
        alert(`¡Reserva Exitosa!\nDuración: ${dias} días\nTotal a pagar: $${total.toFixed(2)}`);
        cerrarModal();
    };

    const equiposFiltrados = equipos.filter(eq => 
        eq.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        eq.tipo.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
                        Nuestros Equipos
                    </h1>
                    <p className="text-lg text-gray-500">Stock en tiempo real.</p>
                </div>

                <div className="flex justify-center mb-10 relative z-10">
                    <div className="relative w-full max-w-lg shadow-lg rounded-full">
                        <input
                            type="text"
                            className="w-full pl-12 pr-6 py-3 sm:py-4 rounded-full border-none focus:ring-4 focus:ring-indigo-200 outline-none text-base sm:text-lg text-gray-700"
                            placeholder="Buscar equipo..."
                            value={filtro}
                            onChange={(e) => setFiltro(e.target.value)}
                        />
                        <span className="absolute left-5 top-3 sm:top-4 text-xl sm:text-2xl">🔍</span>
                    </div>
                </div>

                {loading ? (
                    <div className="text-center py-10">Cargando...</div>
                ) : (
                    // Grid Responsive: 1 columna en móvil (sm:grid-cols-2), 3 en desktop
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
                        {equiposFiltrados.map((equipo) => (
                            <div key={equipo.id} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100">
                                <div className="h-48 sm:h-56 overflow-hidden relative">
                                    <img 
                                        src={getImagenPorTipo(equipo.tipo)} 
                                        alt={equipo.nombre}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-md text-indigo-800 text-xs font-bold px-2 py-1 rounded-full uppercase shadow-sm">{equipo.tipo}</span>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        {equipo.cantidad_disponible > 0 ? (
                                            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> DISPONIBLE
                                            </span>
                                        ) : (
                                            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow">AGOTADO</span>
                                        )}
                                    </div>
                                </div>
                                <div className="p-5 flex-1 flex flex-col">
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{equipo.nombre}</h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">{equipo.descripcion}</p>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                        <div>
                                            <p className="text-xs text-gray-400 uppercase font-semibold">Día</p>
                                            <p className="text-xl sm:text-2xl font-black text-indigo-600">${parseInt(equipo.precio_alquiler_dia)}</p>
                                        </div>
                                        <button 
                                            className={`px-4 sm:px-6 py-2 rounded-lg font-bold text-white text-sm sm:text-base shadow-md transition-all ${equipo.cantidad_disponible > 0 ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-300 cursor-not-allowed'}`}
                                            disabled={equipo.cantidad_disponible === 0}
                                            onClick={() => {if(equipo.cantidad_disponible > 0) abrirModal(equipo);}}
                                        >
                                            {equipo.cantidad_disponible > 0 ? 'Alquilar' : 'Sin Stock'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* MODAL RESPONSIVE */}
            {modalAbierto && equipoSeleccionado && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md overflow-hidden transform transition-all scale-100">
                        <div className="bg-indigo-600 px-6 py-4 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-white">Confirmar Alquiler</h3>
                            <button onClick={cerrarModal} className="text-white text-2xl font-bold">&times;</button>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-4 mb-6">
                                <img src={getImagenPorTipo(equipoSeleccionado.tipo)} alt="thumb" className="w-16 h-16 object-cover rounded-lg" />
                                <div>
                                    <h4 className="font-bold text-gray-900">{equipoSeleccionado.nombre}</h4>
                                    <p className="text-indigo-600 font-semibold">${equipoSeleccionado.precio_alquiler_dia} / día</p>
                                </div>
                            </div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Días de alquiler:</label>
                            <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden mb-6">
                                <button onClick={() => setDias(d => Math.max(1, d - 1))} className="px-4 py-2 bg-gray-100 font-bold">-</button>
                                <input type="number" value={dias} readOnly className="flex-1 text-center font-bold text-gray-800 outline-none" />
                                <button onClick={() => setDias(d => d + 1)} className="px-4 py-2 bg-gray-100 font-bold">+</button>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl mb-6 flex justify-between items-center">
                                <span className="text-gray-600 font-medium">Total:</span>
                                <span className="text-2xl font-black text-green-600">${(equipoSeleccionado.precio_alquiler_dia * dias).toFixed(2)}</span>
                            </div>
                            <button onClick={confirmarReserva} className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl mb-2">Confirmar</button>
                            <button onClick={cerrarModal} className="w-full text-gray-500 py-2">Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Catalogo;