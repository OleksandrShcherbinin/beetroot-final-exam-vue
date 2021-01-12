<template>
  <div class="header-bottom">
    <img class="header-bottom__image" src="../../assets/grill.png" alt="grill">
    <div class="header-bottom-info">
      <svg class="header-bottom-info__chat"><use xlink:href="../../assets/icons/chat.svg#chat"></use></svg>
      <p class="header-bottom-info__text">Read <span>reviews</span></p>
      <svg class="header-bottom-info__chevron"><use xlink:href="../../assets/icons/chevron.svg#chevron-right"></use></svg>
    </div>
    <div class="header-bottom-contact">
      <svg class="header-bottom-contact__call"><use xlink:href="../../assets/icons/phone-ringing.svg#call"></use></svg>
      <p class="header-bottom-contact__text">Call us now for <span>home delivery</span></p>
    </div>
    <h3 class="header-bottom__phone"><a href="tel:1-008 005 006">1-008 005 006</a></h3>
  </div>
</template>

<script>
export default {
name: "BottomHeader"
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.header-bottom {
  max-width: 1970px;
  min-height: 100px;
  background-color: #edf1f3;
  position: relative;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  &__image {
    position: absolute;
    top: -160px;
    left: 20%;
    z-index: 999;
    cursor: pointer;
    @media only screen and (max-width: 1291.98px) {
      transform: scale(0.5);
    }
     @media only screen and (max-width: 768px) {
       display: none;
     }
  }
  &__image:hover {
    transform: scale(0.9);
  }
  &-info {
    max-width: 620px;
    margin-left: 47%;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 1291.98px) {
      margin-left: auto;
    }
    @media only screen and (max-width: 768px) {
      margin-left: 0;
    }
    * {
      margin-right: 15px;
      cursor: pointer;
    }
    &__chat {
      width: 44px;
      height: 33px;
      @media only screen and (max-width: 768px) {
        width: 33px;
        height: 22px;
      }
    }
    &__chat:hover {
      transform: scale(1.5);
      fill: #fea100;
    }
    &__text {
      width: 67px;
      height: 32px;
      @include text(#14141d, $SR, 14px, 700, uppercase);
      line-height: 20px;
      @media only screen and (max-width: 768px) {
        font-size: 10px;
      }
      span {
        color: #fea100;
        font-size: 16px;
        @media only screen and (max-width: 768px) {
          font-size: 12px;
        }
      }
    }
    &__chevron {
      width: 39px;
      height: 39px;
      @media only screen and (max-width: 768px) {
        width: 29px;
        height: 29px;
      }
    }
    &__chevron:hover {
      transform: scale(1.5);
      fill: #14141d;
    }
  }
  &-contact {
    margin-left: 22px;
    position: relative;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 768px) {
      margin-left: 0;
    }
    &__text {
      width: 123px;
      height: 32px;
      @include text(#14141d, $SR, 14px, 700, uppercase);
      line-height: 20px;
      @media only screen and (max-width: 768px) {
      font-size: 10px;
      }
    span {
      color: #fea100;
      font-size: 16px;
      @media only screen and (max-width: 768px) {
          font-size: 12px;
      }
    }
  }
    &__call {
      margin: 0 18px 0 37px;
      width: 37px;
      height: 37px;
      cursor: pointer;
      @media only screen and (max-width: 768px) {
        width: 27px;
        height: 27px;
      }
    }
    &__call:hover {
      transform: scale(1.5);
      fill: #fea100;
    }
  }
  &-contact:before {
    content: "";
    border: 1px solid #dde3e7;
    position: absolute;
    height: 98px;
    top: -20px;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
  &-contact:after {
    content: "";
    position: absolute;
    right: -24px;
    width: 1px;
    height: 37px;
    background-color: #d7dee3;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
  &__phone {
    a {
      margin-left: 46px;
      color: #14141d;
      font-family: $PD;
      font-size: 32px;
      font-weight: 700;
      text-transform: uppercase;
      @media only screen and (max-width: 768px) {
        font-size: 24px;
        margin: 5px 0 5px 0;
      }
    }
  }
}
</style>