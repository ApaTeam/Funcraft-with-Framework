
<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="pageCont">
      <router-view />
    </q-page-container>
  </q-layout>
</template>


<script>
export default {
  name: "BlankLayout",
};
</script>


<style lang="scss">
.SubTitle {
  margin: 0;
}
.pageCont {
  background: linear-gradient(
      349.3deg,
      #000000 -4.62%,
      rgba(29, 0, 89, 0.45) 88.46%
    ),
    #000000;
  color: #f4f4f4;
}
</style>