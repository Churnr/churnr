<template>
  <section class="team">
      <h1>Mød holdet der for tingene til at ske</h1>
      <div class="members">
          <div class="member">
              <img src="../assets/Mike-hover.jpg" alt="">
              <h3>Anders Laurentiussen</h3>
              <p>Co-founder & Sales Executive</p>
          </div>
          <div class="member">
              <img src="../assets/Scott-hover.jpg" alt="">
              <h3>Benjamin Treadwell</h3>
              <p>Co-founder & CTO</p>
          </div>
          <div class="member">
              <img src="../assets/Joff-hover.jpg" alt="">
              <h3>Jacob Stentoft-Nielsen</h3>
              <p>Co-founder & CCO</p>
          </div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
    .team {
        width: 1200px;
        padding: 150px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 0 auto;
        align-items: center;
    }
    .team h1 {
        font-size: 40px;
        padding-bottom: 150px;
        font-weight: 700;
    }
    .members {
        display: grid;
        width: 1200px;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 25px;
    }
    .member {
        height: 500px;
    }
    .member h3 {
        font-size: 20px;
        font-weight: 700;
        margin-top: 25px;
    }
    .member p {
        font-size: 20px;
    }
    .member img {
        height: 500px;
    }
</style>