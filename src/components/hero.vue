<template>
<div class="hero">
    <span>
        <h1>Fasthold dine abonnementskunder med pesonlig outreach</h1>
        <p>Har I også oplevet betalingsfejl? Lad os hjælpe, med at maksimere jeres kundefastholdelse.</p>
        <b-button>Se hvordan</b-button><router-link to="/contact">Book møde</router-link>
    </span>
    <img src="../assets/retention.png" alt="">
</div>
</template>

<script>
export default {
  name: "hero",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.hero {
    padding: 75px 0 125px 0;
    width: 1150px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.hero h1 {
    font-size: 45px;
    line-height: 1.15;
    font-weight: 600;
}
.hero p {
    font-size: 18px;
    line-height: 1.75;
    padding: 15px 0;
}
.hero button {
    background: #0768f8;
    border: none;
    padding: 10px 30px;
    border-radius: 0;
}
a {
    background: transparent;
    border: 1px solid black;
    color: black;
    padding: 10px 30px;
    margin-left: 15px;
    border-radius: 0;
    text-decoration: none;
}
.hero img {
    width: 42.5%;
}
.hero span {
    width: 50%;
}
</style>
