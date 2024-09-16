import { RouteRecordRaw } from "vue-router";

export const countryRoute: RouteRecordRaw[] = [
  {
    path: "country",
    name: "admin.country",
    component: () => import("../view/index.vue"),
  },
];
