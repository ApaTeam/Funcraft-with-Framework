<template>
  <q-page class="flex column AssignTask">
    <navbar :type="'Profile'" />
    <div class="pageContent">
      <form action="" class="FormContainer" @submit="showAlert = true">
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
        <label>Task Name</label>
        <q-input dark dense filled placeholder="Input name.." />
        <label>Task Description</label>
        <q-input
          dark
          filled
          placeholder="Insert additional description.."
          type="textarea"
        />

        <label>Location</label>
        <q-input dark dense filled placeholder="Input location.." />

        <label>Start Date</label>
        <q-input
          dark
          dense
          filled
          class="inputbox"
          placeholder="Date"
          type="date"
        />

        <label>Reward</label>
        <q-input
          dark
          dense
          filled
          class="inputbox"
          placeholder=""
          type="number"
        >
          <template v-slot:prepend>
            <q-icon name="money" />
          </template>
        </q-input>

        <label>Expected Work Time</label>
        <q-input
          dark
          dense
          filled
          class="inputbox"
          placeholder="0"
          type="number"
        >
          <template v-slot:append>
            <label for="">Hours</label>
          </template>
        </q-input>

        <div class="savebtn">
          <q-btn label="Save" type="submit" />
        </div>
      </form>

      <q-dialog v-model="showAlert">
        <q-card class="modalContainer">
          <q-card-section align="center">
            <div class="ImageContainer">
              <q-img
                :src="
                  require('../assets/PlayerIcon/' +
                    this.$store.state.Player.JOB_NAME +
                    '.png')
                "
              />
            </div>
          </q-card-section>
          <q-card-section align="center">
            <div class="h6 Title">Save sales data ?</div>
          </q-card-section>

          <q-card-actions align="center">
            <div class="btnContainer">
              <q-btn flat label="Save" class="Savebtn" to="/main" />
              <q-btn outline label="Cancel" class="Cancelbtn" v-close-popup />
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
                    <q-checkbox v-model="CheckBoxList[index]" />
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
import { api } from "boot/axios";
import Navbar from "src/components/Navbar.vue";
export default {
  components: { Navbar },
  name: "AssignTask",
  data() {
    return {
      showAlert: false,
      AddAsignee: false,
      PlayerList: [],
      CheckBoxList: [],
      AssignedPlayer: [],
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
    api
      .get("/rank")
      .then((res) => {
        this.$q.loading.hide();
        //loading animation ilang pas disini
        console.log(res);
        if (res.data !== "") {
          this.PlayerList = res.data;
          this.PlayerList.forEach((e) => {
            this.CheckBoxList.push(false);
          });
          console.log(this.PlayerList);
        } else {
          //show error message disini
        }
      })
      .catch(() => {});
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
  height: 100px;
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