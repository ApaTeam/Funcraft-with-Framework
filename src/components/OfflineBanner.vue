<template>
  <q-banner class="offlineBanner text-white" v-if="this.$store.state.isOffline">
    <template v-slot:avatar>
      <q-icon name="signal_wifi_off" size="sm" color="white" />
    </template>
    unable to get data, App is currently offline
    <template v-slot:action>
      <q-btn
        flat
        color="white"
        label="Dismiss"
        @click="dismissOffline"
      />
    </template>
  </q-banner>
</template>

<script>
export default {
  name: "OfflineBanner",
  methods: {
    dismissOffline() {
      this.$store.commit("setOfflineState", false);
    }
  },
}
</script>

<style scoped lang="scss">

.offlineBanner {
  $side-padding : .5rem;
  position: absolute;
  top: $side-padding;
  left: $side-padding;
  right: $side-padding;
  z-index: 101;
  background: linear-gradient(
    246.81deg,
    rgba(108, 0, 192, 0.5) -93.94%,
    rgba(0, 0, 0, 0.32) 116.58%
  ),
  linear-gradient(black 0%, black 100%);
  border: 1px solid #3c3c3c;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
</style>
