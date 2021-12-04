<template>
  <div class="home">
    <navigation />
    <hero />
    <theProblem />
    <productFeatureTwo />
    <productOverview />
    <productFeatureOne />
    <mission />
    <faq />
    <cta />
    <feets />
  </div>
</template>

<script>
import navigation from "@/components/navigation.vue";
import hero from "@/components/hero.vue";
import theProblem from "@/components/theProblem.vue";
import productOverview from "@/components/productOverview.vue";
import productFeatureOne from "@/components/productFeatureOne.vue";
import productFeatureTwo from "@/components/productFeatureTwo.vue";
import mission from "@/components/mission.vue";
import faq from "@/components/faq.vue";
import cta from "@/components/cta.vue";
import feets from "@/components/feets.vue";

export default {
  name: "Home",
  components: {
    navigation,
    hero,
    theProblem,
    productFeatureOne,
    productOverview,
    mission,
    productFeatureTwo,
    faq,
    cta,
    feets,
  },
};
</script>