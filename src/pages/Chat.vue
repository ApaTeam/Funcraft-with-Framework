<template>
  <q-page class="flex column pageChat">
    <Navbar />
    <q-list bordered>
      <q-item clickable v-ripple to="/chat/temp">
        <q-item-section avatar>
          <q-avatar>
            <img src="https://storage.googleapis.com/funcraft_backend_bucket/Assets/user(4).jpg" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          Mitchell Ryu
          <q-item-label caption lines="2"
            >Yes, what's your question ?
            </q-item-label
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