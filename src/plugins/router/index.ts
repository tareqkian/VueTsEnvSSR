import * as router from "vue-router";
import routes from "@/plugins/router/routes.ts";
import {getActivePinia, Store} from "pinia";

// const _router = router.createRouter({
//     history: router.createWebHistory(),
//     routes
// })
// _router.beforeResolve(() => {
//     // @ts-ignore
//     getActivePinia()._s.forEach(async (store: Store) => {
//         await store.$reset()
//     });
// })
// export default _router;

export function createRouter(): router.Router {
    const _router = router.createRouter({
        // use appropriate history implementation for server/client
        // import.meta.env.SSR is injected by Vite.
        history: import.meta.env.SSR
            ? router.createMemoryHistory("/")
            : router.createWebHistory("/"),
        routes,
    })

    _router.beforeResolve(() => {
        // @ts-ignore
        getActivePinia()._s.forEach(async (store: Store) => {
            await store.$reset()
        });
    })

    return _router
}

