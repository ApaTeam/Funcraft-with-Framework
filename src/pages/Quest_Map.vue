<template>
  <q-page class="flex column QuestMap">
    <Navbar />
    <div class="mapbody">
      <div class="QuestTitleContainer">
        <q-img
          src="~assets/PlayerIcon/Player (0).png"
          style="height: 1.2rem; width: 1.2rem; margin-right: 0.5rem"
        ></q-img>
        <p class="QuestTitle">Meeting with Mr. Mitchell</p>
      </div>
      <div class="Location">
        <p class="top">Location</p>
        <p class="address">
          Jl. Letjen S Parman No 1 ,Grogol, Jakarta Barat, DKI Jakarta, 11450
        </p>
      </div>
    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.711982932611!2d106.78841065232054!3d-6.169307869075848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f65c8ffa044f%3A0x6f715cfa0b44194!2sFaculty%20of%20Information%20Technology!5e0!3m2!1sen!2sid!4v1618741214183!5m2!1sen!2sid"
      width="400"
      height="900"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </q-page>
</template>

<script>
import Navbar from "src/components/Navbar.vue";
export default {
  components: { Navbar },
  name: "QuestMap",
};
</script>

<style lang="scss" scoped>
.mapbody {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-end;
  z-index: 99;
  .QuestTitleContainer {
    display: flex;
    flex-direction: row;
    margin: 20px;
    padding: 12px;
    background: linear-gradient(
      102.06deg,
      rgba(31, 0, 117, 0.7) -12.6%,
      rgba(0, 0, 0, 0.7) 36.74%
    );
    border-radius: 10px;
  }
  .Location {
    position: absolute;
    top: 72vh;
    left: 8vw;
    border-radius: 20px;
    background: linear-gradient(
      107.24deg,
      rgba(0, 0, 0, 0.504) -15.26%,
      rgba(23, 0, 89, 0.7) -15.25%,
      rgba(0, 0, 0, 0.7) 76.34%
    );
    width: 84vw;
    padding: 20px;
    .address {
      margin-bottom: 0;
      font-weight: bold;
    }
    a {
      font-size: 10px;
      color: #2ca180;
    }
  }
}
iframe {
  position: absolute;
  z-index: 98;
  margin: 0;
  top: 4rem;
  width: 100%;
  height: 91%;
}
</style>