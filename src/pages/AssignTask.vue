<template>
  <q-page class="flex column AssignTask">
    <navbar :type="'Profile'"/>
    <div class="pageContent">
      <form action="" class="FormContainer">
        <div class="TitleContainer">
          <h5 class="Title">Assign Task</h5>
          <q-btn
            class="AssignBtn"
            icon="fas fa-user-plus"
            label="Add Asignee"
            color="standard"
            :size="'sm'"
            @click="AddAsignee = true"
          />
        </div>
        <div class="AssignContainer">
          <div
            class="Assignee"
            v-for="item in AssignedPlayer"
            :key="item.EMP_ID"
          >
            <q-avatar font-size="2.3rem">
              <img
                :src="
                  'https://storage.googleapis.com/funcraft_backend_bucket/Assets/' +
                  item.PROF_PIC_URL
                "
              />
            </q-avatar>
            <Label class="Name">{{ item.EMP_NAME }}</Label>
            <Label class="JobTitle">{{ item.EMP_POS }}</Label>
          </div>
        </div>
        <div class="InpContainer">
          <label>Task Name</label>
          <q-input dark dense filled v-model="FormInput.Name" placeholder="Input task name.."/>
        </div>
        <div class="InpContainer">
          <label>Task Description</label>
          <q-input
            dark
            filled
            v-model="FormInput.Desc"
            placeholder="Insert additional description.."
            type="textarea"
          />
        </div>

        <div class="InpContainer">
          <label>Location</label>
          <q-input dark dense filled v-model="FormInput.Location" placeholder="Input location.."/>
        </div>

        <div class="InpContainer">
          <label>Start Date</label>
          <q-input
            dark
            dense
            filled
            class="inputbox"
            v-model="FormInput.StartDt"
            placeholder="Date"
            type="date"
          >
            <template v-slot:append>
              <q-icon name="far fa-calendar-alt" size="xs"/>
            </template>
          </q-input>
        </div>

        <div class="InpContainer">
          <label>Reward</label>
          <q-input
            dark
            dense
            filled
            class="inputbox"
            v-model="FormInput.Reward"
            placeholder=""
            type="number"
          >
            <template v-slot:append>
              <label>Pts</label>
              <!--            <q-icon name="money" />-->
            </template>
          </q-input>
        </div>

        <div class="InpContainer">
          <label>Expected Work Time</label>
          <q-input
            dark
            dense
            filled
            class="inputbox"
            v-model="FormInput.ExpWorkTime"
            placeholder="0"
            type="number"
          >
            <template v-slot:append>
              <label>Hours</label>
            </template>
          </q-input>
        </div>


        <div class="savebtn">
          <q-btn label="Save" @click="showAlert = true"/>
        </div>
      </form>

      <q-dialog v-model="showAlert">
        <q-card class="modalContainer">
          <q-card-section align="center">
            <div class="ImageContainer">
              <img
                :src="
                  require('../assets/PlayerIcon/' +
                    this.$store.state.Player.JOB_NAME +
                    '.png')
                "
              />
            </div>
          </q-card-section>
          <q-card-section align="center">
            <div class="h6 Title">Assign this task ?</div>
          </q-card-section>

          <q-card-actions align="center">
            <div class="btnContainer">
              <q-btn
                flat
                label="Assign"
                class="Savebtn"
                to="/main"
                type="submit"
              />
              <q-btn outline label="Cancel" class="Cancelbtn" v-close-popup/>
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="AddAsignee">
        <q-card class="AddAsigneeContainer">
          <q-card-section align="center" class="PlayerList">
            <q-virtual-scroll
              :items="PlayerList"
              separator
              style="height: 70vh"
            >
              <template v-slot="{ item, index }">
                <q-item :key="item.EMP_ID" dense>
                  <q-item-section class="PlayerContainer">
                    <q-checkbox v-model="CheckBoxList[index]"/>
                    <q-avatar font-size="2.3rem">
                      <img
                        :src="
                          'https://storage.googleapis.com/funcraft_backend_bucket/Assets/' +
                          item.PROF_PIC_URL
                        "
                      />
                    </q-avatar>
                    <h5 class="EmpName">{{ item.EMP_NAME }}</h5>
                  </q-item-section>
                </q-item>
              </template>
            </q-virtual-scroll>
          </q-card-section>
          <q-card-actions align="center">
            <div class="btnContainer">
              <q-btn
                flat
                label="Add"
                class="Savebtn"
                v-close-popup
                @click="AssignPlayer"
              />
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import {api} from "boot/axios";
import Navbar from "src/components/Navbar.vue";

export default {
  components: {Navbar},
  name: "AssignTask",
  data() {
    return {
      showAlert: false,
      AddAsignee: false,
      PlayerList: [],
      CheckBoxList: [],
      AssignedPlayer: [],
      FormInput: {
        Name: "",
        Desc: "",
        Location: "",
        StartDt: null,
        Reward: null,
        ExpWorkTime: 0
      },
    };
  },
  methods: {
    AssignPlayer() {
      this.AssignedPlayer = new Array();
      for (let i = 0; i < this.PlayerList.length; i++) {
        if (this.CheckBoxList[i]) {
          this.AssignedPlayer.push(this.PlayerList[i]);
        }
      }
      console.log(this.AssignedPlayer);
    },
  },
  mounted() {
    this.$q.loading.show();
    api
      .get("/rank")
      .then((res) => {
        this.$store.commit("setOfflineState", false);
        console.log(res);
        if (res.data !== "") {
          this.PlayerList = res.data;
          this.PlayerList.forEach((e) => {
            this.CheckBoxList.push(false);
          });
          console.log(this.PlayerList);
        } else {
        }
      })
      .catch(() => {
        this.$store.commit("setOfflineState", true);
      }).finally(() => {
      this.$q.loading.hide();
    });
  },
};
</script>

<style lang="scss" scoped>
.pageContent {
  padding: 0 2rem;
  margin-top: 20px;
  height: calc(100vh - 20px - 6rem);
  overflow-y: auto;

  .TitleContainer {
    display: flex;
    justify-content: space-between;

    .Title {
      text-align: left;
      font-weight: bold;
      font-size: 20px;
    }
  }

  .inlineinput {
    display: grid;
    grid-template-columns: 6em auto;
    align-items: center;

    .inputbox {
      width: 100%;
    }
  }

  .savebtn {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 3rem;

    button {
      width: 182px;
      height: 45px;
      font-size: 16px;
      background: linear-gradient(
          247.7deg,
          rgba(30, 52, 253, 0.75) -73.17%,
          rgba(161, 85, 255, 0.75) 64.31%
      );
      border-radius: 15px;
    }
  }

  label {
    padding: 7px 0;
    font-size: 12px;
  }
}

.InpContainer {
  margin-top: 1rem;
}

.modalContainer {
  padding: 1rem 4rem;

  .btnContainer {
    display: flex;
    flex-direction: column;
    width: 100%;

    > * {
      padding-bottom: 0.2rem;
      padding-top: 0.2rem;
      border-radius: 15px;
    }

    .Savebtn {
      margin-bottom: 0.5rem;
      background: linear-gradient(
          247.7deg,
          rgba(30, 52, 253, 0.75) -73.17%,
          rgba(161, 85, 255, 0.75) 64.31%
      );
      color: #f4f4f4;
    }
  }

  .ImageContainer {
    width: 3rem;
    height: 3rem;
  }
}

.q-input {
  background: linear-gradient(
      250.02deg,
      rgba(36, 0, 138, 0.2) 10.99%,
      rgba(60, 60, 60, 0.2) 93.39%
  );
  border-radius: 7px;
}

.AssignBtn {
  padding-bottom: 0.3rem;
  padding-top: 0.3rem;
}

.AssignContainer {
  height: 9rem;
  width: calc(100vw - 4rem);
  overflow-x: auto;
  display: grid;
  grid-auto-flow: column;
  gap: 0.5rem;

  .Assignee {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    place-self: center;

    Label {
      padding: 0;
    }

    .JobTitle {
      color: #f5ac1f;
    }
  }
}

.AddAsigneeContainer {
  width: 90vw;

  .btnContainer {
    display: flex;
    flex-direction: column;
    width: 100%;

    > * {
      padding-bottom: 0.2rem;
      padding-top: 0.2rem;
      border-radius: 15px;
    }

    .Savebtn {
      margin-bottom: 0.5rem;
      background: linear-gradient(
          247.7deg,
          rgba(30, 52, 253, 0.75) -73.17%,
          rgba(161, 85, 255, 0.75) 64.31%
      );
      color: #f4f4f4;
    }
  }

  .PlayerContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 3fr;

    .EmpName {
      font-size: 1rem;
      text-align: left;
      align-self: center;
    }
  }
}

@media only screen and (min-device-width: 768px) {
  .AddAsigneeContainer {
    width: 40vh;
  }
  .AssignContainer {
    width: calc(50vh - 4rem);
  }
}
</style>
