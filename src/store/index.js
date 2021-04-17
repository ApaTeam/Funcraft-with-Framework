import Vue from "vue";
import Vuex from "vuex";
import { LocalStorage, SessionStorage } from "quasar";

// import example from './module-example'

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {},
    mutations: {
      initState(state) {
        if (LocalStorage.has("Player")) {
          state["Player"] = LocalStorage.getItem("Player");
        } else {
          state["Player"] = {};
          LocalStorage.set("Player", state["Player"]);
        }
      },
      setPicUrl(state, url) {
        state.Player["PicUrl"] = url;
        LocalStorage.set("Player", state["Player"]);
      }
    },
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  });

  return Store;
}
