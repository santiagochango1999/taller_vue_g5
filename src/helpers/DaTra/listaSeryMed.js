import "core-js/stable";
import "regenerator-runtime/runtime";

const convertirlista = (lista) => {
    const datos = [];
    lista.forEach((elemento)=>{
        const aux = elemento.nombre+" "+elemento.apellido;
        datos.push(aux);
    });
    return datos;
};
const convertirlistanombre = (lista) => {
    const datos = [];
    lista.forEach((elemento)=>{
        const aux = elemento[1];
        datos.push(aux);
    });
    return datos;
};
export const listaFachada = (lista) => {
    return convertirlista(lista);
}
export const listaNombreFachada = (lista) => {
    return convertirlistanombre(lista);
}