<template>
  <div class="circle">
    <div class="circle-wrapper">
      <div class="circle-cursor"></div>
      <div ref="grid" class="circle-grid">
        <div v-for="(item, idx) in items" :key="idx" class="circle-item">
          <span>{{ item.name }}</span>
        </div>
      </div>
      <div class="circle-content">
        <template v-if="!isSpinInProgress">
          <h2 class="content-h2">
            <img src="@/assets/images/wheel/pinwheel-icon.svg" alt=""/>
            Рулетка <span>институтов</span>
          </h2>
          <div class="content-text">
            Запусти барабан, чтобы узнать подходящий тебе институт
          </div>
          <base-button color="roulette" class="content-button" @click="run()">Запустить</base-button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '../base/Button';
export default {
  data() {
    return {
      items: [
        {
          name: 'ИББ',
          url: 'https://abiturient.asu.ru/obrprog/ibb/'
        },
        {
          name: 'ИГН',
          url: 'https://abiturient.asu.ru/obrprog/ign/'
        },
        {
          name: 'ИНГЕО',
          url: 'https://abiturient.asu.ru/obrprog/ingeo/'
        },
        {
          name: 'ИИМО',
          url: 'https://abiturient.asu.ru/obrprog/iimo/',
        },
        {
          name: 'ИХХФТ',
          url: 'https://abiturient.asu.ru/obrprog/chem/',
        },
        {
          name: 'ИЦТЭФ',
          url: 'https://abiturient.asu.ru/obrprog/ictef/',
        },
        {
          name: 'Кол. АГУ',
          url: 'https://abiturient.asu.ru/college/'
        },
        {
          name: 'ИМИИТ',
          url: 'https://abiturient.asu.ru/obrprog/imit/'
        },
        {
          name: 'МИЭМИС',
          url: 'https://abiturient.asu.ru/obrprog/miemis/'
        },
        {
          name: 'ЮИ',
          url: 'https://abiturient.asu.ru/obrprog/yi/'
        },
        {
          name: 'ФСЛ',
          url: 'https://vk.com/sfaguofficial'
        },
        {
          name: 'ФРБ',
          url: 'https://abiturient.asu.ru/obrprog/rub'
        },
        {
          name: 'ФБЛ',
          url: 'https://abiturient.asu.ru/obrprog/belocur/'
        },
        {
          name: 'ФБС',
          url: 'https://abiturient.asu.ru/obrprog/biisk/'
        }
      ],
      interval: null,
      isSpinInProgress: false,
    }
  },

  components: {
    'base-button': BaseButton
  },

  created() {

  },

  methods: {
    run() {
      this.$refs.grid.style.transition = 'ease-in-out 12s transform';

      this.isSpinInProgress = true;
      const winItemIdx = this.getRandomIntInclusive(0, this.items.length - 1);
      const rotate = 360 * 4 + 25.714285714285714285714285714286 * winItemIdx + this.getRandomIntInclusive(5, 20) - 12.5;

      setTimeout(() => {
        this.showWinItem(this.items[winItemIdx]);
      }, 12100)

      this.$refs.grid.style.transform = `rotate(-${rotate}deg)`;
    },

    reset() {
      this.$refs.grid.style.transition = 'null';
      this.$refs.grid.style.transform = `rotate(15deg)`;
    },

    showWinItem(item) {
      this.isSpinInProgress = false;
      this.reset();

      window.location.href = item.url;
      // this.$modal.show('showWinModal', item);
    },

    getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/vars';
@import '../../assets/scss/mixins';

.circle {
  overflow: hidden;

  &-wrapper {
    @include size(818px);
    margin: 0 auto;
    background: url("~@/assets/images/wheel/bg.png");
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    position: relative;
    aspect-ratio: 1 / 1;

    @include ipad {
      @include size(100%, auto);
    }
  }

  &-cursor {
    background: url("~@/assets/images/wheel/select.png");
    background-size: cover;
    @include size(4.5%, 20%);
    position: absolute;
    z-index: 1;
    top: 0;
    left: 50%;
    transform: translate(0, 9%);
  }

  &-grid {
    @include size(90%);
    position: relative;
    transition: ease-in-out 12s transform;
    transform: rotate(15deg);
  }

  &-item {
    position: absolute;
    @include size(26%, 16%);
    top: 50%;
    left: 50%;
    margin-left: calc(-26% / 2);
    margin-top: calc(-16% / 2);
    display: flex;
    flex-flow: row;
    padding-top: 15px;

    &>span {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-58%, -50%);
      font-size: 12px;
      color: #fff;
    }

    &:nth-child(odd) {
      &>span {
        color: #D40132;
      }
    }

    &:nth-child(2n) {
      background: url("~@/assets/images/wheel/section.svg");
      background-size: contain;
    }

    &:nth-child(odd) {
      background: url("~@/assets/images/wheel/section2.svg");
      background-size: contain;
    }

    img {
      @include size(100%);
      object-fit: contain;
      will-change: unset;
    }
  }

  @for $i from 0 to 14 {
    &-item:nth-of-type(#{$i + 1}) {
      transform: rotate(#{$i * 25.714285714285714285714285714286deg}) translateY(-262%);
    }
  }

  &-content {
    position: absolute;
    text-align: center;
  }

  @include phone {
    &-content {
      max-width: 95vw;
    }
  }
}

.content {
  &-h1 {
    font-size: 54px;
    font-weight: 500;
    line-height: 1;
    margin-bottom: 2%;
  }

  &-h2 {
    font-weight: 500;
    font-size: 22px;
    text-align: center;

    span {
      color: #D40132;
    }

    @include phone {
      font-size: 14px;
    }
  }

  &-info {
    margin-top: 15px;
    font-size: 12px;
    color: $menu-color;
    text-align: center;
  }

  &-button {
    cursor: pointer;
    margin-top: 15px;
    min-height: 35px;
    min-width: 120px;
    font-size: 10px;

    @include phone {

    }
  }

  &-image {
    margin-top: 5%;
    max-width: 232px;
  }

  &-info {
    background: rgba(146, 146, 146, 0.05);
    border-radius: 12px;
    padding: 18px;
    color: #6a6a81;
    margin-top: 3%;
    font-size: 12px;
  }

  &-text {
    margin-top: 3%;
    color: #D40132;
    font-weight: 600;
    font-size: 12px;
  }

  &-promocode {
    max-width: 230px;
    margin: 5% auto 0;
  }

  &-actions {
    display: flex;
    justify-content: space-between;
    margin: 3% auto auto;
    width: 600px;
    max-width: 600px;
  }

  &-action {
    width: 100%;
    min-height: 64px;
    max-width: 257px;
    margin: 0 auto;
  }

  &-timer {
    margin-top: 10%;
  }

  @include phone {
    &-h1 {
      font-size: 24px;
    }
    &-image {
      max-width: 150px;
    }
    &-info {
      padding: 10px;
    }
    &-text {
      max-width: 70%;
      margin: 2% auto;
      font-size: 10px;
    }
    &-promocode {
      margin: 2% auto 0;
    }
    &-timer {
      margin-top: 3%;
    }
    &-actions {
      flex-direction: column;
      align-items: center;
      width: auto;
    }
    &-action {
      max-width: 250px;
      margin-bottom: 10px;
    }
  }
}
</style>
