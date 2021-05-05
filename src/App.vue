<template>
  <div class="htmlBackground">
    <div class="AppContainer">
      <div id="q-app">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  mounted() {
    // this.$store.commit("initState");
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (min-device-width: 768px) {
  .htmlBackground {
    background: linear-gradient(197.99deg, #2e0097 -80.8%, #000000 78.41%);
  }
  .AppContainer {
    margin: 0 auto;
    width: 50vh;
    height: 100vh;
  }
}
</style>