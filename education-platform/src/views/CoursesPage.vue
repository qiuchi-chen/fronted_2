<template>
  <div class="courses-page">
    <a-layout-content class="content">
      <div class="container">
        <!-- 搜索和筛选 -->
        <div class="search-section">
          <a-row :gutter="16" align="middle">
            <a-col :span="8">
              <a-input-search
                placeholder="搜索课程"
                @search="onSearch"
                enter-button
              />
            </a-col>
            <a-col :span="16">
              <a-space>
                <a-select
                  v-model:value="filters.category"
                  style="width: 120px"
                  placeholder="课程分类"
                >
                  <a-select-option value="">全部</a-select-option>
                  <a-select-option value="frontend">前端开发</a-select-option>
                  <a-select-option value="backend">后端开发</a-select-option>
                  <a-select-option value="mobile">移动开发</a-select-option>
                </a-select>
                <a-select
                  v-model:value="filters.level"
                  style="width: 120px"
                  placeholder="难度等级"
                >
                  <a-select-option value="">全部</a-select-option>
                  <a-select-option value="beginner">入门</a-select-option>
                  <a-select-option value="intermediate">中级</a-select-option>
                  <a-select-option value="advanced">高级</a-select-option>
                </a-select>
                <a-select
                  v-model:value="filters.sort"
                  style="width: 120px"
                  placeholder="排序方式"
                >
                  <a-select-option value="popular">最受欢迎</a-select-option>
                  <a-select-option value="newest">最新</a-select-option>
                  <a-select-option value="price-asc">价格从低到高</a-select-option>
                  <a-select-option value="price-desc">价格从高到低</a-select-option>
                </a-select>
              </a-space>
            </a-col>
          </a-row>
        </div>

        <!-- 课程列表 -->
        <div class="course-list">
          <a-row :gutter="[16, 16]">
            <a-col :xs="24" :sm="12" :md="8" :lg="6" v-for="course in courses" :key="course.id">
              <a-card hoverable class="course-card">
                <template #cover>
                  <img :src="course.coverImage" :alt="course.title" />
                </template>
                <a-card-meta :title="course.title">
                  <template #description>
                    <div class="course-info">
                      <p class="description">{{ course.description }}</p>
                      <div class="stats">
                        <span class="students">{{ course.studentCount }}人学习</span>
                        <a-rate :value="course.rating" disabled allow-half />
                      </div>
                      <div class="price-action">
                        <span class="price">¥{{ course.price }}</span>
                        <a-button type="primary" @click="enrollCourse(course.id)">
                          立即报名
                        </a-button>
                      </div>
                    </div>
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
          </a-row>
        </div>

        <!-- 分页 -->
        <div class="pagination">
          <a-pagination
            v-model:current="pagination.current"
            :total="pagination.total"
            :pageSize="pagination.pageSize"
            show-quick-jumper
            @change="onPageChange"
          />
        </div>
      </div>
    </a-layout-content>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { message } from 'ant-design-vue'

// 筛选条件
const filters = reactive({
  category: '',
  level: '',
  sort: 'popular'
})

// 分页
const pagination = reactive({
  current: 1,
  total: 100,
  pageSize: 12
})

// 模拟课程数据
const courses = ref([
  {
    id: 1,
    title: 'Vue.js 3.0 完全指南',
    description: '从入门到精通，掌握Vue3核心技术栈',
    price: 299,
    rating: 4.5,
    studentCount: 1234,
    coverImage: 'https://picsum.photos/seed/vue3/300/200'
  },
  {
    id: 2,
    title: 'React 18 实战教程',
    description: '最新React特性与实战项目开发',
    price: 399,
    rating: 4.8,
    studentCount: 2341,
    coverImage: 'https://picsum.photos/seed/react/300/200'
  },
  {
    id: 3,
    title: 'Node.js 服务端开发',
    description: '使用Node.js构建高性能Web应用',
    price: 499,
    rating: 4.6,
    studentCount: 1876,
    coverImage: 'https://picsum.photos/seed/nodejs/300/200'
  },
  {
    id: 4,
    title: '微信小程序开发实战',
    description: '从零开始学习小程序开发',
    price: 199,
    rating: 4.7,
    studentCount: 3421,
    coverImage: 'https://picsum.photos/seed/miniprogram/300/200'
  }
])

// 搜索课程
const onSearch = (value) => {
  console.log('搜索:', value)
  message.info('搜索功能开发中...')
}

// 翻页
const onPageChange = (page) => {
  pagination.current = page
  // 这里应该调用API获取对应页码的数据
  message.info(`加载第 ${page} 页数据...`)
}

// 报名课程
const enrollCourse = (courseId) => {
  message.success(`报名成功！课程ID: ${courseId}`)
}
</script>

<style scoped>
.content {
  min-height: calc(100vh - 64px);
  padding: 24px;
  background: #f0f2f5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.search-section {
  margin-bottom: 24px;
  padding: 24px;
  background: #fff;
  border-radius: 4px;
}

.course-list {
  margin-bottom: 24px;
}

.course-card {
  height: 100%;
}

.course-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.description {
  color: #666;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.students {
  color: #666;
  font-size: 14px;
}

.price-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  color: #f5222d;
  font-size: 20px;
  font-weight: bold;
}

.pagination {
  text-align: center;
  margin-top: 24px;
  padding: 24px 0;
  background: #fff;
  border-radius: 4px;
}
</style> 