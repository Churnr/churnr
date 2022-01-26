<template>
  <section class="team">
    <p class="benefit">Mød holdet der for tingene til at ske</p>
    <h1>Teamet bag Churnr</h1>
    <img class="team-image" src="../assets/leteam1.jpg" alt="" />

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
  padding: 150px 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.team h1 {
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 100px;
}
.team-image {
  width: 1150px;
  padding-bottom: 150px;
}
</style>
