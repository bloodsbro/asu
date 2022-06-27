<template>
  <button :class="['button', `button-${color}`]" :disabled="disabled" @click="$emit('click')">
    <span class="button-text">
      <slot name="default"></slot>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "roulette",
    },

    disabled: {
      type: Boolean,
      default: false,
    }
  },

  computed: {

  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/vars';
@import '../../assets/scss/mixins';

.button {
  text-transform: uppercase;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  line-height: 100%;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s linear;
  background-size: cover;
  min-height: 50px;
  padding: 0 15px;
  position: relative;
  user-select: none;
  border: none;

  &-text {
    color: #eee;
  }

  @include phone {
    font-size: 12px;
  }

  &-roulette {
    background: radial-gradient(50% 50% at 50% 50%, #990A00 0%, #D40132 100%);
    color: #fff;
    font-size: 16px;
  }
}
</style>
