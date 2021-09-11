<template>
  <div class="hero">
    <div class="hero-text">
      <h1>Hurtig og overskuelig<br>abonnements aflysning</h1>
      <p>Vi leverer et enkelt produkt, hvor du slipper for beurukratiet og alle kan være med</p>
      <button type="button" class="btn btn-primary">Opret sag</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "hero",
};
</script>

<style lang="css">
.hero {
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #6a86e2;
}
.hero-text {
  height: inherit;
  width: 1440px;
  background: url(../assets/oldman.png);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
}
.hero-text h1 {
  font-size: 50px;
  font-weight: 700;
}
.hero-text p {
  font-size: 20px;
}
</style>