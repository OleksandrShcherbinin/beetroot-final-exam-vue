<template>
  <splide :options="options">
		<splide-slide v-for="slide of slider_list" v-bind:key="slide.id">
			<div v-bind:class="slide.class" class="slider-image">
        <h2 class="slider-image__title">{{slide.title}}</h2>
        <h3 class="slider-image__title--small">{{slide.text}}<span class="slider-image__title--yellow">{{slide.span}}</span></h3>
      </div>
		</splide-slide>
  </splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  name: "Slider",
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        type: "loop",
        width: "100%",
        perPage: 1,
        gap: '1rem',
        autoplay: true,
        interval: 1000,
        speed: 500,
        arrows: false,
        breakpoints: {
          992: {
            perPage: 1,
          },
        }
      },
      slider_list: [
        {id: 1, class: 'image1', title: 'Taste your fav dish', text: 'from ', span: 'luxury restaurant.'},
        {id: 2, class: 'image2', title: 'Try something new', text: 'at ', span: 'our restaurant.'},
        {id: 3, class: 'image3', title: 'Come with friends', text: 'to ', span: 'our place.'}
      ]
    };
  },
}
</script>

<style lang="scss">
@import "../../../scss/variables";
@import '~@splidejs/splide/dist/css/themes/splide-default.min.css';

.slider-image {
  max-height: 570px;
  height: calc(100vw * 0.35);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  &__title {
    margin: 0 0 0 20%;
    height: 55px;
    font-family: $PD;
    font-size: 56px;
    font-weight: 700;
    @media only screen and (max-width: 768px) {
      font-size: 40px;
    }
    @media only screen and (max-width: 576px) {
      font-size: 30px;
    }
    &--small {
      margin: 0 0 0 20%;
      font-size: 40px;
      font-weight: 700;
      @media only screen and (max-width: 768px) {
      font-size: 24px;
      }
      @media only screen and (max-width: 576px) {
      font-size: 18px;
      }
    }
    &--yellow {
      color: #fea100;
    }
  }
}
.image1 {
  background: center / cover url("../../../assets/slider/burger.webp");
}
.image2 {
  background: center / cover url("../../../assets/slider/sandwitch.webp");
}
.image3 {
  background: center / cover url("../../../assets/slider/steak.webp");
}
.splide__pagination {
    position: absolute;
    z-index: 1;
    bottom: .5em;
    top: 0;
    left: 2%;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 20px;
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