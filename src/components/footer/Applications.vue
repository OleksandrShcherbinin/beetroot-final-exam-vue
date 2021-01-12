<template>
  <div class="application">
    <h4 class="application__title">Our app available</h4>
    <button class="application__button apple">Available on the <span>App Store</span></button>
    <button class="application__button google">Get it on <span>Google Play</span></button>
  </div>
</template>

<script>
export default {
  name: "Applications"
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.application {
  display: flex;
  flex-direction: column;
  &__title {
    @include title(#ffffff, $PD, 24px, 700);
  }
  &__button {
    position: relative;
    margin-bottom: 12px;
    width: 219px;
    height: 61px;
    background-color: #52535e;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    border-color: transparent;
    padding-left: 70px;
    @include text(#edf1f3, $SR, 11px, 400, none);
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
      font-size: 16px;
    }
  }
  &__button:focus {
    outline: none;
  }
  &__button:active {
    transform: scale(0.95);
  }
}
.apple:before {
    content: " ";
    background-image: url("../../assets/icons/apple-logo.svg");
    position: absolute;
    left: 20px;
    background-size: 33px 33px;
    height: 33px;
    width: 33px;
}
.google:before {
  content: " ";
    background-image: url("../../assets/icons/google-play.svg");
    position: absolute;
    left: 20px;
    background-size: 33px 33px;
    height: 33px;
    width: 33px;
}
</style>