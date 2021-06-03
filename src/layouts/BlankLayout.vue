<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="pageCont">
      <OfflineBanner/>
      <ErrorBanner/>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>


<script>
import OfflineBanner from "components/OfflineBanner";
import ErrorBanner from "components/ErrorBanner";
export default {
  name: "BlankLayout",
  components: {ErrorBanner, OfflineBanner},
};
</script>


<style lang="scss">
.SubTitle {
  margin: 0;
}
.pageCont {
  position: relative;
  background: linear-gradient(
      349.3deg,
      #000000 -4.62%,
      rgba(29, 0, 89, 0.45) 88.46%
  ),
  #000000;
  color: #f4f4f4;
}
</style>
