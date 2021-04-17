<template>
  <q-page class="flex column PageRankings">
    <navbar :type="'Profile'" />
  </q-page>
</template>

<script>
import Navbar from "src/components/Navbar.vue";
export default {
  components: { Navbar },
  name: "Rankings",
};
</script>


<style lang="scss" scoped>
</style>