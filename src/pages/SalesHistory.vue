<template>
  <q-page class="flex column PageSalesHistory">
    <navbar/>
    <div class="Content overflow-auto">
      <div class="History">
        <h5 class="Title">Sales History</h5>
        <div class="SalesList">
          <div class="SalesItem Btn" v-for="item in SalesHist" :key="item.MonthDate">
            <div class="Description">
              <h5 class="CustName">{{ item.CustName }}</h5>
              <p class="Reward">{{ item.TotalSales }}</p>
              <p class="Performance" :style="{ color: item.Color }">
                {{ item.Status }}
              </p>
              <p class="Created">
                {{item.SalesDt}}
              </p>
            </div>
          </div>
        </div>
      </div>
      <q-scroll-observer @scroll="onScroll"/>
    </div>
  </q-page>
</template>

<script>
import Navbar from "src/components/Navbar.vue";
import BarComp from "src/components/BarComponent.vue";

export default {
  components: {Navbar, BarComp},
  name: "SalesHistory",
  data() {
    return {
      SalesHist: [
        {
          CustName: "Customer 1",
          TotalSales: "Rp. 16.000.000",
          Status: "Ontrack",
          Color:"",
          SalesDt:"13 May 2021"
        },
        {
          CustName: "Customer 2",
          TotalSales: "Rp. 100.000.000",
          Status: "Ontrack",
          Color:"",
          SalesDt:"1 May 2021"
        },
        {
          CustName: "Customer 3",
          TotalSales: "Rp. 120.000.000",
          Status: "Unpaid",
          Color:"",
          SalesDt:"22 April 2021"
        },
        {
          CustName: "Customer 4",
          TotalSales: "Rp. 18.000.000",
          Status: "Ontrack",
          Color:"",
          SalesDt:"17 April 2021"
        },
        {
          CustName: "Customer 5",
          TotalSales: "Rp. 210.000.000",
          Status: "Ontrack",
          Color:"",
          SalesDt:"10 April 2021"
        },
        {
          CustName: "Customer 5",
          TotalSales: "Rp. 10.000.000",
          Status: "Completed",
          Color:"",
          SalesDt:"30 March 2021"
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
    for (let item of this.SalesHist) {
      console.log(item)
      switch (item.Status){
        case "Completed":
          item.Color = "#EBA419";
          break;
        case "Unpaid":
          item.Color = "#ff6363";
          break;
        case "Ontrack":
          item.Color = "#02dac5";
          break;
      }
    }
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
.History {
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  .Title {
    flex-grow: 0;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .SalesList {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;

    .SalesItem {
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
          "Month Created"
          "Reward Performance";

        .CustName {
          grid-area: Month;
          font-weight: bold;
          font-size: 1.1rem;
          color: #a978e6;
        }

        .Reward {
          grid-area: Reward;
        }

        .Created{
          place-self: center;
          justify-self: end;
          grid-area: Created;
        }

        .Performance {
          grid-area: Performance;
          place-self: center;
          justify-self: end;
          font-size: 1.3rem;
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
