<template>
    <div class="jumbotron">
        <h1>Kan vi hjælpe din virksomhed?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button class="btn" type="submit">Book et møde</button>
    </div>
</template>

<script>
export default {
  name: 'cta',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
    height: 450px;
    margin: 100px 0 0 0;
    padding: 0;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #F4F7FE;
}
.jumbotron h1 {
    font-size: 40px;
    margin: 0;
}
.jumbotron p {
    font-weight: 300;
    font-size: 20px;
    margin: 25px 0 35px 0;
}
.jumbotron .btn {
    background: white;
    height: 50px;
    width: 185px;
}
</style>