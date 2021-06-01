<template>
  <q-page class="flex column PageIndex">
    <Navbar :type="'Title'"/>
    <div class="Background">
      <img alt="" src="~assets/Background/BG1.png" class="BGImage"/>
      <q-img
        :src="
          require('../assets/PlayerIcon/' +
            this.$store.state.Player.JOB_NAME +
            '.png')
        "
        class="BGChar"
      />
    </div>

    <div class="Content overflow-auto" v-on:scroll.passive="handleScroll">
      <div class="Tabs">
        <div class="DragBarContainer">
          <div class="DragBar"></div>
        </div>
        <div class="TabScrollContainer" :style="overflowTab">
          <div class="InpBtnContainer">
            <q-btn
              to="/Input"
              class="InpBtn Btn"
              text-color="#f4f4f4"
              label="Input Sales"
            />
          </div>

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
          <div class="QuestArea">
            <div class="MonthlyQuest" v-if="monthlyTask.length > 0">
              <h5 class="Title">Monthly Task</h5>
              <div class="QuestList">
                <QuestContainer
                  v-for="task of monthlyTask"
                  :key="task.TASK_ID"
                  :task="task"
                  :is-monthly="true"
                />
              </div>
            </div>
            <div class="DailyQuest" v-if="normalTask.length > 0">
              <h5 class="Title">Normal Task</h5>
              <q-scroll-area
                horizontal
                class="QuestList"
                :thumb-style="{
                  borderRadius: '5px',
                  background: 'white',
                }"
              >
                <div class="row no-wrap">
                  <QuestContainer
                    v-for="task of normalTask"
                    :key="task.TASK_ID"
                    :task="task"
                    :is-monthly="false"
                  />
                </div>
              </q-scroll-area>
            </div>
          </div>
          <div
            class="NewTaskContainer"
            v-if="this.$store.state.Player.EMP_POS === 'Senior Salesman'"
          >
            <q-btn
              to="/NewTask"
              class="NewTaskBtn Btn"
              text-color="#f4f4f4"
              label="Assign New Task"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import {api} from "boot/axios";
import Navbar from "components/Navbar.vue";
import QuestContainer from "components/QuestContainer";

export default {
  components: {Navbar, QuestContainer},
  name: "PageIndex",
  data: function () {
    return {
      isTop: false,
      windowHeight: window.outerHeight,
      isScrolling: null,
      monthlyTask: [],
      normalTask: [],
      overflowTab: {
        "overflow-y": "hidden",
      },
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
          this.overflowTab["overflow-y"] = "hidden";
          this.$store.commit("setScrollDir", false);
          return;
        }
        if (e.target.scrollTop > 0.95 * max_scroll) {
          e.target.scrollTop = max_scroll;
          this.isTop = true;
          this.overflowTab["overflow-y"] = "auto";
          this.$store.commit("setScrollDir", true);
          return;
        }
        if (this.isTop) {
          e.target.scrollTop = 0;
          this.isTop = false;
          this.overflowTab["overflow-y"] = "hidden";
          this.$store.commit("setScrollDir", false);
        } else {
          e.target.scrollTop = max_scroll;
          this.isTop = true;
          this.overflowTab["overflow-y"] = "auto";
          this.$store.commit("setScrollDir", true);
        }
      }, 20);
    },
    chpage(QuestId) {
      this.$router.push({path: "/quest/" + QuestId});
    },
  },
  mounted() {
    this.$store.commit("setScrollDir", false);
    this.$q.loading.show();
    api
      .get("/getAllQuest", {
        params: {
          EmpId: this.$store.state.Player.EMP_ID,
        },
      })
      .then((res) => {
        if (res.data !== "") {
          this.$store.commit("setOfflineState", false);
          for (let i of res.data) {
            if (i.IS_MONTHLY) {
              this.monthlyTask.push(i);
            } else {
              this.normalTask.push(i);
            }
          }
          this.$q.localStorage.set("MonthlyTask", this.monthlyTask);
          this.$q.localStorage.set("NormalTask", this.normalTask);
        } else {
        }
      })
      .catch(() => {
        this.$store.commit("setOfflineState", true);
        this.monthlyTask = this.$q.localStorage.getItem("MonthlyTask");
        this.normalTask = this.$q.localStorage.getItem("NormalTask");
      }).finally(() => {
      this.$q.loading.hide();
    });
  },
  destroyed() {
    this.$store.commit("setScrollDir", false);
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
    left: 0;
    right: 0;
    top: 0;

    width: 100%;

    z-index: 1;
  }

  .BGChar {
    position: absolute;

    left: 50%;
    top: 50%;

    width: 20vh;
    height: 20vh;

    z-index: 2;

    image-rendering: pixelated;
    transform: translate(-50%, -50%);
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
  border-radius: 1.5rem 1.5rem 0 0;
  margin-top: 40vh;

  padding: 1rem 1.5rem;

  background: linear-gradient(197.99deg, #2e0097 -80.8%, #000000 78.41%);

  .TabScrollContainer {
    height: 100%;
  }
}

.DragBarContainer {
  position: relative;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;

  .DragBar {
    position: absolute;
    left: 50%;
    width: 5rem;
    height: 0.4rem;

    transform: translateX(-50%);

    border-radius: 0.2rem;
    background: #f4f4f4;
  }
}

.InpBtnContainer {
  text-align: center;

  .InpBtn {
    $padd: 2.2rem;
    padding: {
      left: $padd;
      right: $padd;
    };
    margin-bottom: 1rem;
    background: linear-gradient(247.7deg, #1e34fd -73.17%, #a155ff 64.31%);
  }
}

.NewTaskContainer {
  margin-bottom: 2rem;
  width: 100%;
  text-align: center;

  .NewTaskBtn {
    text-align: center;
    background: linear-gradient(
        256.64deg,
        rgba(0, 255, 117, 0.55) -53.4%,
        rgba(0, 255, 255, 0.55) 97.08%
    );
  }
}

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

.QuestArea {
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  > * {
    margin-bottom: 1rem;
  }

  .Title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .DailyQuest {
    .QuestList {
      width: 100%;
      height: 170px;
    }
  }
}
</style>
