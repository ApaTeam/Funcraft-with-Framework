<template>
  <q-page class="flex column PageRankings">
    <navbar :type="'Profile'" />
    <div class="Description">
      <p class="SubTitle">See your rank beetween your collegues</p>
      <h5 class="Title">Monthly Tier</h5>
    </div>
    <div class="PlayerList">
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
    </div>
  </q-page>
</template>

<script>
import Navbar from "src/components/Navbar.vue";
import PlayerCard from "src/components/PlayerCard.vue";
export default {
  components: { Navbar, PlayerCard },
  name: "Rankings",
};
</script>


<style lang="scss" scoped>
.Description {
  padding: 0.4rem 2rem;
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
  padding: 10px 30px 10rem 30px;
}
</style>