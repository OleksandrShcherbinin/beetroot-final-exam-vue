<template xmlns="http://www.w3.org/1999/html">
  <div class="contact">
    <h3 class="contact__title">Get in touch</h3>
    <form action="#/contact" class="contact-form" method="get">
      <label class="contact-form__label" for="name">
        <input id="name" class="contact-form__input" type="text" name="name" placeholder="Name*" required>
      </label>
      <label class="contact-form__label" for="email">
        <input id="email" class="contact-form__input" type="email" name="email" placeholder="Email Address*" required>
      </label>
      <label class="contact-form__label" for="text">
        <textarea id="text" class="contact-form__area" name="text" rows="4" cols="125" placeholder="Message*"/>
      </label>
      <button class="contact-form__button" type="submit">Make reservation</button>
    </form>
  </div>

</template>

<script>
export default {
  name: "ContactForm"
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.contact {
  flex: 50%;
  box-sizing: border-box;
  min-height: 595px;
  padding: 5%;
  &__title {
    @include title(#14141d, $PD, 35px, 700);
  }
  &-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__input {
      box-sizing: border-box;
      width: 100%;
      height: 50px;
      background: transparent;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 2px solid #e1e1e1;
      position: relative;
      padding-left: 50px;
      @media only screen and (max-width: 578px) {
        width: 250px;
      }
    }
    &__area {
      box-sizing: border-box;
      width: 100%;
      height: 150px;
      border: none;
      margin-top: 30px;
      resize: none;
      border-bottom: 2px solid #e1e1e1;
      padding-left: 50px;
    }
    &__label {
      position: relative;
    }
    &__label:first-child:after {
      content: url("../../assets/icons/walk.svg");
      @include label-left;
    }
    &__label:nth-child(2):after {
      content: url("../../assets/icons/envelope.svg");
      @include label-left;
      width: 21px;
      height: 21px;
    }
    &__label:nth-child(3):after {
      content: url("../../assets/icons/conversation.svg");
      position: absolute;
      top: 20px;
      left: 0;
      width: 23px;
      height: 23px;
    }
    &__input::placeholder {
      color: #363d43;
    }
    &__area::placeholder {
      color: #363d43;
    }
    &__input:focus, &__area:focus {
      outline: none;
    }
    &__button {
      width: 199px;
      height: 51px;
      background-color: #fea100;
      border-radius: 5px;
      cursor: pointer;
      border: none;
      margin: 40px auto 0 0;
      @include text(#ffffff, $SR, 14px, 700, uppercase);
      letter-spacing: 0.35px;
      align-self: flex-start;
    }
    &__button:active {
      transform: scale(0.9);
    }
    &__button:focus {
      outline: none;
    }
  }

}
</style>