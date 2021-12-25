<template>
  <div class="home">
    <navigation />
    <hero />
    <moneyRecovery />
    <productFeatureOne />
    <productFeatureTwo />
    <productFeatureThree />
    <team />
    <cta />
    <feets />
  </div>
</template>

<script>
import navigation from "@/components/navigation.vue";
import hero from "@/components/hero.vue";
import moneyRecovery from "@/components/moneyRecovery.vue";
import productFeatureOne from "@/components/productFeatureOne.vue";
import productFeatureTwo from "@/components/productFeatureTwo.vue";
import productFeatureThree from "@/components/productFeatureThree.vue";
import team from "@/components/team.vue";
import cta from "@/components/cta.vue";
import feets from "@/components/feets.vue";

export default {
  name: "Home",
  components: {
    navigation,
    hero,
    moneyRecovery,
    productFeatureOne,
    productFeatureTwo,
    productFeatureThree,
    team,
    cta,
    feets,
  },
};
</script>