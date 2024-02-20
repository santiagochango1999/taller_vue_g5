import axios from "axios";

const insertar = async (body) => {
    const data = axios.post(`http://localhost:8080/API/v1.0/Registro/pacientes`, body).then(r => r.data);
    console.log(data)
}



export const insertarfachada = async (body) => {
    await insertar(body);
}