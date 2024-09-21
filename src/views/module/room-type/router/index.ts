import { RouteRecordRaw } from "vue-router";

export const roomTypeRoute: RouteRecordRaw[] = [
  {
    path: "room-type",
    name: "admin.room.type",
    component: () => import("../views/index.vue"),
  },
];
