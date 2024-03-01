<template>
    <div class="container">
        <div class="containerInicio">
            <div>
                <img id="imagen2" src="../assets/imglogo2.jpg" alt="no hay" />
            </div>
            <NavbarInicio />
            <div class="containerButton">
                <button><router-link to="/seccion">INGRESAR </router-link></button>
                <button><router-link to="/registrar">REGISTRAR </router-link></button>
            </div>
        </div>
        <h1>Descarga de documentos</h1>
        <div class="docs">
            <ul class="one">
                <li class="two">
                    <a href="https://repositorio.uce.edu.ec/archivos/imyanez/HDD/AUDITORIA/Recomendaciones_auditoria.pdf">Informe
                        de
                        cumplimiento</a>
                </li>
                <li class="two">
                    <a
                        href="https://repositorio.uce.edu.ec/archivos/imyanez/HDD/AUDITORIA/INFORME_AUDITORIA_OCTUBRE_2022.pdf">Informe
                        de
                        Auditoria</a>
                </li>
                <li class="two"><a
                        href="https://www.salud.gob.ec/wp-content/uploads/2019/04/ESTATUTO-GESTION-ORGANIZACIONES-HOSPITALES-RO-339-25-09-2012.pdf">Estatuto
                        de procesos hospitalarios</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
import NavbarInicio from '../components/NavbarInicio.vue';
export default {
    components: {
        NavbarInicio
    }
}
</script>

<style scoped>
a{
    color: white;
}

.docs {
    align-self: auto;
    margin-left: 35%;
}

ul.one {
    text-align: center;
    /* Centra la lista */
    width: 40%;
    
}

li.two {

    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.container {
    display: grid;
    align-items: center;
    justify-content: center;
    background-color: rgb(43, 104, 145);
    border-bottom-right-radius: 60px;
    width: 100%;
    height: 100%;
}

#imagen2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 120px;
    border-bottom-right-radius: 60px;
}

.containerOpcion li {
    display: inline-block;
    margin: 20px;
    font: bold 18px verdana;
    color: rgb(255, 255, 255);
}

.containerOpcion {
    padding-right: 70px;
    padding-top: 15px;
}

.containerButton {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: right;
    padding-right: 30px;
}

button {
    margin: 5px;
    background-color: rgb(255, 255, 255);
    font-size: 18px;
    border: none;
    border-radius: 6px;
    color: rgb(0, 0, 0);
    padding: 10px 20px;
}

button:hover {
    background-color: rgb(43, 104, 145);
}

.containerInicio {
    width: 1500px;
    display: grid;
    text-align: right;
    grid-template-columns: 20% 60% 20%;
    border-radius: 10px;
    background-color: #007c76;
    box-shadow: 15px 10px 5px 5px #00000033;
}</style>