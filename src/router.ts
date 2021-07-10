import { createRouter, createWebHashHistory } from "vue-router"

const home = () => import("./App.vue")
const button = () => import("./components/button/demo.vue")

const routes = [
  { path: "/", redirect: "/button" },
  {
    path: "/button",
    name: "button",
    component: button
  }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})