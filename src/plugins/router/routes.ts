import {RouteRecordRaw} from "vue-router";
import MasterLayout from "@/components/layouts/MasterLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "MasterLayout",
    component: MasterLayout,
    meta: {requireAuthentication: true},
    children: [
      {path: "/",  name: "test", component: () => import("@modules/Users/Views/Test.vue")},
      {path: "/2",  name: "test2", component: () => import("@modules/Users/Views/Test2.vue")},
    ]
  }
]

export default routes