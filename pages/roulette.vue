<template>
  <div class="wheel">
    <img src="@/assets/images/icons/back.png" height="32px" width="24px" alt="logo" class='link-back' @click='back' />

    <div class="container">
      <div class="wheel-circle">
        <wheel-circle />
      </div>

      <div v-if="false" class="wheel-bonus">
        <wheel-bonus />
      </div>
    </div>

    <ShowWinModal />
  </div>
</template>

<script>
import WheelCircle from '@/components/wheel/wheelCircle';
import WheelBonus from '@/components/wheel/wheelBonus';
import WheelInfo from '@/components/wheel/wheelInfo';
import ShowWinModal from "@/components/modals/ShowWinItemModal";

export default {
  components: {
    ShowWinModal,
    'wheel-circle': WheelCircle,
    'wheel-bonus': WheelBonus,
    'wheel-info': WheelInfo
  },

  methods: {
    back() {
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/vars';
@import '../assets/scss/mixins';
@import '../assets/scss/reset';
@import '../assets/scss/app';

.wheel {
  color: #fff;
  display: flex;
  height: 100%;
  align-items: center;

  .container {
    max-width: 1700px;
    padding: 0;
  }

  @include phone {
    &-bonus, &-info {
      margin-top: 30px;
      padding: 0 15px;
    }
  }
}
</style>

<style lang="scss">
@import '../assets/scss/vars';
@import '../assets/scss/mixins';
@import '../assets/scss/reset';
@import '../assets/scss/app';

body {
  color: #eee;
  display: flex;
  align-items: center;
  place-content: center;
}

.vm--modal {
  background-color: unset !important;
  overflow: auto !important;
}

img {
  user-select: none;
  will-change: transform;
}
</style>

