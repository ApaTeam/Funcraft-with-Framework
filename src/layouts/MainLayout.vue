
<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="pageCont">
      <router-view />
      <div
        v-if="!this.$store.state.isScrolledDown"
        class="row no-wrap items-center rounded-borders NavButtonContainer"
      >
        <q-space />
        <div class="ButtonsContainer">
          <!-- <q-icon name="fas fa-gamepad" /> -->
          <q-btn
            unelevated
            icon="fas fa-signal"
            class="NavBtn LeftBtn"
            to="/main/ranks"
          />
          <q-btn
            round
            rounded
            icon="svguse:icons.svg#FuncraftIcon"
            class="MiddleBtn"
            to="/main/profile"
          />
          <!-- <q-icon name="fas fa-comment-dots" /> -->
          <q-btn
            unelevated
            icon="fas fa-comment-dots"
            class="NavBtn RightBtn"
            to="/main/profile"
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
    z-index: 99;
    position: sticky;
    bottom: 7.5%;
    width: 100%;
    padding: 10px 0;
    .ButtonsContainer {
      background: linear-gradient(
        252.74deg,
        rgba(55, 0, 179, 0.8) -171.41%,
        rgba(56, 56, 56, 0.352) 92.84%
      );
      border-radius: 20px;
    }

    .NavBtn {
      --PaddingSize: 25px;
      padding: 15px var(--PaddingSize);
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
      z-index: 2;
      background: linear-gradient(
        222.04deg,
        rgba(72, 244, 255, 0.59) 1.99%,
        rgba(130, 28, 255, 0.65) 63.32%,
        #1804ff 91.77%
      );
    }
  }
}
</style>
