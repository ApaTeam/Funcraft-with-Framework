<template>
  <q-page class="flex column pageChat">
    <Navbar :type="'Chat'"/>
    <q-list bordered>
      <q-item clickable v-ripple to="/chat/temp">
        <q-item-section avatar>
          <q-avatar>
            <img src="https://storage.googleapis.com/funcraft_backend_bucket/Assets/user(4).jpg" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          Mitchell Ryu
          <q-item-label caption lines="2"
            >Yes, what's your question ?
            </q-item-label
          >
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <q-dialog v-model="this.$store.state.AddChat">
      <q-card class="AddAsigneeContainer">
        <q-card-section align="center" class="PlayerList">
          <q-virtual-scroll
            :items="this.$store.state.PlayerList"
            separator
            style="height: 70vh"
          >
            <template v-slot="{ item }">
              <q-item :key="item.EMP_ID" dense>
                <q-btn class="PlayerContainer" @click="close">
                  <q-avatar font-size="2.3rem">
                    <img
                      :src="
                        'https://storage.googleapis.com/funcraft_backend_bucket/Assets/' +
                        item.PROF_PIC_URL
                      "
                    />
                  </q-avatar>
                  <h5 class="EmpName">{{ item.EMP_NAME }}</h5>
                </q-btn>
              </q-item>
            </template>
          </q-virtual-scroll>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import {api} from "boot/axios";
import Navbar from "src/components/Navbar.vue";
export default {
  components: { Navbar },
  name: "Chat",
  methods: {
    close(){
      this.$store.commit('setAddChat', false);
    },
  },
  mounted() {
    this.$q.loading.show();
    api
      .get("/rank")
      .then((res) => {
        this.$store.commit("setOfflineState",false);
        console.log(res);
        if (res.data !== "") {
          this.$store.commit("addPlayerList", res.data);
          console.log(this.$store.state.PlayerList);
        } else {
        }
      })
      .catch(() => {
        this.$store.commit("setOfflineState", true);
      }).finally(() => {
      this.$q.loading.hide();
    });
  },
  destroyed(){
    this.$store.commit("clearPlayerList");
  }
};
</script>


<style lang="scss" scoped>
.text-caption {
  color: whitesmoke;
  font-weight: lighter;
}
.AddAsigneeContainer {
  width: 90vw;

  .PlayerContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    .EmpName {
      font-size: 1rem;
      text-align: left;
      align-self: center;
    }
  }
}
</style>