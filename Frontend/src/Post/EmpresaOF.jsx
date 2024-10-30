import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const PaginaRegistro = () => {
    const [datosFormulario, setDatosFormulario] = useState({
        name: '',
        esPasantia: '',
        departamento: '',
        image: '',
        description: '',
        competenciasTexto: '',
        caracteristicasTexto: '',
    });

    // Navegación con react-router
    const navigate = useNavigate();

    // Maneja los cambios en los inputs del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatosFormulario(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí manejarías el envío de datos a tu API o backend
        console.log(datosFormulario);
        // navigate('/ruta-destino'); // Descomentar para usar navigate

        try {
            const respuesta = await axios.post(
                'http://localhost:3500/api/vacant/',
                datosFormulario, // Aquí deberías pasar los datos que quieres enviar, en este caso los datos del formulario
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
            console.log(respuesta.data);
        } catch (error) {
            alert(error.response.data.errors[0].message)
        }

    };

    // Renderiza el componente
    return (
        <div className="min-h-screen w-full mx-auto bg-blue-600 p-6">
            <h1 className="text-3xl font-bold text-center text-white mb-6">Publicar Oferta</h1>
            <h3 className="text-2xl font-bold text-center text-white mb-6">Información Oferta</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Campos del formulario */}

                <input
                    type="text"
                    name="name"
                    value={datosFormulario.name}
                    onChange={handleChange}
                    placeholder="Titulo"
                    className="bg-black/40 backdrop-blur-sm p-2 rounded border border-white/40 placeholder-white/70 text-white"
                    required
                />
                {/* ... */}
                <div>
                    <select
                        id="esPasantia"
                        name="esPasantia"
                        value={datosFormulario.esPasantia}
                        onChange={handleChange}
                        className="bg-black/40 backdrop-blur-sm p-2 rounded border border-white/40 placeholder-white/70 text-white w-full"
                        required
                    >
                        <option value="">Tipo de Oferta</option>

                        <option value="true">Pasantía</option>
                        <option value="false">Trabajo</option>
                        {/* ...más opciones... */}
                    </select>
                </div>

                <div>
                    <select
                        id="departamento"
                        name="departamento"
                        value={datosFormulario.departamento}
                        onChange={handleChange}
                        className="bg-black/40 backdrop-blur-sm p-2 rounded border border-white/40 placeholder-white/70 text-white w-full"
                        required
                    >
                        <option value="">Departamento</option>
                        {/* Opciones de servicios */}
                        <option value="departamento1">Santa Ana</option>
                        <option value="departamento2">Ahuachapán</option>
                        <option value="departamento3">Sonsonate</option>
                        <option value="departamento4">Chalatenango</option>
                        <option value="departamento5">La Libertad</option>
                        <option value="departamento6">San Salvador</option>
                        <option value="departamento7">Cuscatlán</option>
                        <option value="departamento8">Cabañas</option>
                        <option value="departamento9">La Paz</option>
                        <option value="departamento10">San Vicente</option>
                        <option value="departamento11">Usulután</option>
                        <option value="departamento12">San Miguel</option>
                        <option value="departamento13">Morazán</option>
                        <option value="departamento14">La Unión</option>
                    </select>
                </div>
                <div>
                    <input
                        type="text"
                        name="image"
                        value={datosFormulario.image}
                        onChange={handleChange}
                        placeholder="URL de la foto"
                        className="bg-black/40 backdrop-blur-sm p-2 rounded border border-white/40 placeholder-white/70 text-white w-full"
                    />
                </div>
                <input
                    type="text"
                    name="salary"
                    value={datosFormulario.salary}
                    onChange={handleChange}
                    placeholder="Salario"
                    className="bg-black/40 backdrop-blur-sm p-2 rounded border border-white/40 placeholder-white/70 text-white"
                    pattern="\d*"
                    title="Por favor, ingrese solo números."
                    required
                />

                <input
                    type="text"
                    name="category"
                    value={datosFormulario.category}
                    onChange={handleChange}
                    placeholder="Categoria"
                    className="bg-black/40 backdrop-blur-sm p-2 rounded border border-white/40 placeholder-white/70 text-white"
                    required
                />

                <br />


                <div className="min-h-fit w-full mx-auto p-0 flex justify-center items-center">
                    <div className="bg-blue-600 p-6 rounded-lg shadow-lg text-white w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-6 text-center">Descripción de la Oferta</h2>

                        {/* Campo de Descripción */}
                        <div>
                            <label className="block font-bold mb-2" htmlFor="description">
                                Descripción
                            </label>
                            <textarea
                                id="description"
                                rows="4"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="De que trata la oferta"
                                name="description"
                                value={datosFormulario.description}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Campo de Competencias */}
                        <div>
                            <label className="block font-bold mb-2" htmlFor="competenciasTexto">
                                Competencias
                            </label>
                            <textarea
                                id="competenciasTexto"
                                rows="4"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Qué competencias busca la oferta"
                                name="competenciasTexto"
                                value={datosFormulario.competenciasTexto}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Campo de Características */}
                        <div>
                            <label className="block font-bold mb-2" htmlFor="caracteristicasTexto">
                                Características
                            </label>
                            <textarea
                                id="caracteristicasTexto"
                                rows="4"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Características de la oferta"
                                name="caracteristicasTexto"
                                value={datosFormulario.caracteristicasTexto}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Se omite el botón de Publicar Oferta */}

                    </div>
                </div>


                {/* Botón de envío */}
                <div className="md:col-span-3 flex justify-center">
                    <button className="bg-white text-blue-500 py-2 px-40 rounded-full">
                        Publicar Oferta
                    </button>
                </div>


            </form>
        </div>
    );
};

export default PaginaRegistro;