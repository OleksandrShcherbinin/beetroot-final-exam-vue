<template>
  <div class="contact-back">
    <div class="contact-back-modal">
      <ContactForm/>
      <ContactInfo/>
    </div>

  </div>
</template>

<script>
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
export default {
name: "ContactBack",
  components: {
    ContactForm,
    ContactInfo
  }
}
</script>

<style scoped lang="scss">
.contact-back {
  max-width: 1970px;
  width: 100%;
  min-height: 510px;
  position: relative;
  &-modal {
    position: relative;
    margin: 0 auto;
    max-width: 1170px;
    width: 100%;
    top: -200px;
    min-height: 595px;
    box-shadow: 0 46px 57px rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>