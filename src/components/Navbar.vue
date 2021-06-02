<template>
  <div class="NavPadding">
    <div class="NavContainer">
      <Nav class="NavArea">
        <q-btn
          class="BackBtn Btn"
          v-if="type !== 'Title'"
          flat
          color="standard"
          icon="arrow_back_ios"
          label="Back"
          @click="goBack"
        />
        <div v-else class="MOTDContainer">
          <p class="Greetings">Hi, {{ this.$store.state.Player.EMP_NAME }}</p>
          <p class="MOTD">What's for Today ?</p>
        </div>
        <q-btn class="btnaddchat" label="+" v-if="type =='Chat'" @click="open"></q-btn>
        <q-avatar font-size="2.3rem" v-else-if="type != null" class="logo">
          <img
            :src="
              'https://storage.googleapis.com/funcraft_backend_bucket/Assets/' +
              this.$store.state.Player.PROF_PIC_URL
            "
            alt="Profile Picture"
          />
          <q-menu anchor="bottom end" self="top end" auto-close>
            <q-list style="min-width: 100px" class="popupText">
              <q-item clickable to="/main/Profile">
                <q-item-section>My Profile</q-item-section>
              </q-item>
              <q-item clickable to="/main/Performance">
                <q-item-section>My Performance</q-item-section>
              </q-item>
              <q-item clickable @click="LogOut">
                <q-item-section>Log Out</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-avatar>

        <img v-else class="Funcraft logo" src="~assets/Funcraft.svg" alt="FUNCRAFT"/>
      </Nav>
    </div>
  </div>
</template>

<script>
//type : Title, Profile, Chat, (null)
export default {
  name: "Navbar",
  props: {
    type: String,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    LogOut() {
      this.$store.commit("playerLogOut");
      this.$router.go({ name: "Login" });
    },
    open(){
      this.$store.commit('setAddChat', true);
    },
  },
};
</script>


<style lang="scss" scoped>
.NavPadding {
  position: relative;
  height: 5rem;
}
.NavContainer {
  z-index: 99;
  position: absolute;
  left: 0;
  right: 0;
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
    transform: translate(-50%);

    border-bottom: 1px solid rgba(168, 120, 227, 0.3);
    width: 90%;
  }

  .BackBtn{
    border-radius: .5rem;
  }

  .logo {
    margin-right: 20px;
  }
}
.Funcraft {
  height: 1.5rem;
}
// .Profile {
//   width: 2.3rem;
//   height: 2.3rem;
//   border-radius: 100%;
// }
.btnaddchat{
  font-size: 1.2rem;
}
.MOTDContainer {
  padding-left: 1rem;
  .Greetings {
    font-size: 0.8rem;
  }
  .MOTD {
    font-size: 1.2rem;
    font-weight: bold;
  }
}

.popupText {
  .q-item {
    padding: 0.5rem 1rem;
    border-radius: 15px;
    * {
      font-size: 1rem;
    }
  }
}
</style>
