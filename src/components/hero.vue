<template>
  <div class="hero">
    <div class="hero-text">
      <h1>Fasthold dine<br>abonnementskunder</h1>
      <p>Driver du en abonnementsvirksomhed?<br>Fokuser på at vækste, så sørger vi for, at dine kunder bliver.</p>
      <span>
        <button type="button" class="btn btn-success">Book et møde</button>
      </span>
    </div>
    <img src="../assets/iphone.png" alt="">
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
  width: 1150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
.hero-text {
  height: inherit;
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #454f63;
}
.hero-text h1 {
  font-size: 45px;
  font-weight: 500;
  line-height: 1.5;
}
.hero-text p {
  font-size: 20px;
  padding: 20px 0;
}
.btn {
  padding: 10px 15px;
  margin: 0 15px 0 0!important;
}
.hero img{
  height: 500px;}
</style>