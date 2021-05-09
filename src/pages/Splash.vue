<template>
  <q-page class="flex column flex-center pageCont">
    <img alt="Funcaraft logo" src="~assets/Funcraft.svg" />
    <h5 class="SubTitle">by APA</h5>
    <div class="loader"></div>
  </q-page>
</template>

<script>
export default {
  name: "Splash",
  mounted() {
    // this.$store.commit("setPicUrl", "user(1).jpg");
    // this.$store.commit("setPlayerName", "Ivan");
    setTimeout(() => {
      this.$router.push({ path: "/main" });
    }, 2000);
  },
};
</script>


<style lang="scss" scoped>
.loader {
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #2a1249;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>