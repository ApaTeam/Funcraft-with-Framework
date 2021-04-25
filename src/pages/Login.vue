<template>
  <q-page class="flex column Login">
    <div class="title">
        <img class="Funcraft logo" src="~assets/FunCraft.svg" />
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
        <q-input dark outlined filled color="purple-9" class="input1" v-model="email" label="E-MAIL">
            <template v-slot:prepend>
            <q-icon name="email" />
            </template>
        </q-input>
        <q-input dark outlined filled color="purple-9" class="input2" v-model="password" :type="isPwd ? 'password' : 'text'" label="PASSWORD">
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
    <q-btn flat rounded class="ButtonLogin" label="LOGIN"/>
    <p>Don't have an account? <a>SIGN UP</a></p>
  </q-page>
</template>

<script>
export default {
  name: "Login",
  data () {
    return {
      email: '',
      password: '',
      isPwd: true
    }
  },
};
</script>


<style lang="scss" scoped>
    .Login{
        padding: 10vh 5vw;
        font-family: Roboto;
        font-size: 12px;
        .Funcraft{
            width: 20vw;
        }
        .playerimage{
            display: flex;
            flex-direction: row;
            padding: 20px 10px;
            justify-content: space-between;
        }
        .inputbox{
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            h4{
                font-size: 24px;
            }
            p{
                font-family: Montserrat;
                font-size: 11px;
                text-align: left;
                color: #707070;
                margin-bottom: 20px;
            }
            .input1{
                font-size: 11px;
                margin-top: 10px;
                background: linear-gradient(#24008A,#3C3C3C),#707070,rgb(255, 255, 255, 14);
            }
            .input2{
                font-size: 11px;
                margin-top: 10px;
                background: #636363,#707070;
            }
            a{
                text-align: right;
                font-size: 10px;
                color: rgb(169, 120, 230) ;
            }
        }
        .ButtonLogin{
            margin-top: 10vh;
            margin-left: 19vw;
            width: 50vw;
            background: linear-gradient(rgb(30, 52, 253), rgb(161, 85, 255)), #F4F4F4;
            border: transparent;
            color: white;
            margin-bottom: 10vh;
        }
        p{
            text-align: center;
            color: #F4F4F4;
        }
        a{
            color: #A978E6;
        }
    }
</style>