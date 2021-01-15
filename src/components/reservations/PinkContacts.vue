<template>
  <div class="info">
    <div class="info-inner">
        <svg class="info-inner__icon"><use xlink:href="../../assets/icons/phone-call.svg#phone-call"></use></svg>
        <h2 class="info-inner__add"><a href="tel:1-00700005">1-007 000 005</a></h2>
        <p class="info-inner__text">Call us for a Special reservation</p>
        <svg class="info-inner__icon"><use xlink:href="../../assets/icons/message.svg#message"></use></svg>
        <h2 class="info-inner__add"><a href="mailto:info@luxury.com">info@luxury.com</a></h2>
        <p class="info-inner__text">mail us for a Special reservation</p>
    </div>
  </div>
</template>

<script>
export default {
name: "PinkContacts"
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.info {
  width: 370px;
  background-color: #fe4c8d;
  height: 420px;
  margin-right: 20px;
  @media only screen and (max-width: 1200px) {
    margin-bottom: 20px;
    margin-right: 0;
  }
  @media only screen and (max-width: 577.98px) {
    width: 280px;
    height: 370px;
  }
  &-inner {
    width: 350px;
    height: 400px;
    margin: 10px;
    border: 1px dashed rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 577.98px) {
      width: 260px;
      height: 350px;
    }
    &__icon {
      width: 31px;
      height: 31px;
      fill: #ffffff;
      cursor: pointer;
    }
    &__icon:hover {
      fill: #363d43;
    }
    &__add {
      margin-bottom: 0;
    }
    &__add  a {
      @include text(#ffffff, $PD, 24px, 700, uppercase);

    }
    &__text {
      @include text(#ffffff, $SR, 13px, 700, uppercase);
      margin-bottom: 30px;
    }
  }
}
</style>