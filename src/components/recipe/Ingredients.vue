<template>
  <div class="ingredients">
    <h3 class="ingredients__title">Ingredients</h3>
    <ul class="ingredients-list-list">
      <li v-for="item in ingredients" class="ingredients-list__item">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
name: "Ingredients",
  props: ["ingredients"]
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.ingredients {
  &__title {
    @include title(#14141d, $PD, 24px, 700);
  }
  &-list {
    &__item {
      @include text(#14141d, $SR, 13px, 700, uppercase);
      letter-spacing: 0.65px;
      display: flex;
      align-items: center;
      position: relative;
      line-height: 35px;
      margin-left: 25px;
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