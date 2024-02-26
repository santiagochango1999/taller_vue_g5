import axios from "axios";

const buscartodos = async () => {
    const data = await axios.get("http://localhost:8080/API/v1.0/Registro/medicos").then(r => r.data);
    return data;
}

export const buscartodoFachadaM = async () => {
    return await buscartodos();
}
/* 
//verificacion de cedula y buscar ---------------------------------------
const verificarCedulaExistenteM = async (cedula) => {
    try {
        const response = await axios.get(`http://localhost:8080/API/v1.0/Registro/medicos?cedula=${cedula}`).then(r => r.data);
        return response === true;
    } catch (error) {
        return false; // En caso de error, asumimos que la cédula no existe
    }
}

const buscarM = async (cedula) => {
        const data = await axios.get(`http://localhost:8080/API/v1.0/Registro/medicos/${cedula}`).then(r => r.data);
        return data
}

export const verificarCedulaExistenteMfachada = async (cedula) => {
    return await verificarCedulaExistenteM(cedula);

}

export const buscarMFachada = async (cedula) => {
    return await buscarM(cedula);
} */