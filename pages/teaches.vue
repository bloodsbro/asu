<template>
  <div class="teachers">
    <img src="@/assets/images/icons/back.png" height="32px" width="24px" alt="logo" class='link-back' @click='back' />

    <div class="teachers__header" />

    <div class="teachers__list">
      <div v-for="teacher in $t('teachers')" class="teachers__list-item">
        <img :src="require(`@/assets/images/teachers/${teacher.img}`)" alt="" />
        <section class="teachers__list-item__desc">
          <a class="block teachers__list-item__desc-title">{{ teacher.title }}</a>
          <a class="block teachers__list-item__desc-text">{{ teacher.job }}</a>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeachersView",

  methods: {
    back() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped lang="scss">
.teachers {
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

    &-item {
      display: flex;
      background-color: #808080;
      border: 2px solid #808080;
      margin: 20px 0;

      >img {
        max-width: 25%;
        width: 100%;
        height: auto;
        object-fit: cover;
      }

      &__desc {
        width: 100%;
        color: #fff;
        padding: 5px;
        display: block;
        font-weight: 700;
        text-align: center;
        font-size: 12px;

        &-title {
          font-weight: 700;
          font-size: 20px;
          line-height: 26px;
          /* identical to box height */
        }

        &-text {
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          padding-top: 10px;
          /* identical to box height */
        }
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
</style>
