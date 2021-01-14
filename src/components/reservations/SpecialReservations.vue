<template>
  <div class="book-special">
    <h2 class="book-special__title">Special Reservations</h2>
    <div class="book-special-box">
      <ReservationBox :image_list="image_list.image1"/>
      <PinkContacts/>
      <ReservationBox :image_list="image_list.image2"/>
    </div>
  </div>
</template>

<script>
import ReservationBox from "@/components/reservations/ReservationBox";
import PinkContacts from "@/components/reservations/PinkContacts";
export default {
name: "SpecialReservations",
  components: {
  ReservationBox,
  PinkContacts
  },
  data() {
    return {
      image_list: {
          image1: ["/reserv-img1.webp", "/reserv-img1.jpg", "/reserv-img1-small.webp",
              "/reserv-img1-small.jpg", "reserve 1", "Private Dinning",
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
            "when an unknown printer took a"],
          image2: ["/reserv-img2.webp", "/reserv-img2.jpg", "/reserv-img2-small.webp",
              "/reserv-img2-small.jpg", "reserve 2", "Couple Dinning",
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
            "when an unknown printer took a"]}

    }
  },
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.book-special {
  max-width: 1970px;
  min-height: 683px;
  background: url("../../assets/gray_background.png") center / cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    @include title(#14141d, $PD, 35px, 700);
  }
  &-box {
    max-width: 1170px;
    min-height: 420px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 1200px) {
      flex-direction: column;
    }
  }
}
</style>