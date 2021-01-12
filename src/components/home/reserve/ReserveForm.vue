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
    </div>
    <div class="form-button">
      <button class="form-button__button" type="submit">Make reservation</button>
      <h3 class="form-button__text">You can also call <span>for a reservation</span></h3>
      <h3 class="form-button__phone"><a href="tel:1-008 005 006">1-008 005 006</a></h3>
    </div>
  </form>
</template>

<script>
export default {
name: "ReserveForm"
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.form {
  padding: 0 30px 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &-wrapper {
    padding: 30px 0 0 0;
    display: flex;
    flex-wrap: wrap;
    &__input {
      box-sizing: border-box;
      width: 250px;
      height: 60px;
      background: transparent;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 2px solid #e1e1e1;
      position: relative;
      margin-right: 20px;
    }
    &__label {
      position: relative;
    }
    &__label:first-child:after {
      content: url("../../../assets/icons/walk.svg");
      @include label;
    }
    &__label:nth-child(4):after {
      content: url("../../../assets/icons/envelope.svg");
      @include label;
    }
    &__label:nth-child(5):after {
      content: url("../../../assets/icons/heads.svg");
      @include label;
    }
    &__label:last-child:after {
      content: url("../../../assets/icons/smartphone.svg");
      @include label;
    }
    &__input::placeholder {
      color: #363d43;
    }
    &__input:focus {
      outline: none;
    }
  }
  &-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    &__button {
      width: 199px;
      height: 51px;
      background-color: #fea100;
      border-radius: 5px;
      cursor: pointer;
      border: none;
      @include text(#ffffff, $SR, 14px, 700, uppercase);
      letter-spacing: 0.35px;
    }
    &__button:active {
      transform: scale(0.9);
    }
    &__button:focus {
      outline: none;
    }
    &__text {
      width: 128px;
      @include text(#14141d, $SR, 13px, 700, uppercase);
      line-height: 17px;
      span {
         @include text(#fe4c8d, $SR, 13px, 700, uppercase);
      }
    }
    &__phone a {
      @include text(#14141d, $PD, 24px, 700, uppercase);
    }
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
input[type="time"]:focus:before {
  content: '' !important;
}
</style>