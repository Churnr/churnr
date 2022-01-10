<template>
  <section class="faq">
    <h1>Features</h1>
    <p>Her finder du svarende på næsten alt om Churnr</p>
  </section>
</template>

<script>
export default {
  name: "features",
  props: {
    msg: String,
  }
};
</script>

<style scoped>
.faq {
  padding: 150px 0;
  width: 1150px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.faq .accordion {
  margin-top: 100px;
}
</style>
