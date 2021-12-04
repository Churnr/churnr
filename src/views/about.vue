<template>
  <div class="home">
    <navigation />
    <about />
    <mission />
    <team />
    <mission />
    <cta />
    <feets />
  </div>
</template>

<script>
import navigation from "@/components/navigation.vue";
import about from "@/components/about.vue";
import team from "@/components/team.vue";
import mission from "@/components/mission.vue";
import cta from "@/components/cta.vue";
import feets from "@/components/feets.vue";

export default {
  name: "about",
  components: {
    navigation,
    about,
    team,
    mission,
    cta,
    feets,
  },
};
</script>

<style scoped>
</style>