import { createRouter, createWebHistory } from "vue-router"
import PhotoApp from './PhotoApp.vue'
import PhotoView from './PhotoView.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'root',
            path: '/',
            component: PhotoApp,
            children: [
                {
                    name: 'photos',
                    path: '/albums/:id',
                    component: PhotoView
                }
            ]
        },
    ]
})