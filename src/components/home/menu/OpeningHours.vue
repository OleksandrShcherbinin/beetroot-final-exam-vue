<template>
  <div class="hours">
    <div class="hours-opening">
      <h2 class="hours-opening__title">Opening Hours</h2>
      <h3 class="hours-opening__info">Monday to Friday <span>10am - 10pm</span></h3>
      <h3 class="hours-opening__info">Saturday to Sunday <span>09am - 11pm</span></h3>
      <picture class="hours-opening__img">
        <source :srcset="getImgUrl(images[0].file)" type="image/webp">
        <source :srcset="getImgUrl(images[1].file)" type="image/png">
        <img :src="getImgUrl(images[2].file)" :alt="images[3].alt">
      </picture>
    </div>
  </div>
</template>

<script>
export default {
  name: "OpeningHours",
  props: ["srcset"],
  data() {
    return {
      images: [
        {id: 5, file: "/dessert.webp"},
        {id: 6, file: "/dessert.png"},
        {id: 7, file: "/dessert.png"},
        {id: 8, alt: "dessert"}
        ],
    }
  },
  methods: {
    getImgUrl(img) {
      return require('@/assets' + img)
    },
  }
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.hours {
  max-width: 1970px;
  width: 100%;
  min-height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  &-opening {
    max-width: 1170px;
    width: 60%;
    display: flex;
    align-items: center;
    position: relative;
    flex-wrap: wrap;
    &__title {
      width: 244px;
      @include title(#14141d, $PD, 35px, 700);
      padding-right: 7%;
    }
    &__info {
      width: 177px;
      color: #373844;
      font-family: $PD;
      font-size: 20px;
      font-style: italic;
      padding-right: 3%;
      span {
        color: #fea100;
        font-size: 30px;
        font-weight: 700;
        font-style: normal;
      }
    }
    &__img {
      position: absolute;
      top: -130px;
      right: 0;
      opacity: 0.8;
      @media only screen and (max-width: 1200px) {
        opacity: 0.6;
      }
      @media only screen and (max-width: 992px) {
        opacity: 0.4;
      }
      @media only screen and (max-width: 768px) {
        opacity: 0.2;
      }
    }
  }
}
</style>