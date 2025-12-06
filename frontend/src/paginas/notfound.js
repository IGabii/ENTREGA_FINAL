
import React from 'react';

const NotFound = () => {
    return (
        <div className="text-center py-20">
            <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
            <p className="text-2xl text-gray-700 mb-6">Página No Encontrada</p>
            <p className="text-gray-500">La URL a la que intentas acceder no existe en esta aplicación.</p>
        </div>
    );
};

export default NotFound;