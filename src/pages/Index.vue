<template>
  <q-page class="flex column PageIndex">
    <Navbar />
    <img alt="" src="~assets/Player-WithBG.png" class="PlayerImage" />
    <div class="Content">
      <div class="Tabs" :style="{ 'margin-top': MarginTop }">
        <div
          class="DragBarContainer"
          v-touch-pan.prevent.mouse="
            ({ e, ...info }) => {
              if (info.position.top - 112 > windowHeight * 0.5) {
                MarginTop = 0.5 * windowHeight + 'px';
              } else {
                MarginTop = info.position.top - 112 + 'px';
              }
              if (info.isFinal) {
                if (isTop) {
                  if (info.position.top > windowHeight * 0.3) {
                    MarginTop = '40vh';
                    isTop = false;
                  } else {
                    MarginTop = '0';
                    isTop = true;
                  }
                } else {
                  if (info.position.top > windowHeight * 0.5) {
                    MarginTop = '40vh';
                    isTop = false;
                  } else {
                    MarginTop = '0';
                    isTop = true;
                  }
                }
              }
            }
          "
          @click="
            () => {
              MarginTop = isTop ? '40vh' : '0';
              isTop = !isTop;
            }
          "
        >
          <div class="DragBar"></div>
        </div>
        <div class="PlayerInfo">
          <p class="CharacterName">
            <span class="Name"> CassieAlpha </span>
            <span class="Level">(Lvl. 1)</span>
          </p>
          <div class="PlayerStat">
            <q-img
              src="~assets/WeaponIcon/Sword.png"
              alt=""
              class="WeaponIcon"
              contain
            />
            <div class="StatList">
              <div class="Stat Health">
                <p class="StatValue">60/100</p>
                <q-linear-progress
                  rounded
                  dark
                  size=".8rem"
                  :value="0.8"
                  color="red"
                  class="Bar"
                />
              </div>
              <div class="Stat Mana">
                <p class="StatValue">25/75</p>
                <q-linear-progress
                  rounded
                  dark
                  size=".8rem"
                  :value="0.33"
                  color="cyan"
                  class="Bar"
                />
              </div>
              <div class="Stat Gold">
                <p class="StatValue">8/13</p>
                <q-linear-progress
                  rounded
                  dark
                  size=".8rem"
                  :value="0.7"
                  color="yellow"
                  class="Bar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Navbar from "components/Navbar.vue";
export default {
  components: { Navbar },
  name: "PageIndex",
  data: function () {
    return {
      isTop: false,
      MarginTop: "40vh",
      windowHeight: window.innerHeight,
    };
  },
};
</script>


<style lang="scss" scoped>
.PageIndex {
  position: relative;
}
.PlayerImage {
  position: fixed;
  width: 100vw;
  left: 0;
  top: 0;
}
.Content {
  z-index: 2;
  //bikin component ini scrollable
  height: calc(100vh - 5rem);
  overflow-y: hidden;
}
.Tabs {
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 90vh;
  border-radius: 25px;

  padding: 1rem 1.5rem;

  background: linear-gradient(197.99deg, #2e0097 -80.8%, #000000 78.41%);
}
.DragBarContainer {
  position: relative;
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;
  .DragBar {
    position: absolute;
    width: 5rem;
    height: 0.4rem;
    border-radius: 0.2rem;
    background: #f4f4f4;
    left: 50%;
    transform: translateX(-50%);
  }
}
.PlayerInfo {
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
      display: flex;
      align-items: center;
      .Bar {
        width: 70%;
      }
      .StatValue {
        width: 30%;
      }
    }
  }
}
</style>