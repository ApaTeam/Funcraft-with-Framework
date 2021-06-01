<template>
  <q-page class="flex column PageIndex">
    <Navbar :type="'Title'"/>
    <div class="Background">
      <img alt="" src="~assets/Background/BG1.png" class="BGImage"/>
      <q-img
        :src="
          require('../assets/PlayerIcon/' +
            this.$store.state.Player.JOB_NAME +
            '.png')
        "
        class="BGChar"
      />
    </div>

    <div class="Content overflow-auto" v-on:scroll.passive="handleScroll">
      <div class="Tabs">
        <div class="DragBarContainer">
          <div class="DragBar"> </div>
        </div>
        <SalesOfficerTab
          v-if="this.$store.state.Player.EMP_POS === 'Junior Salesman'"
          :overflow-tab="overflowTab"/>
        <SupervisorTab
          v-else
          :overflow-tab="overflowTab"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import {api} from "boot/axios";
import Navbar from "components/Navbar.vue";
import SalesOfficerTab from "components/IndexTabs/SalesOfficerTab";
import SupervisorTab from "components/IndexTabs/SupervisorTab";

export default {
  components: {SupervisorTab, SalesOfficerTab, Navbar},
  name: "PageIndex",
  data: function () {
    return {
      isTop: false,
      windowHeight: window.outerHeight,
      isScrolling: null,
      overflowTab: {
        "overflow-y": "hidden",
      },
    };
  },
  methods: {
    handleScroll(e) {
      let max_scroll = e.target.scrollHeight - e.target.clientHeight;
      window.clearTimeout(this.isScrolling);
      this.isScrolling = setTimeout(() => {
        if (e.target.scrollTop < 0.05 * max_scroll) {
          e.target.scrollTop = 0;
          this.isTop = false;
          this.overflowTab["overflow-y"] = "hidden";
          this.$store.commit("setScrollDir", false);
          return;
        }
        if (e.target.scrollTop > 0.95 * max_scroll) {
          e.target.scrollTop = max_scroll;
          this.isTop = true;
          this.overflowTab["overflow-y"] = "auto";
          this.$store.commit("setScrollDir", true);
          return;
        }
        if (this.isTop) {
          e.target.scrollTop = 0;
          this.isTop = false;
          this.overflowTab["overflow-y"] = "hidden";
          this.$store.commit("setScrollDir", false);
        } else {
          e.target.scrollTop = max_scroll;
          this.isTop = true;
          this.overflowTab["overflow-y"] = "auto";
          this.$store.commit("setScrollDir", true);
        }
      }, 20);
    },
  },
  mounted() {
    this.$store.commit("setScrollDir", false);
  },
  destroyed() {
    this.$store.commit("setScrollDir", false);
  },
};
</script>


<style lang="scss" scoped>
.PageIndex {
  position: relative;
}

.Background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 40%;

  .BGImage {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;

    width: 100%;

    z-index: 1;
  }

  .BGChar {
    position: absolute;

    left: 50%;
    top: 50%;

    width: 20vh;
    height: 20vh;

    z-index: 2;

    image-rendering: pixelated;
    transform: translate(-50%, -50%);
  }
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
  border-radius: 1.5rem 1.5rem 0 0;
  margin-top: 40vh;

  padding: 1rem 1.5rem;

  background: linear-gradient(197.99deg, #2e0097 -80.8%, #000000 78.41%);
}

.DragBarContainer {
  position: relative;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;

  .DragBar {
    position: absolute;
    left: 50%;
    width: 5rem;
    height: 0.4rem;

    transform: translateX(-50%);

    border-radius: 0.2rem;
    background: #f4f4f4;
  }
}
</style>
