<template>
  <div class="home">
    <navigation />
    <!-- PLACEHOLDER CONTENT -->
    <div class="placeholder-content">
      <div class="news-article">
          <img src="../assets/blue.jpg" alt="">
          <h2>Heading One</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, modi!</p>
      </div>
      <div class="news-article">
          <img src="../assets/blue.jpg" alt="">
          <h2>Heading Two</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, modi!</p>
      </div>
      <div class="news-article">
          <img src="../assets/blue.jpg" alt="">
          <h2>Heading Three</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, modi!</p>
      </div>
      <div class="news-article">
          <img src="../assets/blue.jpg" alt="">
          <h2>Heading Four</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, modi!</p>
      </div>
      <div class="news-article">
          <img src="../assets/blue.jpg" alt="">
          <h2>Heading Five</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, modi!</p>
      </div>
      <div class="news-article">
          <img src="../assets/blue.jpg" alt="">
          <h2>Heading Six</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, modi!</p>
      </div>
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
  name: "news",
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
  height: auto;
  width: 1150px;
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