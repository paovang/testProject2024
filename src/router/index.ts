import { createRouter, createWebHistory } from "vue-router";
import Test from "../views/Test.vue";
import User from "../views/User.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
      children: [
        { path: "test", component: Test },
        { path: "user", component: User },
      ],
    },
    {
      path: "/customer",
      children: [{ path: "test", component: Test }],
    },
  ],
});

export default router;
