<template>
  <section class="calculator">
    <h1>😍- simpel marketing platform til dit startup</h1>
    <h2>Test test</h2>
    <form>
      <div class="calculator-variables">
        <input
          type="text"
          min="0"
          max="100"
          id="churnRate"
          v-on:input="CalculateEstimate()"
        />
        <input
          type="text"
          min="0"
          max="100"
          id="invoulentaryChurn"
          v-on:input="CalculateEstimate()"
        />
        <input
          type="text"
          id="contributionMargin"
          v-on:input="CalculateEstimate()"
        />
        <span>
          <label>Antal kunder?</label>
          <input
            id="customerNumber"
            type="text"
            v-on:input="CalculateEstimate()"
          />
        </span>
      </div>
      <div id="result"></div>
    </form>
  </section>
</template>

<script>
import $ from "jquery";

export default {
  name: "calculator",
  methods: {
    // Savings estimate quote calculator.

    CalculateEstimate: function () {
      var b1 = parseInt(document.getElementById("churnRate").value);
      var b2 = parseInt(document.getElementById("invoulentaryChurn").value);
      var b3 = parseInt(document.getElementById("contributionMargin").value);
      var b4 = parseInt(document.getElementById("customerNumber").value);

      document.getElementById("result").innerHTML =
        "Vi kan fastholde " +
        (1 / (b1 / 100)) * b3 * (b4 * (b2 / 100)) * 12 * 0.5 +
        " DKK";
    },
  },
  mounted() {
    $(function () {
      $("input").change(function () {
        $("#result").toggle(
          $("input").filter(function () {
            return this.value === "";
          }).length === 0
        );
      });
    });
  },
};
</script>

<style scoped>
.calculator {
  padding-top: 250px;
  width: 1150px;
  margin: 0 auto;
}
.calculator h1 {
  padding-bottom: 150px;
  text-align: center;
  font-size: 65px;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -2px;
  width: 70%;
  margin: 0 auto;
}
.calculator form {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px;
  box-shadow: 0px 0px 20px 1px rgb(173 216 230 / 50%);
  -webkit-box-shadow: 0px 0px 20px 1px rgb(173 216 230 / 50%);
  -moz-box-shadow: 0px 0px 20px 1px rgba(173, 216, 230, 0.5);
  border-radius: 5px;
}

#result {
  font-size: 20px;
  color: red;
  z-index: 999;
  display: none;
}

/* Mobile media query */

@media only screen and (max-width: 728px) {
}
</style>
