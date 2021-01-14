<template>
  <form class="form" action="#" method="get">
    <div class="form-wrapper">
      <label class="form-wrapper__label" for="name">
        <input id="name" class="form-wrapper__input" type="text" name="name" placeholder="Name*" required>
      </label>
      <label class="form-wrapper__label" for="date">
        <input id="date" class="form-wrapper__input" type="date" name="date" placeholder="Date*" required>
      </label>
      <label class="form-wrapper__label" for="time">
        <input id="time" class="form-wrapper__input" type="time" name="time" placeholder="Time*" required>
      </label>
      <label class="form-wrapper__label" for="email">
        <input id="email" class="form-wrapper__input" type="email" name="email" placeholder="Email Address*" required>
      </label>
      <label class="form-wrapper__label" for="guests">
        <input id="guests" class="form-wrapper__input" type="number" name="guests" placeholder="Guests*" required>
      </label>
      <label class="form-wrapper__label" for="tel">
        <input id="tel" class="form-wrapper__input" type="tel" name="tel" placeholder="Phone Number*" required>
      </label>
      <label class="form-wrapper__label" for="text">
        <textarea id="text" class="form-wrapper__area" name="text" rows="4" cols="125" placeholder="Special Requirements*"/>
      </label>
    </div>
      <button class="form__button" type="submit">Make reservation</button>
  </form>
</template>

<script>
export default {
  name: "BookTable"
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.form {
  max-width: 1170px;
  padding: 0 30px 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
  &-wrapper {
    padding: 30px 0 0 0;
    max-width: 1170px;
    display: flex;
    flex-wrap: wrap;
    &__input {
      box-sizing: border-box;
      width: 370px;
      height: 60px;
      background: transparent;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 2px solid #e1e1e1;
      position: relative;
      margin-right: 20px;
      @media only screen and (max-width: 578px) {
        width: 300px;
      }
    }
    &__area {
      max-width: 1170px;
      width: 100%;
      height: 150px;
      border: none;
      margin-top: 30px;
      resize: none;
      border-bottom: 1px solid #a3b0ba;
    }
    &__label {
      position: relative;
    }
    &__label:first-child:after {
      content: url("../../assets/icons/walk.svg");
      @include label;
    }
    &__label:nth-child(4):after {
      content: url("../../assets/icons/envelope.svg");
      @include label;
    }
    &__label:nth-child(5):after {
      content: url("../../assets/icons/heads.svg");
      @include label;
    }
    &__label:nth-child(6):after {
      content: url("../../assets/icons/smartphone.svg");
      @include label;
    }
    &__area:after {
      content: url("../../assets/icons/smartphone.svg");
      @include label;
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
  }
  &__button {
    width: 199px;
    height: 51px;
    background-color: #fea100;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    margin: 40px auto 100px auto;
    @include text(#ffffff, $SR, 14px, 700, uppercase);
    letter-spacing: 0.35px;
  }
  &__button:active {
    transform: scale(0.9);
  }
  &__button:focus {
    outline: none;
  }
}
input[type="date"]:before {
  color:  #363d43;
  content: attr(placeholder) !important;
  margin-right: 0.5em;
}
input[type="date"]:focus:before {
  content: '' !important;
}
input[type="time"]:before {
  color:  #363d43;
  content: attr(placeholder) !important;
  margin-right: 0.5em;
}
#text {
  color:  #363d43;
  content: attr(placeholder) !important;
  margin-right: 0.5em;
}
input[type="time"]:focus:before {
  content: '' !important;
}
</style>