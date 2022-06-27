<template>
  <div class="contacts">
    <img src="@/assets/images/icons/back.png" height="32px" width="24px" alt="logo" class='link-back' @click='back' />

    <div class="contacts__header">
      <img class="contacts__header-logo" src="@/assets/images/contacts/logo.png" alt="" />
    </div>

    <div class="contacts__list">
      <button><img class="contacts__list-icon" width="32.5" height="22.5" src="@/assets/images/icons/vk.png" alt="" /><a target="_blank" href="https://m.vk.com/abiturientasu">Мы ВКонтакте</a></button>
      <button><img class="contacts__list-icon" width="32.5" height="22.5" src="@/assets/images/icons/telegram.png" alt="" /><a target="_blank" href="https://t.me/abiturient22asu">Мы в Telegram</a></button>
      <button><img class="contacts__list-icon" width="32.5" height="22.5" src="@/assets/images/icons/whatsapp.png" alt="" /><a target="_blank" href="https://api.whatsapp.com/send?phone=79339333799&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21+%D0%9D%D0%B0%D0%BF%D0%B8%D1%88%D0%B8%D1%82%D0%B5+%D0%BD%D0%B0%D0%BC%2C+%D0%B5%D1%81%D0%BB%D0%B8+%D0%B5%D1%81%D1%82%D1%8C+%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%8B.&app_absent=0">Мы в WhatsApp</a></button>
      <button><img class="contacts__list-icon" width="32.5" height="22.5" src="@/assets/images/icons/yandex.png" alt="" /><a target="_blank" href="https://zen.yandex.ru/id/622f05aae171d9758b9e2612">Мы в Яндекс.Дзен</a></button>
      <button><img class="contacts__list-icon" width="32.5" height="22.5" src="@/assets/images/icons/phone.png" alt="" /><a href="tel:+73852291222">+7 (3852) 291-222</a></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactsView",

  mounted() {
    (function(d, w, c) {
      w.ChatraID = 'JAnnDcEWXTzQBK6es';
      var s = d.createElement('script');
      w[c] = w[c] || function() {
        (w[c].q = w[c].q || []).push(arguments);
      };
      s.async = true;
      s.src = 'https://call.chatra.io/chatra.js';
      if (d.head) d.head.appendChild(s);
    })(document, window, 'Chatra');
  },

  methods: {
    back() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped lang="scss">
.contacts {
  &__header {
    display: flex;
    justify-content: center;

    width: 100%;
    height: calc(100vh - 440px);
    background: url('~/assets/images/contacts/background.png');
    background-size: cover;
    background-position: center;

    &-logo {
      align-self: center;
      object-fit: contain;
      width: 75%;
      height: 75%;
    }
  }

  &__list {
    border-radius: 20px 0 20px 20px;
    height: 410px;

    &-icon {
      position: absolute;
      left: 30px
    }

    >button {
      background: #FFFFFF;
      border: 2px solid #dadada;
      border-radius: 15px;
      display: block;
      width: calc(100% - 20px);
      padding: 10px;
      margin: 20px 10px;
      color: #D40132;
      font-weight: 600;
      font-size: 22px;

      a {
        text-decoration: none;
        color: #D40132;
      }
    }
  }
}
</style>
