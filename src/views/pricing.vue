<template>
    <navigation />
    <pricing />
    <faq />
    <cta />
    <feets />
</template>

<script>
import navigation from "@/components/navigation.vue";
import pricing from "@/components/pricing.vue";
import faq from "@/components/faq.vue";
import cta from "@/components/cta.vue";
import feets from "@/components/feets.vue";

export default {
  name: "news",
  components: {
    navigation,
    pricing,
    faq,
    cta,
    feets,
  },
};
</script>

<!-- PLACEHOLDER CONTENT -->
<style scoped>
.placeholder-content {
  height: auto;
  width: 1350px;
  padding: 100px 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 25px;
  column-gap: 25px;
}
.news-article {
    padding: 15px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
}
.news-article img{
    width: 100%;
    height: 250px;
}
</style>
<!-- PLACEHOLDER CONTENT -->