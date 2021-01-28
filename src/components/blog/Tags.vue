<template>
  <div class="tags">
    <h2 class="tags__title">Tags</h2>
    <ul class="tags-list">
      <li class="tags-list__item" v-for="tag in tags" :style="{width: `${calcLength(tag, tags)}px`}" >
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

      let text = tag.title.length
      let next = tags.indexOf(tag) + 1
      let previous = tags.indexOf(tag) - 1

      if (tags.indexOf(tag) % 2 === 0 && next < tags.length) {
        let full = tag.title.length + tags[next].title.length
        return Math.round(((text / full) * 100) * 2.7) - 5
      }
      else {
        let full = tag.title.length + tags[previous].title.length
        return Math.round(((text / full) * 100) * 2.7) - 5
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
    @include aside-title;
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
    &__item:hover {
      background-color: #fea100;
    }
    &__link {
      @include text(#d38a0c, $SR, 14px, 700, uppercase);
      letter-spacing: 0.35px;
    }
  }
}

</style>