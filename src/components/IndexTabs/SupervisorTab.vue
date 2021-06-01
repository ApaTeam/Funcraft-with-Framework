<template>
  <div class="TabScrollContainer" :style="overflowTab">
    <PlayerInfo/>
    <div class="QuestArea">
      <div class="MonthlyQuest" v-if="monthlyTask.length > 0">
        <h5 class="Title">Assigned Monthly Task</h5>
        <div class="QuestList">
          <AssignedTask
            v-for="task of monthlyTask"
            :key="task.ASG_TASK_ID"
            :task="task"
            :is-monthly="true"
          />
        </div>
      </div>
      <div class="DailyQuest" v-if="normalTask.length > 0">
        <h5 class="Title">Assigned Normal Task</h5>
        <q-scroll-area
          horizontal
          class="QuestList"
          :thumb-style="{
                  borderRadius: '5px',
                  background: 'white',
                }"
        >
          <div class="row no-wrap">
            <AssignedTask
              v-for="task of normalTask"
              :key="task.ASG_TASK_ID"
              :task="task"
              :is-monthly="false"
            />
          </div>
        </q-scroll-area>
      </div>
    </div>
    <div
      class="NewTaskContainer"
    >
      <q-btn
        to="/NewTask"
        class="NewTaskBtn Btn"
        text-color="#f4f4f4"
        label="Assign New Task"
      />
    </div>
  </div>
</template>

<script>
import {api} from "boot/axios";
import Navbar from "components/Navbar";
import AssignedTask from "components/IndexTabs/TaskContainers/AssignedTask";
import PlayerInfo from "components/PlayerInfo";

export default {
  components: {PlayerInfo, Navbar, AssignedTask},
  name: "SupervisorTab",
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
      .get("/getAllAssignedQuest", {
        params: {
          EmpId: this.$store.state.Player.EMP_ID,
        },
      })
      .then((res) => {
        console.log(res)
        console.log(this.$store.state.Player.EMP_ID)
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

  .MonthlyQuest {
    .QuestList {
    max-height: 15rem;
      overflow-y: auto;
    }
  }

  .DailyQuest {
    .QuestList {
      width: 100%;
      height: 170px;
    }
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
</style>
