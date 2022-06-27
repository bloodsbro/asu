<template>
  <div class="home" ref="home">
    <img class="arrow" src="@/assets/images/arrow.png" alt="" @click="nextStep" />
    <img class="character" :src="require(`@/assets/images/characters/${step}.png`)" alt="" />

    <div class="message" v-html="text"></div>
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
      texts: [
        'Привет! Рады&nbsp;приветствовать тебя в нашем приложении. Мы с друзьями будем твоими гидами&ensp;по&ensp;Алтайскому государственному университету.',
        'АлтГУ&ensp;является&ensp;опорным вузом Алтайского края и занимает 305-ую позицию в рейтинге&ensp;лучших&numsp;вузов мира!',
        'Алтайский государственный университет был основан в&ensp;1973&ensp;году&ensp;как&ensp;классический вуз, первым ректором стал Василий Иванович Неверов.',
        'АлтГУ пережил немало изменений за прошедшие полвека, но с каждым днем он становится всё лучше и лучше. Сегодня ректором вуза является Сергей Николаевич Бочаров.',
        'В нашем университете обучаются не только студенты из разных городов России, но и из других стран! В настоящее время в вузе учатся более 1700&numsp;иностранных студентов',
        'Помимо прочих достижений, студенты и преподаватели принимают активное&numsp;участие&numsp;в научно&#8209исследовательской работе, показывая&numsp;прекрасные результаты.',
        'А еще в нашем университете самые понимающие и лояльные преподаватели, готовые всегда пойти навстречу студентам. Твое будущее начинается здесь! Вливайся!'
      ],
      text: '',
    }
  },

  methods: {
    nextStep() {
      this.step ++;
      if(this.step > 7) {
        this.step = 1;
      }

      this.$refs.home.style.backgroundImage = `url(${require(`../assets/images/backgrounds/bg${this.step}.jpg`)})`;
      this.text = this.texts[this.step - 1];

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
    this.text = this.texts[0];
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
