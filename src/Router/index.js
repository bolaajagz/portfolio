import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Home',   
            path: '/', 
            component: () => import('../../src/components/Views/Home.vue')

        },
        {
            name: 'Skills',   
            path: '/Skills', 
            component: () => import('../../src/components/Views/Skills.vue')

        },
        {
            name: 'Works',   
            path: '/Works', 
            component: () => import('../../src/components/Views/Works.vue')

        },
        {
            name: 'About',   
            path: '/About', 
            component: () => import('../../src/components/Views/About.vue')

        },
        {
            name: 'Contact',   
            path: '/Contact', 
            component: () => import('../../src/components/Views/Contact.vue')

        }
    ]
});

export default router;