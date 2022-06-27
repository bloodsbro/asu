<template>
  <div class="corps">
    <img src="@/assets/images/icons/back.png" height="32px" width="24px" alt="logo" class='link-back' @click='back' />
    <div class="corps__header" />

    <div class="corps__list">
      <div v-for="(item, idx) in texts" class="corps__list-item">
        <img :src="require(`@/assets/images/corps/${idx + 1}.jpg`)" alt="" />
        <section class="corps__list-item__desc">
          <p v-html="item"></p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CorpsView",

  data() {
    return {
      texts: [
        `<a class="block">Адрес: ул. Димитрова, 66</a>
         <a class="block">Литера: Д</a>
         <a class="block">1. Институт массовых коммуникаций,
           филологии и политологии <span>(ИГН)</span></a>
         <a class="block">2. Институт социальных наук <span>(ИГН)</span></a>
         <a class="block">3. Институт искусств и дизайна <span>(ИГН)</span></a>
        `,
        `
        <a class="block">Адрес: пр-т Ленина, 61</a>
        <a class="block">Литера: М</a>
        <a class="block">1. Институт истории и
        международных отношений</a>
        <a class="block">2. Институт географии</a>
        <a class="block">3. Институт педагогического
        образования <span>(ИГН)</span></a>
        `,
        `
        <a class="block">Адрес: пр-т Ленина пр-т, 61</a>
        <a class="block">Литера: Л</a>
        <a class="block">1. Институт математики и
        информационных технологий</a>
        <a class="block">2. Институт биологии и
        биотехнологии</a>
        <a class="block">3. Институт психологии <span>(ИГН)</span></a>
        `,
        `
        <a class="block">Адрес: пр-т Социалистический, 68</a>
        <a class="block">Литера: С</a>
        <a class="block">1. Юридический институт</a>
        <a class="block">2. МИЭМИС
        <span>(экономический факультет)</span></a>
        `,
        `
        <a class="block">Адрес: пр-т Красноармейский, 90</a>
        <a class="block">Литера: К</a>
        <a class="block">1. Институт химии и
        химико-фармацевтических
        технологий</a>
        <a class="block">2. Институт цифровых
        технологий, электроники и физики</a>
        `,
        `
        <a class="block">Адрес: пр-т Комсомольский, 100</a>
        <a class="block">Литера: Кс (Колледж при АлтГУ)</a>
        <a class="block">1. Гуманитарное отделение</a>
        <a class="block">2. Отделение природопользования,
        сервиса и туризма</a>
        <a class="block">3. Отделение экономики и
        информационных технологий</a>
        `,
        `
        <a class="block">Адрес: ул. Розы Люксембург, 75</a>
        <a class="block">Литера: филиал АлтГУ в г. Славгород</a>
        <a class="block">1. Экономика</a>
        <a class="block">2. Бухгалтерский учет, анализ и аудит</a>
        <a class="block">3. Менеджмент организации</a>
        <a class="block">4. Прикладная информатика в
        экономике</a>
        <a class="block">5. Социально-культурный
        сервис и туризм</a>
        `,
        `
        <a class="block">Адрес: ул. Социалистическая, 23/1</a>
        <a class="block">Литера: филиал АлтГУ в г. Бийск</a>
        <a class="block">1. Государственное муниципальное
        управление</a>
        <a class="block">2. Экономика</a>
        <a class="block">3. Земельно-имущественные
        отношения</a>
        <a class="block">4. Информационные системы и
        программирование</a>
        <a class="block">5. Финансы</a>
        `,
        `
        <a class="block">Адрес: ул. Академика Мясникова, 26</a>
        <a class="block">Литера: филиал АлтГУ в г. Белокуриха</a>
        <a class="block">1. Менеджмент</a>
        <a class="block">2. Гостиничное дело</a>
        <a class="block">3. Экономика и бухгалтерский учет
        <span>(по отраслям)</span></a>
        `,
        `
        <a class="block">Адрес: пр-т Ленина, 200Б</a>
        <a class="block">Литера: филиал АлтГУ в г. Рубцовск</a>
        <a class="block">1. Педагогическое образование</a>
        <a class="block">2. Прикладная информатика</a>
        <a class="block">3. Юриспруденция</a>
        <a class="block">4. Реклама и связи с
        общественностью</a>
        <a class="block">5. Экономика</a>
        <a class="block">6. Психология</a>
        <a class="block">7. Государственное муниципальное
        управление</a>
        <a class="block">8. Экономика и бухгалтерский учет</a>
        <a class="block">9. Финансы</a>
        <a class="block">10. Информационные системы и
        программирование</a>
        <a class="block">11. Правоохранительная
        деятельность</a>
        <a class="block">12. Земельно-имущественные
        отношения</a>
        `
      ]
    }
  },

  methods: {
    back() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped lang="scss">
.corps {
  &__header {
    display: flex;
    justify-content: center;

    width: 100%;
    height: 60px;
    background: url('~/assets/images/corps/background.jpg');
    background-size: cover;
    background-position: center;
  }

  &__list {
    padding: 20px 10px;
    border-radius: 20px 0 20px 20px;

    &-item {
      display: flex;
      background-color: #808080;
      border-radius: 20px;
      border: 2px solid #808080;
      margin: 20px 0;

      >img {
        max-width: 40%;
        width: 100%;
        height: auto;
        object-fit: contain;
        border-radius: 20px 0 0 20px;
      }

      &__desc {
        color: #fff;
        text-align: left;
        padding: 5px;
        display: block;
        font-size: 9px;
        font-weight: 700;
      }
    }
  }
}
</style>

<style>
span {
  color: #D40132;
  font-weight: 700;
}
</style>
