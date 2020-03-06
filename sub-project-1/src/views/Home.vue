<template>
  <div class="home">
    <div>
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <router-link to="/app2">点击跳转到App2</router-link>
    <a-input @change="change" />
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
  methods: {
    change(e) {
      window.globalStore.commit('SET_GLOBALDATA', {
        inputValue: e.target.value,
      })
    },
  },
}
</script>
