import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobModal = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-lg">
        <h2 className="text-2xl font-bold mb-4">{job.name}</h2>
        <p><strong>Empresa:</strong> {job.company.companyName}</p>
        <p><strong>Tipo:</strong> {job.esPasantia ? 'Pasantía' : 'Trabajo'}</p>
        <p className="mt-4">{job.description || 'Sin descripción disponible.'}</p>
        <button
          onClick={onClose}
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

const JobCard = ({ job, onViewMore }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 relative">
      <img src={job.imageUrl} alt={job.name} className="w-full h-32 object-cover" />
      <h3 className="text-lg font-bold mt-4">{job.name}</h3>
      <p className="text-gray-800">{job.company.companyName}</p>
      <p className="text-gray-500">{job.esPasantia ? 'Pasantía' : 'Trabajo'}</p>
      <button
        onClick={() => onViewMore(job._id)}
        className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
      >
        Ver más
      </button>
    </div>
  );
};

const TrabajosPage = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      // Reemplaza 'URL_DE_TU_API' con la URL real de tu API
      try {
        let url = 'http://localhost:3000/api/vacant/work'; // URL real
        if (search) {
          url = 'http://localhost:3000/api/vacant/work/category/${search}'; // filtrar por categoría
        }
        const response = await axios.get(url);
        setJobs(response.data.vacants); 
        console.log(response.data.vacants);
      } catch (error) {
        console.error('Error al obtener los trabajos:', error);
      }
    };

    fetchJobs();
  }, [search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleViewMore = async (jobId) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/vacant/work/${jobId}`);
      setSelectedJob(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error al obtener los detalles del trabajo:', error);
    }
  };
  

  const handleCloseModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center my-6">TRABAJOS</h1>
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Buscar por categoría"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} onViewMore={handleViewMore} />
        ))}
      </div>

      {isModalOpen && <JobModal job={selectedJob} onClose={handleCloseModal} />}
    </div>
  );
};

export default TrabajosPage;
