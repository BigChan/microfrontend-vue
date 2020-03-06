<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p>{{ inputValue }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      inputValue: '',
    }
  },
  created() {
    this.inputValue = window.globalStore.state.globalData.inputValue || ''
  },
}
</script>
