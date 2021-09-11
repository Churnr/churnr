<template>
  <div class="home">
    <navigation />
    <hero />
  </div>
</template>

<script>
import navigation from "@/components/navigation.vue";
import hero from "@/components/hero.vue";

export default {
  name: "Home",
  components: {
    navigation,
    hero,
  },
};
</script>

