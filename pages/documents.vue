<template>
  <div class="documents">
    <img src="@/assets/images/icons/back.png" height="32px" width="24px" alt="logo" class='link-back' @click='back' />

    <div class="documents__header" />

    <div class="documents__list">
      <span>{{ $t('docs.1') }}</span>
      <button @click="goto('https://lk.abiturient.asu.ru/')">{{ $t('docs.2') }}</button>
      <span>{{ $t('docs.3') }} <a>{{ $t('docs.4') }}</a></span>

      <a class="left title">{{ $t('docs.5') }}</a>
      <div class="documents__doc">
        <img src="@/assets/images/documents/passport.png" alt="" />
        <a><span>1.</span> {{ $t('docs.6') }}</a>
      </div>
      <div class="documents__doc">
        <img src="@/assets/images/documents/atestat.png" alt="" />
        <a><span>2.</span> {{ $t('docs.7') }}</a>
      </div>
      <div class="documents__doc">
        <img src="@/assets/images/documents/snils.jpg" alt="" />
        <a><span>3.</span> {{ $t('docs.8') }}</a>
      </div>

      <a class="left title">{{ $t('docs.9') }}</a>
      <div class="left documents__add">
        <a><span>1.</span>{{ $t('docs.10') }}</a>
        <a><span>2.</span>{{ $t('docs.11') }}</a>
        <a><span>3.</span>{{ $t('docs.12') }}</a>
        <a><span>4.</span>{{ $t('docs.13') }} <span class="block">{{ $t('docs.14') }}</span></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DocumentsView",

  methods: {
    goto(url) {
      location.href = url;
    },

    back() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped lang="scss">
.documents {
  &__header {
    display: flex;
    justify-content: center;

    width: 100%;
    height: 60px;
    background: url('~/assets/images/documents/background.jpg');
    background-size: cover;
    background-position: center;
  }

  &__list {
    padding: 20px 10px;
    border-radius: 20px 0 20px 20px;

    >button {
      background: radial-gradient(50% 50% at 50% 50%, #990A00 0%, #D40132 100%);
      border-radius: 7px;
      display: block;
      width: calc(100% - 20px);
      padding: 10px;
      margin: 20px 10px;
      font-weight: 600;
      font-size: 16px;
      color: #FFFFFF;
      border: none !important;
    }
  }

  &__doc {
    display: inline-block;
    margin: 10px;

    width: 40%;
    height: 40%;

    >img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border: 2px solid #808080;
    }

    >a {
      padding-top: 5px;
    }
  }

  &__add {
    >a {
      padding: 5px;
    }
  }

  span {
    font-weight: 700;
    color: #808080;
  }

  a {
    color: #D40132;
    font-weight: 700;
    display: block;
  }

  .left {
    text-align: left;
  }

  .title {
    padding: 20px;
  }
}
</style>
