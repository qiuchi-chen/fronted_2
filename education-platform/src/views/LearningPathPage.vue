<template>
  <div class="learning-path-page">
    <a-layout-content class="content">
      <div class="container">
        <h1 class="page-title">学习路径</h1>
        
        <!-- 路径列表 -->
        <div class="path-list">
          <a-row :gutter="[16, 16]">
            <a-col :span="24" v-for="path in learningPaths" :key="path.id">
              <a-card class="path-card">
                <a-row :gutter="16">
                  <a-col :span="6">
                    <img :src="path.image" :alt="path.title" class="path-image" />
                  </a-col>
                  <a-col :span="18">
                    <div class="path-content">
                      <h2 class="path-title">{{ path.title }}</h2>
                      <p class="path-description">{{ path.description }}</p>
                      <div class="path-info">
                        <div class="info-item">
                          <span class="label">课程数：</span>
                          <span class="value">{{ path.courseCount }}门</span>
                        </div>
                        <div class="info-item">
                          <span class="label">学习周期：</span>
                          <span class="value">{{ path.duration }}</span>
                        </div>
                        <div class="info-item">
                          <span class="label">难度：</span>
                          <span class="value">{{ path.level }}</span>
                        </div>
                      </div>
                      <div class="path-footer">
                        <div class="progress">
                          <span class="progress-text">已有 {{ path.studentCount }} 人在学</span>
                          <a-progress :percent="path.progress" size="small" />
                        </div>
                        <a-button type="primary" @click="startLearning(path.id)">
                          开始学习
                        </a-button>
                      </div>
                    </div>
                  </a-col>
                </a-row>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
    </a-layout-content>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { message } from 'ant-design-vue'

// 模拟学习路径数据
const learningPaths = ref([
  {
    id: 1,
    title: 'Web全栈工程师',
    description: '从前端到后端的完整学习路径，包含HTML、CSS、JavaScript、Vue.js、Node.js等核心技术，让您掌握全栈开发能力。',
    image: 'https://picsum.photos/seed/fullstack/200/200',
    courseCount: 12,
    duration: '6个月',
    level: '中级',
    studentCount: 1234,
    progress: 70
  },
  {
    id: 2,
    title: '前端开发工程师',
    description: '系统学习前端开发技术，包含HTML5、CSS3、JavaScript、Vue.js、React等主流框架，打造专业的前端开发技能。',
    image: 'https://picsum.photos/seed/frontend/200/200',
    courseCount: 8,
    duration: '4个月',
    level: '入门',
    studentCount: 2345,
    progress: 85
  },
  {
    id: 3,
    title: '移动端开发工程师',
    description: '专注于移动应用开发，包含Android、iOS、Flutter、React Native等技术，助您成为优秀的移动端开发者。',
    image: 'https://picsum.photos/seed/mobile/200/200',
    courseCount: 10,
    duration: '5个月',
    level: '高级',
    studentCount: 1567,
    progress: 60
  }
])

// 开始学习
const startLearning = (pathId) => {
  message.success(`开始学习路径：${pathId}`)
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

.page-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #1a1a1a;
}

.path-card {
  margin-bottom: 16px;
}

.path-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}

.path-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.path-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #1a1a1a;
}

.path-description {
  color: #666;
  margin-bottom: 16px;
  line-height: 1.5;
}

.path-info {
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
}

.info-item {
  display: flex;
  align-items: center;
}

.label {
  color: #666;
  margin-right: 4px;
}

.value {
  color: #1a1a1a;
  font-weight: 500;
}

.path-footer {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.progress {
  flex: 1;
  margin-right: 24px;
}

.progress-text {
  display: block;
  margin-bottom: 8px;
  color: #666;
}
</style> 