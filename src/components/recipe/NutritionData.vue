<template>
  <ul class="data">
    <li class="data__item">{{nutrition[0]}}</li>
    <li class="data__item">{{nutrition[1]}}</li>
    <li class="data__item">{{nutrition[2]}}</li>
    <li class="data__item">{{nutrition[3]}}</li>
    <li class="data__item">{{nutrition[4]}}</li>
  </ul>
</template>

<script>
export default {
  name: "NutritionData",
  props: ['nutrition']
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.data {
  @include text(#14141d, $SR, 13px, 700, uppecase);
  letter-spacing: 0.65px;
  &__item {
    @include text(#14141d, $SR, 13px, 700, uppercase);
    line-height: 40px;
    letter-spacing: 0.65px;
  }
}

</style>