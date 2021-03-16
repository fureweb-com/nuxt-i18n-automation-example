<template>
  <div class="container error">
    <div class="title">{{ $t('error.pageNotFound') }}</div>
    <button class="home" @click="toHome">{{ $t('error.toHome') }}</button>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: ['error'],
  methods: {
    toHome () {
      this.$router.replace(this.localePath({ name: 'index' }))
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.title {
  font-size: 2rem;
  margin-bottom: 2rem;
}
</style>
