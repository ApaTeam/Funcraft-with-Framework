const routes = [
  {
    path: "/main",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "Profile", component: () => import("pages/Profile.vue") },
      { path: "Ranks", component: () => import("pages/Rankings.vue") }
    ]
  },
  {
    path: "",
    component: () => import("src/layouts/BlankLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Splash.vue") },
      { path: "quest", component: () => import("pages/Quest_Screen.vue") },
      { path: "map", component: () => import("pages/Quest_Map.vue") },
      { path: "login", component: () => import("pages/Login.vue") },
      { path: "Input", component: () => import("pages/InputSales.vue") }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
