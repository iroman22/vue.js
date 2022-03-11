import { createStore } from 'vuex'

export default createStore({
  state: {
    frutas: [
      { id: 0, nombre: 'manzana', cantidad: 0 },
      { id: 1, nombre: 'Pera', cantidad: 0 },
      { id: 2, nombre: 'naranja', cantidad: 0 }
    ]
  },
  getters: {
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad++;
    },
    reiniciar(state){
      state.frutas.forEach(fruta => {
        fruta.cantidad = 0;
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
