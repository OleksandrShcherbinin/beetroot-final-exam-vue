<template>
<div class="archive">
  <h2 class="archive__title">Archive</h2>
  <ul class="archive-list">
    <li class="archive-list__item" v-for="month in archive">
      <a class="archive-list__link">{{month.month}}</a>
      <a class="archive-list__link--num">( {{month.posts}} )</a>
    </li>
  </ul>

</div>
</template>

<script>
export default {
name: "Archive",
  props: ['archive']
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.archive {
  &__title {
    @include aside-title;
  }
  &-list {
    &__item {
      display: flex;
      justify-content: space-between;
    }
    &__link {
      @include text(#14141d, $SR, 14px, 700, uppercase);
      line-height: 38px;
      letter-spacing: 0.35px;
      cursor: pointer;
      &--num {
        @include text(#14141d, $SR, 14px, 700, uppercase);
        line-height: 38px;
        letter-spacing: 0.35px;
        cursor: pointer;
        margin-right: 10px;
      }
    }
  }
}

</style>