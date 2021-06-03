<template>
  <q-page class="flex column QuestScreen">
    <navbar/>
    <div class="content">
      <div class="TaskTitleBox">
        <p class="QuestType">{{ Task.TYPE_NAME }}</p>
        <p class="QuestTitle">{{ Task.TASK_NAME }}</p>
      </div>
      <div class="QuestFrom">
        <q-img
          :src="
            'https://storage.googleapis.com/funcraft_backend_bucket/Assets/' +
            Task.PIC
          "
          style="height: 142px; width: 113px"
          class="rounded-borders"
        ></q-img>
        <div class="FromDetail">
          <div class="AssignedBy">
            <p class="top">Assigned
            <span v-if="this.$store.state.Player.EMP_POS === 'Junior Salesman'">by</span>
              <span v-else>to</span>
            </p>
            <p class="name">
              <span v-if="this.$store.state.Player.EMP_POS === 'Junior Salesman'">{{ Task.TASK_GIVER }}</span>
              <span v-else>{{ Task.TASK_TAKER }}</span>
              </p>
          </div>
          <div class="WorkTime">
            <p class="top">Work time</p>
            <p class="hour">{{ Task.EXPECTED_WORK_TIME }} Hour</p>
          </div>
          <div class="StartTime">
            <p class="top">Start time</p>
            <p class="date">{{ Task.START_DT }}</p>
            <p class="starthour">{{ this.Task.START_TIME }}</p>
          </div>
        </div>
      </div>
      <div class="Location">
        <p class="top">Location</p>
        <p class="address">
          Jl. Letjen S Parman No 1 ,Grogol, Jakarta Barat, DKI Jakarta, 11450
        </p>
        <a
          @click="
            () => {
              this.$router.push('/map');
              this.$store.state.taskname = this.Task.TASK_NAME;
            }
          "
        >See in Maps</a
        >
      </div>
      <div class="rounded-borders Description">
        <p class="top">Task Description</p>
        <p class="Content">
          {{ Task.DESCRIPTION }}
        </p>
      </div>
      <div class="Reward">
        <p>
          Reward : <a class="points">{{ Task.REWARD_AMT }} pts</a>
        </p>
      </div>
      <q-btn
        v-if="Task.IS_PROGRESSIVE !== 1 && this.$store.state.Player.EMP_POS === 'Junior Salesman'"
        flat
        rounded
        id="btnclass"
        class="ButtonStart"
        :label="btnlabel"
        @click="changestate"
      />
      <div class="rounded-borders Description QuestStat" v-if="this.$store.state.Player.EMP_POS !== 'Junior Salesman'">
        <div class="StatusContainer">
          <p class="top">Quest Status</p>
          <p class="Content">
            {{ Task.STATUS }}
          </p>
        </div>
        <div class="UpdateContainer" v-if="this.Task.LAST_OPEN">
          <p class="top">Last Updated</p>
          <p class="Content">
            {{ Task.LAST_OPEN }}
          </p>
        </div>
        <div class="ProgressContainer" v-if="Task.IS_PROGRESSIVE">
          <p class="top">Quest Progress</p>
          <p class="Content">
            <q-linear-progress
              dark
              :value="Task.PROGRESS_AMT / Task.COMPLETION_AMT"
              size=".5rem"
              class="ProgressBar"
              color="white"
            />
            <span class="TaskRate"
            >({{ Task.PROGRESS_AMT }}/{{ Task.COMPLETION_AMT }})</span
            >
          </p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import {api} from "boot/axios";
import Navbar from "src/components/Navbar.vue";

export default {
  components: {Navbar},
  name: "QuestScreen",
  data() {
    return {
      Task: "",
      btnlabel: "Start Working",
      btncolor: "linear-gradient(#00FF75,#00FFFF)",
    };
  },
  mounted() {
    this.$q.loading.show();
    api
      .get("/getQuestDetail", {
        params: {
          QuestId: this.$route.params.QuestId,
        },
      })
      .then((res) => {
        this.$store.commit("setOfflineState", false);
        if (res.data !== "") {
          console.log(res.data);
          this.Task = res.data;
          let StartDate = new Date(this.Task.START_DT);
          this.Task.START_DT = StartDate.toDateString();
          this.Task.START_TIME = StartDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          });
          switch (this.Task.STATUS) {
            case 'OPN':
              this.Task.STATUS = 'Opened'
              this.Task.LAST_OPEN = new Date().toDateString();
              break;
            case 'ASG':
              this.Task.STATUS = 'Unread'
              this.Task.LAST_OPEN = null;
              break;
            case 'CMP':
              this.Task.STATUS = 'Completed'
              this.Task.LAST_OPEN = new Date().toDateString();
              break;
          }

          if (this.Task.IS_MONTHLY) {
            this.Task.TYPE_NAME = "MONTHLY TASK";
          } else {
            this.Task.TYPE_NAME = "NORMAL TASK";
          }
          if(this.$store.state.Player.EMP_POS === 'Junior Salesman'){
            this.Task.PIC = this.Task.TASK_GIVER_PIC;
          }else{
            this.Task.PIC = this.Task.TASK_TAKER_PIC;
          }
        } else {
        }
      })
      .catch(() => {
        this.$store.commit("setOfflineState", true);
      })
      .finally(() => {
        this.$q.loading.hide();
      })
    ;
    console.log(this.$route.params.QuestId);
  },
  methods: {
    changestate() {
      this.btnlabel = "Complete Task";
      document.getElementById("btnclass").style.background =
        "linear-gradient(rgb(0, 255, 117,0.55),rgb(0, 255, 255,0.55))";
    },
  },
};
</script>

<style lang="scss" scoped>
.top {
  font-family: Roboto;
  font-size: 12px;
  color: #b1b1b1;
  margin: 0;
}

.content {
  display: flex;
  flex-direction: column;
  margin: 1.8rem 20px;

  padding: 12px;

  .TaskTitleBox {
    display: flex;
    flex-direction: column;
    margin: 0;

    .QuestType {
      font-family: Montserrat;
      font-weight: bold;
      font-size: 12px;
      color: #ff9393;
      margin-bottom: 0;
    }

    .QuestTitle {
      font-family: Roboto;
      font-weight: bold;
      font-size: 24px;
      margin-top: 0;

      a {
        font-weight: normal;
        font-size: 18px;
      }
    }
  }

  .QuestFrom {
    display: flex;
    flex-direction: row;

    .FromDetail {
      display: flex;
      flex-direction: column;
      margin: 0 20px;
      font-family: Roboto;
      font-size: 14px;

      .name {
        color: #f5ac1f;
        margin-bottom: 6px;
      }

      .hour {
        font-weight: bold;
        margin-bottom: 6px;
      }

      .date {
        font-weight: bold;
        margin: 0;
      }

      .starthour {
        font-size: 12px;
      }
    }
  }

  .Location {
    padding: 20px;

    .address {
      margin-bottom: 0;
      font-weight: bold;
    }

    a {
      font-size: 10px;
      color: #2ca180;
    }
  }

  .Description {
    padding: 20px;
    background: linear-gradient(
        rgb(244, 244, 244, 0.1),
        rgb(255, 255, 255, 0.1)
    );

    .Content {
      font-weight: bold;
    }
  }

  .Reward {
    text-align: right;

    p {
      font-weight: bold;

      a {
        color: #f5ac1f;
      }
    }
  }

  .ButtonStart {
    margin-top: 10vh;
    background: linear-gradient(
        rgb(30, 52, 253, 0.55),
        rgb(161, 85, 255, 0.55)
    );

    border: transparent;
    color: white;
  }
}

.QuestStat {
  margin-top: 1rem;
  display: grid;
  row-gap: .7rem;
  grid-template-areas:
    "status update"
    "progress progress";
  .StatusContainer{
    grid-area: status;
  }
  .UpdateContainer{
    grid-area: update;
    text-align: right;
  }
  .ProgressContainer{
    grid-area: progress;
    .Content{
      margin-top: .5rem;
      display: flex;
      align-items: center;
      .ProgressBar{
        flex-grow: 0;
      }
      .TaskRate{
        margin-left: 1rem;
        flex-grow: 1;
      }
    }
  }
}
</style>
