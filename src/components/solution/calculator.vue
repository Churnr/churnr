<template>
  <section class="calculator">
    <form>
      <div class="calculator-variables">
        <div class="user-fields">
          <label for="">Hvad er jeres churn rate?</label>
          <input
            type="text"
            min="0"
            max="100"
            id="churnRate"
            v-on:input="CalculateEstimate()"
          />
          <p>Procentdelen af kunder der forlader butikken per md.</p>
        </div>
        <div class="user-fields">
          <label for="">Hvad er jeres ufrivillige churn rate?</label>
          <input
            type="text"
            min="0"
            max="100"
            id="invoulentaryChurn"
            v-on:input="CalculateEstimate()"
          />
          <p>Procentdelen af churn raten der sker pga. betalingsfejl</p>
        </div>
        <div class="user-fields">
          <label for="">Hvad er jeres dækningsbidrag?</label>
          <input
            type="text"
            id="contributionMargin"
            v-on:input="CalculateEstimate()"
          />
          <p>Fortjenesten per solgt produkt, angivet i kroner</p>
        </div>
        <div class="user-fields">
          <label>Hvor mange abonnementskunder har I?</label>
          <input
            id="customerNumber"
            type="text"
            v-on:input="CalculateEstimate()"
          />
          <p>Eventuelt angivet til nærmeste 100</p>
        </div>
      </div>
      <div id="result"></div>
    </form>
  </section>
</template>

<script>
// import $ from "jquery";

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
        "Vi kan fastholde <br>" +
        (1 / (b1 / 100)) * b3 * (b4 * (b2 / 100)) * 12 * 0.5 +
        " DKK";
    },
  },
  // mounted() {
  //   $(function () {
  //     $("input").change(function () {
  //       $("#result").toggle(
  //         $("input").filter(function () {
  //           return this.value === "";
  //         }).length === 0
  //       );
  //     });
  //   });
  // },
};
</script>

<style scoped>
.calculator {
  padding-top: 125px;
  width: 1150px;
  margin: 0 auto;
}
.calculator h1 {
  padding-bottom: 150px;
  font-size: 65px;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -2px;
  width: 70%;
  margin: 0 auto;
}
.calculator form {
  text-align: left;
  padding: 50px;
  box-shadow: 0px 0px 20px 1px rgb(173 216 230 / 50%);
  -webkit-box-shadow: 0px 0px 20px 1px rgb(173 216 230 / 50%);
  -moz-box-shadow: 0px 0px 20px 1px rgba(173, 216, 230, 0.5);
  border-radius: 5px;
}

.calculator form .user-fields {
  display: flex;
  flex-direction: column;
}

#result {
  font-size: 20px;
  z-index: 999;
  /* display: none; */
  text-align: center;
  animation: fade-in 5s linear ease-in;
  font-size: 32px;
  margin-top: 50px;
}

.calculator-variables {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  row-gap: 50px;
  justify-content: space-between;
}

.calculator label {
  font-size: 18px;
  font-weight: 600;
}

.calculator input {
  padding: 10px;
  margin: 10px 0 15px 0;
}
.calculator p {
  font-size: 16px;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Mobile media query */

@media only screen and (max-width: 728px) {
}
</style>
