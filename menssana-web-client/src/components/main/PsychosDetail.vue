<template>
    <ul class="breadcrumb breadcrumb--gt">
        <li class="breadcrumb__item">
            <a href="/">Inicio</a>
        </li>
        <li class="breadcrumb__item">
            <a href="/psychologists">Psicólogos</a>
        </li>
        <li class="breadcrumb__item breadcrumb__item--active">
            <a href="#">Jhon Doe</a>
        </li>
    </ul>
    <div class="grid-sm u-gap-2">
        <div class="grid-c-4 m-1" >
            <h4>Profile</h4>
            <div class="grid-c-4">
                <div class="card p-2">
                    <div class="content u-text-center pt-3">
                        <figure class="avatar avatar--xl"><img src="https://images.unsplash.com/profile-1495427732560-fe5248ad6638?dpr=1&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=60&amp;cs=tinysrgb&amp;crop=faces&amp;bg=fff"></figure>
                        <p id="projectname" class="title mt-2 mb-0">Jhon Doe</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla velit labore veritatis, ratione nemo sunt eius nobis facere commodi necessitatibus explicabo totam eligendi id quam</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid-c-4 m-1">
            <h4>Get an appointment</h4>
            <div v-for="psycho of psychos" :key="psycho.id" class="grid-c-4">
                <div class="card p-2">
                    <div class="content u-text-center pt-3">
                        <p id="projectname" class="title mt-2 mb-0">{{ psycho.name + ' ' + psycho.last_name }}</p>
                        <p>{{ psycho.description.substring( 0, 80 ) + '...' }}</p>
                    </div>
                        <div class="card__action-bar  u-center">
                        <button class="btn gradient-bg-purple text-white btn--xs">Ver más</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid-c-4  m-1">
           <h4>Reviews</h4>
            <div v-for="psycho of psychos" :key="psycho.id" class="grid-c-4">
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
                                <p class="tile__title">Joanne Doe</p>
                                <p class="tile__subtitle"><a>@jdoe</a></p>
                            </div>
                        </div>
                        <p>Testing my new DSLR. Wow check out that deer! <a href="!#">#nature</a></p>
                    </div>
                    <div class="card__footer level content">
                        6:32 PM - 3 Jul 18
                        <div class="u-pull-right">
                            <div class="level-right">
                                <a class="level-item">
                                    <span class="icon"><i class="fa fa-wrapper small fa-reply" aria-hidden="true"></i></span>
                                </a>
                                <a class="level-item">
                                    <span class="icon"><i class="fa fa-wrapper small fa-retweet" aria-hidden="true"></i></span>
                                </a>
                                <a class="level-item">
                                    <span class="icon"><i class="fa fa-wrapper small fa-heart" aria-hidden="true"></i></span>
                                </a>
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
  name: 'PsychosDetailComponent',
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
