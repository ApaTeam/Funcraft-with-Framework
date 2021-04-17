<template>
  <div class="NavPadding">
    <div class="NavContainer">
      <Nav class="NavArea">
        <q-btn
          flat
          color="standard"
          icon="arrow_back_ios"
          label="Back"
          @click="goBack"
        />
        <img
          v-if="type === 'Profile'"
          class="Profile logo"
          :src="require('../assets/' + this.$store.state.Player.PicUrl)"
          @click="
            () => {
              this.$router.push('/main/profile');
            }
          "
        />
        <img v-else class="Funcraft logo" src="~assets/Funcraft.svg" />
      </Nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    type: String,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>


<style lang="scss" scoped>
.NavPadding {
  height: 5rem;
}
.NavContainer {
  z-index: 99;
  position: fixed;
  width: 100%;
}
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

  .logo {
    margin-right: 20px;
  }
}
.Funcraft {
  height: 1.5rem;
}
.Profile {
  height: 2.3rem;
  border-radius: 100%;
}
</style>