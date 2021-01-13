<template>
  <div class="reservation-page">
    <SpecialReservations/>
    <OpeningHours/>
  </div>
</template>

<script>
import OpeningHours from "@/components/home/menu/OpeningHours";
import SpecialReservations from "@/components/reservations/SpecialReservations";
export default {
  name: 'Reservation',
  components: {
    OpeningHours,
    SpecialReservations
  },
  props: ["srcset"],
  data() {
    return {
      images: [
        {id: 1, file: "/waffels.png"},
        {id: 2, file: "/waffels.png"},
        {id: 3, file: "/waffels.png"},
        {id:4, alt: "waffels"}],
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

.reservation-page {
  max-width: 1970px;
  margin: 0 auto;
  padding-top: 87px;
}

</style>