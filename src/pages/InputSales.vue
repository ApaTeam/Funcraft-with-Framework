<template>
  <q-page class="flex column InputSales">
    <navbar :type="'Profile'" />
    <div class="pageContent">
      <h5 class="Title">Input Sales</h5>
      <label>Name</label>
      <q-input dark filled placeholder="Input name.." />

      <div class="inlineinput">
        <div class="textline">
          <span>Sales Date :</span>
        </div>
        <q-input dark filled class="inputbox" placeholder="Date" type="date" />
      </div>

      <label>Location</label>
      <q-input dark filled placeholder="Input location.." />

      <label>Additional Description</label>
      <q-input
        dark
        filled
        placeholder="Insert additional description.."
        type="textarea"
      />

      <div class="inlineinput">
        <div class="textline">
          <span>Total Sales :</span>
        </div>
        <q-input dark filled class="inputbox" placeholder="">
          <template v-slot:prepend>
            <q-icon name="money" />
          </template>
        </q-input>
      </div>

      <div class="savebtn">
        <q-btn label="Save" @click="showAlert = true" />
      </div>

      <div class="modalContainer">
        <q-dialog v-model="showAlert">
          <q-card>
            <q-card-section>
              <div class="text-h6">Alert</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
              perferendis totam, ea at omnis vel numquam exercitationem aut,
              natus minima, porro labore.
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="OK" color="primary" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
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
    };
  },
};
</script>

<style lang="scss" scoped>
.pageContent{
  margin: 20px 30px;
  .Title{
    text-align: center;
    font-weight: bold;
    font-size: 20px;
  }
  .inlineinput{
    padding-top: 15px;
    display: flex;
    flex-direction: row;
    .textline{
      display: flex;
      flex-direction: column;
      font-weight: bolder;
      justify-content: space-around;
    }
    .inputbox{
      width: 244px;
    }
  }

  .savebtn{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    button{
      width: 182px;
      height: 45px;
      font-size: 16px;
      background: linear-gradient(
      rgb(30, 52, 253, 0.7),
      rgb(161, 85, 255,0.7)
      );
    }
  }

  label{
    padding: 7px 0;
    font-size: 12px;
  }
}
</style>