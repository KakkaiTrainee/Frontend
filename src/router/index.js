import { createRouter, createWebHistory } from "vue-router"
import ContentView from '../views/ContentView.vue'
import HotelView from'../views/HotelView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
    path: '/',
    name: 'Home',
    component: ContentView
    },
    {
        path: '/hotel',
        name: 'Hotel',
        component: HotelView
        },
    ]
})
export default router