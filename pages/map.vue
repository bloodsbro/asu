<template>
  <div class="map">
    <img src="@/assets/images/icons/back.png" height="32px" width="24px" alt="logo" class='link-back' @click='back' />

    <div v-if="stage === 0" class="container">
      <base-button color="roulette" class="content-button" @click="stage = 1">Из аэропорта</base-button>
      <base-button color="roulette" class="content-button" @click="stage = 2">С ЖД вокзала</base-button>
      <base-button color="roulette" class="content-button" @click="stage = 3">С автовокзала</base-button>
    </div>
    <div v-else-if="stage === 1">
      <div class="map-item">
        <span>Аэропорт</span>
        <img src="@/assets/images/map/aero.jpg" alt="" />
      </div>
      <div class="map-item">
        <span>Остановка "Аэропорт"</span>
        <img src="@/assets/images/map/2.jpg" alt="" />
      </div>
      <div class="map-item">
        <span class="autobus">Автобус №144</span>
        <img src="@/assets/images/map/a55.png" alt="" />
      </div>
      <div class="map-item">
        <span>Маршрут автобуса</span>
        <img src="@/assets/images/map/map2.png" alt="" />
      </div>
      <div class="map-item">
        <span>Конечная остановка:"Площадь советов" или "ЦУМ"</span>
        <img src="@/assets/images/map/tsum.png" alt="" />
      </div>
    </div>
    <div v-else-if="stage === 2">
      <div class="map-item">
        <span>ЖД возал</span>
        <img src="@/assets/images/map/train.png" alt="" />
      </div>
      <div class="map-item">
        <span>Остановка "Площадь Победы"</span>
        <img src="@/assets/images/map/stop1.png" alt="" />
      </div>
      <div class="map-item">
        <span class="autobus">Автобус №55</span>
        <img src="@/assets/images/map/a55.png" alt="" />
      </div>
      <div class="map-item">
        <span>Маршрут автобуса</span>
        <img src="@/assets/images/map/map1.png" alt="" />
      </div>
      <div class="map-item">
        <span>Конечная остановка:"Площадь советов" или "ЦУМ"</span>
        <img src="@/assets/images/map/tsum.png" alt="" />
      </div>
    </div>
    <div v-else-if="stage === 3">
      <div class="map-item">
        <span>Автовокзал</span>
        <img src="@/assets/images/map/3.jpg" alt="" />
      </div>
      <div class="map-item">
        <span>Остановка "Площадь Победы"</span>
        <img src="@/assets/images/map/stop1.png" alt="" />
      </div>
      <div class="map-item">
        <span class="autobus">Автобус №55</span>
        <img src="@/assets/images/map/a55.png" alt="" />
      </div>
      <div class="map-item">
        <span>Маршрут автобуса</span>
        <img src="@/assets/images/map/map1.png" alt="" />
      </div>
      <div class="map-item">
        <span>Конечная остановка:"Площадь советов" или "ЦУМ"</span>
        <img src="@/assets/images/map/tsum.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/base/Button";

export default {
  name: "MapView",

  components: {
    'base-button': Button
  },

  data() {
    return {
      stage: 0,
    }
  },

  watch: {
    stage(val) {
      if(val === 0) {
        document.querySelector('.map').style.backgroundImage = `url(${require('@/assets/images/backgrounds/map.jpg')})`;
      } else {
        document.querySelector('.map').style.backgroundImage = `url(${require('@/assets/images/backgrounds/map2.jpg')})`;
      }
    }
  },

  methods: {
    back() {
      if(this.stage !== 0) {
        this.stage = 0;
      } else {
        this.$router.push('/');
      }
    }
  }
}
</script>

<style scoped lang="scss">
.map {
  background-image: url('@/assets/images/backgrounds/map.jpg');
  min-height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;

  &-item {
    padding: 20px;

    &>span {
      color: #D40132;
      font-weight: 600;
    }

    >img {
      object-fit: cover;
      width: 100%;
      border: 2px solid #484848;
      border-radius: 20px;
    }
  }
}

.container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 40px);
  place-content: center;

  &>button {
    margin: 40px;
  }
}

.autobus {
  position: relative;
  z-index: 1;
  left: -5px;
  top: 39px;
  text-transform: uppercase;
  color: #484848 !important;
  font-size: 18px;
}
</style>
