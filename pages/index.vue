<template>
  <div class="container">
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>key</th>
            <th>{{ $t('common.translateResult') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>common.title</td>
            <td>{{ $t('common.title') }}</td>
          </tr>
          <tr>
            <td>common.description</td>
            <td>{{ $t('common.description') }}</td>
          </tr>
          <tr>
            <td>common.button</td>
            <td>{{ $t('common.button') }}</td>
          </tr>
        </tbody>
      </table>

      <div class="description">
        <a :href="sheetsUrl" target="_blank" v-text="sheetsText" />
      </div>

      <div class="links">
        <button class="button button--green" @click="changeLanguage('ko')">KO</button>
        <button class="button button--green" @click="changeLanguage('en')">EN</button>
        <button class="button button--green" @click="changeLanguage('ja')">JA</button>
      </div>

      <button class="button button--green mt-1" @click="goToNotExistPage">{{ $t('common.goToNotExistPage') }}</button>
      <button class="button button--green mt-1" @click="openRepositoryPage">{{ $t('common.goToRepository') }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  computed: {
    sheetsUrl () {
      return 'https://docs.google.com/spreadsheets/d/1TZu5G5VxPRoXeCjY7-OQbHFp09y73wGTiDsyzk6UwPQ/edit#gid=0'
    },
    sheetsText () {
      return `${this.$t('common.sheetsPath')} (${this.$t('common.clickHere')})`
    },
  },
  methods: {
    changeLanguage (lang) {
      this.$i18n.setLocale(lang)
    },
    goToNotExistPage () {
      const currentLocale = this.$i18n.locale
      const defaultLocale = this.$i18n.defaultLocale
      const path = `/${currentLocale === defaultLocale ? '' : currentLocale}/weird-path-here`
      this.$router.push(path)
    },
    openRepositoryPage () {
      window.open('https://github.com/fureweb-com/nuxt-i18n-automation-example')
    },
  },
}
</script>

<style>
.mt-1 {
  margin-top: 0.5rem;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.table {
  min-width: 300px;
  margin: 0 auto;
}

th, td {
  width: 50%;
  height: 40px;
  line-height: 40px;
}

.links {
  padding-top: 15px;
}
</style>
