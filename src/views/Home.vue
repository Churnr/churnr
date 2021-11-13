<template>
  <div class="home">
    <navigation />
    <hero />
    <theProblem />
    <productOverview />
    <productFeatureTwo />
    <productFeatureOne />
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
import cta from "@/components/cta.vue";
import feets from "@/components/feets.vue";

export default {
  name: "Home",
  components: {
    navigation,
    hero,
    theProblem,
    productOverview,
    productFeatureOne,
    productFeatureTwo,
    cta,
    feets,
  },
};
</script>