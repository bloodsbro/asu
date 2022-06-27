<template>
  <div class="info">
    <div class="info-wrapper">
      <div class="info-grid">
        <div v-for="(item, idx) in wheelPrizes" :key="idx" class="info-item">
          <div class="info-item_image">
            <img :src="`/assets/images/wheel/${item.logo}.png`" alt="" />
          </div>
          <div class="info-item_text">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/vars';
@import '../../assets/scss/mixins';

.info {
  overflow: hidden;

  &-grid {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
    justify-content: center;
  }

  &-item {
    background: rgba(146, 146, 146, 0.05);
    border-radius: 12px;
    display: flex;
    aspect-ratio: 400 / 150;
    height: auto;
    width: 402px;
    margin: 0 15px 30px;

    &_image {
      padding: 15px 20px;
      @include size(auto, 100%);
      aspect-ratio: 1 / 1;

      img {
        @include size(100%);
        object-fit: contain;
      }
    }

    &_text {
      background: rgba(146, 146, 146, 0.05);
      border-radius: 12px;
      padding: 0 8%;
      display: flex;
      align-items: center;
      width: 100%;
    }
  }
}
</style>
