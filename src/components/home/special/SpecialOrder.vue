<template>
  <div class="order">
    <h5 class="order__delivery">Home <span>Delivery</span></h5>
    <h3 class="order__phone"><a href="tel:1-008 005 006">1-008 005 006</a></h3>
    <h3 class="order__price">$89.00</h3>
  </div>
</template>

<script>
export default {
name: "SpecialOrder"
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.order {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 8%;
  &__delivery {
    @include text(#14141d, $SR, 13px, 700, uppercase);
    width: 58px;
    height: 28px;
    line-height: 17px;
  }
  &__delivery span {
    @include text(#fe4c8d, $SR, 13px, 700, uppercase);
  }
  &__phone {
    position: relative;
  }
  &__phone  a {
    @include text(#14141d, $PD, 26px, 700, uppecase);
  }
  &__phone:before {
    content: "";
    position: absolute;
    left: -25px;
    width: 1px;
    height: 37px;
    background-color: #d7dee3;
  }
  &__price {
    @include text(#fea100, $PD, 30px, 700, uppecase);
  }
  &__price:first-letter {
    font-size: 16px;
    vertical-align: top;
  }
}
.order:before {
  content: "";
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #e1e1e1;
}

</style>