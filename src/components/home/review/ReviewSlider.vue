<template>
  <div class="review">
    <splide :options="options" :slides="review_list">
      <splide-slide v-for="slide of review_list" v-bind:key="slide.src">
        <div v-bind:class="slide.class" class="slider-text">
          <h2 class="slider-text__title">{{slide.title}}</h2>
          <h3 class="slider-text__text">{{slide.text}}</h3>
          <img class="slider-text__img" :src="getImgUrl(slide.src)" :alt="slide.author">
          <p class="slider-text__author">{{slide.author}}</p>
          <p class="slider-text__rating">{{slide.rating}}</p>
        </div>
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
  name: "ReviewSlider",
  components: {
    Splide,
    SplideSlide
  },
  data() {
    return {
      options: {
        type: "loop",
        pagination: false,
        autoplay: true,
        arrows: true,
        arrowPath: " ",
      },
      review_list: [
        {id: 1,
          title: 'Happy Clients',
          text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. ',
          src: '/reviewer.png',
          author: "Dr. Prabakaran John Mr.",
          rating: "⭐⭐⭐⭐⭐"
        },

        {id: 2,
          title: 'Happy Clients',
          text: 'Oleksandr Shcherbinin is a very good student. He did all homeworks',
          src: '/ivan.png',
          author: "Mr. Ivan Vasilenko",
          rating: "⭐⭐⭐⭐⭐"
        },
        {id: 3,
          title: 'Happy Clients',
          text: 'Our teacher Ivan Vasilenko is a very nice guy. His lessons was very interesting! Thank you very much!!!',
          src: '/me.png',
          author: "Mr. Oleksandr Shcherbinin",
          rating: "⭐⭐⭐⭐⭐"
        }
      ]
    }
  },
  methods: {
    getImgUrl(img) {
      return require('@/assets' + img)
    },
  }
}
</script>

<style lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.review {
  max-width: 1970px;
  min-height: 465px;
  width: 100%;
  background: center / cover url(../../../assets/background-pink.png);
  display: flex;
  align-items: center;
}
.splide {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1170px;
  width: 100%;
}
.slider-text {
  padding: 0 192px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  &__title {
    @include title(#ffffff, $PD, 35px, 700);
  }
  &__text {
    text-align: center;
    @include text(#ffffff, $SR, 15px, 400, none);
    line-height: 26px;
    position: relative;
  }
  &__text:before {
    content: "\201C";
    @include text(#ffffff, $PD, 60px, 700, none);
    position: absolute;
    top: -5px;
    left: -4vw;
  }
  &__text:after {
    content: "\201D";
    @include text(#ffffff, $PD, 60px, 700, none);
    position: absolute;
    bottom: -25px;
    right: -4vw;
  }
  &__author {
    @include text(#fffaf1, $SR, 16px, 700, uppercase);
  }
}
@media only screen and (max-width: 992px) {
  .slider-text {
    padding: 20px 30px;
  }
}
.splide__arrow--prev, .splide__arrow--next {
  width: 45px;
  height: 45px;
  background-color: transparent;

}
.splide__arrow--prev {
  background-image: url("../../../assets/icons/left-arrow.svg");
  background-repeat: no-repeat;
}
.splide__arrow--next {
  background-image: url("../../../assets/icons/right-arrow.svg");
  background-repeat: no-repeat;
}
</style>