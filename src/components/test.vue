<template>

  <div class="test">
    <div class="text-content">
      <h1>This isn't gonna work</h1>
    </div>
    <div class="image-content">
      <img src="../assets/Untitled.png" alt="">
      <div class="colour-blob"></div>
    </div>
  </div>

</template>

<script>
export default {
  name: "test",
  props: {
    msg: String,
  },
};
</script>

<style scoped>

.test {
  height: 700px;
  width: 1150px;
  margin: 0 auto;
  background: blue;
  align-items:center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
}

.colour-blob {
  height: 500px;
  width: 250px;
  background: red;
  position: fixed;
    padding: 2em;
    left: 50%;
    top: 0%;
    transform: translateX(-50%);
    perspective: 1200;
}

</style>
