<template>
  <section class="reserve">
    <h2 class="reserve__title">Reserve your table</h2>
    <div class="reserve-wrapper">
      <picture class="reserve-wrapper__img">
        <source media="(min-width: 567px)" srcset="../../../assets/restaurant.jpg">
        <source media="(max-width: 566.98px)" srcset="../../../assets/restaurant-small.jpg">
        <img src="../../../assets/restaurant.jpg" alt="restaurant">
      </picture>
      <ReserveForm/>
    </div>
  </section>
</template>

<script>
import ReserveForm from "@/components/home/reserve/ReserveForm";
export default {
  name: "Reservation",
  components: {ReserveForm}
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.reserve {
  max-width: 1970px;
  min-height: 596px;
  background-color: #edf1f3;
  padding-top: 97px;
  &__title {
    @include title(#14141d, $PD, 35px, 700);
    text-align: center;
    margin-top: 0;
  }
  &-wrapper {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 992px) {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>