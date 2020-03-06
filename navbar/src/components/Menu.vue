<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="inline"
        @select="selectItem"
        v-model="selectedKeys"
      >
        <a-menu-item key="/app1">
          <a-icon type="user" />
          <span>App1</span>
        </a-menu-item>
        <a-menu-item key="/app2">
          <a-icon type="video-camera" />
          <span>App2</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 24px 0',
          padding: '24px',
          background: '#fff',
          overflow: 'auto',
        }"
      >
        <div id="app-content"></div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        Microfrontend-Vue ©2020
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      selectedKeys: [],
    }
  },
  watch: {
    $route(val) {
      this.selectedKeys = [val.path]
    },
  },
  methods: {
    selectItem({ item, key }) {
      this.$router.push(key)
    },
  },
}
</script>
<style>
#components-layout-demo-custom-trigger {
  height: 100vh;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
