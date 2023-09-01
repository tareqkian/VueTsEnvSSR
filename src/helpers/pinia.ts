import {createPinia} from "pinia";
import {resetStore} from "@/helpers/reset-store";

const store = createPinia();
store.use(resetStore)

export default store