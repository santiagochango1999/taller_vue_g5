import axios from "axios";

const insertar = async (body) => {
    const data = axios.post(`http://localhost:8080/API/v1.0/Registro/pacientes`, body).then(r => r.data);
}

const verificarCedulaExistente = async (cedula) => {
    try {
        const response = await axios.get(`http://localhost:8080/API/v1.0/Registro/pacientes?cedula=${cedula}`).then(r => r.data);
        return response === true;
    } catch (error) {
        return false; // En caso de error, asumimos que la cédula no existe
    }
}

const buscar = async (cedula) => {
    try {
        const data = await axios.get(`http://localhost:8080/API/v1.0/Registro/pacientes/${cedula}`).then(r => r.data);
        return data
    } catch (error) {
        return console.log("EL error es: "+error);; // En caso de error, asumimos que la cédula no existe
    }
}

export const verificarCedulaExistentefachada = async (cedula) => {
    return await verificarCedulaExistente(cedula);

}

export const insertarfachada = async (body) => {
    await insertar(body);
}

export const buscarFachada = async (cedula) => {
    return await buscar(cedula);
}