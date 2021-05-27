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
            Task.PROF_PIC_URL
          "
          style="height: 142px; width: 113px"
          class="rounded-borders"
        ></q-img>
        <div class="FromDetail">
          <div class="AssignedBy">
            <p class="top">Assigned by</p>
            <p class="name">{{ Task.TASK_GIVER }}</p>
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
        v-if="Task.IS_PROGRESSIVE != 1"
        flat
        rounded
        id="btnclass"
        class="ButtonStart"
        :label="btnlabel"
        @click="changestate"
      />
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
        this.$store.commit("setOfflineState",false);
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

          if (this.Task.IS_MONTHLY) {
            this.Task.TYPE_NAME = "MONTHLY TASK";
          } else {
            this.Task.TYPE_NAME = "NORMAL TASK";
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
</style>
