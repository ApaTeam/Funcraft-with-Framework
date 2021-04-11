
<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="pageCont">
      <router-view />
      <div class="row no-wrap items-center rounded-borders NavButton">
        <q-space />
        <div>
          <q-btn unelevated color="indigo-10" icon="fas fa-gamepad" />
          <q-btn
            round
            color="indigo"
            rounded
            icon="svguse:icons.svg#FuncraftIcon"
          />
          <q-btn unelevated color="indigo-10" icon="fas fa-comment-dots" />
        </div>
        <q-space />
      </div>
    </q-page-container>
  </q-layout>
</template>


<script>
export default {
  name: "MainLayout",
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

  position: relative;
  .NavButton {
    position: absolute;
    bottom: 7.5%;
    width: 100%;
    padding: 10px 0;
  }
}
</style>
