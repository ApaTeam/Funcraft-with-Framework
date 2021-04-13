
<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="pageCont">
      <router-view />
      <div class="row no-wrap items-center rounded-borders NavButtonContainer">
        <q-space />
        <div>
          <!-- <q-icon name="fas fa-gamepad" /> -->
          <q-btn
            unelevated
            color="indigo-10"
            icon="fas fa-gamepad"
            class="NavBtn LeftBtn"
          />
          <q-btn
            round
            color="indigo"
            rounded
            icon="svguse:icons.svg#FuncraftIcon"
            class="MiddleBtn"
          />
          <!-- <q-icon name="fas fa-comment-dots" /> -->
          <q-btn
            unelevated
            color="indigo-10"
            icon="fas fa-comment-dots"
            class="NavBtn RightBtn"
          />
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
  .NavButtonContainer {
    position: sticky;
    bottom: 7.5%;
    width: 100%;
    padding: 10px 0;
    .NavBtn {
      --PaddingSize: 25px;
      padding: 10px var(--PaddingSize);
      --BtnHeight: 21px;
      &.LeftBtn {
        border-radius: 10px 0 0 10px;
        padding-right: calc(var(--BtnHeight) + var(--PaddingSize));
        margin-right: calc(var(--BtnHeight) * -1);
      }
      &.RightBtn {
        border-radius: 0 10px 10px 0;
        padding-left: calc(var(--BtnHeight) + var(--PaddingSize));
        margin-left: calc(var(--BtnHeight) * -1);
      }
    }
    .MiddleBtn {
      z-index: 99;
    }
  }
}
</style>
