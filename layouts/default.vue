<template>
  <div id="app">
    <link v-for="n in 7" rel="preload" as="image" :href="`${require(`@/assets/images/backgrounds/bg${n}.jpg`)}`">
    <link rel='preload' as='document' href='https://asu.ru/news'>
    <link rel='preload' as='document' href='https://bloodsbro.github.io/asu/news'>
    <link rel='preload' as='document' href='https://bloodsbro.github.io/asu/corps'>

    <link rel='preload' as='document' href='https://abiturient.asu.ru/obrprog/ibb/'>
    <link rel='preload' as='document' href='https://abiturient.asu.ru/obrprog/ign/'>
    <link rel='preload' as='document' href='https://abiturient.asu.ru/obrprog/ingeo/'>
    <link rel='preload' as='document' href='https://abiturient.asu.ru/obrprog/iimo/'>
    <link rel='preload' as='document' href='https://abiturient.asu.ru/obrprog/chem/'>
    <link rel='preload' as='document' href='https://abiturient.asu.ru/obrprog/ictef/'>
    <link rel='preload' as='document' href='https://abiturient.asu.ru/college/'>
    <link rel='preload' as='document' href='https://abiturient.asu.ru/obrprog/imit/'>
    <link rel='preload' as='document' href='https://abiturient.asu.ru/obrprog/miemis/'>
    <link rel='preload' as='document' href='https://abiturient.asu.ru/obrprog/yi/'>
    <link rel='preload' as='document' href='https://vk.com/sfaguofficial/'>
    <link rel='preload' as='document' href='https://abiturient.asu.ru/obrprog/rub/'>
    <link rel='preload' as='document' href='https://abiturient.asu.ru/obrprog/belocur/'>
    <link rel='preload' as='document' href='https://abiturient.asu.ru/obrprog/biisk/'>

    <div class="menu" ref="menu">
      <i v-if="$route.path === '/'" @click="toggleMenu">
        ...
      </i>
    </div>

    <transition name="fade">
      <div v-if="showMenu" class="menu-wrapper" @click.self="toggleMenu">
        <div class="menu_show">
          <div @click="$router.push('/')" class="menu_show_logo">
            <img src="@/assets/images/logo.png" height="77px" width="100px" alt="logo" />
          </div>

          <ul class="menu_show_links">
            <nuxt-link to="/news" class="menu_show_links_li">Новости</nuxt-link>
            <nuxt-link to="/roulette" class="menu_show_links_li">Рулетка институтов</nuxt-link>
            <nuxt-link to="/map" class="menu_show_links_li">Как доехать</nuxt-link>
            <nuxt-link to="/corps" class="menu_show_links_li">Корпуса</nuxt-link>
            <nuxt-link to="/directions" class="menu_show_links_li">Направления подготовки</nuxt-link>
            <nuxt-link to="/documents" class="menu_show_links_li">Документы</nuxt-link>
            <nuxt-link v-show="false" to="/timetable" class="menu_show_links_li">Расписание (для студентов)</nuxt-link>
            <nuxt-link to="/teaches" class="menu_show_links_li">Состав приемной комиссии</nuxt-link>
            <nuxt-link to="/contacts" class="menu_show_links_li">Контакты</nuxt-link>
          </ul>

          <div class="menu_show_lang">
            <div @click="toggleLangs">
              <div v-show="showLangs" class="menu_show_lang_select">
                <div v-for="lang in availableLanguages" @click="$i18n.locale = lang.code" class="menu_show_lang_select_menu">
                  <img :src="require(`@/assets/images/flags/${lang.flag}.png`)" style="border: 2px solid #707070" width="30px" height="20px" alt="" />
                  {{ lang.name }}
                </div>
              </div>

              <img :src="require(`@/assets/images/flags/${currentLang.flag}.png`)" style="border: 2px solid #707070" width="30px" alt="" />
              {{ currentLang.name }}
              <img :class="{ 'menu_show_lang_arrow': !showLangs }" src="@/assets/images/lang.png"  width="16px" height="12px" alt="" />
            </div>
          </div>
        </div>
      </div>
    </transition>

    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      showMenu: false,
      showLangs: false,
    }
  },

  watch: {
    '$route.path'(newValue) {
      if(this.showMenu && newValue !== '/') {
        this.toggleMenu();
      }
    }
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },

    toggleLangs() {
      this.showLangs = !this.showLangs;
    }
  },

  computed: {
    currentLang() {
      return this.$i18n.locales.find((el) => el.code === this.$i18n.locale);
    },

    availableLanguages() {
      return this.$i18n.locales;
    }
  },

  mounted() {
    window.localStorage.clear();
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  font-family: 'Rubik', Avenir, Helvetica, Arial, sans-serif;
  font-style: normal;
  font-size: 16px;
}
//
//nav {
//  padding: 30px;
//
//  a {
//    font-weight: bold;
//    color: #2c3e50;
//
//    &.nuxt-link-exact-active {
//      color: #42b983;
//    }
//  }
//}

#app {
  height: 100vh;
  width: 100vw;
}

body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

ol, ul {
  list-style: none;
  padding: 0;
}

.block {
  display: block;
}

.link-back {
  position: absolute;
  left: 10px;
  top: 10px;
}

</style>

<style lang="scss" scoped>
.menu {
  color: #fff;
  font-size: 64px;
  font-family: "Times New Roman", sans-serif;
  position: absolute;
  top: 10px;
  line-height: 0;
  left: 10px;
  z-index: 1;

  &-wrapper {
    backdrop-filter: blur(4px) brightness(0.2);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 998;
  }

  &_show {
    background: #fff;
    width: 80%;
    height: 100%;
    z-index: 999;
    position: fixed;
    border-radius: 0 20px 20px 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &_logo {
      height: 100%;
    }

    &_links {
      height: 100%;

      &_li {
        padding: 10px;
        font-weight: 600;
        display: block;
        text-decoration: none;
        color: #404040;
      }
    }

    &_lang {
      height: 100%;
      display: flex;
      align-items: flex-end;

      &_arrow {
        transform: rotate(180deg);
      }

      &_select {
        background: rgba(200, 200, 200, 0.19);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(15px);
        border-radius: 10px;
        text-align: left;
        padding: 20px;

        &_menu {
          padding: 10px;
        }
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
