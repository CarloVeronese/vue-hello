const createApp = Vue.createApp

const app = createApp({
    data(){
        return{
            message: 'Hello Vue',
            picture: './img/Ratchet&Clank.webp' 
        }
    }
}).mount('#app')