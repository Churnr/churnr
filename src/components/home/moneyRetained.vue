<template>
  <div class="retained-inner">
    <section class="retained">
      <p class="benefit">Indtil videre har vi fastholdt</p>
      <h2>11.237,45 DKK</h2>
      <p>Og vi har en mission om at fastholde 100.000 inden 2023. Neeemt! 😉</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "moneyRetained",
};
</script>

<style scoped>
.retained-inner {
  background: #f3f6f9;
}

.retained {
  width: 1150px;
  margin: 0 auto;
  text-align: center;
  padding: 125px 0 125px 0;
}
.retained h2 {
  font-weight: 700;
  font-size: 100px;
  margin: 0;
  padding: 15px 0 25px 0;
}

.retained p {
  font-size: 20px;
  line-height: 1.75;
  margin: 0 auto;
}

/* Mobile media query */

@media only screen and (max-width: 728px) {
  .retained-inner {
    background: #f3f6f9;
    margin-top: 100px;
  }

  .retained {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 125px 0 125px 0;
  }
  .retained h2 {
    font-weight: 700;
    font-size: 50px;
    margin: 0;
    padding: 15px 0 25px 0;
  }

  .retained p {
    font-size: 20px;
    line-height: 1.75;
    margin: 0 auto;
  }
}
</style>