const routes = [
  {
    path: "/main",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [
      { name: "Home", path: "", component: () => import("pages/Index.vue") },
      { path: "Performance", component: () => import("src/pages/Performance.vue") },
      { path: "Ranks", component: () => import("pages/Rankings.vue") },
      { path: "Chat", component: () => import("pages/Chat.vue") },
      { path: "Sales", component: () => import("pages/SalesHistory.vue") },
      { path: "Profile", component: () => import("pages/Profile.vue") }
    ]
  },
  {
    path: "",
    component: () => import("src/layouts/BlankLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Splash.vue") },
      {
        path: "quest/:QuestId",
        component: () => import("pages/Quest_Screen.vue")
      },
      { path: "map", component: () => import("pages/Quest_Map.vue") },
      {
        name: "Login",
        path: "login",
        component: () => import("pages/Login.vue")
      },
      { path: "Input", component: () => import("pages/InputSales.vue") },
      { path: "NewTask", component: () => import("pages/AssignTask.vue") },
      { path: "Chat/temp", component: () => import("pages/Chattemp.vue") }
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
