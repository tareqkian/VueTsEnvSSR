import {createApp} from 'vue'
import store from "@/helpers/pinia"
import router from "@/router"

// Templates
import "@/style.css"
import App from "@/App.vue"
import PageLayout from "@/components/layouts/PageLayout.vue"

const app = createApp(App)
app.use(store)
app.use(router)
app.component('PageLayout',PageLayout)
app.mount('#app')