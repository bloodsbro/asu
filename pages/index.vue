<template>
  <div class="home" ref="home">
    <img class="arrow" src="@/assets/images/arrow.png" alt="" @click="nextStep" />
    <img class="character" :src="require(`@/assets/images/characters/${step}.png`)" alt="" />

    <div class="message" v-html="$t(`welcome.${text + 1}`)"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {

  },

  data() {
    return {
      step: 1,
      text: 0,
    }
  },

  methods: {
    nextStep() {
      this.step ++;
      if(this.step > 7) {
        this.step = 1;
      }

      this.$refs.home.style.backgroundImage = `url(${require(`../assets/images/backgrounds/bg${this.step}.jpg`)})`;
      this.text = this.step - 1;

      if(this.step === 5) {
        document.querySelector('.message').style.width = '202px';
      } else if(this.step === 4) {
        document.querySelector('.message').style.width = '240px';
      } else if(this.step === 1) {
        document.querySelector('.message').style.width = '236px';
      } else if(this.step === 6) {
        document.querySelector('.message').style.width = '278px';
      } else if(this.step === 7) {
        document.querySelector('.message').style.width = '252px';
      } else {
        document.querySelector('.message').style.width = '255px';
      }
    }
  },

  mounted() {
    this.text = 0;
    document.querySelector('.message').style.width = '236px';
  }
}
</script>

<style scoped lang="scss">
.arrow {
  width: 64px;
  height: 64px;
  position: absolute;
  bottom: 24px;
  right: 24px;
}

.home {
  height: 100%;
  width: 100%;
  background-image: url('@/assets/images/backgrounds/bg1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.character {
  position: absolute;
  width: 192px;
  height: 384px;
  bottom: 10px;
  left: 10px;
  object-fit: contain;
}

.message {
  width: 255px;
  position: absolute;
  border-radius: 20px;
  background: #fff;
  bottom: 280px;
  right: 10px;
  font-weight: 600;
  text-align: justify;
  padding: 10px;
  font-size: 16px;

  &::after {
    content: '';
    background-image: url('@/assets/images/icons/messageArrow.svg');
    position: absolute;
    bottom: -14px;
    width: 30px;
    height: 30px;
    left: 0;
    transform: rotate(107deg);
  }
}
</style>
