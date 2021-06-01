<template>
  <q-page class="flex column InputSales">
    <navbar :type="'Profile'" />
    <div class="pageContent">
      <form action="" class="FormContainer">
        <h5 class="Title">Input Sales</h5>
        <div class="CustomerInput">
          <p>Customer Info</p>
          <div class="inlineInput">
            <label>Name :</label>
            <q-input dark dense filled v-model="FormInput.CustName" placeholder="Input customer name.." />
          </div>
          <div class="inlineInput">
            <label>Id :</label>
            <q-input dark dense filled v-model="FormInput.CustId" placeholder="Input customer Id number.." />
          </div>
        </div>
        <p>Sales Info</p>
        <div class="inlineInput">
          <label>Sales Date :</label>
          <q-input
            dark
            dense
            filled
            class="inputbox"
            v-model="FormInput.SalesDt"
            placeholder="Date"
            type="date"
          />
        </div>
        <div class="inlineInput">
          <label>Tenor :</label>
          <q-input
            dark
            dense
            filled
            class="inputbox"
            v-model="FormInput.SalesTenor"
            placeholder="Input sales length / tenor..."
            type="number"
          />
        </div>

        <label>Additional Description</label>
        <q-input
          dark
          filled
          v-model="FormInput.Desc"
          placeholder="Insert additional description.."
          type="textarea"
        />

        <div class="inlineInput">
          <label>Total Sales :</label>
          <q-input dark dense filled v-model="FormInput.SalesAmt" class="inputbox" placeholder="">
            <template v-slot:prepend>
              <q-icon name="money" />
            </template>
          </q-input>
        </div>

        <div class="savebtn">
          <q-btn label="Save" @click="showAlert = true" />
        </div>
      </form>

      <q-dialog v-model="showAlert">
        <q-card class="modalContainer">
          <q-card-section align="center">
            <div class="ImageContainer">
              <img
                :src="
                  require('../assets/PlayerIcon/' +
                    this.$store.state.Player.JOB_NAME +
                    '.png')
                "
              />
            </div>
          </q-card-section>
          <q-card-section align="center">
            <div class="h6 Title">Save sales data ?</div>
          </q-card-section>

          <q-card-actions align="center">
            <div class="btnContainer">
              <q-btn
                flat
                label="Save"
                class="Savebtn"
                to="/main"
                type="submit"
              />
              <q-btn outline label="Cancel" class="Cancelbtn" v-close-popup />
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import Navbar from "src/components/Navbar.vue";
export default {
  components: { Navbar },
  name: "InputSales",
  data() {
    return {
      showAlert: false,
      FormInput: {
        CustName: "",
        CustId:"",
        SalesTenor : null,
        SalesDt: null,
        Desc: "",
        SalesAmt: null
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.pageContent {
  padding: 0 30px;
  margin-top: 20px;
  height: calc(100vh - 20px - 6rem);
  overflow-y: auto;
  .Title {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
  }
  .inlineInput {
    padding-top: .2rem;
    display: grid;
    grid-template-columns: 6em auto;
    align-items: center;
    .inputbox {
      width: 100%;
    }
  }

  .savebtn {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 3rem;
    button {
      width: 182px;
      height: 45px;
      font-size: 16px;
      background: linear-gradient(
        247.7deg,
        rgba(30, 52, 253, 0.75) -73.17%,
        rgba(161, 85, 255, 0.75) 64.31%
      );
      border-radius: 15px;
    }
  }

  label {
    padding: 7px 0;
    font-size: 12px;
  }
}

.CustomerInput{
  margin-bottom: .5rem;
}

.modalContainer {
  padding: 1rem 4rem;
  .btnContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    > * {
      padding-bottom: 0.2rem;
      padding-top: 0.2rem;
      border-radius: 15px;
    }
    .Savebtn {
      margin-bottom: 0.5rem;
      background: linear-gradient(
        247.7deg,
        rgba(30, 52, 253, 0.75) -73.17%,
        rgba(161, 85, 255, 0.75) 64.31%
      );
      color: #f4f4f4;
    }
  }
  .ImageContainer {
    width: 3rem;
    height: 3rem;
  }
}
.q-input {
  background: linear-gradient(
    250.02deg,
    rgba(36, 0, 138, 0.2) 10.99%,
    rgba(60, 60, 60, 0.2) 93.39%
  );
  border-radius: 7px;
}
</style>
