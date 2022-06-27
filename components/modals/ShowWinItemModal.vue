<template>
  <modal id="showWinModal" name="showWinModal" class="modal" :adaptive="true" height="auto" width='800px'
         @before-open="beforeOpen">
    <div class="modal-body">
      <h2 class="modal-title">{{ item.text }}</h2>

      <div class="modal-row">
        Text
      </div>

      <base-button color="roulette" class="content-button" @click="close">Закрыть</base-button>
    </div>

    <div class="blocker" @click="close"/>
  </modal>
</template>

<script>
import Button from "@/components/base/Button";

export default {
  name: "showWinModal",

  data() {
    return {
      item: {},
    }
  },

  components: {
    'base-button': Button
  },

  methods: {
    close() {
      this.$modal.hide('showWinModal');
    },

    beforeOpen(e) {
      this.item = e.params;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/vars';
@import '../../assets/scss/mixins';

.modal {
  &-body {
    text-align: justify;
    background: rgba(200, 200, 200, 0.7);
    backdrop-filter: blur(11px);
    position: relative;
    margin: 0 auto;
    z-index: 11;
    width: 100%;
    padding: 49px 60px 27px 60px;
    border-radius: 20px;
    max-width: 90%;

    @include ipad {
      padding: 49px 30px 27px 30px;
    }

    @include phone {
      padding: 30px 15px 30px 15px;
    }

    @include phone {
      max-height: 100vh;
      overflow: auto;
    }
  }

  &-row {
    padding-bottom: 20px;
  }

  &-title {
    font-weight: 600;
    font-size: 26px;
    line-height: 100%;
    margin-bottom: 30px;
    color: #D40132;

    @include ipad {
      margin-bottom: 25px;
    }

    @include phone {
      font-size: 22px;
      margin-bottom: 10px;
    }
  }

  &-info {
    font-size: 11px;
    line-height: 100%;
    text-align: center;
    color: #848486;
    max-width: 395px;
    margin: 0 auto;

    a {
      color: #D40132;
      text-decoration: none;
    }
  }

  &-close {
    background-color: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    position: absolute;
    right: 45px;
    top: 45px;

    @include ipad {
      right: 30px;
    }

    @include phone {
      right: 15px;
      top: 15px;
    }
  }

  &-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    position: relative;
    width: 100%;
    height: 61px;
    border: 0;
    outline: none;
    color: #2c2c2c;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 24px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    @include phone {
      height: 50px;
      margin-bottom: 10px;
    }

    &:active {
      transition: all 0.2s ease-in-out;
      transform: translateY(1px);
    }
  }
}

.blocker {
  background: rgba(33, 34, 39, 0.3);
  backdrop-filter: blur(12px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 8;
}

span {
  color: #D40132;
}

.content-button {
  width: 100%;
}
</style>
