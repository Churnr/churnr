<!--
    background: linear-gradient(
180deg, #F5F6F8 0%, rgba(245, 246, 248, 0) 67.54%);
-->

<template>
  <section class="productOverview">
    <div class="productOverview-content">
      <span>
        <p class="benefit">Hurtigt og enkelt at komme i gang</p>
        <h2>Ingen besværligheder med<br />at oprette en konto</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          repellat molestiae quasi molestias, voluptatibus cumque.
        </p>
      </span>
      <img src="../assets/productMockup.png" alt="" draggable="false"/>
    </div>
  </section>
</template>

<script>
export default {
  name: "productFeatureOne",
};
</script>

<style>
</style>

<style scoped>
.productOverview {
  height: 700px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    180deg,
    #f5f6f8 0%,
    rgba(245, 246, 248, 0) 67.54%
  );
}
.productOverview-content {
  height: inherit;
  width: 1350px;
  padding: 100px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.productOverview-content h2 {
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  padding: 10px 0 5px 0;
}
.productOverview-content p,
.benefit {
  font-size: 20px;
  line-height: 30px;
  width: 55%;
  margin-bottom: 0;
}
.benefit {
  color: rgb(0, 162, 255);
}
.productOverview-content img {
  width: 45%;
  box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.15);
}
</style>