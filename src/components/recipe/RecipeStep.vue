<template>
  <div class="cook">
    <div class="cook-step">
      <div class="cook-step-inner">
        <h4 class="cook-step-inner__num">{{step.num}}</h4>
        <p class="cook-step-inner__step">step</p>
      </div>
    </div>
    <p class="cook__text">{{step.text}}
    </p>
  </div>
</template>

<script>
export default {
  name: "RecipeStep",
  props: ['step']
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.cook {
  width: 70%;
  display: flex;
  align-items: center;
  height: 100%;
  @media only screen and (max-width: 992px) {
    width: 80%;
  }
  @media only screen and (max-width: 768px) {
    width: 95%;
  }
  &-step {
    width: 70px;
    height: 76px;
    background-color: #cc8306;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 576px) {
      width: 56px;
      height: 62px;
    }
    &-inner {
      width: 58px;
      height: 64px;
      border: 3px solid #fea100;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      @media only screen and (max-width: 576px) {
        width: 44px;
        height: 50px;
      }
      &__num {
        @include text(#ffffff, $SR, 30px, 700, uppercase);
        width: 31px;
        text-align: center;
        margin: 0;
      }
      &__step {
        @include text(#ffffff, $PD, 14px, 700, uppercase);
        margin: 0;
      }
    }
  }
  &__text {
    width: 75%;
    @include title(#ffffff, $SR, 14px, 400);
    margin-left: 35px;
    line-height: 26px;
    @media only screen and (max-width: 576px) {
      margin-left: 5px;
    }
  }
}

</style>