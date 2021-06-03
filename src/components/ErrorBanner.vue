<template>
  <q-banner class="BannerContainer ErrorBanner text-white" v-if="this.$store.state.isError">
    <template v-slot:avatar>
      <q-icon name="warning" size="sm" color="white" />
    </template>
    {{this.$store.state.ErrMsg}}
    <template v-slot:action>
      <q-btn
        flat
        color="white"
        label="Dismiss"
        @click="dismissBanner"
      />
    </template>
  </q-banner>
</template>

<script>
export default {
  name: "ErrorBanner",
  methods: {
    dismissBanner() {
      this.$store.commit("hideErrMsg");
    }
  },
}
</script>

<style scoped lang="scss">

.BannerContainer {
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

