<template>
  <div class="directions">
    <img src="@/assets/images/icons/back.png" height="32px" width="24px" alt="logo" class='link-back' @click='back' />

    <div class="directions__header" />

    <div class="directions__list">
      <div v-for="(direction, idx) in $t('dirs')" class="directions__list-item">
        <div class="directions__list--wrapper">
          <img :src="require(`@/assets/images/directions/${idx}.png`)" alt="" />
          <section class="directions__list--wrapper__desc">
            <a :href="links[idx]" class="block directions__list--wrapper__desc-title">{{ direction }}</a>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DirectionsView",

  data() {
    return {
      links: [
        'https://abiturient.asu.ru/obrprog/ibb/',
        'https://abiturient.asu.ru/obrprog/ingeo/',
        'https://abiturient.asu.ru/obrprog/iimo/',
        'https://abiturient.asu.ru/obrprog/imit/',
        'https://abiturient.asu.ru/obrprog/ign/',
        'https://abiturient.asu.ru/obrprog/ictef/',
        'https://abiturient.asu.ru/obrprog/miemis/',
        'https://abiturient.asu.ru/obrprog/yi/',
        'https://abiturient.asu.ru/obrprog/chem/',
        'https://abiturient.asu.ru/obrprog/rub',
        'https://abiturient.asu.ru/obrprog/belocur/',
        'https://abiturient.asu.ru/obrprog/biisk/',
        'https://vk.com/sfaguofficial',
        'https://abiturient.asu.ru/college/'
      ]
    }
  },

  methods: {
    back() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped lang="scss">
.directions {
  &__header {
    display: flex;
    justify-content: center;

    width: 100%;
    height: 60px;
    background: url('~/assets/images/teachers/background.jpg');
    background-size: cover;
    background-position: top;
  }

  &__list {
    padding: 20px 10px;

    &--wrapper {
      margin: 20px;
      display: flex;

      >img {
        max-width: 25%;
        width: 100%;
        height: auto;
        object-fit: contain;
      }

      &__desc {
        text-align: center;
        align-self: center;
        width: 100%;
        padding: 5px;
        display: block;
        font-weight: 700;
        font-size: 12px;

        &-title {
          font-weight: 700;
          font-size: 16px;
          line-height: 20px;
          /* identical to box height */
        }
      }
    }

    &-item {
      display: flex;
      margin: 20px 0;
      border-radius: 12px;

      &:nth-child(1) {
        border: 2px solid #97BD00;
        color: #97BD00;
      }

      &:nth-child(2) {
        border: 2px solid #008AD5;
        color: #008AD5;
      }

      &:nth-child(3) {
        border: 2px solid #FF8E00;
        color: #FF8E00;
      }

      &:nth-child(4) {
        border: 2px solid #FF8E00;
        color: #FF8E00;
      }

      &:nth-child(5) {
        border: 2px solid #FF1552;
        color: #FF1552;
      }

      &:nth-child(6) {
        border: 2px solid #008AD5;
        color: #008AD5;
      }

      &:nth-child(7) {
        border: 2px solid #FF1552;
        color: #FF1552;
      }

      &:nth-child(8) {
        border: 2px solid #FF8E00;
        color: #FF8E00;
      }

      &:nth-child(9) {
        border: 2px solid #97BD00;
        color: #97BD00;
      }

      &:nth-child(10) {
        border: 2px solid #008AD5;
        color: #008AD5;
      }

      &:nth-child(11) {
        border: 2px solid #97BD00;
        color: #97BD00;
      }

      &:nth-child(12) {
        border: 2px solid #FF1552;
        color: #FF1552;
      }

      &:nth-child(13) {
        border: 2px solid #FF8E00;
        color: #FF8E00;
      }

      &:nth-child(14) {
        border: 2px solid #008AD5;
        color: #008AD5;
      }
    }
  }
}
</style>

<style>
span {
  color: #D40132;
  font-weight: 700;
}

a, a:focus, a:visited {
  text-decoration: none;
  color: unset;
}
</style>
