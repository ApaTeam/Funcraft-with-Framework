<template>
  <q-page class="flex column flex-center pageCont">
    <img alt="Funcaraft logo" src="~assets/Funcraft.svg" />
    <h5 class="SubTitle">by APA</h5>
  </q-page>
</template>

<script>
export default {
  name: "Splash",
  mounted() {
    this.$store.commit("setPicUrl", "Profile-Pic.png");
    this.$store.commit("setPlayerName", "Ivan");
    setTimeout(() => {
      this.$router.push({ path: "/main" });
    }, 3000);
  },
};
</script>


<style lang="scss" scoped>
</style>