<template>
  <div
    class="SalesTask Btn"
    @click="chPage(Task.TASK_ID)"
    :class="IsMonthly ? 'MonthlyTask' : 'DailyTask'"
  >
    <p class="TaskName">
      {{ Task.TASK_NAME }}
      <span class="TaskRate" v-if="Task.IS_PROGRESSIVE && IsMonthly"
      >({{ Task.PROGRESS_AMT }}/{{ Task.COMPLETION_AMT }})</span
      >
    </p>
    <span class="TaskRate" v-if="Task.IS_PROGRESSIVE && !IsMonthly"
    >({{ Task.PROGRESS_AMT }}/{{ Task.COMPLETION_AMT }})</span
    >

    <q-linear-progress
      v-if="Task.IS_PROGRESSIVE"
      dark
      :value="Task.PROGRESS_AMT / Task.COMPLETION_AMT"
      size=".5rem"
      class="ProgressBar"
      track-color="black"
    />
    <h5 class="TaskPoint">{{ Task.REWARD_AMT }} Pts</h5>
  </div>
</template>

<script>
export default {
  name: "SalesTask",
  components: {},
  props: {
    Task: Object,
    IsMonthly: Boolean
  },
  methods: {
    chPage(QuestId) {
      this.$router.push({path: "/quest/" + QuestId});
    },
  },
}
</script>

<style scoped lang="scss">
.SalesTask {
  padding: 0.5rem 1rem;
  display: grid;

  * {
    font-weight: bold;
  }

  .TaskName {
    grid-area: Name;
  }

  .TaskRate {
    grid-area: Progress;
    font-weight: normal;
    text-align: start;
  }

  .ProgressBar {
    grid-area: Bar;
    border-radius: 0.5rem;
  }

  .TaskPoint {
    grid-area: Point;
    font-size: 1.2rem;
    justify-self: end;
    align-self: center;
  }
}

.MonthlyTask {
  width: 100%;
  margin-bottom: .5rem;

  grid-template-areas:
        "Name Point"
        "Bar Point";
  grid-template-columns: 5fr 2fr;
  row-gap: 0.5rem;
  background: linear-gradient(
      77.32deg,
      rgba(187, 134, 252, 0.9) 46.71%,
      rgba(134, 195, 252, 0.9) 98.58%,
      rgba(232, 234, 255, 0.9) 177.76%
  );

  * {
    color: black;
  }

  .ProgressBar {
    color: #2f3037;
  }
}

.DailyTask {
  width: 150px;
  height: 150px;
  margin-right: 1rem;

  grid-template-areas:
          "Name"
          "Bar"
          "Progress"
          "Point";
  grid-template-rows: 2fr 1fr 2fr 1fr;

  &:nth-child(odd) {
    background: linear-gradient(
        38.38deg,
        rgba(2, 218, 197, 0.75) -7.52%,
        rgba(255, 206, 81, 0.75) 165.07%
    );
  }

  &:nth-child(even) {
    background: linear-gradient(
        224.34deg,
        rgba(0, 194, 255, 0.85) 8.03%,
        rgba(0, 26, 255, 0.3995) 182.75%
    );
  }

  .ProgressBar {
    color: white;
  }
}
</style>
