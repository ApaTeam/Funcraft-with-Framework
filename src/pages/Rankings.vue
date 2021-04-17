<template>
  <q-page class="flex column PageRankings">
    <navbar :type="'Profile'" />
    <div class="Content">
      <div class="Description">
        <p class="SubTitle">See your rank beetween your collegues</p>
        <h5 class="Title">Monthly Tier</h5>
      </div>
      <div class="PlayerList overflow-auto">
        <Player-Card
          :PlayerName="'Carlene Lim'"
          :GameName="'CassieAlpha'"
          :Level="1"
          :PlayerIcon="'Player (0).png'"
          :IsActive="true"
          :Rank="1"
        />
        <Player-Card
          :PlayerName="'Ivan WIjaya'"
          :GameName="'CassieBeta'"
          :Level="2"
          :PlayerIcon="'Player (1).png'"
          :Rank="2"
        />
        <Player-Card
          :PlayerName="'Mitchell Ryuu'"
          :GameName="'CassieCharlie'"
          :Level="3"
          :PlayerIcon="'Player (2).png'"
          :Rank="3"
        />
        <Player-Card
          :PlayerName="'Wijaya Lim'"
          :GameName="'CassieDelta'"
          :Level="4"
          :PlayerIcon="'Player (3).png'"
          :Rank="4"
        />
        <Player-Card
          :PlayerName="'Wijaya Lim'"
          :GameName="'CassieDelta'"
          :Level="4"
          :PlayerIcon="'Player (3).png'"
        />
        <Player-Card
          :PlayerName="'Wijaya Lim'"
          :GameName="'CassieDelta'"
          :Level="4"
          :PlayerIcon="'Player (3).png'"
        />
        <Player-Card
          :PlayerName="'Wijaya Lim'"
          :GameName="'CassieDelta'"
          :Level="4"
          :PlayerIcon="'Player (3).png'"
        />
        <Player-Card
          :PlayerName="'Wijaya Lim'"
          :GameName="'CassieDelta'"
          :Level="4"
          :PlayerIcon="'Player (3).png'"
        />
        <Player-Card
          :PlayerName="'Wijaya Lim'"
          :GameName="'CassieDelta'"
          :Level="4"
          :PlayerIcon="'Player (3).png'"
        />
        <Player-Card
          :PlayerName="'Wijaya Lim'"
          :GameName="'CassieDelta'"
          :Level="4"
          :PlayerIcon="'Player (3).png'"
        />
        <Player-Card
          :PlayerName="'Wijaya Lim'"
          :GameName="'CassieDelta'"
          :Level="4"
          :PlayerIcon="'Player (3).png'"
        />
        <Player-Card
          :PlayerName="'Wijaya Lim'"
          :GameName="'CassieDelta'"
          :Level="4"
          :PlayerIcon="'Player (3).png'"
        />
        <Player-Card
          :PlayerName="'Wijaya Lim'"
          :GameName="'CassieDelta'"
          :Level="4"
          :PlayerIcon="'Player (3).png'"
        />
        <Player-Card
          :PlayerName="'Wijaya Lim'"
          :GameName="'CassieDelta'"
          :Level="4"
          :PlayerIcon="'Player (3).png'"
        />
        <q-scroll-observer @scroll="onScroll" />
      </div>
    </div>
  </q-page>
</template>

<script>
import Navbar from "src/components/Navbar.vue";
import PlayerCard from "src/components/PlayerCard.vue";
export default {
  components: { Navbar, PlayerCard },
  name: "Rankings",
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
  //bikin component ini scrollable
  height: calc(100vh - 5rem);
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}
</style>