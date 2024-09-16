import { createRouter, createWebHistory } from "vue-router";
import Test from "../views/Test.vue";
import User from "../views/User.vue";
import Test2 from "../views/Test2.vue";
import Test3 from "../views/Test3.vue";
import { countryRoute } from "../views/module/admin/router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
      children: [
        { path: "test", name: "test", component: Test },
        { path: "user", name: "user", component: User },
        { path: "test2", component: Test2 },
        { path: "test3", component: Test3 },
        ...countryRoute,
      ],
    },
    {
      path: "/customer",
      children: [{ path: "test", component: Test }],
    },
  ],
});

export default router;
