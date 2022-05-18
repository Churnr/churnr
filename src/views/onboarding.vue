<template>
  <div>
    <section class="onboarding">
      <div class="header-text">
        <p class="benefit">Få onboardet din virksomhed uden problemer</p>
        <h1>Kom nemt og hurtigt i gang</h1>
        <p>
          Vi har lavet et onboarding flow, der gør det nemt for alle parter at
          komme i gang
        </p>
      </div>
      <div class="header-images">
        <img src="../assets/onboarding/onboarding-step-1.png" alt="Første step til at få din virksomhed onboardet med Churnr" />
        <img src="../assets/onboarding/onboarding-step-2.png" alt="Andet step til at få din virksomhed onboardet med Churnr" />
        <img src="../assets/onboarding/onboarding-step-3.png" alt="Tredje step til at få din virksomhed onboardet med Churnr" />
      </div>
    </section>
    <section class="call-to-action">
      <div class="call-to-action-inner">
        <h2>Onboard din virksomhed nu</h2>
        <p>
          Klik på knappen nedenunder og udfyld onboarding formularen<br />—
          herefter kan vi gå i gang med at fastholde kunder
        </p>
        <a href="https://docs.google.com/forms/d/1E9Rim4wz-QGNvfUkJXYeBl2zYoyxPBerey2YA7zYh-Q/edit"
          class="btn"
          target="_blank"
          >Udfyld formular<i class="fa-solid fa-arrow-up-right-from-square"></i
        ></a>
      </div>
    </section>
    <section class="faq">
      <div class="faq-text">
        <p class="benefit">Spørgsmål til formularen? Find svar her</p>
        <h2>Oftest stillede spørgsmål</h2>
      </div>

      <!-- API questions accordions -->

      <div class="accordions api">
        <h3>API nøgler</h3>
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="info">
                Hvad er en API nøgle?
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-1"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  En API-nøgle (Application Programming Interface) er en
                  personlig kode, som kan bruges til at få to softwareprogrammer
                  til at “snakke” sammen og udføre forskellige handlinger i
                  hinandens systemer.
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block v-b-toggle.accordion-2 variant="info">
                Hvorfor skal Churnr have adgang til min API nøgle?
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-2"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  Med vores eget IT-system, kan vi med jeres API nøgle nemt og
                  enkelt trække data ned over de kunder hvor der er opstået
                  betalingsfejl. På den måde undgår vi spildtid ved hele tiden
                  at skulle få genereret udtræk manuelt.
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block v-b-toggle.accordion-3 variant="info">
                Hvad kan Churnr få adgang til med min API nøgle?
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-3"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  I teorien ville vi kunne få alt data fra jeres betalingssystem
                  ned i vores eget system. Men ved det indledende onboarding
                  møde, skriver vi under på et dokument fra Datatilsynet om, at
                  vi kun trækker de data ud som vi behøver for at fastholde
                  jeres kunder.<br /><br />Desuden er det kun muligt for os at
                  læse jeres data. Vi har ikke mulighed for at kunne gå ind og
                  manipulere med den.
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
              <b-button block v-b-toggle.accordion-4 variant="info">
                Hvorfor skal Churnr have sin egen e-mail konto hos os?
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-4"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  Når du bliver kunde hos Churnr, garanterer vi for at lette
                  arbejdsbyrden for dig. Derfor skal vi bruge vores egen e-mail
                  konto fra jeres virksomhed for at kunne overtage
                  kommunikationen og dialogen til de kunder der fejler på deres
                  betalinger.
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block v-b-toggle.accordion-5 variant="info">
                Hvorfor vil Churnr se vores tidligere e-mail skabeloner?
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-5"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  Da vi sender mails ud på vegne af jeres virksomhed, skal vi
                  vide hvilken æstetik der tidligere er blevet brugt, så vi kan
                  gå ind og matche den bedst muligt. Det handler alt sammen om
                  at skabe den perfekte mail der reflekterer hvem I er, hvad I
                  gerne vil afspejle og hvordan I normaltvis plejer at tale til
                  jeres kunder.
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block v-b-toggle.accordion-6 variant="info">
                Hvad skal jeg kalde Churnrs e-mail konto?
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-6"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  Det er helt op til dig! Vi anbefaler at bruge navnet på den
                  kontaktperson du har tilknyttet - eksempelvis
                  jacob@dinvirksomhed.dk - men du kan også kalde mail kontoen
                  for support@dinvirksomhed.dk, churn@dinvirksomhed.dk,
                  dunning@dinvirksomhed.dk.
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
              <b-button block v-b-toggle.accordion-7 variant="info">
                Hvorfor skal Churnr integrere med min kommunikationsplatform?
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-7"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  For at vi kan facilitere tæt og vedvarende kommunikation med
                  jer, vil vi rigtig gerne blive en del af den
                  kommunikationsplatform som i allerede benytter jer af. Vi ser
                  relationen til dig som et partnerskab, så vores samarbejde
                  skal være nemt, enkelt og tilgængeligt - ligesom hvis
                  vi var en del af din virksomhed.
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block v-b-toggle.accordion-8 variant="info">
                Hvor ofte kan jeg regne med, at Churnr kontakter mig?
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-8"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  Vi bestræber os på at ajourføre dig mindst en gang om ugen med
                  en kort status for ugen. Undervejs kan der komme sporadiske
                  spørgsmål hvis der er noget vi lige skal dobbelttjekke eller
                  høre jeres mening om. Det er selvfølgelig også en mulighed for
                  jer altid at kontakte os hvis der er behov, men da alting skal
                  fungere nemt og smertefrit, bliver I altså ikke overdynget med
                  beskeder i tide og utide. Det er en Churnr garanti!
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-0" role="tab">
              <b-button block v-b-toggle.accordion-9 variant="info">
                Hvem fra virksomheden er bedst egnet til at være kontaktperson til Churnr?
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-9"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  Det er helt op til jer, men vi anbefaler selvfølgelig den person som har bedst styr på virksomhedens churn tal.
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
    title: "Onboarding | Churnr",
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
  align-items: center;
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
.onboarding p {
  font-size: 20px;
}
.onboarding .header-images {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
}
.call-to-action {
  width: 100%;
  padding: 150px 0px;
  background-color: #0abf53;
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
  line-height: 1.75;
  margin: 0;
  margin-bottom: 15px;
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
  margin: 0;
  padding: 50px 0px 50px 0px;
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
  font-weight: 700;
}
.call-to-action-inner .btn i {
  font-size: 20px;
  margin-left: 10px;
}
.call-to-action-inner .btn:hover {
  background: black;
  color: white;
}
.header-images img:nth-child(1) {
  transform: scale(0.9);
}
.header-images img:nth-child(2) {
  transform: scale(1.1);
}
.header-images img:nth-child(3) {
  transform: scale(0.9);
}

/* Mobile media query */

@media only screen and (max-width: 728px) {
  .onboarding {
    padding: 225px 0px 150px 0px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .onboarding h1 {
    font-size: 50px;
  }
  .onboarding p {
    line-height: 1.75;
  }
  .onboarding .header-images {
    grid-row-gap: 75px;
    grid-template-columns: 1fr;
  }
  .onboarding .header-images img {
    width: 100%;
  }
  .call-to-action {
    width: 100%;
    padding: 100px 0px;
  }
  .call-to-action-inner {
    width: 90%;
  }
  .call-to-action-inner h2 {
    font-size: 50px;
  }
  .faq {
    width: 90%;
    padding: 100px 0px;
  }
  .faq-text h2 {
    font-size: 50px;
  }

  .accordions h3 {
    font-size: 24px;
  }

  .card-header {
    width: 100%;
  }
  .card-header .btn-info {
    width: 100%;
  }
  .header-images img:nth-child(1) {
    transform: scale(1);
  }
  .header-images img:nth-child(2) {
    transform: scale(1);
  }
  .header-images img:nth-child(3) {
    transform: scale(1);
  }
}
</style>