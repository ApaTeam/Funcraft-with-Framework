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
              <h5 class="ChartTitle">{{ currPerf.MonthDate }}</h5>
              <div class="Information">
                <q-circular-progress
                  show-value
                  :value="
                    (100 * currPerf.SalesProg.Prog) / currPerf.SalesProg.Target
                  "
                  size="8rem"
                  :thickness="0.1"
                  color="blue"
                  center-color="transparent"
                  track-color="grey"
                  class="CircularChart"
                >
                  <span class="ChartContent">
                    Total Sales <br />
                    <span class="SubTitle"
                      >{{ currPerf.SalesProg.Prog }} Out of
                      {{ currPerf.SalesProg.Target }}</span
                    >
                  </span>
                </q-circular-progress>
                <div class="Agreement">
                  <p class="Title">Performance</p>
                  <div class="Value">
                    {{ currPerf.Performance }}<span class="Details">Pts</span>
                  </div>
                </div>
                <div class="Reward">
                  <p class="Title">Total Reward</p>
                  <div class="Value">{{ currPerf.Reward }}</div>
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
          <div class="Month Btn" v-for="item in perfHistory" :key="item.MonthDate">
            <div class="Description">
              <h5 class="MonthName">{{ item.MonthDate }}</h5>
              <p class="Reward">{{ item.Reward }}</p>
              <p class="Performance">
                {{ item.Performance }} <span class="Details">Pts</span>
              </p>
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
            label: "Sales Performance",
            backgroundColor: "#02dac5",
            data: [42, 39, 45, 50, 52],
          },
          {
            label: "Sales Reward",
            backgroundColor: "#cfad69",
            data: [79, 78, 80, 100, 110],
          },
        ],
      },
      currPerf: {
        SalesProg: {
          Prog: 5,
          Target: 8,
        },
        MonthDate: null,
        Performance: 52,
        Reward: "Rp 1.100.000",
      },
      perfHistory: [
        {
          MonthDate: "Aprill 2021",
          Performance: 50,
          Reward: "Rp 1.000.000",
        },
        {
          MonthDate: "March 2021",
          Performance: 45,
          Reward: "Rp 800.000",
        },
        {
          MonthDate: "February 2021",
          Performance: 39,
          Reward: "Rp 780.000",
        },
        {
          MonthDate: "January 2021",
          Performance: 42,
          Reward: "Rp 790.000",
        },
      ],
    };
  },
  methods: {
    onScroll(info) {
      if (info.direction === "down") {
        this.$store.commit("setScrollDir", true);
        return;
      }
      this.$store.commit("setScrollDir", false);
    },
  },
  mounted() {
    this.$store.commit("setScrollDir", false);
    let today = new Date();
    this.currPerf.MonthDate = today.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
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
          font-size: 1rem;
          font-weight: bold;
          text-align: center;
          .SubTitle {
            font-size: 0.8rem;
          }
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
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      .Description {
        display: grid;
        grid-template-areas:
          "Month Performance"
          "Reward Performance";
        .MonthName {
          grid-area: Month;
          font-weight: bold;
          font-size: 1.1rem;
          color: #a978e6;
        }
        .Reward {
          grid-area: Reward;
        }
        .Performance {
          grid-area: Performance;
          place-self: center;
          justify-self: end;
          font-size: 1.3rem;
          color: #02dac5;
          .Details {
            font-size: 0.8rem;
            color: #00a595;
          }
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
