<template>
  <div class="contact-page">
    <AfterHeader v-bind:header="header"/>
    <GoogleMap/>
    <ContactBack/>
  </div>
</template>

<script>
import AfterHeader from "@/components/header/AfterHeader";
import GoogleMap from "@/components/contact/GoogleMap";
import ContactBack from "@/components/contact/ContactBack";
export default {
name: "Contact",
  components: {
    AfterHeader,
    GoogleMap,
    ContactBack
  },
  data() {
    return {
      header: ["Contact", "/contact-back.webp", "/contact-back.jpg",
        "/contact-back-small.webp", "/recipe-back-small.jpg", "contact salads"],
    }
  }
}
</script>

<style scoped lang="scss">
.contact-page {
  max-width: 1970px;
  margin: 0 auto;
  padding-top: 87px;
}
</style>