<template>
  <q-page class="flex column Login">
    <div class="title">
      <img class="Funcraft logo" src="~assets/Funcraft.svg" />
      <div class="playerimage">
        <img class="player logo" src="~assets/PlayerIcon/Player (1).png" />
        <img class="player logo" src="~assets/PlayerIcon/Player (2).png" />
        <img class="player logo" src="~assets/PlayerIcon/Player (3).png" />
        <img class="player logo" src="~assets/PlayerIcon/Player (4).png" />
      </div>
    </div>
    <div class="inputbox">
      <h4>Login</h4>
      <p>Please Sign In to Continue</p>
      <q-input
        dark
        outlined
        filled
        color="purple-9"
        label-color="purple-1"
        class="input1"
        v-model="email"
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
        v-model="password"
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
    </div>
    <q-btn
      flat
      rounded
      class="ButtonLogin"
      label="LOGIN"
      @click="loginMethod"
    />
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
    };
  },
  methods: {
    loginMethod() {
      api
        .post("/login", {
          Email: this.email,
          Pass: this.password,
        })
        .then((res) => {
          console.log(res);
          if (res.data != null) {
            //redirect
          } else {
            //show error message
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
</style>