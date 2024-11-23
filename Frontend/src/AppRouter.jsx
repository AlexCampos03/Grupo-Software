import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './registro/Login';
import Trabajos from './pages/Trabajos';
import Pasantias from './pages/Pasantias';

import RegistroU from './registro/RegistroU';
import RegistroE from './registro/RegistroE';
import Registro from './registro/Registro';
import PerfilU from './perfil/PerfilU';
import PerfilE from './perfil/PerfilE';
import UsuarioCV from './Post/UsuarioCV'
import EmpresaOF from './Post/EmpresaOF'
import Respuestas from './Post/RespuestasOF'
import Seguridad from './pages/Seguridad'
import Ayuda from './pages/Ayuda'
import Politicas from './pages/Politicas'
import AdminUsersPage from './Administration/userList';
import AdminApplicationsPage from './Administration/adminsupervisar';
import AdminOffersPage from './Administration/adminofertas';
import AdminNavbar from './components/AdminNavbar';
const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trabajos" element={<Trabajos />} />
        <Route path="/pasantias" element={<Pasantias />} />
        <Route path="/RegistroU" element={<RegistroU />} />
        <Route path="/RegistroE" element={<RegistroE />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/PerfilU" element={<PerfilU />} />
        <Route path="/PerfilE" element={<PerfilE />} />
        <Route path="/UsuarioCV" element={<UsuarioCV />} />
        <Route path="/EmpresaOF" element={<EmpresaOF />} />
        <Route path="/Seguridad" element={<Seguridad />} />
        <Route path="/Ayuda" element={<Ayuda />} />
        <Route path="/Politicas" element={<Politicas />} />
        <Route path="/Respuestas" element={<Respuestas />} />
        <Route path="/admin" element={<AdminNavbar />}/>
        <Route path="/admin/users" element={<AdminUsersPage />} />
        <Route path="/admin/applications" element={<AdminApplicationsPage />} />
        <Route path="/admin/offers" element={<AdminOffersPage />} />
        
        {/* Asegúrate de tener una ruta para cada componente de página que tengas */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
