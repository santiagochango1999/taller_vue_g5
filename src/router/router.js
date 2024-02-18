import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/registrar',
        component: () => import('../page/PaginaRegistro')
    },
    {
        path:'/seccion',
        component:()=>import('../page/PaginaSeccion')
    },
    {
        path:'/:patMatch(.*)*',
        component:()=>import('../page/NoFoundPage')
    }
]

const router = createRouter({ history: createWebHashHistory(), routes })
export default router