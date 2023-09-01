import {createPinia} from "pinia";
import {resetStore} from "@/plugins/pinia/reset-store.ts";

export const createStore = () => {
    const store = createPinia();
    store.use(resetStore)
    return store
}