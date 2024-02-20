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
        path: '/estudiantes',
        component: () => import('../page/PaginaEstudiante')
    }
    ,
    {
        path: '/HistorialClinico',
        component: () => import('../page/PaginaHistorialClinico')
    }
    ,
    {
        path: '/ServicioMedicos',
        component: () => import('../page/PaginaServicioMedico')
    },
    {
        path: '/departamentos',
        component: () => import('../page/PaginaDepartamento')
    },
    {
        path: '/factura',
        component: () => import('../page/PaginaFactura')
    },

]

const router = createRouter({ history: createWebHashHistory(), routes })
export default router