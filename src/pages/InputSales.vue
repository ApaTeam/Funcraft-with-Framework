     <template>
  <q-page class="flex column InputSales">
    <navbar :type="'Profile'" />
    <div class="pageContent">
      <h5 class="Title">Input Sales</h5>
      <label>Name</label>
      <q-input dark filled placeholder="Input name.." />

      <p>Sales Date:</p>
      <q-input dark filled placeholder="Date" type="date" />

      <label>Location</label>
      <q-input dark filled placeholder="Input location.." />

      <label>Additional Description</label>
      <q-input
        dark
        filled
        placeholder="Insert additional description.."
        type="textarea"
      />

      <p>Total Sales:</p>
      <q-input dark filled placeholder="" />

      <q-btn color="purple" label="Save" @click="showAlert = true" />

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
</style>