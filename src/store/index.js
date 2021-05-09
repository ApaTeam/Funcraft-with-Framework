import Vue from "vue";
import Vuex from "vuex";

import {
  LocalStorage,
  SessionStorage
}
from "quasar";

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

export default function(

  /* { ssrContext } */
) {
  const Store=new Vuex.Store( {
      state: {
        isScrolledDown: false,
        Player: LocalStorage.getItem("Player")
      }

      ,
      mutations: {
        playerLogOut(state) {
          LocalStorage.remove("Player");
        },
        setPlayer(state, playerDat){
          state["Player"] = playerDat;
          LocalStorage.set("Player", state["Player"]);
        }

        ,
        setScrollDir(state, scrollDir) {
          state.isScrolledDown=scrollDir;
        }
      }

      ,
      modules: {
        // example
      }

      ,

      // enable strict mode (adds overhead!)
      // for dev mode only
      strict: process.env.DEBUGGING
    }

  );

  return Store;
}