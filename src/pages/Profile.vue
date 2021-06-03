<template>
  <q-page class="flex column pageProfile">
    <Navbar />
    <div class="Content">
      <div class="Header">
        <h5 class="Title">PROFILE</h5>
        <label>Customize your character</label>
      </div>
      <div class="EmployeeName row">
        <label>Employee Name : </label>
        <q-input dark dense filled class="inputform" v-model="EmployeeName" placeholder="Input Your Name..."/>
      </div>
      <div class="EmployeePic row">
        <img
          :src="
            'https://storage.googleapis.com/funcraft_backend_bucket/Assets/' +
            this.$store.state.Player.PROF_PIC_URL
          "
          alt="Picture"
          class="smallview ProfilePic"
        />
        <q-file dark dense filled class="inputform" v-model="ProfilePic" />
      </div>
      <div class="CharacterName row">
        <label>Character Name : </label>
        <q-input dark dense filled class="inputform" v-model="CharacterName" placeholder="Input Your Character Name..."/>
      </div>
      <div class="CharacterPic row">
        <img
          :src="
            require('../assets/PlayerIcon/' + CharacterPic + '.png')
          "
          alt="Profile Picture"
          class="smallview"
        />
        <q-select dark dense filled class="selectpic" v-model="CharacterPic" :options="options" />
      </div>
      <div class="BackgroundPic row">
        <img
          src="~assets/Background/BG1.png"
          alt="Profile Picture"
          class="smallview"
        />
        <q-file dark dense filled class="inputform" v-model="BackgroundPic" />
      </div>
      <div class="ButtonArea">
        <q-btn flat rounded class="ButtonSave" label="Save" type="submit" />
      </div>
    <q-scroll-observer @scroll="onScroll"/>
    </div>
  </q-page>
</template>

<script>
import Navbar from "src/components/Navbar.vue";
export default {
  components: { Navbar },
  name: "Profile",
  data() {
    return {
      EmployeeName: this.$store.state.Player.EMP_NAME,
      ProfilePic: null,
      CharacterName: this.$store.state.Player.NAME,
      CharacterPic: this.$store.state.Player.JOB_NAME,
      options:['Archer', 'Knight', 'Mage', 'Sorcerer', 'Warrior'],
      BackgroundPic: null,

    };
  },
  methods: {
    onScroll(info) {
      if (info.direction === "down") {
        this.$store.commit("setScrollDir", true);
        return;
      }
      this.$store.commit("setScrollDir", false);
    },
  },
  mounted() {
    this.$store.commit("setScrollDir", false);
  },
  destroyed() {
    this.$store.commit("setScrollDir", false);
  },
};
</script>

<style lang="scss" scoped>
.Content {
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;

  height: calc(100vh - 6rem);
}
.pageProfile{
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  .row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0;
    label{
      align-self: center;
    }
    .smallview{
      width: 20%;
      height: 100%;
      
    }
    .inputform{
      width: 50%;
    }
  }
  .Header{
    .Title {
      text-align: left;
      font-weight: bold;
      font-size: 20px;
    }
  }
  .CharacterPic{
    .selectpic{
      width: 50%;
    }
  }
  .ButtonArea{
    display: flex;
    flex-direction: row-reverse;
    .ButtonSave {
      align-self: center;
      margin-top: 5rem;
      margin-bottom: 5rem;

      width: 25%;
      background: linear-gradient(
        247.7deg,
        rgba(30, 52, 253, 0.55) -73.17%,
        rgba(161, 85, 255, 0.55) 64.31%
      );
      border-radius: 15px;
      border: transparent;
      color: white;
    }
  }
}
.ProfilePic{
  border-radius: 50%;
}
</style>
