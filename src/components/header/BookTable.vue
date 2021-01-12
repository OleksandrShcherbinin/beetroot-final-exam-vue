<template>
  <div class="book" v-on:click="ringBell">
    <div class="book-inner">
      <svg class="book-inner__bell"><use xlink:href="../../assets/icons/reception-bell.svg#bell"></use></svg>
      <h2 class="book-inner__title">Book your table</h2>
    </div>
  </div>
</template>

<script>
export default {
name: "BookTable",
  methods: {
    ringBell() {
      let ring = new Audio(require('@/assets/sounds/service-bell_daniel_simion.mp3'));
      ring.play()
    }
  },
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
.book {
  box-sizing: border-box;
  width: 199px;
  height: 47px;
  background-color: #fea100;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  &-inner {
    width: 193px;
    height: 41px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    background-color: #fea100;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &__bell {
      width: 23px;
      height: 23px;
    }
    &__title {
      color: #ffffff;
      font-family: $SR;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.35px;
    }
  }
}
.book:active {
  .book-inner__bell {
    animation: ring 0.3s;
  }
}
@keyframes ring {
  0%   {transform: rotate(15deg);}
  15%  {transform: rotate(-15deg);}
  30%  {transform: rotate(15deg);}
  45%  {transform: rotate(-15deg);}
  60%  {transform: rotate(15deg);}
  75%  {transform: rotate(-15deg);}
  90%  {transform: rotate(15deg);}
  100% {transform: rotate(-15deg);}
}
</style>