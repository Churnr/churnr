<template>
  <section class="team" data-aos="fade-up" data-aos-duration="1000">
    <p class="benefit">Mød holdet der får tingene til at ske</p>
    <h1>Teamet bag Churnr</h1>
    <img class="team-image" src="../assets/leteam1.jpg" alt="Billede af Churnrs stiftere, Anders, Benjamin og Jacob" />

    <visionAndMission />

    <teamMembers />
  </section>
</template>

<script>
import visionAndMission from "../components/visionAndMission.vue";
import teamMembers from "../components/teamMembers.vue";

export default {
  name: "team",
  components: { teamMembers, visionAndMission },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.team {
  padding: 175px 0 150px 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.team h1 {
  font-weight: 700;
  font-size: 50px;
  letter-spacing: -2px;
  margin-bottom: 100px;
  color: #2e3540;
}
.team-image {
  width: 1150px;
  z-index: 1;
}

/* Mobile media query */

@media only screen and (max-width: 728px) {
  .team {
    padding: 200px 25px 150px 25px;
  }
  .team h1 {
  font-weight: 700;
  font-size: 36px;
  letter-spacing: -2px;
  margin-bottom: 100px;
  color: #2e3540;
}
  .team-image {
    width: 100%;
  }
}
</style>
