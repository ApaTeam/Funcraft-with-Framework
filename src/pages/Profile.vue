<template>
  <q-page class="flex column PageProfile">
    <navbar />
    <div class="ProfileInfo">
      <img
        :src="require('../assets/' + this.$store.state.Player.PicUrl)"
        alt=""
        class="PlayerImage"
      />
      <h5 class="Title">Ivan Wijaya</h5>
      <p class="SubTitle">Salesman</p>
    </div>
    <div class="Dashboard">
      <p class="Title">This Month Performance</p>
      <p class="SubTitle">Let's See How Many Task You Completed</p>
    </div>
  </q-page>
</template>

<script>
import Navbar from "src/components/Navbar.vue";
export default {
  components: { Navbar },
  name: "Profile",
};
</script>


<style lang="scss" scoped>
.ProfileInfo {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2rem;

  .Title {
    font-weight: bold;
    margin: 2rem 0 0 0;
  }
  .SubTitle {
    color: #f5ac1f;
  }
}
.Dashboard {
  display: flex;
  flex-direction: column;

  margin: 1rem;
  padding: 1.5rem;
  border-radius: 25px;

  background: rgba(255, 255, 255, 0.09)
    linear-gradient(
      250.02deg,
      rgba(36, 0, 138, 0.1) 10.99%,
      rgba(60, 60, 60, 0.1) 93.39%
    );

  text-align: center;
  .Title {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .SubTitle {
    font-weight: lighter;
  }
}
.PlayerImage {
  height: 180px;
  border-radius: 180px;
}
</style>