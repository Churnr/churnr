<template>
  <section class="pricing">
      <div class="pricing-content">
          <span>
              <p class="benefit">Vi ved der er forskel på behovet</p>
              <h2>Skræddersyede priser<br>som passer dit behov</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, provident.</p>
          </span>
          <div class="price-boxes">
              <div class="boxes">
                  <h3>Små virksomheder</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quae.</p>
                  <li>positiv ting</li>
                  <li>positiv ting</li>
                  <li>positiv ting</li>
                  <li>positiv ting</li>
                  <li>positiv ting</li>
                  <li>positiv ting</li>
                  <li>positiv ting</li>
                  <li>positiv ting</li>
                  <a href="#">Kontakt os</a>
              </div>
              <div class="boxes">
                  <h3>Mellem virksomheder</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quae.</p>
                  <li>positiv ting</li>
                  <li>positiv ting</li>
                  <li>positiv ting</li>
                  <li>positiv ting</li>
                  <li>positiv ting</li>
                  <li>positiv ting</li>
                  <li>positiv ting</li>
                  <li>positiv ting</li>
                  <a href="#">Kontakt os</a>
              </div>
              <div class="boxes">
                  <h3>Selvstændige</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quae.</p>
                  <li>positiv ting</li>
                  <li>positiv ting</li>
                  <li>positiv ting</li>
                  <li>positiv ting</li>
                  <li>positiv ting</li>
                  <li>positiv ting</li>
                  <li>positiv ting</li>
                  <li>positiv ting</li>
                  <a href="#">Kontakt os</a>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
  name: "pricing",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pricing {
    display: flex;
    justify-content: center;
    color: #454f63;
    font-size: 20px;
}
.pricing-content {
    padding: 150px 0;
    width: 1150px;
}
.pricing-content span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 150px;
}
.pricing-content .benefit {
    color: #3BD67F;
    font-weight: 700;
}
.pricing-content h2 {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 25px;
}
.price-boxes {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 35px;
    font-size: 16px;
}
.boxes {
    padding: 35px;
    box-shadow: 0 6px 20px 0 rgb(183 183 183 / 25%) !important;;
}
.boxes h3 {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 25px;
}
.boxes li {
    line-height: 2;
    list-style: none;
}
li:before {
  content: '✓';
  color: #27DA9F;
  font-weight: 700;
  margin-right: 15px;
}
.boxes a {
    background: #3BD67F;
    color: white;
    text-decoration: none;
    text-align: center;
    padding: 10px;
    display: block;
    margin-top: 25px;
}
</style>