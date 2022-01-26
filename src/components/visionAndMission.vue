<template>
  <section class="visionAndMission">
    <div class="visionAndMission-header-content">
      <h2>Vores vision & mission</h2>
    </div>
    <div class="visionAndMission-text-content">
      <div class="vision">
        <p>
          <b>Vision: </b>Vores vision er at sætte mennesket i fokus, ved at minimere brugen af
          autogenererede e-mails og gøre kundeoplevelsen mere menneskelig for
          forbrugeren, i en verden der bliver mere automatiseret for hver dag
          der går.
        </p>
      </div>
      <div class="mission">
        <p>
          <b>Mission: </b>Churnrs mission er at redde abonnenter der går tabt, når en betaling
          fejler, gennem personaliseret outreach. I sidste ende vil det føre til
          en minimeret churn rate, en højere LTV og en styrket bundlinje for
          virksomhederne.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "visionAndMission",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.visionAndMission {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 0;
  background: #324574;
  color: white;
}
.visionAndMission-header-content {
  width: 1150px;
}
.visionAndMission-header-content h2 {
  font-size: 40px;
  font-weight: 700;
  padding-bottom: 50px;
}
.visionAndMission-text-content {
  width: 1150px;
  display: flex;
  flex-direction: row;
}
.visionAndMission-text-content hr {
  width: 25%;
  height: 7.5px;
  color: #0abf53;
}
.visionAndMission-text-content p {
  width: 80%;
  font-size: 20px;
  line-height: 1.5;
}
</style>
