<template>
  <div class="callToAction">
    <div class="callToAction-content">
      <h1>Lad os hjælpe hinanden</h1>
      <p>
        Book et møde med os i dag, og hør hvad vi kan gøre for din virksomhed
      </p>
      <b-button href="#/contact">Book et møde</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "callToAction",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.callToAction {
  padding: 150px 0;
  color: white;
  background: #0abf53;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.callToAction-content {
  width: 1150px;
  text-align: center;
}
.callToAction-content h1 {
  font-weight: 700;
  margin: 0;
}
.callToAction-content p {
  padding: 25px 0 35px 0;
  font-size: 18px;
  line-height: 24px;
  margin: 0;
}
.callToAction-content .btn {
  background: white;
  color: black;
  font-size: 18px;
  border: none;
  padding: 15px 30px;
  border-radius: 0;
  font-weight: 500;
}
</style>
