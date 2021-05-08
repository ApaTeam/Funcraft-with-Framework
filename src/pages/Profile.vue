<template>
  <q-page class="flex column PageProfile">
    <navbar />
    <div class="Content overflow-auto">
      <div class="Charts">
        <div class="Description">
          <h5 class="Title">Monthly Performance</h5>
          <p class="SubTitle">Review your past performance to improve</p>
        </div>

        <q-carousel
          v-model="slidePage"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="white"
          navigation
          class="transparent Slide_Container"
        >
          <q-carousel-slide name="CircularChart" class="CircularContainer">
            <div class="Performance">
              <h5 class="ChartTitle">Februari 2021</h5>
              <div class="Information">
                <q-circular-progress
                  show-value
                  :value="74"
                  size="8rem"
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
                  <div class="Value">
                    5 <span class="Details">out of 8</span>
                  </div>
                </div>
                <div class="Reward">
                  <p class="Title">Total Reward</p>
                  <div class="Value">Rp. 1.000.000</div>
                </div>
              </div>
            </div>
          </q-carousel-slide>

          <q-carousel-slide name="BarChart" class="BarContainer">
            <bar-comp
              :chartdata="chartData"
              :options="{ responsive: true }"
            ></bar-comp>
          </q-carousel-slide>
        </q-carousel>
      </div>
      <div class="History">
        <h5 class="Title">Your History</h5>
        <div class="MonthList">
          <div class="Month">
            <div class="Description">
              <h5 class="MonthName">January 2021</h5>
              <p class="Reward">Rp. 10.000.000,-</p>
            </div>
          </div>
          <div class="Month">
            <div class="Description">
              <h5 class="MonthName">January 2021</h5>
              <p class="Reward">Rp. 10.000.000,-</p>
            </div>
          </div>
          <div class="Month">
            <div class="Description">
              <h5 class="MonthName">January 2021</h5>
              <p class="Reward">Rp. 10.000.000,-</p>
            </div>
          </div>
          <div class="Month">
            <div class="Description">
              <h5 class="MonthName">January 2021</h5>
              <p class="Reward">Rp. 10.000.000,-</p>
            </div>
          </div>
          <div class="Month">
            <div class="Description">
              <h5 class="MonthName">January 2021</h5>
              <p class="Reward">Rp. 10.000.000,-</p>
            </div>
          </div>
          <div class="Month">
            <div class="Description">
              <h5 class="MonthName">January 2021</h5>
              <p class="Reward">Rp. 10.000.000,-</p>
            </div>
          </div>
          <div class="Month">
            <div class="Description">
              <h5 class="MonthName">January 2021</h5>
              <p class="Reward">Rp. 10.000.000,-</p>
            </div>
          </div>
          <div class="Month">
            <div class="Description">
              <h5 class="MonthName">January 2021</h5>
              <p class="Reward">Rp. 10.000.000,-</p>
            </div>
          </div>
          <div class="Month">
            <div class="Description">
              <h5 class="MonthName">January 2021</h5>
              <p class="Reward">Rp. 10.000.000,-</p>
            </div>
          </div>
        </div>
      </div>
      <q-scroll-observer @scroll="onScroll" />
    </div>
  </q-page>
</template>

<script>
import Navbar from "src/components/Navbar.vue";
import BarComp from "src/components/BarComponent.vue";
export default {
  components: { Navbar, BarComp },
  name: "Profile",
  data() {
    return {
      slidePage: "CircularChart",
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "GitHub Commits",
            backgroundColor: "#f87979",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
          },
          {
            label: "GitHub Commits 2",
            backgroundColor: "#fafafa",
            data: [60, 10, 2, 3, 1, 40, 39, 80, 40, 20, 12, 11],
          },
        ],
      },
    };
  },
  methods: {
    onScroll(info) {
      if (info.direction == "down") {
        this.$store.commit("setScrollDir", true);
        return;
      }
      this.$store.commit("setScrollDir", false);
    },
  },
  mounted() {
    this.$store.commit("setScrollDir", false);
  },
  destroyed() {
    this.$store.commit("setScrollDir", false);
  },
};
</script>


<style lang="scss" scoped>
.Content {
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;

  height: calc(100vh - 6rem);
}
.Charts {
  flex-grow: 0;
  .Slide_Container {
    height: calc(100vw - 3rem);
    width: calc(100vw - 3rem);
  }

  .Description {
    .Title {
      font-weight: bold;
    }
    .SubTitle {
      font-weight: bold;
      color: #ff9393;
    }
  }
  .CircularContainer {
    display: grid;
    .Performance {
      place-self: center;
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
          place-self: center;
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
}

.History {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  .Title {
    flex-grow: 0;
    font-weight: bold;
    font-size: 1.2rem;
  }
  .MonthList {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    .Month {
      margin-bottom: 1.5rem;
      padding: 1rem 2rem;
      background: linear-gradient(
        246.81deg,
        rgba(108, 0, 192, 0.5) -93.94%,
        rgba(0, 0, 0, 0.32) 116.58%
      );
      border: 1px solid #3c3c3c;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      .Description {
        .MonthName {
          font-weight: bold;
          font-size: 1.1rem;
          color: #a978e6;
        }
      }
    }
  }
}

@media only screen and (min-device-width: 768px) {
  .Slide_Container {
    height: calc(50vh - 3rem) !important;
    width: calc(50vh - 3rem) !important;
  }
}
</style>