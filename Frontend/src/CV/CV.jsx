import React, { useState } from "react";

const CV = () => {

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        genero: "",
        fechaNacimiento: "",
        departamento: "",
        calleColonia: "",
        contacto1: "",
        contacto2: "",
        email: "",
        expectativaLaboral: "",
        experienciaLaboral: "",
        educacionInicial: "",
        educacionMedia: "",
        educacionSuperior: "",
        habilidades: "",
        competencias: "",
        caracteristicas: "",
    });


    const [cvGuardado, setCvGuardado] = useState(false); // Estado para saber si hay un CV guardado

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Función para guardar el CV
    const guardarCV = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3000/api/guardar-cv",
                formData
            );
            console.log("CV guardado con éxito:", response.data);
            setCvGuardado(true); // Actualizamos el estado para indicar que el CV está guardado
        } catch (error) {
            console.error("Error al guardar el CV:", error);
        }
    };

    // Función para actualizar el CV
    const actualizarCV = async () => {
        try {
            const response = await axios.put(
                "http://localhost:3000/api/actualizar-cv",
                formData
            );
            console.log("CV actualizado con éxito:", response.data);
        } catch (error) {
            console.error("Error al actualizar el CV:", error);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">

            {/* Formulario CV */}
            <main className="flex-grow bg-gradient-to-b from-blue-500 to-blue-300 py-10">
                <div className="container mx-auto px-4">
                    <h2 className="text-white text-center text-3xl font-bold mb-6">
                        CV Virtual
                    </h2>
                    <p className="text-white text-center mb-8">
                        Completa este CV con tu información personal y laboral para hacer
                        más fácil tu búsqueda laboral.
                    </p>

                    {/* Form */}
                    <form className="bg-blue-100 shadow-xl rounded-lg p-6 space-y-8">
                        {/* Información Personal */}
                        <section>
                            <h3 className="text-blue-700 font-bold text-xl mb-4">
                                Información Personal
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Apellido"
                                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <select className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Género</option>
                                    <option>Masculino</option>
                                    <option>Femenino</option>
                                    <option>Otro</option>
                                </select>
                                <input
                                    type="date"
                                    placeholder="Fecha de Nacimiento"
                                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Departamento"
                                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Calle o Colonia"
                                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Número de Contacto 1"
                                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Número de Contacto 2"
                                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="email"
                                    placeholder="Correo Electrónico"
                                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </section>

                        {/* Información Laboral */}
                        <section>
                            <h3 className="text-blue-700 font-bold text-xl mb-4">
                                Información Laboral
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <input
                                    type="text"
                                    placeholder="Expectativa Laboral"
                                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Experiencia Laboral"
                                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Educación Inicial"
                                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Educación Media"
                                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Educación Superior"
                                    className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </section>

                        {/* Habilidades y Competencias */}
                        <section>
                            <h3 className="text-blue-700 font-bold text-xl mb-4">
                                Habilidades y Competencias
                            </h3>
                            <div className="space-y-4">
                                <textarea
                                    placeholder="Describe tus habilidades"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="4"
                                ></textarea>
                                <textarea
                                    placeholder="Describe tus competencias"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="4"
                                ></textarea>
                                <textarea
                                    placeholder="Describe tus características"
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="4"
                                ></textarea>
                            </div>
                        </section>


                        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                            {/* Select de Servicio */}
                            <select className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Servicio</option>
                                <option>Profesional</option>
                                <option>Estudiante</option>
                            </select>

                            {/* Input de archivo */}
                            <input
                                type="file"
                                className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                accept="image/*"
                            />

                            {/* Botones Guardar/Actualizar */}
                            {!cvGuardado ? (
                                <button
                                    onClick={guardarCV}
                                    className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-400"
                                >
                                    Guardar CV
                                </button>
                            ) : (
                                <button
                                    onClick={actualizarCV}
                                    className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                >
                                    Actualizar CV
                                </button>
                            )}
                        </div>

                    </form>
                </div>
            </main>
        </div>
    );
};

export default CV;
