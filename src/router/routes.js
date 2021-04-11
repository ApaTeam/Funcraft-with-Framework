const routes = [
  {
    path: "/main",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }]
  },
  {
    path: "",
    component: () => import("src/layouts/BlankLayout.vue"),
    children: [{ path: "", component: () => import("pages/Splash.vue") }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
