<template>
  <div class="speciality">
    <picture class="speciality__img">
      <source media="(min-width:992px)" srcset="../../assets/red-pepper.webp" type="image/webp">
      <source media="(min-width:992px)" srcset="../../assets/red-pepper.jpg" type="image/jpeg">
      <source media="(max-width:991.98px)" srcset="../../assets/red-pepper-small.webp" type="image/webp">
      <source media="(max-width:991.98px)" srcset="../../assets/red-pepper-small.jpg" type="image/jpeg">
      <img src="../../assets/red-pepper.jpg" alt="bread">
    </picture>
    <div class="speciality-info">
      <h3 class="speciality-info__title">Speciality</h3>
      <div class="speciality-info-item" v-for="item in speciality">
        <h4 class="speciality-info-item__title">{{item.title}}</h4>
        <p class="speciality-info-item__text">{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "MenuSpeciality",
  data() {
    return {
      speciality: [
        {
          title: "EXCELLENT SERVICE",
          text: "Survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
        },
        {
          title: "FREE Home DELIVERY",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
          title: "Cool atmosphere",
          text: "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.speciality {
  max-width: 1970px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: #ecf1f4;
  @media only screen and  (max-width: 992px) {
    flex-direction: column;
  }
  &__img {
    display: flex;
  }
  &__img * {
    object-fit: cover;
    width: 100%;
    min-height: 200px;
    height: auto;
  }
  &-info {
    background-color: #ecf1f4;
    height: inherit;
    padding-left: 70px;
    @media only screen and  (max-width: 992px) {
      padding-left: 20px;
    }
    &__title {
      @include title(#14141d, $PD, 35px, 700);
      line-height: 22px;
    }
    &-item {
      &__title {
        @include text(#14141d, $SR, 15px, 700, uppercase);
      }
      &__text {
        width: 70%;
        @include title(#5c6369, $SR, 14px, 400);
        line-height: 26px;
      }
    }
  }
}

</style>