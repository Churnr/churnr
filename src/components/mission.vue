<!--
    background: linear-gradient(
180deg, #F5F6F8 0%, rgba(245, 246, 248, 0) 67.54%);
-->

<template>
  <section class="comparison">
    <h2>En løsning bedre end mange andre</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, illum?</p>
    <div class="comparison-boxes">
      <div class="box">
        <h3>Automatiserede e-mails</h3>
        <ul>
          <li>Ineffektive</li>
          <li>Upersonlige</li>
          <li>Irriterende</li>
          <li>Bad</li>
          <li>Bad</li>
        </ul>
      </div>
      <div class="box">
        <h3>Personaliseret kundekontakt</h3>
        <ul>
          <li>Plus</li>
          <li>Plus</li>
          <li>Plus</li>
          <li>Plus</li>
          <li>Plus</li>
        </ul>
      </div>
      <div class="box">
        <h3>Retention medarbejdere</h3>
        <ul>
          <li>Bad</li>
          <li>Bad</li>
          <li>Bad</li>
          <li>Bad</li>
          <li>Bad</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "mission",
};
</script>

<style>
</style>

<style scoped>
.comparison {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0 125px 0;
  background: #F4F7FE;
}
.comparison h2 {
  font-size: 40px;
  line-height: 1.5;
}
.comparison p {
  font-size: 20px;
  line-height: 1.5;
}
.comparison-boxes {
  display: flex;
  margin-top: 100px;
}
.box {
  padding: 35px;
  box-shadow: 0 6px 20px 0 rgb(183 183 183 / 25%) !important;
  background: white;
  border-radius: 5px;
}
.box:nth-child(2) {
  transform: scale(1.1);
  margin: 0 5px;
}
.box h3 {
  font-size: 20px;
  padding: 0 0 25px 0;
}
.box ul li {
  line-height: 3;
}

ul {
  list-style: none;
}

ul li:before {
  content: 'X ';
  color: red;
}
.box:nth-child(2) ul li:before {
  content: '✓ ';
  color: #3BD67F;
  font-weight: 700;
}
</style>