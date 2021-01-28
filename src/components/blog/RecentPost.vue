<template>
  <div class="post">
    <h2 class="posts__title">Recent Post</h2>
    <splide :options="options" class="posts">
      <splide-slide class="posts-post" v-for="section in posts" :key="posts.indexOf(section)">
        <div class="posts-post-section">
          <img :src="getImgUrl(section[0].img)" :alt="section[0].title">
          <div class="posts-post-section-info">
            <p class="posts-post-section-info__date">{{section[0].date}}</p>
            <h6 class="posts-post-section-info__title">{{section[0].title}}</h6>
          </div>
        </div>
        <div class="posts-post-section">
        <img :src="getImgUrl(section[1].img)" :alt="section[1].title">
          <div class="posts-post-section-info">
            <p class="posts-post-section-info__date">{{section[1].date}}</p>
            <h6 class="posts-post-section-info__title">{{section[1].title}}</h6>
          </div>
        </div>
        <div class="posts-post-section">
          <img :src="getImgUrl(section[2].img)" :alt="section[2].title">
          <div class="posts-post-section-info">
            <p class="posts-post-section-info__date">{{section[2].date}}</p>
            <h6 class="posts-post-section-info__title">{{section[2].title}}</h6>
          </div>
         </div>
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
name: "RecentPost",
  components: {
    Splide,
    SplideSlide
  },
  props: ['posts'],
  data() {
    return {
      options: {
        type: "loop",
        width: "100%",
        perPage: 1,
        gap: '1rem',
        autoplay: true,
        interval: 2000,
        speed: 1000,
        arrows: false,
        pagination: false,
        classes: {
          pagination: 'splide__pagination my-pagination'
        }
      },
    }
  },
  methods: {
    getImgUrl(img) {
      return require('@/assets' + img)
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.posts {
  &__title {
    @include aside-title;
  }
  &-post {
    &-section {
      height: 70px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
      &-info {
        width: 65%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        &__date {
          @include text(#5c6369, $SR, 13px, 700, uppercase);
          margin: 0;
          letter-spacing: 0.65px;
        }
        &__title {
          @include title(#14141d, $PD, 18px, 700);
          margin: 0;
          line-height: 22px;
        }
      }
    }
  }
}
</style>