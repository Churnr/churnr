<template>
  <section class="calculator">
    <h1>😍- simpel marketing platform til dit startup</h1>
    <form>
        <div class="calculator-variables">
          <span>
            <label>Hvad er jeres samlede churn rate?</label>
            <input type='text' min="0" max="100" id='churnRate' oninput="CalculateEstimate();" required />
            <p>Procentandelen af tabte kunder / per md</p>
          </span>
          <span>
            <label>Hvad er jeres ufrivillige churn rate?</label>
            <input type='text' min="0" max="100" id='invoulentaryChurn' oninput="CalculateEstimate();" />
            <p>Procentandelen af tabte kunder pga betalingsfejl / per md</p>
          </span>
          <span>
            <label>Hvad er jeres dækningsbidrag?</label>
            <input type='text' id='contributionMargin' oninput="CalculateEstimate();" />
            <p>Ved mere end én abonnementspris, indtast gennemsnittet</p>
          </span>
          <span>
            <label>Antal kunder</label>
            <output id="output">0</output>
            <input id="customerNumber" type="range" value="0" min="0" max="3000" step="100" oninput="CalculateEstimate(); sliderChange(this.value);">
            <div class="range">
              <p>0 kunder</p>
              <p>3000 kunder</p>
            </div>
          </span>
        </div>
      <div id='result'>hej</div>
    </form>
  </section>
</template>

<script>
export default {
  name: "calculator",
  props: {
    msg: String,
  },
  mounted () {
    
  }
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
.calculator-variables {
  width: 50%;
}
.calculator-variables span {
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
}

.calculator-variables label {
  font-size: 18px;
  font-weight: 600;
}

.calculator-variables input {
  margin: 10px 0;
  padding: 10px;
}

.calculator-variables p {
  font-size: 14px;
}

.range {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

/* Mobile media query */

@media only screen and (max-width: 728px) {
}
</style>
