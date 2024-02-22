import axios from "axios";

const consultar = async (id) => {
    const data = axios.get(`http://localhost:8080/API/v1.0/Registro/consultas/otro/${id}`).then(r => r.data)
    console.log("datos con consultsmos: "+data);
    return data;

}

export const consultarFachadaC = async (id) => {
    return await consultar(id);
}