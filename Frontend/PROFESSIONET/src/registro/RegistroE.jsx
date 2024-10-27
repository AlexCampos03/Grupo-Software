import { useState } from 'react';
import axios from 'axios';

const PaginaRegistro2 = () => {
    // Estado inicial para todos los campos del formulario
    const [datosFormulario, setDatosFormulario] = useState({
        companyName: '',
        department: '',
        municipality: '',
        email: '',
        password: '',
        confirmacion: '',
        ruc: '',
        telephone: '',
        logoEmpresa: null
    });


    const handleChange = (e) => {
        setDatosFormulario({ ...datosFormulario, [e.target.name]: e.target.value });
    };

    const handleUrlChange = (e) => {
        setDatosFormulario({ ...datosFormulario, urlLogoEmpresa: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Comprobación de que la contraseña y la confirmación son iguales
        if (datosFormulario.password !== datosFormulario.confirmacion) {
            alert('Las contraseñas no coinciden.');
            return; // Detiene la función si las contraseñas no coinciden
        }

        console.log(datosFormulario);

        let response = null;
        try {
            response = await axios.post('http://localhost:3500/api/auth/register-company', JSON.stringify(datosFormulario), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);
            alert('Usuario registrado correctamente');
            redirect('/');
        } catch (error) {
            console.log(error);
            alert(error.response.data.error)
        }

    };


    // Renderiza el componente
    return (
        <div className="max-h-screen w-full mx-auto bg-blue-600 p-6">
            <h1 className="text-3xl font-bold text-center text-white mb-6">Registro de Empresa</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">


                <input
                    type="text"
                    name="companyName"
                    value={datosFormulario.companyName}
                    onChange={handleChange}
                    placeholder="Nombre de empresa"
                    className="bg-black/40 backdrop-blur-sm p-2 rounded border border-white/40 placeholder-white/70 text-white"
                    required
                />


                <div>
                    <select
                        id="departamento"
                        name="department"
                        value={datosFormulario.department}
                        onChange={handleChange}
                        className="bg-black/40 backdrop-blur-sm p-2 rounded border border-white/40 placeholder-white/70 text-white w-full"
                        required
                    >
                        <option value="">Departamento</option>

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
                    <select
                        id="municipio"
                        name="municipality"
                        value={datosFormulario.municipio}
                        onChange={handleChange}
                        className="bg-black/40 backdrop-blur-sm p-2 rounded border border-white/40 placeholder-white/70 text-white w-full"
                        required
                    >
                        <option value="">Municipio</option>
                        {/* Opciones de servicios */}
                        <option value="municipio1">Ahuachapán</option>
                        <option value="municipio2">Apaneca</option>
                        <option value="municipio3">Atiquizaya</option>
                        <option value="municipio4">Concepción de Ataco</option>
                        <option value="municipio5">El Refugio</option>
                        <option value="municipio6">Guaymango</option>
                        <option value="municipio7">Jujutla</option>
                        <option value="municipio8">San Francisco Menéndez</option>
                        <option value="municipio9">San Lorenzo</option>
                        <option value="municipio10">San Pedro Puxtla</option>
                        <option value="municipio11">Tacuba</option>
                        <option value="municipio12">Turín</option>

                        <option value="municipio13">Candelaria de la Frontera</option>
                        <option value="municipio14">Chalchuapa</option>
                        <option value="municipio15">Coatepeque</option>
                        <option value="municipio16">El Congo</option>
                        <option value="municipio17">El Porvenir</option>
                        <option value="municipio18">Masahuat</option>
                        <option value="municipio19">Metapán</option>
                        <option value="municipio20">San Antonio Pajonal</option>
                        <option value="municipio21">San Sebastian Saltrillo</option>
                        <option value="municipio22">Santa Ana</option>
                        <option value="municipio23">Santa Rosa Guachipilín</option>
                        <option value="municipio24">Santiago de la Frontera</option>
                        <option value="municipio25">Texistepeque</option>

                        <option value="municipio26">Acajutla</option>
                        <option value="municipio27">Armenia</option>
                        <option value="municipio28">Caluco</option>
                        <option value="municipio29">Cuisnahuat</option>
                        <option value="municipio30">Izalco</option>
                        <option value="municipio31">Juayúa</option>
                        <option value="municipio32">Nahuizalco</option>
                        <option value="municipio33">Nahulingo</option>
                        <option value="municipio34">Salcoatitán</option>
                        <option value="municipio35">San Antonio del Monte</option>
                        <option value="municipio36">San Julián</option>
                        <option value="municipio37">Santa Catarina Masahuat</option>
                        <option value="municipio38">Santa Isabel Ishuatán</option>
                        <option value="municipio39">Santo Domingo Guzmán</option>
                        <option value="municipio40">Sonsonate</option>
                        <option value="municipio41">Sonzacate</option>

                        <option value="municipio42">Agua Caliente</option>
                        <option value="municipio43">Arcatao</option>
                        <option value="municipio44">Azacualpa</option>
                        <option value="municipio45">Chalatenango</option>
                        <option value="municipio46">Comalapa</option>
                        <option value="municipio47">Citalá</option>
                        <option value="municipio48">Concepción Quezaltepeque</option>
                        <option value="municipio49">Dulce Nombre de María</option>
                        <option value="municipio50">El Carrizal</option>
                        <option value="municipio51">El Paraíso</option>
                        <option value="municipio52">La Laguna</option>
                        <option value="municipio53">La Palma</option>
                        <option value="municipio54">La Reina</option>
                        <option value="municipio55">Las Vueltas</option>
                        <option value="municipio56">Nueva Concepción</option>
                        <option value="municipio57">Nueva Trinidad</option>
                        <option value="municipio58">Nombre de Jesús</option>
                        <option value="municipio59">Ojos de Agua</option>
                        <option value="municipio60">Potonico</option>
                        <option value="municipio61">San Antonio de la Cruz</option>
                        <option value="municipio62">San Fernando</option>
                        <option value="municipio63">San Francisco Lempa</option>
                        <option value="municipio64">San Ignacio</option>
                        <option value="municipio65">San Isidro Labarador</option>
                        <option value="municipio66">San José Cancasque</option>
                        <option value="municipio67">San José Las Flores</option>
                        <option value="municipio68">San Luis del Carmen</option>
                        <option value="municipio69">San Miguel de Mercedes</option>
                        <option value="municipio70">San Rafael</option>
                        <option value="municipio71">Santa Rita</option>
                        <option value="municipio72">Tejutla</option>

                        <option value="municipio73">Candelaria</option>
                        <option value="municipio74">Cojutepeque</option>
                        <option value="municipio75">El Carmen</option>
                        <option value="municipio76">El Rosario</option>
                        <option value="municipio77">Monte San Juan</option>
                        <option value="municipio78">Oratorio de Concepción</option>
                        <option value="municipio79">San Bartolomé Perulapía</option>
                        <option value="municipio80">San Cristóbal</option>
                        <option value="municipio81">San José Guayabal</option>
                        <option value="municipio82">San Pedro Perulapán</option>
                        <option value="municipio83">San Rafael Cedros</option>
                        <option value="municipio84">San Ramón</option>
                        <option value="municipio85">Santa Cruz Analquito</option>
                        <option value="municipio86">Santa Cruz Michapa</option>
                        <option value="municipio87">Suchitoto</option>
                        <option value="municipio88">Tenancingo</option>

                        <option value="municipio89">Aguilares</option>
                        <option value="municipio90">Apopa</option>
                        <option value="municipio91">Ayutuxtepeque</option>
                        <option value="municipio92">Cuscatancingo</option>
                        <option value="municipio93">Ciudad Delgado</option>
                        <option value="municipio94">El Paisnal</option>
                        <option value="municipio95">Guazapa</option>
                        <option value="municipio96">Ilopango</option>
                        <option value="municipio97">Mejicanos</option>
                        <option value="municipio98">Nejapa</option>
                        <option value="municipio99">Panchimalco</option>
                        <option value="municipio100">Rosario de Mora</option>
                        <option value="municipio101">San Marcos</option>
                        <option value="municipio102">San Martín</option>
                        <option value="municipio103">San Salvador</option>
                        <option value="municipio104">Santiago Texacuangos</option>
                        <option value="municipio105">Santo Tomás</option>
                        <option value="municipio106">Soyapango</option>
                        <option value="municipio107">Tonacatepeque</option>

                        <option value="municipio108">Antiguo Cuscatlán</option>
                        <option value="municipio109">Chiltuipán</option>
                        <option value="municipio110">Ciudad Arce</option>
                        <option value="municipio111">Colón</option>
                        <option value="municipio112">Comasagua</option>
                        <option value="municipio113">Huizúcar</option>
                        <option value="municipio114">Jayaque</option>
                        <option value="municipio115">Jicalapa</option>
                        <option value="municipio116">La Libertad</option>
                        <option value="municipio117">Santa Tecla</option>
                        <option value="municipio118">Nuevo Cuscatlán</option>
                        <option value="municipio119">San Juan Opico</option>
                        <option value="municipio120">Quezaltepeque</option>
                        <option value="municipio121">Sacacoyo</option>
                        <option value="municipio122">San José Villanueva</option>
                        <option value="municipio123">San Matías</option>
                        <option value="municipio124">San Pablo Tacachico</option>
                        <option value="municipio125">Talnique</option>
                        <option value="municipio126">Tamanique</option>
                        <option value="municipio127">Teotepeque</option>
                        <option value="municipio128">Tepecoyo</option>
                        <option value="municipio129">Zaragoza</option>

                        <option value="municipio130">Apastepeque</option>
                        <option value="municipio131">Guadalupe</option>
                        <option value="municipio132">San Cayetano Istepeque</option>
                        <option value="municipio133">San Esteban Catarina</option>
                        <option value="municipio134">San Ildefonso</option>
                        <option value="municipio135">San Lorenzo</option>
                        <option value="municipio136">San Sebastián</option>
                        <option value="municipio137">San Vicente</option>
                        <option value="municipio138">Santa Clara</option>
                        <option value="municipio139">Santo Domingo</option>
                        <option value="municipio140">Tecoluca</option>
                        <option value="municipio141">Tepetitán</option>
                        <option value="municipio142">Verapaz</option>

                        <option value="municipio143">Cinquera</option>
                        <option value="municipio144">Dolores</option>
                        <option value="municipio145">Guacotecti</option>
                        <option value="municipio146">Ilobasco</option>
                        <option value="municipio147">Jutiapa</option>
                        <option value="municipio148">San Isidro</option>
                        <option value="municipio149">Sensuntepeque</option>
                        <option value="municipio150">Tejutepeque</option>
                        <option value="municipio151">Victoria</option>

                        <option value="municipio152">Cuyultitán</option>
                        <option value="municipio153">El Rosario</option>
                        <option value="municipio154">Jerusalén</option>
                        <option value="municipio155">Mercedes de la Ceiba</option>
                        <option value="municipio156">Olocuilta</option>
                        <option value="municipio157">Paraíso de Osorio</option>
                        <option value="municipio158">San Antonio Masahuat</option>
                        <option value="municipio159">San Emigdio</option>
                        <option value="municipio160">San Francisco Chinameca</option>
                        <option value="municipio161">San Juan Nonualco</option>
                        <option value="municipio162">San Juan Talpa</option>
                        <option value="municipio163">San Juan Tepezontes</option>
                        <option value="municipio164">San Luis Talpa</option>
                        <option value="municipio165">San Luis la Herradura</option>
                        <option value="municipio166">San Miguel Tepezontes</option>
                        <option value="municipio167">San Pedro Masahuat</option>
                        <option value="municipio168">San Pedro Nonualco</option>
                        <option value="municipio169">San Rafael Obrajuelo</option>
                        <option value="municipio170">Santa María Ostuma</option>
                        <option value="municipio171">Santiago Nonualco</option>
                        <option value="municipio172">Tapalhuaca</option>
                        <option value="municipio173">Zacatecoluca</option>

                        <option value="municipio174">Alegría</option>
                        <option value="municipio175">Berlín</option>
                        <option value="municipio176">California</option>
                        <option value="municipio177">Concepción Batres</option>
                        <option value="municipio178">El Triunfo</option>
                        <option value="municipio179">Ereguayquín</option>
                        <option value="municipio180">Estanzuelas</option>
                        <option value="municipio181">Jiquilisco</option>
                        <option value="municipio182">Jucuapa</option>
                        <option value="municipio183">Jucuarán</option>
                        <option value="municipio184">Mercedes Umaña</option>
                        <option value="municipio185">Nueva Granada</option>
                        <option value="municipio186">Ozatlán</option>
                        <option value="municipio187">Puerto el Triunfo</option>
                        <option value="municipio188">San Agustín</option>
                        <option value="municipio189">San Buenaventura</option>
                        <option value="municipio190">San Dionisio</option>
                        <option value="municipio191">San Francisco Javier</option>
                        <option value="municipio192">Santa Elena</option>
                        <option value="municipio193">Santa María</option>
                        <option value="municipio194">Santiago de María</option>
                        <option value="municipio195">Tecapán</option>
                        <option value="municipio196">Usulután</option>

                        <option value="municipio197">Carolina</option>
                        <option value="municipio198">Chapeltique</option>
                        <option value="municipio199">Chinameca</option>
                        <option value="municipio200">Chirilagua</option>
                        <option value="municipio201">Ciudad Barrios</option>
                        <option value="municipio202">Comacarán</option>
                        <option value="municipio203">El Tránsito</option>
                        <option value="municipio204">Lolotique</option>
                        <option value="municipio205">Moncagua</option>
                        <option value="municipio206">Nueva Guadalupe</option>
                        <option value="municipio207">Nuevo Edén de San Juan</option>
                        <option value="municipio208">Quelepa</option>
                        <option value="municipio209">San Antonio del Mosco</option>
                        <option value="municipio210">San Gerardo</option>
                        <option value="municipio211">San Jorge</option>
                        <option value="municipio212">San Luis de la Reina</option>
                        <option value="municipio213">San Miguel</option>
                        <option value="municipio214">San Rafael Oriente</option>
                        <option value="municipio215">Sesori</option>
                        <option value="municipio216">Uluazapa</option>

                        <option value="municipio217">Arambala</option>
                        <option value="municipio218">Cacaopera</option>
                        <option value="municipio219">Chilanga</option>
                        <option value="municipio220">Corinto</option>
                        <option value="municipio221">Delicias de Concepción</option>
                        <option value="municipio222">El Divisadero</option>
                        <option value="municipio223">EL Rosario</option>
                        <option value="municipio224">Gualococti</option>
                        <option value="municipio225">Guatajiaga</option>
                        <option value="municipio226">Joateca</option>
                        <option value="municipio227">Jocoaitique</option>
                        <option value="municipio228">Jocoro</option>
                        <option value="municipio229">Lolotiquillo</option>
                        <option value="municipio230">Meanguera</option>
                        <option value="municipio231">Osicala</option>
                        <option value="municipio232">Perquín</option>
                        <option value="municipio233">San Carlos</option>
                        <option value="municipio234">San Fernando</option>
                        <option value="municipio235">San Francisco Gotera</option>
                        <option value="municipio236">San Isidro</option>
                        <option value="municipio237">San Simón</option>
                        <option value="municipio238">Sensembra</option>
                        <option value="municipio239">Sociedad</option>
                        <option value="municipio240">Torola</option>
                        <option value="municipio241">Yamabal</option>
                        <option value="municipio242">Yoloaiquin</option>

                        <option value="municipio243">Anamorós</option>
                        <option value="municipio244">Bolívar</option>
                        <option value="municipio245">Concepción de Oriente</option>
                        <option value="municipio246">Conchagua</option>
                        <option value="municipio247">El Carmen</option>
                        <option value="municipio248">El Sauce</option>
                        <option value="municipio249">Intipucá</option>
                        <option value="municipio250">La Unión</option>
                        <option value="municipio251">Lislique</option>
                        <option value="municipio252">Meanguera del Golfo</option>
                        <option value="municipio253">Nueva Esparta</option>
                        <option value="municipio254">Pasaquina</option>
                        <option value="municipio255">Polorós</option>
                        <option value="municipio256">San Alejo</option>
                        <option value="municipio257">San José</option>
                        <option value="municipio258">Santa Rosa de Lima</option>
                        <option value="municipio259">Yayantique</option>
                        <option value="municipio260">Yucuaiquín</option>


                        {/* ...más opciones... */}
                    </select>
                </div>

                <input
                    type="email"
                    name="email"
                    value={datosFormulario.email}
                    onChange={handleChange}
                    placeholder="Correo Electronico"
                    className="bg-black/40 backdrop-blur-sm p-2 rounded border border-white/40 placeholder-white/70 text-white"
                    required
                />


                <input
                    type="text"
                    name="password"
                    value={datosFormulario.password}
                    onChange={handleChange}
                    placeholder="Contraseña"
                    className="bg-black/40 backdrop-blur-sm p-2 rounded border border-white/40 placeholder-white/70 text-white"
                    required
                />



                <input
                    type="text"
                    name="confirmacion"
                    value={datosFormulario.confirmacion}
                    onChange={handleChange}
                    placeholder="Confirmación"
                    className="bg-black/40 backdrop-blur-sm p-2 rounded border border-white/40 placeholder-white/70 text-white "
                    required
                />

                <input
                    type="text"
                    name="ruc"
                    value={datosFormulario.ruc}
                    onChange={handleChange}
                    placeholder="RUC"
                    className="bg-black/40 backdrop-blur-sm p-2 rounded border border-white/40 placeholder-white/70 text-white "
                    required
                />
                <input
                    type="tel"
                    name="telephone"
                    value={datosFormulario.telephone}
                    onChange={handleChange}
                    placeholder="Teléfono"
                    className="bg-black/40  backdrop-blur-sm p-2 rounded border border-white/40 placeholder-white/70 text-white"
                    required
                />

                <div>
                </div>
                <div>

                    <input
                        type="text"
                        id="logoEmpresaUrl"
                        name="logoEmpresaUrl"
                        onChange={handleUrlChange}
                        placeholder="Ingresa el URL del logo aquí"
                        className="bg-black/40 backdrop-blur-sm p-2 rounded border border-white/40 text-white w-full"
                    />
                </div>

                <div className="md:col-span-3 flex justify-center">
                    <button type="submit" className="bg-white text-blue-500 py-2 px-40 rounded-full">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PaginaRegistro2;