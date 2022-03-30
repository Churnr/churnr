<template>
  <div>
    <section class="onboarding">
      <div class="header-text">
        <p class="benefit">Få onboardet din virksomhed uden problemer</p>
        <h1>Kom nemt og hurtigt i gang</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
          tenetur!
        </p>
      </div>
      <div class="header-images">
        <img src="../assets/onboarding/onboarding-step-1.jpg" alt="" />
        <img src="../assets/onboarding/onboarding-step-2.jpg" alt="" />
        <img src="../assets/onboarding/onboarding-step-3.jpg" alt="" />
      </div>
    </section>
    <section class="call-to-action">
      <div class="call-to-action-inner">
        <h2>Onboard din virksomhed nu</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, saepe.</p>
        <router-link to="/contact" class="btn">Book et møde <i class="fa-solid fa-up-right-from-square"></i></router-link>
      </div>
    </section>
    <section class="faq">
      <div class="faq-text">
        <p class="benefit">Lorem ipsum dolor sit amet.</p>
        <h2>Lorem ipsum dolor sit amet consectetur</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
          sapiente?
        </p>
      </div>

      <!-- API questions accordions -->

      <div class="accordions api">
        <h3>API nøgler</h3>
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="info">
                Hvad er Churnr?
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-1"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  Churnr er en virksomhed, som beskæftiger sig med at mindske
                  den ufrivillige churn rate, hos abonnementsvirksomheder. Det
                  gør vi ved, at række personligt ud til hver enkelt kunde, og
                  møde dem i øjenhøjde.
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
            <b-collapse
              id="accordion-2"
              accordion="my-accordion"
              role="tabpanel"
            >
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
            <b-collapse
              id="accordion-3"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  Prisen for Churnrs ydelser er individuel for alle
                  virksomheder. Det varierer på baggrund af antal kunder, churn
                  rate, interne behov mm.
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>

      <!-- Mail questions accordion-->

      <div class="accordions api">
        <h3>Mail konto</h3>
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="info">
                Hvad er Churnr?
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-1"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  Churnr er en virksomhed, som beskæftiger sig med at mindske
                  den ufrivillige churn rate, hos abonnementsvirksomheder. Det
                  gør vi ved, at række personligt ud til hver enkelt kunde, og
                  møde dem i øjenhøjde.
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
            <b-collapse
              id="accordion-2"
              accordion="my-accordion"
              role="tabpanel"
            >
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
            <b-collapse
              id="accordion-3"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  Prisen for Churnrs ydelser er individuel for alle
                  virksomheder. Det varierer på baggrund af antal kunder, churn
                  rate, interne behov mm.
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>

      <!-- Communication questions accordion -->

      <div class="accordions api">
        <h3>Kommunikations platform</h3>
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="info">
                Hvad er Churnr?
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-1"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  Churnr er en virksomhed, som beskæftiger sig med at mindske
                  den ufrivillige churn rate, hos abonnementsvirksomheder. Det
                  gør vi ved, at række personligt ud til hver enkelt kunde, og
                  møde dem i øjenhøjde.
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
            <b-collapse
              id="accordion-2"
              accordion="my-accordion"
              role="tabpanel"
            >
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
            <b-collapse
              id="accordion-3"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  Prisen for Churnrs ydelser er individuel for alle
                  virksomheder. Det varierer på baggrund af antal kunder, churn
                  rate, interne behov mm.
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "onboarding",
  metaInfo: {
    title: "Om os | Churnr",
    meta: [
      {
        vmid: "description",
        name: "description",
        content:
          "Hos Churnr er vores drøm, at sætte mennesket i fokus, ved at minimere brugen af autogenererede e-mails og gøre kundeoplevelsen mere menneskelig for forbrugeren, i en verden der bliver mere automatiseret for hver dag der går.",
      },
    ],
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.onboarding {
  padding: 225px 0px 150px 0px;
  width: 1150px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.onboarding .header-text {
  text-align: center;
  padding-bottom: 100px;
}
.onboarding h1 {
  font-size: 65px;
  font-weight: 700;
  margin: 15px 0px 25px 0px;
  letter-spacing: -2px;
}
.onboarding .header-images {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.call-to-action {
  width: 100%;
  padding: 150px 0px;
  background-color: #f2f6f9;
}
.call-to-action-inner {
  width: 1150px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.call-to-action-inner h2 {
  font-size: 50px;
  font-weight: 700;
  letter-spacing: -2px;
  margin: 0px 0px 25px 0px;
}
.call-to-action-inner p {
  font-size: 20px;
  margin: 0;
  padding: 0;
}
.faq {
  width: 1150px;
  margin: 0 auto;
  padding: 150px 0px;
}
.faq-text {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 50px;
}
.faq-text h2 {
  font-size: 50px;
  font-weight: 700;
  letter-spacing: -2px;
  margin: 0px 0px 25px 0px;
}
.faq-text p {
  font-size: 20px;
}

.accordions h3 {
  font-size: 28px;
  font-weight: 700;
  padding: 50px 0px;
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
.call-to-action-inner .btn {
  background: #0abf53;
  color: white;
  font-size: 20px;
  font-weight: 700;
  border: none;
  padding: 15px 30px;
  border-radius: 0;
  font-weight: 500;
  margin-top: 25px !important;
  margin: 0 auto;
}
.call-to-action-inner .btn:hover {
  background: black;
  color: white;
}
.header-images img:nth-child(1) {
  transform: scale(0.9);
}
.header-images img:nth-child(2) {
  transform: scale(1.2);
}
.header-images img:nth-child(3) {
  transform: scale(0.9);
}

/* Mobile media query */

@media only screen and (max-width: 728px) {
  .team {
    padding: 200px 25px 150px 25px;
  }
  .team h1 {
    font-weight: 700;
    font-size: 36px;
    letter-spacing: -2px;
    margin-bottom: 100px;
    color: #2e3540;
  }
  .team-image {
    width: 100%;
  }
}
</style>