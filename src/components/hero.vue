<template>
  <div class="hero">
    <div class="hero-text"  data-aos="fade-in" data-aos-delay="200" data-aos-duration="1500" data-aos-once="true">
      <h1>Fokuser på dine kunder,<br>så sørger vi for at de bliver</h1>
      <p>Vi leverer et enkelt produkt, hvor du slipper for beurukratiet og alle kan være med</p>
      <span>
        <button type="button" class="btn btn-outline-dark">Hvordan det virker</button>
        <button type="button" class="btn btn-primary">     Udregn besparelser</button>
      </span>
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
  height: 700px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.hero-text {
  height: inherit;
  width: 1150px;
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #454f63;
  text-align: center;
}
.hero-text h1 {
  font-size: 50px;
  font-weight: 800;
  line-height: 1.18;
}
.hero-text p {
  font-size: 20px;
  padding: 20px 0;
}
.btn {
  padding: 10px 15px;
  margin: 0 7.5px !important;
}
</style>