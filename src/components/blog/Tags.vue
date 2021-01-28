<template>
  <div class="tags">
    <h2 class="tags__title">Tags</h2>
    <ul class="tags-list">
      <li class="tags-list__item" v-for="tag in tags" :style="{width: `${calcLength(tag, tags)}%`}" >
        <a href="javascript: void(0);" class="tags-list__link">{{tag.title}}</a>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
name: "Tags",
  props: ['tags'],
  methods: {
    calcLength(tag, tags) {
      let next = tags.indexOf(tag) + 1
      if (next < tags.length) {
        let text = tag.title.length
        //TODO try better algorithm to calculate proportions for buttons
        let full = tag.title.length + tags[next].title.length
        return (text / full) * 100
      }
    }
  },
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.tags {
  &__title {
    @include title(#14141d, $PD, 26px, 700);
  }
  &-list {
    display: flex;
    flex-wrap: wrap;
    &__item {
      background-color: #ffeac5;
      margin: 0 10px 10px 0;
      height: 46px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__link {
      @include text(#d38a0c, $SR, 14px, 700, uppercase);
      letter-spacing: 0.35px;
    }
  }
}

</style>