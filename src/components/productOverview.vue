<!--
    background: linear-gradient(
180deg, #F5F6F8 0%, rgba(245, 246, 248, 0) 67.54%);
-->

<template>
  <section class="productOverview">
    <div class="productOverview-content">
      <h2>Et kraftfuldt værktøj, når du har brug for det</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur placeat natus est accusamus laborum nisi cumque doloribus veritatis! Saepe aspernatur soluta nostrum quo sit!
      </p>
      <img src="../assets/productMockup.png" alt="">
    </div>
  </section>
</template>

<script>
export default {
  name: "productOverview",
};
</script>

<style>
</style>

<style scoped>
.productOverview {
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, #F5F6F8 0%, rgba(245, 246, 248, 0) 67.54%);
}
.productOverview-content {
  height: inherit;
  width: 1350px;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.productOverview-content h2{
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 20px;
}
.productOverview-content p{
    font-size: 20px;
    line-height: 30px;
    width: 75%;
    text-align: center;
    margin-bottom: 0;
}
.productOverview-content img{
    margin: 75px 0 0 0;
    height: 600px;
    width: auto;
    box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.15);
}
</style>