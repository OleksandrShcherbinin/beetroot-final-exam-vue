<template>
  <div class="reservation-page">
    <AfterHeader v-bind:header="header"/>
    <h3 class="reservation-page-form__title">Book a Table</h3>
    <p class="reservation-page-form__text">Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book.
    </p>
    <BookTable/>
    <SpecialReservations/>
    <OpeningHours v-bind:images="images"/>
  </div>
</template>

<script>
import OpeningHours from "@/components/home/menu/OpeningHours";
import SpecialReservations from "@/components/reservations/SpecialReservations";
import BookTable from "@/components/reservations/BookTable";
import AfterHeader from "@/components/header/AfterHeader";
export default {
  name: 'Reservation',
  components: {
    AfterHeader,
    OpeningHours,
    SpecialReservations,
    BookTable,
  },
  data() {
    return {
      images: {
        img1: "/waffels.png",
        img2: "/waffels.png",
        img3: "/waffels.png",
        alt: "wafels"
      },
       header: ["Reservation", "/reservation.webp", "/reservation.jpg",
        "/reservation-small.webp", "/reservation-small.webp", "reservation"]
    }
  },
  methods: {
    getImgUrl(img) {
      return require('@/assets' + img)
    },
  },
}
</script>
<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.reservation-page {
  max-width: 1970px;
  margin: 0 auto;
  padding-top: 87px;
  &-form__title {
    display: flex;
    justify-content: center;
    margin: 90px auto 40px auto;
    @include title(#14141d, $PD, 35px, 700);
  }
  &-form__text {
    margin: 0 auto;
    text-align: center;
    @include title(#5c6369, $SR, 14px, 400);
    width: 40%;
    line-height: 26px;
    @media only screen and (max-width: 578px) {
      width: 80%;
    }
  }
}

</style>