<template>
  <q-page class="flex column QuestMap">
      <Navbar />
      <div class="mapbody">
        <div class="QuestTitleContainer rounded-borders">
            <q-img 
            src="~assets/PlayerIcon/Player (0).png"
            style="height: 30px; width: 30px;"></q-img>
            <p class="QuestTitle">Meeting with Mr. Mitchell</p>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.711982932611!2d106.78841065232054!3d-6.169307869075848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f65c8ffa044f%3A0x6f715cfa0b44194!2sFaculty%20of%20Information%20Technology!5e0!3m2!1sen!2sid!4v1618741214183!5m2!1sen!2sid" width="400" height="900" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
.mapbody{
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: flex-end;
    z-index: 99;
    .QuestTitleContainer{
        display: flex;
        flex-direction: row;
        margin: 20px;
        padding: 12px;
        background: linear-gradient(rgb(31, 0, 117, 0.7),rgb(0, 0, 0, 0.7));
        p{
            padding-top: 5px;
        }
    }
}
iframe{
    position: absolute;
    z-index: 98;
    margin: 0;
    top: 4rem;
    width: 100%;
    height: 91%;
}
</style>