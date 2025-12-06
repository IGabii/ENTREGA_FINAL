import React, { useState, useEffect } from 'react';

import { useAuth } from '../contexto/authcontext';
import axios from 'axios';

const Dashboard = () => {
    const { user, logoutUser, BASE_URL } = useAuth();
    const [equipos, setEquipos] = useState([]);
    
    
    const [formData, setFormData] = useState({
        nombre: '', descripcion: '', precio_alquiler_dia: 0, cantidad_disponible: 0, tipo: 'CAMARA'
    });
    const [editId, setEditId] = useState(null);

    const fetchEquipos = async () => {
        try {
            const res = await axios.get(`${BASE_URL}equipos/`);
            setEquipos(res.data);
        } catch (error) {
            console.error(error);
            if (error.response?.status === 401) logoutUser();
        }
    };

    useEffect(() => { fetchEquipos(); }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editId) {
                await axios.put(`${BASE_URL}equipos/${editId}/`, formData);
            } else {
                await axios.post(`${BASE_URL}equipos/`, formData);
            }
            setFormData({ nombre: '', descripcion: '', precio_alquiler_dia: 0, cantidad_disponible: 0, tipo: 'CAMARA' });
            setEditId(null);
            fetchEquipos();
        } catch (error) { alert('Error al guardar'); }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('¿Eliminar?')) return;
        try {
            await axios.delete(`${BASE_URL}equipos/${id}/`);
            fetchEquipos();
        } catch (error) { alert('Error al eliminar'); }
    };

    const handleEdit = (equipo) => {
        setFormData(equipo);
        setEditId(equipo.id);
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-indigo-700">Panel de Control</h1>
                <div className="flex gap-4 items-center">
                    <span>Hola, <b>{user?.username}</b></span>
                    <button onClick={logoutUser} className="bg-red-500 text-white px-3 py-1 rounded">Salir</button>
                </div>
            </div>

            <div className="bg-white p-6 rounded shadow mb-6">
                <h2 className="text-xl font-bold mb-4">{editId ? 'Editar' : 'Nuevo'} Equipo</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input className="border p-2 rounded" placeholder="Nombre" value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} required />
                    <select className="border p-2 rounded" value={formData.tipo} onChange={e => setFormData({...formData, tipo: e.target.value})}>
                        <option value="CAMARA">Cámara</option>
                        <option value="LENTE">Lente</option>
                        <option value="ACCESORIO">Accesorio</option>
                    </select>
                    <input type="number" className="border p-2 rounded" placeholder="Precio" value={formData.precio_alquiler_dia} onChange={e => setFormData({...formData, precio_alquiler_dia: e.target.value})} required />
                    <input type="number" className="border p-2 rounded" placeholder="Stock" value={formData.cantidad_disponible} onChange={e => setFormData({...formData, cantidad_disponible: e.target.value})} required />
                    <textarea className="border p-2 rounded md:col-span-2" placeholder="Descripción" value={formData.descripcion} onChange={e => setFormData({...formData, descripcion: e.target.value})} required />
                    <button type="submit" className="bg-indigo-600 text-white py-2 rounded md:col-span-2 hover:bg-indigo-700">
                        {editId ? 'Actualizar' : 'Crear'}
                    </button>
                </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {equipos.map(eq => (
                    <div key={eq.id} className="bg-white p-4 rounded shadow border-l-4 border-indigo-500">
                        <h3 className="font-bold">{eq.nombre}</h3>
                        <p className="text-sm text-gray-500">{eq.tipo}</p>
                        <p className="font-bold text-lg mt-2">${eq.precio_alquiler_dia}/día</p>
                        <div className="mt-4 flex gap-2">
                            <button onClick={() => handleEdit(eq)} className="text-blue-600 underline">Editar</button>
                            <button onClick={() => handleDelete(eq.id)} className="text-red-600 underline">Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;