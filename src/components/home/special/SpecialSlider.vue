<template>
  <div id="slider2">
    <splide :options="options" :slides="slides" :classes="classes">
      <splide-slide v-for="slide of slides" v-bind:key="slide.src" :class="slide.class">
        <picture>
          <source :srcset="getImgUrl(slide.src)" type="image/webp">
          <source :srcset="getImgUrl(slide.src2)" type="image/jpeg">
          <img :src="getImgUrl(slide.src)" :alt="slide.name">
        </picture>
        <div class="slider-text">
          <h2 class="slider-text__title">{{slide.title}}</h2>
          <p class="slider-text__text">{{slide.text}}</p>
          <SpecialOrder/>
        </div>
      </splide-slide>
    </splide>
    <picture class="special__image" v-on:scroll="handleScroll" :style="style">
      <source :srcset="getImgUrl('/pizza-slices.webp')" type="image/webp">
      <source :srcset="getImgUrl('/pizza-slices.png')" type="image/jpeg">
      <img :src="getImgUrl('/pizza-slices.png')" alt="pizza slices">
    </picture>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import SpecialOrder from "@/components/home/special/SpecialOrder";

export default {
name: "SpecialSlider",
  components: {
    Splide,
    SplideSlide,
    SpecialOrder
  },
  data() {
    return {
      options: {
        type: "loop",
        perPage: 2,
        gap: '1rem',
        autoplay: true,
        interval: 2000,
        speed: 1000,
        arrows: false,
        pagination: false,
        breakpoints: {
          1200: {
            perPage: 1,
          },
        }
      },
      classes: {
        pagination: "splide__pagination pagination"
      },
      slides: [
        {id: 1,
          src: "/specials/special-steak.webp",
          src2: "/specials/special-steak.jpg",
          name: 'special steak',
          title: 'Special Steak',
          text: 'printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
          phone: '1-008 005 006',
          class: "special-slider"},
        {id: 2,
          src: "/specials/special-pizza.webp",
          src2: "/specials/special-pizza.jpg",
          name: 'special pizza',
          title: 'Special Pizza',
          text: 'printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
          phone: '1-008 005 006',
          class: "special-slider"},
        {id: 3,
          src: "/specials/special-eggs.webp",
          src2: "/specials/special-eggs.jpg",
          name: 'special eggs',
          title: 'Special Omelet',
          text: 'printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
          phone: '1-008 005 006',
          class: "special-slider"},
        {id: 4,
          src: "/specials/special-pasta.webp",
          src2: "/specials/special-pasta.jpg",
          name: 'special pasta',
          title: 'Special Pasta',
          text: 'printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
          phone: '1-008 005 006',
          class: "special-slider"},
        {id: 5,
          src: "/specials/special-salad.webp",
          src2: "/specials/special-salad.jpg",
          name: 'special salad',
          title: 'Special Salad',
          text: 'printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
          phone: '1-008 005 006',
          class: "special-slider"},
        {id: 6,
          src: "/specials/special-breakfast.webp",
          src2: "/specials/special-breakfast.jpg",
          name: 'special breakfast',
          title: 'Super Breakfast',
          text: 'printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
          phone: '1-008 005 006',
          class: "special-slider"}
      ],
      style: ''
    };
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    getImgUrl(img) {
      return require('@/assets' + img)
    },
    handleScroll() {
      if (window.scrollY > 1300) {
          this.style = {transform: " translateX(-100px) rotate(-360deg)", transition: "transform 2s"}
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../scss/variables";
@import "src/scss/mixins";
#slider2 {
  max-width: 1170px;
  width: 100%;
  height: 755px;
  position: relative;
  top: 150px;
  display: flex;
  justify-content: center;
}
#splide02 {
  position: absolute;
  top: 0;
  max-width: 1170px;
  z-index: 10;
  @media only screen and (max-width: 1200px) {
    max-width: 570px;
  }
}
.special-slider {
  max-width: 570px;
  position: relative;
  margin-bottom: 5px;
  background-color: white;
  border: 2px solid rgba(161, 154, 154, 0.1);
}
.special__image {
  position: absolute;
  top: 600px;
  right: -12%;
  z-index: -1;
  opacity: 0.7;
  @media only screen and (max-width: 1400px) {
    right: 0;
  }
}
.splide__pagination .pagination {
  position: absolute;
  top: 200px;
  right: 0;
}
.slider-text {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  width: 75%;
  padding: 0 0;
  justify-content: center;
  &__title {
    @include title(#14141d, $PD, 26px, 700);
  }
  &__text {
    text-align: center;
    @include text(#5c6369, $SR, 14px, 400, none);
    line-height: 26px;
  }
}

#splide02 .splide__pagination {
  position: absolute;
  z-index: 1;
  bottom: .5em;
  top: -50px;
  right: 50px;
  padding: 0;
  display: flex;

  &__page {
    border: 2px solid #fea100;
    width: 14px;
    height: 14px;
    position: relative;
  }
}
.splide__pagination__page.is-active {
  transform: scale(1);
  outline: none;
  overflow: visible;
  text-transform: none;
  outline-offset: 0;
}
.splide__pagination__page.is-active:before {
  position: absolute;
  content: "";
  width: 6px;
  height: 6px;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  background: #fea100;
  z-index: 999;
}
</style>