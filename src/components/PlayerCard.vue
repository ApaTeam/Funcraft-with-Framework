<template>
  <div class="PlayerCard Btn">
    <h5 class="Rank" :style="{ color: RankColor }">{{ Rank }}{{ Ext }}</h5>
    <img
      :src="
        'https://storage.googleapis.com/funcraft_backend_bucket/Assets/' +
        PlayerIcon
      "
      alt=""
      class="PlayerIcon"
    />
    <div class="Description">
      <p
        class="PlayerName"
        :style="[IsActive ? { color: '#00E3F1' } : { color: '#a978e6' }]"
      >
        {{ PlayerName }}
      </p>
      <p
        class="GameName"
        :style="[IsActive ? { color: '#E5A01B' } : { color: '#C4C4C4' }]"
      >
        {{ GameName }} <span class="Level">(Lvl. {{ Level }})</span>
      </p>
    </div>
    <h5 class="Point" :style="{ color: RankColor }">{{ RankPt }}Pts</h5>
  </div>
</template>

<script>
export default {
  name: "PlayerCard",
  props: {
    Rank: Number,
    RankPt: {
      type: Number,
      default: 0,
    },
    PlayerName: String,
    GameName: String,
    Level: Number,
    PlayerIcon: String,
    EMP_ID:Number
  },
  data() {
    return {
      Ext: "",
      RankColor: "#CBCBCB",
      IsActive: this.EMP_ID === this.$store.state.Player.EMP_ID,
    };
  },
  mounted() {
    let j = this.Rank % 10,
      k = this.Rank % 100;
    if (j === 1 && k !== 11) {
      this.Ext = "st";
    } else if (j === 2 && k !== 12) {
      this.Ext = "nd";
    } else if (j === 3 && k !== 13) {
      this.Ext = "rd";
    } else {
      this.Ext = "th";
    }

    if (this.Rank < 4) {
      switch (this.Rank) {
        case 1:
          this.RankColor = "#EBA419";
          break;
        case 2:
          this.RankColor = "#89CB90";
          break;
        case 3:
          this.RankColor = "#7AEDE6";
      }
    }
  },
};
</script>


<style lang="scss" scoped>
.PlayerCard {
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 1fr;
  align-items: center;

  padding: .8rem;
  margin-bottom: 20px;

  background: linear-gradient(
    246.81deg,
    rgba(108, 0, 192, 0.5) -93.94%,
    rgba(0, 0, 0, 0.32) 116.58%
  );
  border: 1px solid #3c3c3c;

  box-sizing: border-box;
  backdrop-filter: blur(4px);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  .Rank {
    width: 3rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .PlayerIcon {
    height: 3rem;
    border-radius: 1.5rem;
  }
  .Description {
    margin-left: 1rem;
    place-self: center stretch;
    .PlayerName {
      font-size: 1rem;
      font-weight: bolder;
      text-overflow: clip;
    }
    .GameName {
      font-size: 0.8rem;
    }
    .Level {
      font-size: 0.7rem;
      font-weight: lighter;
    }
  }
  .Point {
    font-size: 1.2rem;
    justify-self: end;
  }
}
</style>
