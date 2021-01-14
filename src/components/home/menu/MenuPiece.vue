<template>
  <ul class="my-menu">
    <li class="my-menu-piece" v-for="item of item_list">
      <img v-if="item.img" class="my-menu__img" style="width: 70px; height: 70px; align-self: center; padding: 0 10px 0 10px" :src="getImgUrl(item.img)" :alt="item.alt">
      <div class="my-menu-piece-item">
        <h3 class="my-menu-piece-item__title">{{item.title}}</h3>
        <h4 class="my-menu-piece-item__description">{{item.description}}</h4>
      </div>
      <h2 class="my-menu__price">{{item.price}}</h2>
    </li>
  </ul>
</template>

<script>

export default {
name: "MenuPiece",
  props: ['item_list'],
  methods: {
    getImgUrl(img) {
      return require('@/assets' + img)
    },
  },
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.my-menu {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  @media only screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
  &-piece {
    width: 48%;
    display: flex;
    justify-content: space-between;
    position: relative;
    @media only screen and (max-width: 576px) {
      width: 100%;
    }
    &-item {
      &__title {
        @include text(#14141d, $SR, 16px, 700, uppercase);
      }
      &__description {
        @include title(#5c6369, $SR, 14px, 400);
        line-height: 26px;
      }
    }
  }
  &__price {
    @include text( #fea100, $PD, 26px, 700, uppercase);
  }
  &__price:first-letter {
    font-size: 16px;
    vertical-align: top;
  }
}
.my-menu:before {
  content: " ";
  max-width: 1970px;
  width: 100%;
  background-color: #a3b0ba;
  height: 1px;
  position: absolute;
  margin-top: -30px;
  z-index: 0;
}
.my-menu-piece:after {
  content: " ";
  width: 100%;
  background-color: #eeeeee;
  bottom: 0;
  height: 1px;
  position: absolute;

}

</style>