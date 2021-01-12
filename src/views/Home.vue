<template>
  <div class="home">
    <Slider/>
    <BottomHeader/>
    <About/>
    <BackGround/>
    <MenuBig/>
    <ReviewSlider/>
    <ReservationSection/>
  </div>
</template>

<script>
import Slider from "@/components/home/head_slider/Slider";
import BottomHeader from "@/components/header/BottomHeader";
import About from "@/components/home/about_section/About";
import BackGround from "@/components/home/special/BackGround";
import MenuBig from "@/components/home/menu/MenuBig";
import ReservationSection from "@/components/home/reserve/ReservationSection";
import ReviewSlider from "@/components/home/review/ReviewSlider";
export default {
  name: 'Home',
  components: {
    Slider,
    BottomHeader,
    About,
    BackGround,
    MenuBig,
    ReviewSlider,
    ReservationSection
  }
}
</script>
<style lang="scss">

.home {
  max-width: 1970px;
  margin: 0 auto;
  padding-top: 87px;
}

</style>
