const app = new Vue({
    el: '#app',
    data:{
        mensajes: []
    },
    created(){
        this.fetchData();
    },
    methods:{
        fetchData(){
            fetch("https://matiasmsgshop.pythonanywhere.com/mensajes")
            .then(response => response.json())
            .then(data => this.mensajes = data)
        },
        clase(e){
            if(e === 'cotizacion'){
                return 'text-bg-warning';
            } else if( e === 'informacion'){
                return 'text-bg-info'
            }
            return 'text-bg-light'
        }
    }
})