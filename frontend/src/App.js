import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar';
import Home from './paginas/home';
import Catalogo from './paginas/catalogo';
import Login from './paginas/login';
import Dashboard from './paginas/dashboard';
import NotFound from './paginas/notfound';
import Footer from './componentes/footer';
import Contacto from './paginas/contacto';

// La importación de FAQ/Ayuda ha sido ELIMINADA.

import { AuthProvider } from './contexto/authcontext';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <AuthProvider>
          <Navbar />
          <main className="container mx-auto p-4 flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/contacto" element={<Contacto />} />
              
              {/* RUTA DE AYUDA ELIMINADA */}
              
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;