<template>
  <div class="community-page">
    <a-layout-content class="content">
      <div class="container">
        <div class="page-header">
          <h1 class="page-title">学习社区</h1>
          <a-button type="primary" @click="showPostModal">
            发布帖子
          </a-button>
        </div>

        <!-- 帖子列表 -->
        <div class="post-list">
          <a-list
            :data-source="posts"
            :loading="loading"
            item-layout="vertical"
          >
            <template #renderItem="{ item }">
              <a-list-item>
                <template #actions>
                  <span @click="likePost(item.id)">
                    <a-icon type="like" :theme="item.liked ? 'filled' : 'outlined'" />
                    {{ item.likes }}
                  </span>
                  <span @click="showComments(item.id)">
                    <a-icon type="message" />
                    {{ item.comments }}
                  </span>
                  <span>
                    <a-icon type="eye" />
                    {{ item.views }}
                  </span>
                </template>
                <a-list-item-meta
                  :description="item.createTime"
                >
                  <template #title>
                    <a href="javascript:;">{{ item.title }}</a>
                  </template>
                  <template #avatar>
                    <a-avatar :src="item.avatar" />
                  </template>
                </a-list-item-meta>
                {{ item.content }}
                <template #extra>
                  <div class="post-tags">
                    <a-tag v-for="tag in item.tags" :key="tag">{{ tag }}</a-tag>
                  </div>
                </template>
              </a-list-item>
            </template>
          </a-list>
        </div>
      </div>
    </a-layout-content>

    <!-- 发帖模态框 -->
    <a-modal
      v-model:visible="postModalVisible"
      title="发布帖子"
      @ok="handlePostSubmit"
    >
      <a-form :model="postForm" layout="vertical">
        <a-form-item label="标题">
          <a-input v-model:value="postForm.title" placeholder="请输入标题" />
        </a-form-item>
        <a-form-item label="内容">
          <a-textarea
            v-model:value="postForm.content"
            :rows="4"
            placeholder="请输入内容"
          />
        </a-form-item>
        <a-form-item label="标签">
          <a-select
            v-model:value="postForm.tags"
            mode="tags"
            style="width: 100%"
            placeholder="请选择或输入标签"
          >
            <a-select-option value="问答">问答</a-select-option>
            <a-select-option value="分享">分享</a-select-option>
            <a-select-option value="讨论">讨论</a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { message } from 'ant-design-vue'

const loading = ref(false)
const postModalVisible = ref(false)

// 帖子表单
const postForm = reactive({
  title: '',
  content: '',
  tags: []
})

// 模拟帖子数据
const posts = ref([
  {
    id: 1,
    title: 'Vue3 组合式 API 使用心得',
    content: '最近在学习 Vue3 的组合式 API，感觉相比选项式 API 更加灵活...',
    avatar: 'https://picsum.photos/seed/user1/40/40',
    createTime: '2024-02-20 10:30',
    likes: 25,
    comments: 8,
    views: 235,
    tags: ['Vue3', '经验分享'],
    liked: false
  },
  {
    id: 2,
    title: '请教一个 React Hooks 的问题',
    content: '在使用 useEffect 时遇到了一个问题，组件重新渲染时...',
    avatar: 'https://picsum.photos/seed/user2/40/40',
    createTime: '2024-02-20 09:15',
    likes: 12,
    comments: 15,
    views: 180,
    tags: ['React', '问答'],
    liked: true
  },
  {
    id: 3,
    title: '分享一个提高开发效率的 VS Code 插件',
    content: '最近发现了一个非常好用的 VS Code 插件，可以大大提高开发效率...',
    avatar: 'https://picsum.photos/seed/user3/40/40',
    createTime: '2024-02-19 16:45',
    likes: 45,
    comments: 12,
    views: 420,
    tags: ['工具分享', 'VS Code'],
    liked: false
  }
])

// 显示发帖模态框
const showPostModal = () => {
  postModalVisible.value = true
}

// 提交帖子
const handlePostSubmit = () => {
  if (!postForm.title || !postForm.content) {
    message.error('请填写完整信息')
    return
  }
  
  message.success('发布成功')
  postModalVisible.value = false
  // 重置表单
  postForm.title = ''
  postForm.content = ''
  postForm.tags = []
}

// 点赞
const likePost = (postId) => {
  const post = posts.value.find(p => p.id === postId)
  if (post) {
    post.liked = !post.liked
    post.likes += post.liked ? 1 : -1
    message.success(post.liked ? '点赞成功' : '已取消点赞')
  }
}

// 显示评论
// eslint-disable-next-line no-unused-vars
const showComments = (postId) => {
  message.info('评论功能开发中...')
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

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.page-title {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  color: #1a1a1a;
}

.post-list {
  background: #fff;
  padding: 24px;
  border-radius: 4px;
}

.post-tags {
  margin-top: 12px;
}

:deep(.ant-list-item-meta-title) {
  margin-bottom: 4px;
}

:deep(.ant-list-item-meta-description) {
  font-size: 12px;
  color: #999;
}

:deep(.ant-list-item-action) {
  margin-top: 16px;
}

:deep(.ant-list-item) {
  padding: 24px 0;
}
</style> 