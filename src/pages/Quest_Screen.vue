<template>
  <q-page class="flex column QuestScreen">
    <navbar />
    <div class="content">
      <div class="TaskTitleBox">
        <p class="QuestType">URGENT TASK</p>
        <p class="QuestTitle">Meeting with Mr. Mitchell <a>(Client)</a></p>
      </div>
      <div class="QuestFrom">
        <q-img
          src="~assets/Assigner.png"
          style="height: 142px; width: 113px"
          class="rounded-borders"
        ></q-img>
        <div class="FromDetail">
          <div class="AssignedBy">
            <p class="top">Assigned by</p>
            <p class="name">Darias Andana Harus</p>
          </div>
          <div class="WorkTime">
            <p class="top">Work time</p>
            <p class="hour">4 Hour</p>
          </div>
          <div class="StartTime">
            <p class="top">Start time</p>
            <p class="date">Sun/April 4, 2021</p>
            <p class="starthour">09.30 AM</p>
          </div>
        </div>
      </div>
      <div class="Location">
        <p class="top">Location</p>
        <p class="address">
          Jl. Letjen S Parman No 1 ,Grogol, Jakarta Barat, DKI Jakarta, 11450
        </p>
        <a
          @click="
            () => {
              this.$router.push('/map');
            }
          "
          >See in Maps</a
        >
      </div>
      <div class="rounded-borders Description">
        <p class="top">Job Description</p>
        <p class="Content">
          “XYZ” Sales Negotiation with Mr. Mitchell<br />
          from PT. ABC DEF GHI .Tb
        </p>
      </div>
      <div class="Reward">
        <p>Reward : <a class="points">5 pts</a></p>
      </div>
      <q-btn flat rounded class="ButtonStart" label="Start Working" />
    </div>
  </q-page>
</template>

<script>
import Navbar from "src/components/Navbar.vue";
export default {
  components: { Navbar },
  name: "QuestScreen",
};
</script>

<style lang="scss" scoped>
.top {
  font-family: Roboto;
  font-size: 12px;
  color: #b1b1b1;
  margin: 0;
}
.content {
  display: flex;
  flex-direction: column;
  margin: 1.8rem 20px;

  padding: 12px;
  .TaskTitleBox {
    display: flex;
    flex-direction: column;
    margin: 0;
    .QuestType {
      font-family: Montserrat;
      font-weight: bold;
      font-size: 12px;
      color: #ff9393;
      margin-bottom: 0;
    }
    .QuestTitle {
      font-family: Roboto;
      font-weight: bold;
      font-size: 24px;
      margin-top: 0;
      a {
        font-weight: normal;
        font-size: 18px;
      }
    }
  }
  .QuestFrom {
    display: flex;
    flex-direction: row;
    .FromDetail {
      display: flex;
      flex-direction: column;
      margin: 0 20px;
      font-family: Roboto;
      font-size: 14px;
      .name {
        color: #f5ac1f;
        margin-bottom: 6px;
      }
      .hour {
        font-weight: bold;
        margin-bottom: 6px;
      }
      .date {
        font-weight: bold;
        margin: 0;
      }
      .starthour {
        font-size: 12px;
      }
    }
  }
  .Location {
    padding: 20px;
    .address {
      margin-bottom: 0;
      font-weight: bold;
    }
    a {
      font-size: 10px;
      color: #2ca180;
    }
  }
  .Description {
    padding: 20px;
    background: linear-gradient(
      rgb(244, 244, 244, 0.1),
      rgb(255, 255, 255, 0.1)
    );
    .Content {
      font-weight: bold;
    }
  }
  .Reward {
    text-align: right;
    p {
      font-weight: bold;
      a {
        color: #f5ac1f;
      }
    }
  }
  .ButtonStart {
    margin-top: 10vh;
    background: linear-gradient(
      rgb(30, 52, 253, 0.55),
      rgb(161, 85, 255, 0.55)
    );
    border: transparent;
    color: white;
  }
}
</style>