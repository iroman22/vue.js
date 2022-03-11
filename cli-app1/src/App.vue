<template>
  <div class="container mt-5">
    <CabeceraMain></CabeceraMain>
    <ListaItems></ListaItems>
  </div>
</template>

<script>
import ListaItems from './components/ListaItems.vue'
import CabeceraMain from './components/CabeceraMain.vue'

export default {
  name: 'App',
  components: {
    CabeceraMain,
    ListaItems
  }
}
</script>

