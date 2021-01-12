<template>
  <div class="form">
    <h4 class="form__title">News letter</h4>
     <label class="form__label" for="input">Enter your email address and subscribe daily newsletter</label>
    <form class="form-form" action="#" method="get">
      <input class="form-form__input" id="input" name="email" type="email" placeholder="Email Address">
      <button class="form-form__button" type="submit">Subscribe</button>
    </form>
    <Socials/>
  </div>
</template>

<script>
import Socials from "@/components/footer/Socials";
export default {
name: "Subscribe",
  components: {Socials}
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.form {
  display: flex;
  flex-direction: column;

  &__title {
    @include title(#ffffff, $PD, 24px, 700);
  }
  &__label {
    @include text(#adb2b7, $SR, 14px, 400, none);
  }
  &-form {
    margin-top: 16px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    &__input {
      box-sizing: border-box;
      width: 331px;
      height: 51px;
      margin-right: 9px;
      margin-bottom: 9px;
      padding-left: 50px;
      background: transparent;
      border: 2px solid #52535e;
      border-radius: 5px;
      @include text(#ffffff, $SR, 18px, 400, none);
      @media only screen and (max-width: 576px) {
        width: 270px;
      }
    }
    &__input:focus {
      outline: none;
    }
    &__input::placeholder {
      @include text(#e6e9eb, $SR, 14px, 400, none);
    }
    &__button {
      width: 149px;
      height: 51px;
      cursor: pointer;
      background-color: #fea100;
      border-radius: 5px;
      margin-bottom: 9px;
      border: none;
      @include text(#ffffff, $SR, 14px, 700, uppercase);
    }
    &__button:focus {
      outline: none;
    }
    &__button:active {
      transform: scale(0.9);
    }
  }
  &-form:before {
    content: "\002709";
    position: absolute;
    top: 17px;
    left: 15px;
    font-size: 20px;
    color: #fea100;
  }
}
</style>