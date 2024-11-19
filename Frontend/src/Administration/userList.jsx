import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserCard = ({ name, email, role }) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h3 className="text-lg font-bold">{name}</h3>
    <p className="text-gray-800">{email}</p>
    <p className="text-gray-500">{role}</p>
  </div>
);

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(' http://localhost:'); 
        setUsers(response.data.users); 
      } catch (err) {
        console.error('Error al obtener los usuarios:', err);
        setError('No se pudieron cargar los usuarios. Inténtalo más tarde.');
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center my-6">Usuarios Registrados</h1>
      {error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard key={user._id} {...user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminUsersPage;
