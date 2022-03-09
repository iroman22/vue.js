Vue.component('hijo', {
    template: 
    `
        <div class="p-5 m-2 bg-success">
            <h4>Componente hijo: {{ numero }}</h4>
            <h4>Nombre: {{ nombre }}</h4>
            <button class="btn btn-warning" @click="numero++">+</button>
        </div>
    `,
    props: ['numero'],
    data(){
        return {
            nombre: 'Ignacio'
        }
    },
    mounted(){
        this.$emit('nombreHijo', this.nombre);
    }
})