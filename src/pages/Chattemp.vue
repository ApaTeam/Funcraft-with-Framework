<template>
  <q-page class="flex column pageChattemp">
    <Navbar />
    <div class="q-pa-md row justify-center">
      <div style="width: 100%; max-width: 400px">
        <q-chat-message label="Sunday, 19th" />

        <q-chat-message
          :avatar="
            'https://storage.googleapis.com/funcraft_backend_bucket/Assets/' +
              this.$store.state.Player.PROF_PIC_URL
          "
          :text="[
            'hey, i have a question about this task. Can i ask a question ?'
          ]"
          sent
          stamp="7 minutes ago"
          bg-color="whitesmoke"
        />
        <q-chat-message
          avatar="https://storage.googleapis.com/funcraft_backend_bucket/Assets/user(4).jpg"
          :text="[`Yes, what's your question ?`]"
          stamp="5 minutes ago"
        />
      </div>
    </div>

    <div class="bottom">
      <q-btn class="btnmore" label="+"></q-btn>
      <q-input
        class="messagebox"
        outlined
        v-model="text"
        placeholder="Send message.."
        :dense="false"
        dark
      />
      <q-btn class="btnmore" label=">" />
    </div>
  </q-page>
</template>

<script>
import Navbar from "src/components/Navbar.vue";
export default {
  components: { Navbar },
  name: "Chattemp",
  data() {
    return {
      text: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  .btnmore {
    color: #c4c4c4;
    font-size: 2rem;
  }
  .messagebox {
    width: 100%;
    padding: 20px 0;
  }
}
</style>
