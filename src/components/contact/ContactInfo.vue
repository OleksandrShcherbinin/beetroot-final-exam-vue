<template>
  <div class="contact-info">
    <h3 class="contact-info__title">Our Address</h3>
    <div class="contact-info-block">
      <h5 class="contact-info-block__title">Address</h5>
      <p class="contact-info-block__text">Luxury Restaurant California Second Street 2nd floor</p>
    </div>
    <div class="contact-info-block">
      <h5 class="contact-info-block__title">Phone</h5>
      <p class="contact-info-block__text"><a href="tel:+91 8559 5585 6559">+91 8559 5585 6559</a></p>
    </div>
    <div class="contact-info-block">
      <h5 class="contact-info-block__title">Email</h5>
      <p class="contact-info-block__text"><a href="mailto:info@luxuryrestaurent.com">info@luxuryrestaurent.com</a></p>
    </div>
    <div class="contact-info-block">
      <h5 class="contact-info-block__title">Follow us</h5>
      <Socials/>
    </div>

  </div>

</template>

<script>
import Socials from "@/components/footer/Socials";
export default {
  name: "ContactInfo",
  components: {
    Socials
  }
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.contact-info {
  box-sizing: border-box;
  flex: 50%;
  min-width: 280px;
  min-height: 510px;
  background-color: #fe4c8d;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__title {
    @include title(#ffffff, $PD, 35px, 700);
  }
  &-block {
    &__title {
      @include text(#ffffff, $SR, 14px, 700, uppercase);
      margin-bottom: 0;
    }
    &__text, &__text a {
      @include title(#ffffff, $PD, 25px, 700);
      margin-top: 0;
      word-break: break-word;
    }
  }
}
</style>