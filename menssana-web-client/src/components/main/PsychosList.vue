<template>
    <ul class="breadcrumb breadcrumb--gt">
        <li class="breadcrumb__item">
            <a href="/">Inicio</a>
        </li>
        <li class="breadcrumb__item">
            <a href="/psychologists">Psicólogos</a>
        </li>
    </ul>
    <div class="grid-sm u-gap-2">
        <div class="grid-c-12" >
            <h4>List Component</h4>
        </div>
        <div class="grid-c-3 grid-r-8 text-white u-text-center gradient-bgb-purple">
           <h4>Filters</h4>
        </div>
        <div class="grid-c-9 grid-sm grid-r-8 p-2 gradient-bgb-purple">
            <div v-for="psycho of psychos" :key="psycho.id" class="grid-c-4 m-1">
                <!-- <div class="card p-2">
                    <div class="content u-text-center pt-3">
                        <figure class="avatar avatar--xl"><img src="https://images.unsplash.com/profile-1495427732560-fe5248ad6638?dpr=1&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=60&amp;cs=tinysrgb&amp;crop=faces&amp;bg=fff"></figure>
                        <p id="projectname" class="title mt-2 mb-0">{{ psycho.name + ' ' + psycho.last_name }}</p>
                        <p>{{ psycho.description.substring( 0, 80 ) + '...' }}</p>
                    </div>
                     <div class="card__action-bar  u-center">
                        <button class="btn gradient-bg-purple text-white btn--xs" @click="$router.push('/psychologists/' + psycho.id)">Ver más</button>
                    </div>
                </div> -->
                <div class="card p-2">
                    <div class="content">
                        <div class="space"></div>
                        <div class="tile tile--center">
                            <div class="tile__icon">
                                <figure class="avatar">
                                    <img src="https://organicthemes.com/demo/profile/files/2018/05/profile-pic-132x132.jpg" alt="Person">
                                </figure>
                            </div>

                            <div class="tile__container">
                                <p class="tile__title">{{ psycho.name + ' ' + psycho.last_name }}</p>
                                <p class="tile__subtitle"><a>CED: {{ psycho.cid }}</a></p>
                            </div>
                        </div>
                        <p>{{ psycho.description.substring( 0, 80 ) + '...' }}</p>
                    </div>
                    <div class="card__footer level content">
                        6:32 PM - 3 Jul 18
                        <div class="u-pull-right">
                            <div class="level-right">
                                <router-link :to="{ path: '/psychologists/' + psycho.id }">Ver Perfil</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

export default {
  name: 'PsychosListComponent',
  setup(){
      const store = useStore()
      const psychos = computed( () => store.state.psychos )

      onMounted(() => {
          store.dispatch('fetchPsc')
      })

      return { psychos }
      
  }
}
</script>

<style>
    @import '@/assets/css/main.css';
</style>
