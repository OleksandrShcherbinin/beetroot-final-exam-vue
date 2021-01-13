<template>
    <ul class="my-menu-page">
      <li class="my-menu-page-piece" v-for="item of menu">
        <div class="my-menu-page-piece-item">
          <h3 class="my-menu-page-piece-item__title">{{item.title}}</h3>
          <h4 class="my-menu-page-piece-item__description">{{item.description}}</h4>
        </div>
        <h2 class="my-menu-page__price">{{item.price}}</h2>
      </li>
    </ul>
</template>

<script>
export default {
  name: "MenuPagePiece",
  data() {
    return {
      menu: [
        {
          title: "jumbo carb thanroor",
          description: "survived not only five centuries but the leap",
          price: "$50.00"
        },
        {
          title: "Ultimate organic fruit salad",
          description: "survived not only five centuries but the leap",
          price: "$50.00"
        },
        {
          title: "Plain pancakes",
          description: "Donec eget augue at diam euismod viverra",
          price: "$68.00"
        },
        {
          title: "Plain pancakes",
          description: "Donec eget augue at diam euismod viverra",
          price: "$68.00"
        },
        {
          title: "pRawas tikka",
          description: "Phasellus a ex accumsan, sollicitudin",
          price: "$22.00"
        },
        {
          title: "Fish pakoda",
          description: "Phasellus a ex accumsan, sollicitudin",
          price: "$22.00"
        },
        {
          title: "Rawas grown curry",
          description: "Phasellus a ex accumsan, sollicitudin",
          price: "$39.00"
        },
        {
          title: "Surmai chilli",
          description: "Phasellus a ex accumsan, sollicitudin",
          price: "$39.00"
        },
          {
          title: "Prawns butter garlic",
          description: "Phasellus a ex accumsan, sollicitudin",
          price: "$39.00"
        },
          {
          title: "Sode kadai",
          description: "Phasellus a ex accumsan, sollicitudin",
          price: "$39.00"
        },
          {
          title: "Sukhat chuntey",
          description: "Phasellus a ex accumsan, sollicitudin",
          price: "$39.00"
        },
          {
          title: "Toasted jam",
          description: "Phasellus a ex accumsan, sollicitudin",
          price: "$39.00"
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.my-menu-page {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1170px;
  width: 100%;
  @media only screen and (max-width: 1200px) {
    box-sizing: border-box;
    padding: 20px;
  }
  @media only screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
  &-piece {
    width: 48%;
    display: flex;
    justify-content: space-between;
    border-bottom: 3px solid #eeeeee;
    @media only screen and (max-width: 576px) {
      width: 100%;
    }
    &-item {
      &__title {
        @include text(#14141d, $SR, 16px, 700, uppercase);
      }
      &__description {
        @include title(#5c6369, $SR, 14px, 400);
        line-height: 26px;
      }
    }
  }
  &__price {
    @include text( #fea100, $PD, 26px, 700, uppercase);
  }
  &__price:first-letter {
    font-size: 16px;
    vertical-align: top;
  }
}

</style>