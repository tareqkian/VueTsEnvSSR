import * as router from "vue-router";
import routes from "@/router/routes.ts";
import {getActivePinia, Store} from "pinia";

const _router = router.createRouter({
    history: router.createWebHistory(),
    routes
})
_router.beforeResolve(() => {
    // @ts-ignore
    getActivePinia()._s.forEach(async (store: Store) => {
        await store.$reset()
    });
})

export default _router;