<template>
  <div class="short-info">
    <div class="short-info-inner">
      <h3 class="short-info-inner__title">15 M</h3>
      <p class="short-info-inner__text">Prep time</p>
    </div>
    <div class="short-info-inner">
      <h3 class="short-info-inner__title">30 M</h3>
      <p class="short-info-inner__text">Cook Time</p>
    </div>
    <div class="short-info-inner">
      <h3 class="short-info-inner__title">50 M</h3>
      <p class="short-info-inner__text">Read in</p>
    </div>
    <div class="short-info-inner--pdf">
      <svg class="short-info-inner--pdf__icon"><use xlink:href="../../assets/icons/pdf.svg#pdf"></use></svg>
      <h3 class="short-info-inner--pdf__title">Download</h3>
      <p class="short-info-inner--pdf__text">Food Recipe</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "ShortRecipe"
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.short-info {
  width: 85%;
  min-height: 105px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  bottom: 60px;
  left: 50%;
  transform: translateX(-60%);
  box-shadow: 0 19px 49px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  &-inner {
    padding: 0 4% 0 4%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    &__title {
      @include text(#14141d, $PD, 24px, 700, uppercase);
      margin: 0 0;
    }
    &__text {
      @include title(#5c6369, $SR, 16px, 400);
    }
  }
  &-inner--pdf {
    padding: 0 4% 0 04%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 3;
    &__icon {
      width: 32px;
      height: 40px;
      fill: #fea100;
      cursor: pointer;
    }
    &__icon:hover {
      fill: #14141d;
    }
    &__icon:active {
      transform: scale(0.8);
    }
    &__title {
      @include title(#14141d, $PD, 24px, 700);
      margin: 0 0;
    }
    &__text {
      @include title(#5c6369, $SR, 16px, 400);
    }
  }
}
</style>