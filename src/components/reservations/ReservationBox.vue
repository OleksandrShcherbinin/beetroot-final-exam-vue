<template>
  <div class="res-container">
    <picture class="res-container__image">
      <source  media="(min-width:578px)" :srcset="getImgUrl(image_list[0])" type="image/webp">
      <source  media="(min-width:578px)" :srcset="getImgUrl(image_list[1])" type="image/jpeg">
      <source  media="(max-width:577.98px)" :srcset="getImgUrl(image_list[2])" type="image/webp">
      <source  media="(max-width:577.98px)" :srcset="getImgUrl(image_list[3])" type="image/jpeg">
      <img :src="getImgUrl(image_list[1])" :alt="image_list[4]">
    </picture>
    <div class="res-container-info">
      <div class="res-container-info-inner">
        <h3 class="res-container-info-inner__title">{{image_list[5]}}</h3>
        <p class="res-container-info-inner__text">{{image_list[6]}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReservationBox",
  props: ['image_list'],
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
.res-container {
  margin-right: 20px;
  @media only screen and (max-width: 1200px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
  &__image {
    display: block;
    vertical-align: top
  }
  &-info {
    box-sizing: border-box;
    width: 370px;
    height: 210px;
    background-color: #ffffff;
    padding: 40px;
    @media only screen and (max-width: 577.98px){
      width: 280px;
    }
    &-inner {
      &__title {
        @include title(#14141d, $PD, 26px, 700);
        margin-top: 0;
      }
      &__text {
        @include title(#5c6369, $SR, 14px, 400);
        line-height: 26px;
        @media only screen and (max-width: 577.98px){
          line-height: normal;
        }
      }
    }
  }
}

</style>