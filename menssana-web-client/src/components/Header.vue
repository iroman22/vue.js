<template>
    <div class="header header-fixed u-unselectable header-animated">
        <div class="header-brand">
            <div class="nav-item no-hover">
                <a><h6 class="title">Logo</h6></a>
            </div>
            <div class="nav-item nav-btn" id="header-btn">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="header-nav" id="header-menu">
            <div class="nav-left">
                <div class="nav-item">
                    <a href="/">Inicio</a>
                </div>
                <div class="nav-item">
                    <a href="/psychologists">Psicólogos</a>
                </div>
                <div class="nav-item">
                    <a href="/about">Acerca de</a>
                </div>
                <div class="nav-item">
                    <a href="/contact">Contáctanos</a>
                </div>
            </div>

            <div class="nav-right">
                <div v-if="!userState.isSignIn" class="nav-item">
                    <a href="/login">Iniciar Sesión</a>
                </div>
                <div v-if="!userState.isSignIn" class="nav-item">
                    <a href="#">Registrarse</a>
                </div>
                <div v-if="userState.isSignIn" class="nav-item has-sub" id="dropdown">
                    <a class="nav-dropdown-link">
                        <div class="tile m-1 level">
                        <div class="tile__icon">
                            <figure class="avatar avatar--sm"><img src="https://images.unsplash.com/profile-1495427732560-fe5248ad6638?dpr=1&amp;auto=format&amp;fit=crop&amp;w=64&amp;h=64&amp;q=60&amp;cs=tinysrgb&amp;crop=faces&amp;bg=fff"></figure>
                        </div>
                        <div class="tile__container">
                            <p class="tile__title m-0">{{ userState.data.name }}</p>
                        </div>
                    </div>
                    </a>
                    
                    <ul class="dropdown-menu" id="dropdown-menu" role="menu">
                        <li role="menu-item"><a href="#">First Item</a></li>
                        <li class="dropdown-menu-divider"></li>
                        <li role="menu-item"><a href="#" @click="logOut">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import '../assets/js/main'
import { computed } from 'vue';
import { useStore } from 'vuex';
import router from '../router';
import '@/assets/js/main'

export default {
  name: 'HeaderComponent',
  setup(){
    const store = useStore()
    const userState = computed( () => store.state.userDetails )

    const logOut = () => {
        store.dispatch('logOutAction')
        router.push('/login')
    }


    return { userState, logOut }
  }
}
</script>
