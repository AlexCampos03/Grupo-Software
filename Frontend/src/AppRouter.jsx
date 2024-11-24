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
import Ayuda from './pages/Ayuda';
import Politicas from './pages/Politicas';
import AdminUsersPage from './Administration/userList';
import AdminApplicationsPage from './Administration/adminsupervisar';
import AdminOffersPage from './Administration/adminofertas';
import AdminNavbar from './components/AdminNavbar';
import { AuthProvider, useAuth } from './context/AuthProvide';
import ProtectedRoutes from './Routes/ProtectedRoutes';
import UnauthorizedPage from './pages/Unauthorized';
import Testimony from './components/Testimony';

// Navbar dinámico basado en el rol del usuario
const DynamicNavbar = () => {
  const { userRole } = useAuth();

  // Renderiza AdminNavbar para administradores, Navbar para otros roles
  return userRole === 'admin' ? <AdminNavbar /> : <Navbar />;
};

const AppRouter = () => {
  return (
    <AuthProvider>
      <Router>
        {/* Navbar dinámico */}
        <DynamicNavbar />
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
          <Route path="/testimonios/1" element={<Testimony number={1} />} />
          <Route path="/testimonios/2" element={<Testimony number={2} />} />
          <Route path="/Ayuda" element={<Ayuda />} />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />

          {/* Rutas protegidas para administrador */}
          <Route
            path="/admin/users"
            element={
              <ProtectedRoutes rolesAllowed={['admin']}>
                <AdminUsersPage />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/admin/applications"
            element={
              <ProtectedRoutes rolesAllowed={['admin']}>
                <AdminApplicationsPage />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/admin/offers"
            element={
              <ProtectedRoutes rolesAllowed={['admin']}>
                <AdminOffersPage />
              </ProtectedRoutes>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default AppRouter;
