<template>
  <div class="home">
    <navigation />
    <hero />
    <productOverview />
    <productFeatureOne />
    <productFeatureTwo />
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.3048898167744!2d12.509708615857285!3d55.77057639808858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46524e6d778cb02b%3A0x7e3ab7668df86d7c!2sCphbusiness%20Lyngby!5e0!3m2!1sen!2sdk!4v1631393963943!5m2!1sen!2sdk" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" padding="0" margin="0"></iframe>
    <cta />
    <feets />
  </div>
</template>

<script>
import navigation from "@/components/navigation.vue";
import hero from "@/components/hero.vue";
import productOverview from "@/components/productOverview.vue";
import productFeatureOne from "@/components/productFeatureOne.vue";
import productFeatureTwo from "@/components/productFeatureTwo.vue";
import cta from "@/components/cta.vue";
import feets from "@/components/feets.vue";

export default {
  name: "contact",
  components: {
    navigation,
    hero,
    productOverview,
    productFeatureOne,
    productFeatureTwo,
    cta,
    feets,
  },
};
</script>