import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: "/", component: () => import('../page/PaginaPrincipal') },

    { path: "/quienes-somos", component: () => import('../page/QuienesSomos') },
    {
        path: '/registrar',
        component: () => import('../page/PaginaRegistro')
    },
    {
        path: '/seccion',
        component: () => import('../page/PaginaSeccion')
    },
    {
        path: '/:patMatch(.*)*',
        component: () => import('../page/NoFoundPage')
    },
    {
        path: '/pacientes/:cedula',
        component: () => import('../page/PaginaPaciente')
    },
    {
        path: '/HistorialClinico',
        component: () => import('../page/paginaHistorial')
    },
    {
        path: '/departamentos',
        component: () => import('../page/PaginaDepartamento')
    },
    {
        path: '/factura',
        component: () => import('../page/PaginaFactura')
    },
    {
        path: '/ServicioMedicos',
        component: () => import('../page/PaginServiciosMedicos')
    },
    {
        path: '/medicos/:cedula',
        component: () => import('../page/PaginaMedico')
    },
    {
        path: '/Documentos',
        component: () => import('../page/PaginaDocumento')
    }
]

const router = createRouter({ history: createWebHashHistory(), routes })
export default router