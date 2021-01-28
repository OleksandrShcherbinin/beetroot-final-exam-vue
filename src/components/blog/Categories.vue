<template>
  <div class="categories">
    <h3 class="categories__title">Categories</h3>
    <ul class="categories-list-list">
      <li v-for="item in categories" class="categories-list__item">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Categories",
  props: ['categories'],
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.categories {
  &__title {
    @include title(#14141d, $PD, 26px, 700);
    margin: 0 0 10px 0;
  }
  &-list {
    &__item {
      @include text(#14141d, $SR, 13px, 700, uppercase);
      display: flex;
      align-items: center;
      position: relative;
      line-height: 38px;
      margin-left: 35px;
      letter-spacing: 0.35px;
    }
    &__item:before {
      content: url("../../assets/icons/check-mark.svg");
      position: absolute;
      top: 5px;
      left: -35px;
      width: 27px;
      height: 27px;
    }
  }
}
</style>