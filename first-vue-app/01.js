
const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [
            {nombre: 'Pera', cantidad: 10},
            {nombre: 'Manzana', cantidad: 0},
            {nombre: 'Platano', cantidad: 11}
        ],
        nuevaFruta: '',
        total: 0
    },
    methods:{
        agregarFruta(){
           console.log('Diste Click');
           this.frutas.push({
               nombre: this.nuevaFruta,
               cantidad: 0
           });
           this.nuevaFruta = [];
        },
        editarNombre(){
            
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            
            for(fruta of this.frutas) {
                this.total = this.total + fruta.cantidad;
            }
        }
    }
})