<template>
  <section class="team">
    <p class="benefit">Mød holdet der for tingene til at ske</p>
    <h1>Teamet bag Churnr</h1>
    <img class="team-image" src="../assets/leteam.jpg" alt="">
    
    <div class="vision">
      <span>
        <p class="benefit">Vores vision</p>
        <h2>En verden fuld af abonnementer</h2>
        <p>Churnrs vision for fremtiden er at kunne hjælpe enhver abonnementsvirksomhed, med at mindske deres churn rate.</p>
      </span>
      <img src="../assets/twest.png" alt="" />
    </div>

    <div class="team-members-intro">
      <h1>Mød holdet der får tingene til at ske</h1>
    </div>

    <div class="team-members">
      <div class="member">
        <img src="../assets/team/anders.jpg" alt="" />
        <p><b>Anders Laurentiussen</b></p>
        <p class="title">CEO</p>
      </div>
      <div class="member">
        <img src="../assets/team/benjamin.jpg" alt="" />
        <p><b>Benjamin Treadwell</b></p>
        <p class="title">CTO</p>
      </div>
      <div class="member">
        <img src="../assets/team/jacob.jpg" alt="" />
        <p><b>Jacob Stentoft-Nielsen</b></p>
        <p class="title">CCO</p>
      </div>
    </div>

    <div class="mission">
      <img src="../assets/twest.png" alt="" />
      <span>
        <p class="benefit">Vores mission</p>
        <h2>Rejsen mod 1.000.000 kr.</h2>
        <p>Churnrs mission er at fastholde abonnementer til en værdi af 1.000.000 kr. inden for 3 år.</p>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: "team",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.team {
  padding: 150px 0;
  width: 1150px;
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
.team-members-intro {
  margin-top: 150px;
  text-align: center;
}
.team-members {
  display: grid;
  width: 1150px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;
}
.title {
  font-size: 16px;
}
.member img {
  width: 100%;
  margin-bottom: 25px;
}
.member p {
  line-height: 1;
}
b {
  font-weight: 700;
}
.vision,
.mission {
  padding-top: 175px;
  width: 1150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.vision h2,
.mission h2 {
  font-size: 40px;
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
