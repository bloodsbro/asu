<template>
  <div class="news">
    <img src="@/assets/images/icons/back.png" height="32px" width="24px" alt="logo" class='link-back' @click='back' />

    <div class="news__header" />

    <div class="news__list">
      <div v-for="(item, idx) in news" class="news__list-item">
        <img :src="item.image" alt="" />
        <section class="news__list-item__desc">
          <div class="news__list-item__desc-department">{{ item.department[0].toUpperCase() }}{{ item.department.slice(1) }}</div>
          <p v-html="item.text"></p>
        </section>

        <a :href="item.link" class="news__button">
          <button>Подробнее</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { parse } from 'node-html-parser';

export default {
  name: "NewsView",

  data() {
    return {
      news: [],
      status: 'Обновление новостей...',
      state: [],
      stateLink: '',
    }
  },

  computed: {
    getNews() {
      try {
        const cache = JSON.parse(localStorage.getItem('news')) || [];
        if(cache && this.news.length <= 0) return cache;
      } catch { }

      return this.news;
    },
  },

  methods: {
    selectState(link) {
      this.stateLink = link;
      this.state = 'Обновление новости...';

      axios.get(`https://help.invasion.su/cors/www.asu.ru/news/${link}`).then((res) => {
        if(res.data) {


          this.state.push({

          });

          localStorage.setItem(`state_${link}`, JSON.stringify(this.state));
          this.status = 'Новость успешно обновлена';
        } else {
          this.status = `Невозможно получить новость, нет подключения к интернету`;
        }
      });
    },

    back() {
      this.$router.push('/');
    }
  },

  mounted() {
    axios.get(`https://help.invasion.su/cors/www.asu.ru/news`).then((res) => {
      if(res.data) {
        const news = parse(res.data).querySelectorAll('.news-item');
        news.forEach((state) => {
          const image = `https://www.asu.ru/${state.querySelector('.news-item-image')?.attrs?.src || '.themes/.asu.www5/.src/images/noimg_bg.png'}`;
          const info = state.querySelector('.news-item-info');
          const date = info.querySelectorAll('span')[0]?.innerText;
          const department = info.querySelectorAll('span')[1]?.innerText;
          const thematic = state.querySelector('.news-item-thematic_nodes')?.querySelector('a')?.innerText;
          const linkInfo = state.querySelector('.news-item-link');
          const text = linkInfo?.innerText;
          const link = `https://www.asu.ru/news/${linkInfo?.attrs?.href}`;

          this.news.push({
            image,
            date,
            department,
            thematic,
            text,
            link
          });

          localStorage.setItem('news', JSON.stringify(this.news));
          this.status = 'Новости успешно обновлены';
        });
      } else {
        this.status = `Невозможно получить новости, нет подключения к интернету`;
      }
    });
  }
}
</script>

<style scoped lang="scss">
.news {
  &__header {
    display: flex;
    justify-content: center;

    width: 100%;
    height: 60px;
    background: url('~/assets/images/news/background.jpg');
    background-size: cover;
    background-position: center;
  }

  &__list {
    padding: 20px 10px;

    &-item {
      display: flex;
      background-color: #808080;
      border: 4px solid #808080;
      margin: 20px 0;
      flex-direction: column;

      >img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }

      &__desc {
        color: #fff;
        text-align: left;
        padding: 5px;
        display: block;
        font-size: 16px;
        font-weight: 600;

        &-department {
          position: relative;
          font-size: 16px;
          line-height: 24px;
          padding-bottom: 5px;

          &::after {
            content: '';
            background: #D40132;
            height: 4px;
            width: 40px;
            position: absolute;
            left: 0;
            bottom: 3px;
            border-radius: 12px;
          }
        }
      }
    }
  }

  &__button {
    margin: auto;
  }
}

button {
  background: radial-gradient(50% 50% at 50% 50%, #990A00 0%, #D40132 100%);
  border-radius: 7px;
  display: block;
  margin: 5px;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 16px;
  color: #FFFFFF;
  border: none !important;
}
</style>
