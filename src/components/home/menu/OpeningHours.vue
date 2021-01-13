<template>
  <div class="hours">
    <div class="hours-opening">
      <h2 class="hours-opening__title">Opening Hours</h2>
      <h3 class="hours-opening__info">Monday to Friday <span>10am - 10pm</span></h3>
      <h3 class="hours-opening__info">Saturday to Sunday <span>09am - 11pm</span></h3>
      <picture class="hours-opening__img">
        <source srcset="../../../assets/deserts.webp" type="image/webp">
        <source srcset="../../../assets/deserts.jpg" type="image/jpeg">
        <img src="../../../assets/deserts.jpg" alt="deserts">
    </picture>
    </div>

  </div>

</template>

<script>
export default {
  name: "OpeningHours"
}
</script>

<style scoped lang="scss">
//TODO fix opening styles for mobile
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
    &__title {
      width: 244px;
      @include title(#14141d, $PD, 35px, 700);
      line-height: 22px;
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
    }
  }
}
</style>