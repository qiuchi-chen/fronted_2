<template>
  <a-layout-header class="header">
    <div class="header-content">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="Logo" v-if="false">
          <span class="logo-text">教育平台</span>
        </router-link>
      </div>
      <a-menu
        mode="horizontal"
        v-model:selectedKeys="selectedKeys"
        class="menu"
      >
        <a-menu-item key="home">
          <router-link to="/">首页</router-link>
        </a-menu-item>
        <a-menu-item key="courses">
          <router-link to="/courses">全部课程</router-link>
        </a-menu-item>
        <a-menu-item key="learning-path">
          <router-link to="/learning-path">学习路径</router-link>
        </a-menu-item>
        <a-menu-item key="community">
          <router-link to="/community">学习社区</router-link>
        </a-menu-item>
      </a-menu>
      <div class="header-right">
        <a-space>
          <a-input-search
            placeholder="搜索课程"
            style="width: 200px"
            @search="onSearch"
          />
          <a-button type="primary">登录</a-button>
          <a-button>注册</a-button>
        </a-space>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'SiteHeader',
  setup() {
    const selectedKeys = ref(['home'])
    
    const onSearch = (value) => {
      console.log('search:', value)
    }

    return {
      selectedKeys,
      onSearch
    }
  }
}
</script>

<style scoped>
.header {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 24px;
}

.logo {
  margin-right: 48px;
}

.logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo img {
  height: 32px;
  margin-right: 8px;
}

.logo-text {
  font-size: 20px;
  font-weight: bold;
  color: #1890ff;
}

.menu {
  flex: 1;
  border-bottom: none;
}

.header-right {
  margin-left: auto;
}

:deep(.ant-menu-horizontal) {
  border-bottom: none;
}

:deep(.ant-menu-item) {
  padding: 0 20px;
}

:deep(.ant-menu-item a) {
  color: rgba(0, 0, 0, 0.85);
  text-decoration: none;
}

:deep(.ant-menu-item-selected a) {
  color: #1890ff;
}
</style> 