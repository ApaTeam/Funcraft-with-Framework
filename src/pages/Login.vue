<template>
  <q-page class="flex column Login">
    <div class="title">
      <img class="Funcraft logo" src="~assets/Funcraft.svg" />
      <div class="playerimage">
        <img class="player logo" src="~assets/PlayerIcon/Warrior.png" />
        <img class="player logo" src="~assets/PlayerIcon/Mage.png" />
        <img class="player logo" src="~assets/PlayerIcon/Archer.png" />
        <img class="player logo" src="~assets/PlayerIcon/Sorcerer.png" />
      </div>
    </div>
    <q-banner class="loginBanner text-white" v-if="showLogin">
      This app is still in devlopment, to use this app please use :
      <br />
      <br />email : admin, <br />password : admin
      <template v-slot:action>
        <q-btn flat color="white" label="Dismiss" @click="showLogin = false" />
      </template>
    </q-banner>
    <q-form @submit="loginMethod" class="inputbox">
      <h4>Login</h4>
      <p>Please Sign In to Continue</p>
      <q-input
        dark
        outlined
        filled
        color="purple-9"
        label-color="purple-1"
        class="input1"
        v-model.trim="email"
        label="E-MAIL"
      >
        <template v-slot:prepend>
          <q-icon name="email" />
        </template>
      </q-input>
      <q-input
        dark
        outlined
        filled
        color="purple-9"
        label-color="purple-1"
        class="input2"
        v-model.trim="password"
        :type="isPwd ? 'password' : 'text'"
        label="PASSWORD"
      >
        <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <a>Forgot Password</a>
      <q-btn flat rounded class="ButtonLogin" label="LOGIN" type="submit" />
    </q-form>

    <p>Don't have an account? <a>SIGN UP</a></p>
  </q-page>
</template>

<script>
import { api } from "boot/axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      isPwd: true,
      showLogin: true,
    };
  },
  methods: {
    loginMethod() {
      //tambahin loading animation disini
      api
        .post("/login", {
          Email: this.email,
          Pass: this.password,
        })
        .then((res) => {
          //loading animation ilang pas disini
          // console.log(res);
          if (res.data !== "") {
            //redirect
            this.$store.commit("setPlayer", res.data);
            console.log(res.data);
            this.$router.push({ name: "Home" });
          } else {
            //show error message disini
          }
        })
        .catch(() => {});
    },
  },
};
</script>


<style lang="scss" scoped>
.Login {
  padding: 10vh 2rem;
  font-family: Roboto;
  font-size: 12px;
  > * {
    width: 100%;
  }
  .Funcraft {
    height: 3rem;
  }
  .playerimage {
    display: flex;
    flex-direction: row;
    padding: 20px 10px;
    justify-content: space-between;
  }
  .inputbox {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 24px;
    }
    p {
      font-family: Montserrat;
      font-size: 11px;
      text-align: left;
      color: #707070;
      margin-bottom: 20px;
    }
    .input1 {
      font-size: 11px;
      margin-top: 10px;
      background: linear-gradient(#24008a, #3c3c3c), #707070,
        rgb(255, 255, 255, 14);
    }
    .input2 {
      font-size: 11px;
      margin-top: 10px;
      background: #636363, #707070;
    }
    a {
      text-align: right;
      font-size: 10px;
      color: rgb(169, 120, 230);
    }
  }
  .ButtonLogin {
    align-self: center;
    margin-top: 5rem;
    margin-bottom: 5rem;

    width: 50%;
    background: linear-gradient(
      247.7deg,
      rgba(30, 52, 253, 0.55) -73.17%,
      rgba(161, 85, 255, 0.55) 64.31%
    );
    border-radius: 15px;
    border: transparent;
    color: white;
  }
  p {
    text-align: center;
    color: #f4f4f4;
  }
  a {
    color: #a978e6;
  }
}
.loginBanner {
  background: linear-gradient(
    246.81deg,
    rgba(108, 0, 192, 0.5) -93.94%,
    rgba(0, 0, 0, 0.32) 116.58%
  );
  border: 1px solid #3c3c3c;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
</style>