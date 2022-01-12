<template>
  <div class="moneyRetained">
      <h2>10,420.69 DKK</h2>
      <p>har vi fastholdt for vores kunder indtil videre</p>
  </div>
</template>

<script>
export default {
  name: "moneyRetained",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
    .moneyRetained {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #1A3866;
        color: white;
        padding: 150px 0;
    }

    .moneyRetained h2 {
        font-size: 75px;
        font-weight: 600;
        line-height: 100px;
        margin: 0;
    }

    .moneyRetained p {
        font-size: 20px;
        line-height: 24px;
        margin: 0;
        padding: 0;
    }
</style>
