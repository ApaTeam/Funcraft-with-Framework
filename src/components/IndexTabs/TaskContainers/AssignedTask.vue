<template>
  <div
    class="AssignedTask Btn"
    @click="chPage(Task.ASG_TASK_ID)"
    :class="IsMonthly ? 'MonthlyQuest' : 'DailyQuest'"
  >
    <p class="TaskName">
      {{ Task.TASK_NAME }}
    </p>
    <span class="TaskTaker"
    >{{ Task.EMP_NAME }}</span
    >
    <h5 class="TaskReward">{{ Task.REWARD_AMT }} Pts</h5>
  </div>
</template>

<script>
export default {
  name: "AssignedTask",
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
.AssignedTask {
  padding: 0.5rem 1rem;
  display: grid;

  * {
    font-weight: bold;
  }

  .TaskName {
    grid-area: Name;
  }

  .TaskTaker {
    grid-area: Taker;
    font-size: .75rem;
    font-weight: normal;
    text-align: start;
  }

  .TaskReward {
    grid-area: Reward;
    font-size: 1.2rem;
    justify-self: end;
    align-self: center;
  }
}

.MonthlyQuest {
  width: 100%;
  margin-bottom: .5rem;

  grid-template-areas:
        "Name Reward"
        "Taker Reward";
  grid-template-columns: 1fr 1fr;
  background: linear-gradient(
      77.32deg,
      rgba(187, 134, 252, 0.9) 46.71%,
      rgba(134, 195, 252, 0.9) 98.58%,
      rgba(232, 234, 255, 0.9) 177.76%
  );

  * {
    color: black;
  }
  .TaskTaker{
    color: #f4f4f4;
  }
}

.DailyQuest {
  width: 150px;
  height: 150px;
  margin-right: 1rem;

  grid-template-areas:
          "Name"
          "Taker"
          "Reward";
  grid-template-rows: 2fr 1fr 2fr 1fr;

  .TaskTaker{
    color: black;
  }

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
}
</style>
