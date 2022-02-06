<template>
  <section class="visionAndMission">
    <div class="visionAndMission-header-content">
      <h2>Vores vision & mission</h2>
    </div>
    <div class="visionAndMission-text-content">
      <div class="vision">
        Vores drøm er, at sætte mennesket i fokus, ved at minimere brugen af
        autogenererede e-mails og gøre kundeoplevelsen mere menneskelig for
        forbrugeren, i en verden der bliver mere automatiseret for hver dag der
        går.
      </div>
      <div class="mission">
        <p>
          Missionen er, at redde abonnenter der går tabt, når en betaling
          fejler. Det gør vi ved at lave personligt outrach som er med til at
          minimere churn raten og giver en styrket bundlinje for virksomhederne.
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
  background: #f3f6f9;
  margin-top: -125px;
  padding-top: 250px;
  padding-bottom: 125px;
}
.visionAndMission-header-content {
  text-align: left;
  width: 1150px;
  padding: 0 0 50px 0;
}
.visionAndMission-header-content h2 {
  font-size: 40px;
  font-weight: 700;
}
.visionAndMission-text-content {
  width: 1150px !important;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.vision {
  width: 45%;
}
.mission {
  width: 45%;
}
.visionAndMission-text-content,
.vision p,
.mission p {
  font-size: 18px;
  line-height: 1.75;
  width: 100%;
}

/* Mobile media query */

@media only screen and (max-width: 728px) {
  .visionAndMission {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    margin-top: -125px;
    padding-top: 250px;
    padding-bottom: 125px;
  }
  .visionAndMission-header-content {
    text-align: left;
    width: 100%;
    padding: 0 0 50px 0;
  }
  .visionAndMission-header-content h2 {
    font-size: 36px;
    font-weight: 700;
  }
  .visionAndMission-text-content {
    width: 100% !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .vision {
    width: 100%;
  }
  .mission {
    margin-top: 100px;
    width: 100%;
  }
  .visionAndMission-text-content,
  .vision p,
  .mission p {
    font-size: 18px;
    line-height: 1.75;
    width: 100%;
  }
}
</style>
