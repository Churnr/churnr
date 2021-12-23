<template>
  <section class="productOverview">
    <div class="productOverview-content moneystat">
      <span>
        <h2>Indtil videre har vi fastholdt</h2>
        <h3 class="money-result">13,440 DKK</h3>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: "theProblem",
};
</script>

<style>
</style>

<style scoped>
.productOverview {
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #F4F7FE;
}
.productOverview-content .moneystat{
  height: inherit;
  width: 1150px;
  padding: 100px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.productOverview-content h2 {
  font-size: 40px;
  line-height: 50px;
  padding: 10px 0 5px 0;
  color: #454f63;
  font-weight: 400;
}
.productOverview-content p {
  font-size: 20px;
  line-height: 30px;
  width: 75%;
  margin-bottom: 0;
  padding: 0;
  color: #454f63;
}
.productOverview-content .money-result {
  color: #3BD67F;
  font-size: 75px;
  font-weight: 600;
}
</style>