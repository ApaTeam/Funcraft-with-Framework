<template>
  <div class="PlayerCard">
    <img
      :src="require('../assets/PLayerIcon/' + PlayerIcon)"
      alt=""
      class="PlayerIcon"
    />
    <div class="Description">
      <p
        class="GameName"
        :style="[IsActive ? { color: '#02dac5' } : { color: '#a978e6' }]"
      >
        {{ GameName }} <span class="Level">(Lvl. {{ Level }})</span>
      </p>
      <p class="PlayerName">{{ PlayerName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerCard",
  props: {
    PlayerName: String,
    GameName: String,
    Level: Number,
    PlayerIcon: String,
    IsActive: Boolean,
  },
};
</script>


<style lang="scss" scoped>
.PlayerCard {
  display: flex;

  padding: 10px 20px;
  margin-bottom: 20px;

  background: linear-gradient(
    246.81deg,
    rgba(108, 0, 192, 0.5) -93.94%,
    rgba(0, 0, 0, 0.32) 116.58%
  );
  border: 1px solid #3c3c3c;
  border-radius: 10px;

  box-sizing: border-box;
  backdrop-filter: blur(4px);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  .PlayerIcon {
    height: 3rem;
  }
  .Description {
    margin-left: 2rem;
    .GameName {
      font-size: 1rem;
      font-weight: bolder;
    }
    .Level {
      font-size: 0.7rem;
      font-weight: lighter;
      color: #f4f4f4;
    }
    .PlayerName {
      font-size: 0.8rem;
    }
  }
}
</style>