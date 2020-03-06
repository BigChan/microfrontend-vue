<template>
  <Menu />
</template>

<script>
import Menu from '@/components/Menu'
export default {
  components: { Menu },
  data() {
    return {
      collapsed: false,
    }
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed
    },
  },
}
</script>

<style></style>
