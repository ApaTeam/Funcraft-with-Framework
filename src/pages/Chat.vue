<template>
  <q-page class="flex column pageChat">
    <Navbar />
    <q-list bordered>
      <q-item clickable v-ripple to="/chat/temp">
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          Insert Player Name
          <q-item-label caption lines="2"
            >Lorem ipsum dolor sit amet, consectetur adipiscit
            elit.</q-item-label
          >
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import Navbar from "src/components/Navbar.vue";
export default {
  components: { Navbar },
  name: "Chat",
};
</script>


<style lang="scss" scoped>
.text-caption {
  color: whitesmoke;
  font-weight: lighter;
}
</style>