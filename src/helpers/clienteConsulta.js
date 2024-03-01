import axios from "axios";

const consultar = async (id) => {
    try {
        const data = axios.get(`http://localhost:8080/API/v1.0/Registro/consultas/otro/${id}`).then(r => r.data)
        console.log("datos con consultsmos: " + data);
        return data;
    } catch (error) {
        return console.log("EL error es: " + error);; // En caso de error, asumimos que la cédula no existe
    }

}
const consultar3 = async (id) => {
    try {
        const data = axios.get(`http://localhost:8080/API/v1.0/Registro/consultas/${id}`).then(r => r.data)
        console.log("datos con consultsmos: " + data);
        return data;
    } catch (error) {
        return console.log("EL error es: " + error);; // En caso de error, asumimos que la cédula no existe
    }
}

const consultar2 = async (id, cedula) => {
    try {
        const data = axios.get(`http://localhost:8080/API/v1.0/Registro/consultas/otro2/${id}/${cedula}`).then(r => r.data)
        console.log("datos con consultsmos: " + data);
        return data;
    } catch (error) {
        return console.log("EL error es: " + error);; // En caso de error, asumimos que la cédula no existe
    }

}

const guardar = async (body) => {
    try {
        const data = axios.post("http://localhost:8080/API/v1.0/Registro/consultas", body).then(r => r.data)
    } catch (error) {
        return console.log("EL error es: " + error);; // En caso de error, asumimos que la cédula no existe
    }
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

const actualizar = async (id, body) => {
    const data = axios.put(`http://localhost:8080/API/v1.0/Registro/consultas/${id}`, body).then(r => r.data);
    console.log(data);
}

export const consultarFachadaC = async (id) => {
    return await consultar(id);
}
export const consultarFachadaC3 = async (id) => {
    return await consultar3(id);
}

export const consultarFachadaC2 = async (id, cedula) => {
    return await consultar2(id, cedula);
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

export const actualizarFachada = async (id, body) => {
    await actualizar(id, body);
}