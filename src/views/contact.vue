<template>
  <div class="home">
    <navigation />
    <!-- PLACEHOLDER CONTENT -->
    <div class="placeholder-content">
      <h1>Kontakt side</h1>
      <p>vi lader os inspirere af mymonii.com</p>
    </div>
    <!-- PLACEHOLDER CONTENT -->
    <cta />
    <feets />
  </div>
</template>

<script>
import navigation from "@/components/navigation.vue";
import cta from "@/components/cta.vue";
import feets from "@/components/feets.vue";

export default {
  name: "contact",
  components: {
    navigation,
    cta,
    feets,
  },
};
</script>

<!-- PLACEHOLDER CONTENT -->
<style scoped>
.placeholder-content {
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<!-- PLACEHOLDER CONTENT -->