<template>
  <a-layout>
    <SiteHeader />
    
    <!-- 主要内容区 -->
    <a-layout-content class="site-content">
      <!-- 轮播图 -->
      <a-carousel autoplay class="banner">
        <div class="banner-item">
          <img src="https://picsum.photos/seed/banner1/1920/400" alt="Banner 1">
          <div class="banner-content">
            <h2>开启你的学习之旅</h2>
            <p>海量优质课程，助你成就梦想</p>
          </div>
        </div>
        <div class="banner-item">
          <img src="https://picsum.photos/seed/banner2/1920/400" alt="Banner 2">
          <div class="banner-content">
            <h2>专业讲师团队</h2>
            <p>业内顶尖专家，保证教学质量</p>
          </div>
        </div>
      </a-carousel>

      <div class="main-container">
        <!-- 课程分类 -->
        <a-row :gutter="[16, 16]" class="category-section">
          <a-col :span="24">
            <h2 class="section-title">课程分类</h2>
          </a-col>
          <a-col :xs="12" :sm="8" :md="6" v-for="category in categories" :key="category.id">
            <a-card hoverable class="category-card">
              <template #cover>
                <div class="category-icon">
                  <component :is="category.icon" />
                </div>
              </template>
              <a-card-meta :title="category.name">
                <template #description>
                  <a-button type="link">浏览课程</a-button>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>

        <!-- 热门课程 -->
        <div class="course-section">
          <a-row :gutter="[16, 16]">
            <a-col :span="24">
              <div class="section-header">
                <h2 class="section-title">热门课程</h2>
                <a-button type="primary">查看全部</a-button>
              </div>
            </a-col>
            <a-col :xs="24" :sm="12" :md="8" v-for="course in hotCourses" :key="course.id">
              <a-card hoverable class="course-card">
                <template #cover>
                  <img :src="course.coverImage" :alt="course.title" />
                </template>
                <a-card-meta :title="course.title">
                  <template #description>
                    <div class="course-info">
                      <p>{{ course.description }}</p>
                      <div class="course-footer">
                        <span class="price">¥{{ course.price }}</span>
                        <a-button type="primary">立即学习</a-button>
                      </div>
                    </div>
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
    </a-layout-content>

    <a-layout-footer class="footer">
      <div class="footer-content">
        <p>© 2024 教育平台 版权所有</p>
      </div>
    </a-layout-footer>
  </a-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SiteHeader from '@/components/Header.vue'
import { getHotCourses, getCategories } from '@/api/course'

const hotCourses = ref([])
const categories = ref([])

onMounted(async () => {
  try {
    hotCourses.value = await getHotCourses()
    categories.value = await getCategories()
  } catch (error) {
    console.error('Failed to fetch data:', error)
  }
})
</script>

<style scoped>
.site-content {
  min-height: calc(100vh - 64px);
  background: #f0f2f5;
}

.banner {
  margin-bottom: 24px;
}

.banner-item {
  position: relative;
  height: 400px;
}

.banner-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.banner-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #1a1a1a;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.category-section {
  margin-bottom: 48px;
}

.category-card {
  text-align: center;
}

.category-icon {
  font-size: 32px;
  padding: 24px 0;
  background: #f5f5f5;
}

.course-section {
  margin-bottom: 48px;
}

.course-card {
  height: 100%;
}

.course-card :deep(.ant-card-meta-title) {
  font-size: 18px;
  margin-bottom: 12px;
}

.course-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.course-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}

.price {
  font-size: 20px;
  font-weight: bold;
  color: #f5222d;
}

.footer {
  text-align: center;
  padding: 24px;
  background: #001529;
  color: rgba(255, 255, 255, 0.65);
}

:deep(.ant-carousel .slick-dots li button) {
  background: #fff;
  opacity: 0.4;
}

:deep(.ant-carousel .slick-dots li.slick-active button) {
  opacity: 1;
}
</style>