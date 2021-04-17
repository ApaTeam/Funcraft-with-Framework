<template>
  <q-page class="flex column PageIndex">
    <Navbar />
    <img alt="" src="~assets/Player-WithBG.png" class="PlayerImage" />
    <div class="Tabs">
      <!-- 
      Todo
      Make Component 
        - Name + LVL,
        - Health Gold Exp + Weapon Icon
        - Access Inventory
      -->
    </div>
  </q-page>
</template>

<script>
import Navbar from "components/Navbar.vue";
export default {
  components: { Navbar },
  name: "PageIndex",
};
</script>


<style lang="scss" scoped>
.PageIndex {
  overflow-x: hidden;
  position: relative;
}
.PlayerImage {
  position: absolute;
  width: 100vw;
  top: 0;
}
</style>