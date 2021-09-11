<!--
    background: linear-gradient(
180deg, #F5F6F8 0%, rgba(245, 246, 248, 0) 67.54%);
-->

<template>
  <section class="productOverview">
    <div class="productOverview-content">
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        repellat molestiae quasi molestias, voluptatibus cumque.
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
  width: 1440px;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.productOverview-content h2{
    font-size: 50px;
    font-weight: 700;
}
.productOverview-content p{
    font-size: 20px;
}
.productOverview-content img{
    padding: 100px 0 0 0;
    height: 400px;
    width: auto;
}
</style>