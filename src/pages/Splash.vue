<template>
  <q-page class="flex column flex-center pageCont">
    <img alt="Funcaraft logo" src="~assets/FunCraft.svg" />
    <h5 class="SubTitle">by APA</h5>
  </q-page>
</template>

<script>
export default {
  name: "Splash",
  mounted() {
    setTimeout(() => {
      this.$router.push({ path: "/main" });
    }, 3000);
  },
};
</script>


<style lang="scss" scoped>
</style>