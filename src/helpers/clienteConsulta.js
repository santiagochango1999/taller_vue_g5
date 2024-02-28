import axios from "axios";

const consultar = async (id) => {
    const data = axios.get(`http://localhost:8080/API/v1.0/Registro/consultas/otro/${id}`).then(r => r.data)
    console.log("datos con consultsmos: " + data);
    return data;

}

const guardar = async (body) => {
    const data = axios.post("http://localhost:8080/API/v1.0/Registro/consultas", body).then(r => r.data)
}

const verificar = async (fecha, idMedico) => {
    try {
        const response = await axios.get(`http://localhost:8080/API/v1.0/Registro/consultas?fecha=${fecha}&idMedico=${idMedico}`).then(r => r.data);
        console.log(response);
        return response === true;
    } catch (error) {
        return false; // En caso de error, asumimos que la cédula no existe
    }
}

const eliminar = async (id) => {
    const data = axios.delete(`http://localhost:8080/API/v1.0/Registro/consultas/${id}`).then(r => r.data);
}

export const consultarFachadaC = async (id) => {
    return await consultar(id);
}

export const guardarFachadaC = async (body) => {
    await guardar(body);
}

export const verificarFachadaC = async (fecha, idMedico) => {
    return await verificar(fecha, idMedico);
}

export const eliminarFachadaC = async (id) => {
    await eliminar(id);
}