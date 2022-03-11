<template>
    <div>
        <ul class="list-group">
            <li v-for="(fruta, index) of frutasOrdenadas" :key="index" @click="aumentar(index)" class="list-group-item d-flex justify-content-between align-items-center">
            {{ fruta.nombre }}
            <span class="badge bg-primary rounded-pill">{{ fruta.cantidad }}</span>
            </li>
        </ul>
        <button class="btn btn-danger mt-1" @click="reiniciar()">Reiniciar</button>
    </div>
</template>

<script>

    import { mapState, mapMutations } from 'vuex';
    
    export default {
        name: 'ListaItems',
        computed: {
            ...mapState([
                'frutas'
            ]),
            frutasOrdenadas(){
                let frutas = this.frutas;
                return frutas.sort( (a, b) => b.cantidad - a.cantidad )
            }
        },
        methods: {
            ...mapMutations([
                'aumentar',
                'reiniciar'
            ])
        }
    }
</script>