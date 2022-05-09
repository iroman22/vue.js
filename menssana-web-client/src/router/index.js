import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index'
import { computed } from 'vue'
import HomeView from '../views/main/Home'
import LoginView from '../views/Login'
import PsychologistsListView from '../views/main/PsychologistsList'
import PsychologistsDetailView from '../views/main/PsychologistsDetail'
import AboutView from '../views/main/About'
import ContactView from '../views/main/Contact'
import ErrorView from '../views/404'

const userState = computed( () => store.state.userDetails ).value

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        beforeEnter: () => {
            store.dispatch('getUserAction')
        }
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
        beforeEnter: () => {
            store.dispatch('getUserAction')
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView,
        beforeEnter: () => {
            store.dispatch('getUserAction')
        }
    },
    {
        path: '/psychologists',
        name: 'psychologistsList',
        component: PsychologistsListView,
        beforeEnter: () => {
            store.dispatch('getUserAction')
        }
    },
    {
        path: '/psychologists/:id',
        name: 'psychologistsDetail',
        component: PsychologistsDetailView,
        beforeEnter: () => {
            store.dispatch('getUserAction')
        }
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
        beforeEnter: (to, from, next) => {
            store.dispatch('getUserAction').then(() => {
                if( userState.isSignIn ){
                    next('/')
                }else{
                    next()
                }
            })
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: ErrorView,
        beforeEnter: () => {
            store.dispatch('getUserAction')
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router