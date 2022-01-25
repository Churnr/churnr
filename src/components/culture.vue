<template>
  <section class="culture">
    <div class="culture-header-content">
      <p class="benefit">Alt starter med den rigtige kultur</p>
      <h2>Vores kultur & værdier</h2>
    </div>
    <div class="culture-text-content">
      <div class="human-centric">
        <p>01.</p>
        <h2>Menneskecentreret</h2>
        <!-- <hr /> -->
        <p>
          Churnrs mission er at redde abonnenter der går tabt, når en betaling
          fejler, gennem personaliseret outreach.
        </p>
      </div>
      <div class="responsibility">
        <p>02.</p>
        <h2>Ansvarlighed</h2>
        <!-- <hr /> -->
        <p>
          Churnrs mission er at redde abonnenter der går tabt, når en betaling
          fejler, gennem personaliseret outreach.
        </p>
      </div>
      <!-- <div class="inclusion">
        <h2>Inklusion</h2>
        <hr />
        <p>
          Churnrs mission er at redde abonnenter der går tabt, når en betaling
          fejler, gennem personaliseret outreach. I sidste ende vil det føre til
          en minimeret churn rate, en højere LTV og en styrket bundlinje for
          virksomhederne.
        </p>
      </div> -->
      <div class="innovation">
        <p>03.</p>
        <h2>Innovation</h2>
        <!-- <hr /> -->
        <p>
          Vores vision er at sætte mennesket i fokus, ved at minimere brugen af
          autogenererede e-mails og gøre kundeoplevelsen.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "culture",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.culture {
  width: 1150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 0 0 0;
}
.culture-header-content {
  width: 1150px;
}
.culture-header-content h2 {
  font-size: 45px;
  font-weight: 700;
  padding-bottom: 50px;
}

.culture-text-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 1fr; 
  gap: 0px 25px; 
  grid-template-areas: 
    ". ."
    ". ."; 
}

.culture-text-content h2 {
  font-size: 25px;
  margin: 25px 0;
  font-weight: 700;
}

.culture-text-content hr {
  width: 25%;
  height: 7.5px;
  color: #0abf53;
}
.culture-text-content p {
  color: #323338;
  margin: 0;
  padding: 0;
}


.human-centric, .innovation, .responsibility, .inclusion {
  padding: 40px;
  box-shadow: 0px 0px 15px rgb(0 0 0 / 10%);
}
</style>
