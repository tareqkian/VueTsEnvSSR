import {createSSRApp} from 'vue'
import {createStore} from "@/plugins/pinia";
import {createRouter} from "@/plugins/router"

// Templates
// import "@/style.css"
import App from "@/App.vue"
import PageLayout from "@/components/layouts/PageLayout.vue"


export const createApp = () => {
    const app = createSSRApp(App)
    const store = createStore()
    app.use(store)
    const router = createRouter()
    app.use(router)
    app.component("PageLayout", PageLayout)
    return {  app, router }
}