<template>
  <q-page class="flex column PageProfile">
    <navbar />
    <div class="Content">
      <div class="Charts">
        <div class="Description">
          <h5 class="Title">Monthly Performance</h5>
          <p class="SubTitle">Review your past performance to improve</p>
        </div>
        <div class="Performance">
          <h5 class="ChartTitle">Februari 2021</h5>
          <div class="Information">
            <q-circular-progress
              show-value
              :value="74"
              size="35vw"
              :thickness="0.1"
              color="blue"
              center-color="transparent"
              track-color="grey"
              class="CircularChart"
            >
              <span class="ChartContent"> 76% </span>
            </q-circular-progress>
            <div class="Agreement">
              <p class="Title">Total Agreement</p>
              <div class="Value">5 <span class="Details">out of 8</span></div>
            </div>
            <div class="Reward">
              <p class="Title">Total Reward</p>
              <div class="Value">Rp. 1.000.000</div>
            </div>
          </div>
        </div>
      </div>
      <div class="History"></div>
    </div>
  </q-page>
</template>

<script>
import Navbar from "src/components/Navbar.vue";
export default {
  components: { Navbar },
  name: "Profile",
};
</script>


<style lang="scss" scoped>
.Content {
  padding: 0 1.5rem;
}
.Charts {
  .Description {
    .Title {
      font-weight: bold;
    }
    .SubTitle {
      font-weight: bold;
      color: #ff9393;
    }
  }
  .Performance {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    margin: 1rem 0;
    padding: 1rem;
    border-radius: 25px;

    background: rgba(255, 255, 255, 0.09);

    .ChartTitle {
      font-size: 1.1rem;
      font-weight: bold;
    }
    .Information {
      margin-top: 1rem;
      display: grid;
      width: 100%;
      grid-template-areas:
        "chart agreement"
        "chart reward";
      .ChartContent {
        font-size: 1.3rem;
        font-weight: bold;
      }
      .CircularChart {
        grid-area: chart;
      }
      .Agreement {
        grid-area: agreement;
        .Value {
          color: #02dac5;
          .Details {
            color: #00a595;
          }
        }
      }
      .Reward {
        grid-area: reward;
        .Value {
          color: #e5a01b;
        }
      }
      .Title {
        font-weight: bold;
      }
      .Value {
        font-size: 1.2rem;
        font-weight: bold;
        .Details {
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>