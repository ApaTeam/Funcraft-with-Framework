<template>
  <div class="PlayerInfo">
    <p class="CharacterName">
      <span class="Name"> {{ this.$store.state.Player.NAME }} </span>
      <span class="Level"
      >(Lvl. {{ this.$store.state.Player.LEVEL }} )</span
      >
    </p>
    <div class="PlayerStat">
      <q-img
        src="~assets/WeaponIcon/Sword.png"
        alt=""
        class="WeaponIcon"
        contain
      />
      <div class="StatList">
        <p class="JobName">{{ this.$store.state.Player.JOB_NAME }}</p>
        <div class="Stat Health">
          <p class="StatValue">{{ this.$store.state.Player.HP }}/100</p>
          <q-linear-progress
            rounded
            dark
            size=".8rem"
            :value="this.$store.state.Player.HP / 100"
            color="red"
            class="Bar"
          />
        </div>
        <div class="Stat Mana">
          <p class="StatValue">
            {{ this.$store.state.Player.EXP }}/100
          </p>
          <q-linear-progress
            rounded
            dark
            size=".8rem"
            :value="this.$store.state.Player.EXP / 100"
            color="cyan"
            class="Bar"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerInfo"
}
</script>

<style scoped lang="scss">

.PlayerInfo {
  .JobName {
    color: #e5a01b;
  }

  .CharacterName {
    .Name {
      color: #02dac5;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }

  .PlayerStat {
    display: flex;
    justify-content: space-between;
    margin: 2rem;

    .WeaponIcon {
      width: 50px;
      margin-right: 25px;
    }

    .StatList {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .Stat {
      $BarWidth: 70%;
      display: flex;
      align-items: center;

      .Bar {
        width: $BarWidth;
      }

      .StatValue {
        width: 100% - $BarWidth;
      }
    }
  }
}
</style>
