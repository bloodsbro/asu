<template>
  <div class="bonus">
    <div class="bonus-wrapper">
      <div class="bonus-top">
        <div class="bonus-text">
          <div class="bonus-title">Получи <span>супер бонус</span></div>
          <div class="bonus-info">
            Собери слово STANDOFF <br />
            и поллучи мега бонус
          </div>
        </div>

        <div class="bonus-grid">
          <wheel-case
            v-for="item in 6"
            :key="item"
            :active="item == 1"
          ></wheel-case>
        </div>
      </div>

      <div class="bonus-bottom">
        Новый бонус заменит предыдущий, если тот не был использован ранее так же
        бонусы выпавшие из колеса не суммируются
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/vars';
@import '../../assets/scss/mixins';

.bonus {
  &-wrapper {
    max-width: 1120px;
    margin: 0 auto;
  }

  &-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-bottom {
    font-size: 14px;
    color: $menu-color;
    margin-top: 48px;
    padding: 17px 0;
    background: rgba(146, 146, 146, 0.05);
    text-align: center;
    border-radius: 12px;
    padding: 10px;
  }

  &-grid {
    flex: 0 1 861px;
    display: flex;
    justify-content: space-between;
  }

  &-title {
    font-weight: 500;
    font-size: 22px;
    text-align: center;
    span {
      color: #D40132;
    }
  }

  &-info {
    margin-top: 15px;
    font-size: 12px;
    color: $menu-color;
  }

  @include ipad {
    &-top {
      display: block;
    }
    &-text {
      text-align: center;
      margin-bottom: 20px;
    }
    &-grid {
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
}
</style>
