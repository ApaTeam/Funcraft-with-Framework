<template>
  <q-page class="flex column PageIndex">
    <Navbar />
    <img alt="" src="~assets/Player-WithBG.png" class="PlayerImage" />
    <div class="Content">
      <div class="Tabs" :style="{ 'margin-top': MarginTop }">
        <div
          class="DragBarContainer"
          v-touch-pan.prevent.mouse="
            ({ e, ...info }) => {
              if (info.position.top - 112 > windowHeight * 0.5) {
                MarginTop = 0.5 * windowHeight + 'px';
              } else {
                MarginTop = info.position.top - 112 + 'px';
              }
              if (info.isFinal) {
                if (isTop) {
                  if (info.position.top > windowHeight * 0.3) {
                    MarginTop = '40vh';
                    isTop = false;
                  } else {
                    MarginTop = '0';
                    isTop = true;
                  }
                } else {
                  if (info.position.top > windowHeight * 0.5) {
                    MarginTop = '40vh';
                    isTop = false;
                  } else {
                    MarginTop = '0';
                    isTop = true;
                  }
                }
              }
            }
          "
          @click="
            () => {
              MarginTop = isTop ? '40vh' : '0';
              isTop = !isTop;
            }
          "
        >
          <div class="DragBar"></div>
        </div>

        <!-- 
      Todo
      Make Component 
        - Name + LVL,
        - Health Gold Exp + Weapon Icon
        - Access Inventory
      -->
        <h5>Test</h5>
      </div>
    </div>
  </q-page>
</template>

<script>
import Navbar from "components/Navbar.vue";
export default {
  components: { Navbar },
  name: "PageIndex",
  data: function () {
    return {
      isTop: false,
      MarginTop: "40vh",
      windowHeight: window.innerHeight,
    };
  },
};
</script>


<style lang="scss" scoped>
.PageIndex {
  position: relative;
}
.PlayerImage {
  position: fixed;
  width: 100vw;
  left: 0;
  top: 0;
}
.Content {
  z-index: 2;
  //bikin component ini scrollable
  height: calc(100vh - 5rem);
  overflow-y: hidden;
}
.Tabs {
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 90vh;
  border-radius: 25px;

  padding: 3rem 1.5rem;

  background: linear-gradient(197.99deg, #2e0097 -80.8%, #000000 78.41%);
}
.DragBarContainer {
  position: relative;
  padding-top: 0.5rem;
  padding-bottom: 2rem;
  width: 100%;
  .DragBar {
    position: absolute;
    width: 5rem;
    height: 0.4rem;
    border-radius: 0.2rem;
    background: #f4f4f4;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>