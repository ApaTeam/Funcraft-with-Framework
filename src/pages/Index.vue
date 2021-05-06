<template>
  <q-page class="flex column PageIndex">
    <Navbar :type="'Title'" />
    <div class="Background">
      <img alt="" src="~assets/Background/BG1.png" class="BGImage" />
      <q-img
        :src="
          require('../assets/PlayerIcon/' +
            this.$store.state.Player.jobs_name +
            '.png')
        "
        class="BGChar"
      />
      <!-- <q-btn class="BGBtn" text-color="#f4f4f4" label="Input Sales" /> -->
    </div>

    <div class="Content overflow-auto" v-on:scroll.passive="handleScroll">
      <div class="Tabs">
        <div class="DragBarContainer">
          <div class="DragBar"></div>
        </div>
        <div class="PlayerInfo">
          <p class="CharacterName">
            <span class="Name"> {{ this.$store.state.Player.charaName }} </span>
            <span class="Level"
              >(Lvl. {{ this.$store.state.Player.charaLevel }} )</span
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
              <div class="Stat Health">
                <p class="StatValue">
                  {{ this.$store.state.Player.charaHp }}/100
                </p>
                <q-linear-progress
                  rounded
                  dark
                  size=".8rem"
                  :value="this.$store.state.Player.charaHp / 100"
                  color="red"
                  class="Bar"
                />
              </div>
              <div class="Stat Mana">
                <p class="StatValue">
                  {{ this.$store.state.Player.charaAp }}/100
                </p>
                <q-linear-progress
                  rounded
                  dark
                  size=".8rem"
                  :value="this.$store.state.Player.charaAp / 100"
                  color="cyan"
                  class="Bar"
                />
              </div>
              <div class="Stat Gold">
                <p class="StatValue">
                  {{ this.$store.state.Player.charaExp }}/100
                </p>
                <q-linear-progress
                  rounded
                  dark
                  size=".8rem"
                  :value="this.$store.state.Player.charaExp / 100"
                  color="yellow"
                  class="Bar"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="QuestArea">
          <div class="MonthlyQuest">
            <h5 class="Title">Monthly Quest</h5>
            <div class="QuestList">
              <div class="QuestContainer" @click="chpage(0)">
                <p class="QuestName">
                  Make Agreement
                  <span class="QuestRate">(5/7)</span>
                </p>

                <q-linear-progress
                  dark
                  :value="5 / 7"
                  size=".5rem"
                  class="ProgressBar"
                  track-color="black"
                />
                <h5 class="QuestPoint">5 Pts</h5>
              </div>
            </div>
          </div>
          <div class="DailyQuest">
            <h5 class="Title">Daily Quest</h5>
            <q-scroll-area
              horizontal
              class="QuestList"
              :thumb-style="{
                borderRadius: '5px',
                background: 'white',
              }"
            >
              <div class="row no-wrap">
                <div class="QuestContainer" @click="chpage(1)">
                  <p class="QuestName">Make Agreement</p>
                  <span class="QuestRate">(5/7)</span>
                  <q-linear-progress
                    :value="5 / 7"
                    size=".5rem"
                    class="ProgressBar"
                    track-color="black"
                  />
                  <h5 class="QuestPoint">5 Pts</h5>
                </div>
                <div class="QuestContainer" @click="chpage(2)">
                  <p class="QuestName">Make Agreement</p>
                  <span class="QuestRate">(5/7)</span>

                  <q-linear-progress
                    :value="5 / 7"
                    size=".5rem"
                    class="ProgressBar"
                    track-color="black"
                  />
                  <h5 class="QuestPoint">5 Pts</h5>
                </div>
                <div class="QuestContainer" @click="chpage(3)">
                  <p class="QuestName">Make Agreement</p>
                  <span class="QuestRate">(5/7)</span>

                  <q-linear-progress
                    :value="5 / 7"
                    size=".5rem"
                    class="ProgressBar"
                    track-color="black"
                  />
                  <h5 class="QuestPoint">5 Pts</h5>
                </div>
                <div class="QuestContainer" @click="chpage(4)">
                  <p class="QuestName">Make Agreement</p>
                  <span class="QuestRate">(5/7)</span>

                  <q-linear-progress
                    :value="5 / 7"
                    size=".5rem"
                    class="ProgressBar"
                    track-color="black"
                  />
                  <h5 class="QuestPoint">5 Pts</h5>
                </div>
              </div>
            </q-scroll-area>
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
      windowHeight: window.outerHeight,
      isScrolling: null,
    };
  },
  methods: {
    handleScroll(e) {
      // console.log(e);
      let max_scroll = e.target.scrollHeight - e.target.clientHeight;
      // console.log(e.target.scrollTop);
      window.clearTimeout(this.isScrolling);
      this.isScrolling = setTimeout(() => {
        // this.scrolling = false;
        if (e.target.scrollTop < 0.05 * max_scroll) {
          e.target.scrollTop = 0;
          this.isTop = false;
          return;
        }
        if (e.target.scrollTop > 0.95 * max_scroll) {
          e.target.scrollTop = max_scroll;
          this.isTop = true;
          return;
        }
        if (this.isTop) {
          e.target.scrollTop = 0;
          this.isTop = false;
        } else {
          e.target.scrollTop = max_scroll;
          this.isTop = true;
        }
      }, 20);
    },
    chpage(QuestId) {
      this.$router.push({ path: "/quest" });
    },
  },
};
</script>


<style lang="scss" scoped>
.PageIndex {
  position: relative;
}
.Background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 40%;
  .BGImage {
    position: absolute;
    width: 100%;

    left: 0;
    right: 0;
    top: 0;

    z-index: 1;
  }
  .BGChar {
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    width: 20vh;
    height: 20vh;
    image-rendering: pixelated;
    transform: translate(-50%, -50%);
  }
  .BGBtn {
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(247.7deg, #1e34fd -73.17%, #a155ff 64.31%);
    border-radius: 1rem;
    padding: 0.2em 1.5em;
    z-index: 3;
    color: #f4f4f4;
  }
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
  border-radius: 25px 25px 0 0;
  margin-top: 40vh;

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
.QuestArea {
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 1rem;
  }
  .Title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  .QuestContainer {
    border-radius: 15px;
    padding: 0.5rem 1rem;
    display: grid;
    * {
      font-weight: bold;
    }
    .QuestName {
      grid-area: Name;
    }
    .QuestRate {
      grid-area: Progress;
      font-weight: normal;
      text-align: start;
    }
    .ProgressBar {
      grid-area: Bar;
      border-radius: 0.5rem;
    }
    .QuestPoint {
      grid-area: Point;
      font-size: 1.2rem;
      justify-self: end;
      align-self: center;
    }
  }
  .MonthlyQuest {
    .QuestContainer {
      width: 100%;

      grid-template-areas:
        "Name Point"
        "Bar Point";
      grid-template-columns: 5fr 2fr;
      row-gap: 0.5rem;
      background: linear-gradient(
        77.32deg,
        rgba(187, 134, 252, 0.9) 46.71%,
        rgba(134, 195, 252, 0.9) 98.58%,
        rgba(232, 234, 255, 0.9) 177.76%
      );

      * {
        color: black;
      }
      .ProgressBar {
        color: #2f3037;
      }
    }
  }
  .DailyQuest {
    .QuestList {
      width: 100%;
      height: 170px;
      .QuestContainer {
        width: 150px;
        height: 150px;
        margin-right: 1rem;

        grid-template-areas:
          "Name"
          "Bar"
          "Progress"
          "Point";
        grid-template-rows: 2fr 1fr 2fr 1fr;

        &:nth-child(odd) {
          background: linear-gradient(
            38.38deg,
            rgba(2, 218, 197, 0.75) -7.52%,
            rgba(255, 206, 81, 0.75) 165.07%
          );
        }
        &:nth-child(even) {
          background: linear-gradient(
            224.34deg,
            rgba(0, 194, 255, 0.85) 8.03%,
            rgba(0, 26, 255, 0.3995) 182.75%
          );
        }

        .ProgressBar {
          color: white;
        }
      }
    }
  }
}
</style>