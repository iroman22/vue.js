const app = new Vue({

    el: '#app',
    data: {
        saludo: 'Vue Life cycle'
    },
    beforecreate(){
        console.log('before create');
    },
    created(){
        console.log('created');
    },
    beforeMount(){
        console.log('before mount');
    },
    mounted(){
        console.log('mounted');
    },
    beforeUpdate(){
        console.log('before update');
    },
    updated(){
        console.log('updated');
    },
    beforeDestroy(){
        console.log('before destroy');
    },
    destroyed(){
        console.log('destroyed');
    },
    methods: {
        destruir(){
            this.$destroy();
        }
    }

});