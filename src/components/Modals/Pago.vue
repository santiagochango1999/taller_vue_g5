<template>
<h1>hol</h1>
    <div class="factura">
        <header>
            <h1>Comprobante de compra/venta</h1>
        </header>
        <div class="container">
            <div class="info-comprobante">
                <p><strong>Fecha de emisión:</strong> 06/10/2023</p>
                <p><strong>Vencimiento:</strong> 30 días</p>
            </div>
            <div class="info-cliente">
                <p><strong>Cliente:</strong> Nombre y cedula</p>
                <p><strong>Teléfonos:</strong> tel </p>
                <p><strong>Direccion:</strong> dir </p>
            </div>
        </div>
        <table class="tabla-productos">
            <caption>Tabla de servicios</caption>
            <thead>
                <tr>
                    <th>Servicio</th>
                    <th>Detalle</th>
                    <th>Precio</th>
                    <th>Iva 12%</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Emit del servicio</td>
                    <td>Emit del detalle</td>
                    <td>Emit del valor</td>
                    <td>subtconIVA</td>
                    <td>Total</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div>

    </div>
</template>


<script>

export default {
components
}
</script>


<style scoped>
.factura {
    font-family: Arial, sans-serif;
    width: 80%;
    margin: 0 auto;
    border: 1px solid #000;
    padding: 20px;
    border-radius: 10px;
}

header {
    background-color: #222;
    color: #fff;
    text-align: center;
    padding: 10px;
}

header h1 {
    font-size: 24px;
    margin: 0;
}

/* Comprobante */

.comprobante {
    border: 1px solid #ddd;
    padding: 20px;
}

.container {
    text-align: left;
    padding-left: 5%;
}

/* Tabla de productos */

.tabla-productos {
    width: 100%;
    border-collapse: collapse;
}

.tabla-productos th,
.tabla-productos td {
    background-color: #f2f2f2;
    text-align: center;
    padding: 5px;
    border: 1px solid #000;
}


.totales {
    border-top: 1px solid#ddd;
    padding-top: 10px;
}

.totales p {
    margin-bottom: 5px;
}


.tabla-productos caption {
    font-weight: bold;
    margin-bottom: 10px;
}



</style>