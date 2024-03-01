import axios from "axios"

const consultarTodo = async () => {
    const data = axios.get(`http://localhost:8080/API/v1.0/Registro/facturas`).then(r => r.data)
    console.log(data)
    return data
}

const buscar = async (id) => {
    const data = axios.get(`http://localhost:8080/API/v1.0/Registro/facturas/${id}`).then(r => r.data)
    console.log(data)
    return data
}

const insertar = async (body) => {
    const data = axios.post(`http://localhost:8080/API/v1.0/Registro/facturas`, body).then(r => r.data);
}

const eliminar = async (id) => {
    const data = axios.delete(`http://localhost:8080/API/v1.0/Registro/facturas/${id}`).then(r => r.data);
}


export const consultarFachada = async () => {
    return await consultarTodo();
}

export const buscarFachadaf = async (id) => {
    return await buscar(id)
}

export const insertarfachadaF = async (body) => {
    await insertar(body);
}
export const eliminarFachadaF = async (id) => {
    await eliminar(id);
}
