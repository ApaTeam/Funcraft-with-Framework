<template>
  <q-page class="flex column PageRankings">
    <navbar :type="'Profile'" />
    <div class="Content">
      <div class="Description">
        <p class="SubTitle">See your rank beetween your collegues</p>
        <h5 class="Title">Monthly Tier</h5>
      </div>
      <q-scroll-area class="PlayerList">
        <q-virtual-scroll :items="PlayerList" separator>
          <template v-slot="{ item, index }">
            <q-item :key="index" dense>
              <q-item-section>
                
                <Player-Card
                  :PlayerName="item.EMP_NAME"
                  :GameName="item.GAME_NAME"
                  :Level="item.GAME_LEVEL"
                  :PlayerIcon="item.PROF_PIC_URL"
                  :Rank="index + 1"
                  :RankPt="item.REWARD_AMT"
                />
              </q-item-section>
            </q-item>
          </template>
        </q-virtual-scroll>
        <q-scroll-observer @scroll="onScroll" />
      </q-scroll-area>
    </div>
  </q-page>
</template>

<script>
import Navbar from "src/components/Navbar.vue";
import PlayerCard from "src/components/PlayerCard.vue";
import { api } from "boot/axios";
export default {
  components: { Navbar, PlayerCard },
  name: "Rankings",
  data() {
    return {
      PlayerList: [],
    };
  },
  methods: {
    onScroll(info) {
      if (info.direction == "down") {
        this.$store.commit("setScrollDir", true);
        return;
      }
      this.$store.commit("setScrollDir", false);
    },
  },
  mounted() {
    this.$store.commit("setScrollDir", false);
    this.$q.loading.show()
    //tambahin loading screen disini
    api
      .get("/rank")
      .then((res) => {
        this.$q.loading.hide()
        //loading animation ilang pas disini
        console.log(res);
        if (res.data !== "") {
          this.PlayerList = res.data;
          console.log(this.PlayerList);
        } else {
          //show error message disini
        }
      })
      .catch(() => {});
  },
  destroyed() {
    this.$store.commit("setScrollDir", false);
  },
};
</script>


<style lang="scss" scoped>
.Content {
  display: flex;
  flex-direction: column;
  padding: 0 2rem 2rem 2rem;
  height: calc(100vh - 6rem);
}
.Description {
  flex-grow: 0;
  .Title {
    font-weight: bold;
  }
  .SubTitle {
    color: #ff9393;
  }
}
.PlayerList {
  flex-grow: 1;
  margin-top: 1rem;
  .q-item {
    padding: 0;
  }
}
</style>