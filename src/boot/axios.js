import Vue from "vue";
import axios from "axios";

Vue.prototype.$axios = axios;

const api = axios.create({
   //baseURL: "https://funcraft-312802.et.r.appspot.com/"
     baseURL: process.env.NODE_ENV === "production"
      ? "https://funcraft-312802.et.r.appspot.com/"
      : "http://localhost:3000"
});
Vue.prototype.$api = api;
// ^ ^ ^ this will allow you to use this.$api
//       so you can easily perform requests against your app's API

export { axios, api };
