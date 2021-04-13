<template>
  <q-page class="flex column PageIndex" style="overflow-x: hidden">
    <Nav class="NavArea">
      <q-btn flat color="standard" icon="arrow_back_ios" label="Back" />
      <img alt="Funcraft logo" src="~assets/FunCraft.svg" />
    </Nav>
    <img alt="" src="~assets/Player-WithBG.png" />
    <div class="Tabs"></div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
};
</script>


<style lang="scss" scoped>
.NavArea {
  //relative biar bisa ada garisnya
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 12px;

  &::after {
    //Garis putih yang dibawah
    content: "";
    position: absolute;

    // ngatur lokasinya (tengah bawah)
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    border-bottom: 1px solid rgba(168, 120, 227, 0.3);
    width: 90%;
  }

  img {
    height: 1.5rem;
    margin-right: 20px;
  }
}
</style>