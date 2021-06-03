<template>
  <div class="TabScrollContainer" :style="overflowTab">
    <div class="InpSalesBtnContainer">
      <q-btn
        to="/Input"
        class="InpSalesBtn Btn"
        text-color="#f4f4f4"
        label="Input Sales"
      />
    </div>
    <PlayerInfo/>
    <div class="QuestArea">
      <div class="MonthlyQuest" v-if="monthlyTask.length > 0">
        <h5 class="Title">Monthly Task</h5>
        <div class="QuestList">
          <SalesTask
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
            <SalesTask
              v-for="task of normalTask"
              :key="task.TASK_ID"
              :task="task"
              :is-monthly="false"
            />
          </div>
        </q-scroll-area>
      </div>
    </div>
  </div>
</template>

<script>
import {api} from "boot/axios";
import Navbar from "components/Navbar";
import SalesTask from "components/IndexTabs/TaskContainers/SalesTask";
import PlayerInfo from "components/PlayerInfo";

export default {
  components: {PlayerInfo, Navbar, SalesTask},
  name: "SalesOfficerTab",
  props: {
    overflowTab: {
      type: Object,
    },
  },
  data() {
    return {
      monthlyTask: [],
      normalTask: [],
    }
  },
  methods: {
    chpage(QuestId) {
      this.$router.push({path: "/quest/" + QuestId});
    },
  },
  mounted() {
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
}
</script>

<style scoped lang="scss">
.TabScrollContainer {
  height: 100%;
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

.InpSalesBtnContainer {
  text-align: center;
  .InpSalesBtn {
    $padd: 2.2rem;
    padding: {
      left: $padd;
      right: $padd;
    };
    margin-bottom: 1rem;
    background: linear-gradient(247.7deg, #1e34fd -73.17%, #a155ff 64.31%);
  }
}
</style>
