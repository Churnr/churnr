<template>
  <section class="privacyPolicy">
    <h1>Persondatapolitik hos Churnr</h1>
    <p>
      Vi indhenter kun persondata i de tilfælde, hvor dette skulle være relevant
      for os, og vi vil kun indhente persondata, hvis det er relevant for din
      aktivitet hos Churnr. Ved indsamling, behandling og anvendelse af dine
      persondata overholder vi altid alle relevante lovbestemmelser. Vi vil kun
      opbevare dine persondata, så længe vi enten er pålagt en juridisk
      forpligtelse hertil, eller så længe det er relevant for den hensigt,
      hvormed de blev indsamlet.
    </p>
    <h2>Oplysninger vi indsamler</h2>
    <p>
      Hvis du ønsker at købe og modtage et produkt eller en ydelse fra os, har
      vi brug for at indsamle visse persondata for at kunne gennemføre handlen
      og for at kunne tilbyde dig vores services. Vi kan bruge cookies til at
      holde styr på indholdet i din indkøbskurv, mens du bruger vores webshop.
      Vi kan indhente oplysninger som f.eks. navn, e-mailadresse, postadresse,
      leveringsadresse (hvis den varierer fra postadresse), telefonnummer og
      betalingsoplysninger. Churnr indsamler og behandler dine persondata, når
      du foretager dig følgende: <br /><br />
      - Besøger vores hjemmeside
      <br />
      - Opretter en konto
      <br />
      - Sender os spørgsmål, reklamationer eller feedback
    </p>
    <h2>Den dataansvarlige</h2>
    <p>
      Den dataansvarlige for indsamling, behandling og anvendelse af dine
      personoplysninger på www.churnr.dk er Churnr, Nørgaardsvej 30, 2800
      Kongens Lyngby.
    </p>
    <h2>Behandlingsgrundlag og formål</h2>
    <p>
      Dine almindelige kontaktoplysninger som navn og adresse indhenter vi for
      at kunne levere det produkt eller den ydelse, som du har købt hos os. Din
      e-mailadresse indhenter vi for at kunne sende dig en ordrebekræftelse samt
      en leveringsbekræftelse. Dine oplysninger (undtagen din e-mailadresse,
      hvis du har givet samtykke til behandling heraf med henblik på modtagelse
      af tilbud) vil blive slettet efter, at du har modtaget din vare eller
      ydelse.
    </p>
    <h2>Andre modtagere af personoplysninger</h2>
    <p>
      Vi sælger ikke dine persondata til tredjemand, og vi overfører ikke dine
      persondata til tredjelande. Vi har vores hjemmeside hos www.simply.com ,
      som fungerer som vores databehandler. Alle persondata som du oplyser på
      vores hjemmeside vil blive opbevaret i www.simply.coms datacentre. Vi
      anvender eksterne virksomheder som leverandører for at levere vores
      ydelser bedst muligt. Disse eksterne leverandører er databehandlere og
      behandler i visse tilfælde personoplysninger i forbindelse med deres
      levering af ydelser til os. Vores databehandlere behandler kun
      personoplysninger efter vores instruks og i overensstemmelse med
      lovgivningens krav til databehandlere. Vi har indgået databehandleraftaler
      med vores databehandlere, hvilket er vores garanti for, at de overholder
      gældende regler om beskyttelse af dine personoplysninger.
    </p>
    <h2>Dine rettigheder</h2>
    <p>
      Som den registrerede har du en række rettigheder, som vi til enhver tid
      skal sikre opfyldelse af. Du har ret til at anmode os om følgende:
      <br /><br />• At få adgang til og få rettet/ændret dine persondata <br />•
      At få slettet persondata <br /><br />
      Du har derudover ret til at protestere over behandlingen af dine
      personlige data, og du har ret til at indgive klage til en
      databeskyttelsesmyndighed. Ønsker du ikke længere, at vi skal behandle
      dine personoplysninger, eller at vi skal begrænse behandlingen af dine
      personoplysninger, kan du også sende os en anmodning herom til vores
      e-mailadresse hello@churnr.dk.
    </p>
  </section>
</template>

<script>
export default {
  name: "privacyPolicy",
};
</script>

<style scoped>
.privacyPolicy {
  width: 1150px;
  margin: 0 auto;
  padding: 150px 0;
}

h1 {
  margin-bottom: 50px;
}
h2,
h3 {
  margin-bottom: 25px;
}
p {
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 1.5;
}

/* Mobile media query */

@media only screen and (max-width: 728px) {
  .privacyPolicy {
    width: 100%;
    margin: 0 auto;
    padding: 200px 25px 150px 25px;
  }

  h1 {
    margin-bottom: 50px;
    font-weight: 700;
  }
  h2,
  h3 {
    margin-bottom: 25px;
    font-weight: 700;
  }
  p {
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 1.5;
  }
}
</style>
