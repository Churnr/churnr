<template>
  <section class="faq">
    <p class="benefit">Stadig i tvivl? Find svar på det meste her</p>
    <h1>Oftest stillede spørgsmål</h1>

    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-0" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="info">
            Hvad er Churnr?
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              Churnr er en virksomhed, som beskæftiger sig med at mindske den
              ufrivillige churn rate, hos abonnementsvirksomheder. Det gør vi
              ved, at række personligt ud til hver enkelt kunde, og møde dem i
              øjenhøjde.
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-0" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="info">
            Hvem henvender Churnr sig til?
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              Churnr henvender sig på nuværende tidspunkt udelukkende til
              abonnementsvirksomheder.
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-0" role="tab">
          <b-button block v-b-toggle.accordion-3 variant="info">
            Hvor meget koster Churnrs ydelser?
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              Prisen for Churnrs ydelser er individuel for alle virksomheder.
              Det varierer på baggrund af antal kunder, churn rate, interne
              behov mm.
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </section>
</template>

<script>
export default {
  name: "faq",
};
</script>

<style scoped>
.faq {
  padding: 150px 0;
  width: 1150px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid #dcdcdc;
}
.faq h1 {
  font-weight: 700;
  font-size: 50px;
}
.faq .accordion {
  margin-top: 100px;
}
.card-header {
  width: 1150px;
}
.card-header .btn-info {
  width: 100%;
  text-align: left;
  background: white;
  border-color: transparent;
  padding: 30px !important;
  font-weight: 700;
  font-size: 20px;
  margin: 0;
}

.card-header .btn:focus,
.card-header .btn:active {
  outline: none !important;
  box-shadow: none;
}
.card-text {
  font-size: 20px;
  line-height: 1.75;
  padding: 30px;
}

/* Mobile media query */

@media only screen and (max-width: 728px) {
  .faq {
    padding: 150px 0px;
    width: 100%;
    flex-direction: column;
    text-align: center;
  }
  .faq h1 {
    font-weight: 700;
    font-size: 36px;
  }
  .faq .accordion {
    margin-top: 100px;
  }
  .card-header {
    width: 100%;
  }
  .card-header .btn-info {
    width: 100%;
    text-align: left;
    background: white;
    border-color: transparent;
    padding: 30px !important;
    font-weight: 700;
    font-size: 18px;
    margin: 0;
  }

  .card-header .btn:focus,
  .card-header .btn:active {
    outline: none !important;
    box-shadow: none;
  }
  .card-text {
    font-size: 18px;
    line-height: 1.75;
    padding: 30px;
    text-align: left;
  }
  .accordion {
    width: 100% !important;
    padding: 0 25px;
  }
}
</style>