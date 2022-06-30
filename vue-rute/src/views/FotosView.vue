<template>
  <div class="">
    <h1>Galeria de fotos: {{ $route.params.id }}</h1>

    <router-link 
    :to="{ name: 'fotos', params: { id: index + 1 } }" 
    v-for="(foto, index) of fotos" 
    :key="index">
    <button>foto {{ foto }}</button>
    </router-link>

    <Foto></Foto>

    <button @click="home">Home</button>
    <button @click="anterior">Anterior</button>
    <button @click="siguiente">Siguiente</button>
    <img>
  </div>
</template>

<script>

    import Foto from "@/components/Foto.vue"

    export default{
        name: 'FotosView',
        components: {
            Foto
        },
        data(){
          return{
            fotos: [
              1,
              2,
              3,
              4
            ]
          }
        },
        methods: {
          home(){
            this.$router.push('/');
          },
          anterior(){
            this.$router.go(-1);
          },
          siguiente(){
            this.$router.go(1);
          }
        }
    }
    
</script>
