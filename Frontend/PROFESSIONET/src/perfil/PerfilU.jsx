import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

export default function PerfilUsuario() {
  const [perfil, setPerfil] = useState(null);
  const [isUser, setIsUser] = useState(true); // Aquí agregué un estado para saber si el usuario está logueado o no
  const [jobs, setJobs] = useState([]);

  const JobCard = ({ name, company, esPasantia, image }) => { // Hook para manejar la navegación

    const handleViewMore = (_id) => {
      navigate(`/trabajosuo/${_id}`);
    };

    return (
      <div className="bg-white rounded-lg shadow-lg p-6 relative">
        <img src={image} alt={name} className="w-full h-32 object-cover" />
        <h3 className="text-lg font-bold mt-4">{name}</h3>
        <p className="text-gray-800">{company.companyName}</p>
        <p className="text-gray-500">{esPasantia ? "Pasantia" : "Trabajo"}</p>
      </div>
    );
  };

  useEffect(() => {
    const obtenerDatosUsuario = async () => {
      try {
        const respuesta = await axios.get('http://localhost:3500/api/auth/whoami', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }); // Sustituye con tu URL real
        setPerfil(respuesta.data); // Suponiendo que la API responde con los datos del usuario directamente

        if (respuesta.data.roles[0] === "user") {
          setIsUser(true);
          // console.log("es usuario");
        } else {

          setIsUser(false);
          const respuesta = await axios.get('http://localhost:3500/api/vacant/own', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });
          // console.log(respuesta.data.vacants);
          setJobs(respuesta.data.vacants);
        }

      } catch (error) {
        console.error('Hubo un error al obtener los datos del usuario:', error);
      }
    };

    obtenerDatosUsuario();
  }, []);

  if (!perfil) {
    return <div>Cargando perfil...</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg my-6">
      {isUser ?
        (<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Columna Izquierda: Datos generales y contacto */}
          <div className="col-span-1 bg-blue-600 p-4 rounded-lg text-white">
            <h3 className="text-xl font-bold mb-4">Datos Generales</h3>
            <p><strong>Nombres:</strong> {perfil.firstName}</p>
            <p><strong>Apellidos:</strong> {perfil.lastName}</p>
            <p><strong>Fecha de nacimiento:</strong> {perfil.birthDate}</p>
            {/* <p><strong>Profesión:</strong> {perfil.profesion}</p> */}
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <p><strong>Teléfono:</strong> {perfil.telephone}</p>
              <p><strong>Correo:</strong> {perfil.email}</p>
              <p><strong>Departamento:</strong> {perfil.department}</p>
            </div>
          </div>

          {/* Columna Central: Descripción, habilidades y competencias */}
          <div className="col-span-2">
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Descripción</h3>
              {/* <p>{perfil.descripcion}</p> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Habilidades</h3>
                <ul className="list-disc ml-5">
                  {perfil.habilities.map((habilities, index) => (
                    <li key={index}>{habilities}</li>

                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Competencias</h3>
                <ul className="list-disc ml-5">
                  {perfil.competences.map((competences, index) => (
                    <li key={index}>{competences}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <br />
              <h3 className="text-xl font-bold mb-2">Características</h3>
              {/* Suponiendo que perfil.caracteristicas es un objeto con clave y valor booleano */}
              <div className="flex flex-wrap">
                <ul className="list-disc ml-5">
                  {perfil.caracteristics.map((caracteristics, index) => (
                    <li key={index}>{caracteristics}</li>
                  ))}
                </ul>
              </div>
              <br />
              {/* <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition duration-300"> */}
              <Link to="/UsuarioCV" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition duration-300">
                Editar Perfil
              </Link>
            </div>
          </div>
        </div>) : (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">{perfil.companyName}</h2>
            <p className="mb-2"><span className="font-semibold">Departamento:</span> {perfil.department}</p>
            <p className="mb-4"><span className="font-semibold">Email:</span> {perfil.email}</p>
            <br />
            <Link to="/EmpresaOF" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition duration-300">
              Agregar Vacante
            </Link>
            <div className="container mx-auto p-6">
              <h1 className="text-3xl font-bold text-center my-6">Vacantes propias publicadas</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job) => (
                  <JobCard key={job._id} {...job} image={job.imageUrl} />
                ))}
              </div>

            </div>
          </div>
        )}
    </div>
  );
}
