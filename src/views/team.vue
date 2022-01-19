<template>
  <section class="team">
    <p class="benefit">Mød holdet der for tingene til at ske</p>
    <h1>Teamet bag Churnr</h1>
    <img class="team-image" src="../assets/leteam1.jpg" alt="">
    
    <div class="vision">
      <div class="content">
        <p class="benefit">Vores vision</p>
        <h2>En verden fuld af abonnementer</h2>
        <p>Churnrs vision er at sætte mennesket i fokus, ved at minimere brugen af autogenererede e-mails og gøre kundeoplevelsen mere menneskelig for forbrugeren, i en verden der bliver mere automatiseret for hver dag der går.</p>
      </div>
      <img src="../assets/twest.png" alt="" />
    </div>

    <teamMembers/>

    <div class="mission">
      <img src="../assets/twest.png" alt="" />
      <div class="content">
        <p class="benefit">Vores mission</p>
        <h2>Rejsen mod 1.000.000 kr.</h2>
        <p>Churnrs mission er at redde abonnenter der går tabt, når en betaling fejler, gennem personaliseret outreach. I sidste ende vil det føre til en minimeret churn rate, en højere LTV og en styrket bundlinje for virksomhederne.</p>
      </div>
    </div>
  </section>
</template>

<script>
import teamMembers from "../components/teamMembers.vue"

export default {
  name: "team",
  components: {teamMembers},
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.team {
  padding: 150px 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.team h1 {
  font-weight: 700;
  font-size: 45px;
  margin-bottom: 100px;
}
.team-image {
  width: 1150px;
}
.vision,
.mission {
  padding-top: 175px;
  width: 1150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.vision .content, .mission .content {
  width: 45%;
}
.vision h2,
.mission h2 {
  font-size: 45px;
  font-weight: 700;
  padding: 10px 0 20px 0;
}
.vision p,
.mission p {
  font-size: 20px;
}
.vision img,
.mission img {
  width: 45%;
}
.vision span {
  padding-right: 50px;
}
.mission span {
  padding-left: 50px;
}
</style>
