<template>
  <!-- COURSE CARD HTML -->
  <a-card>
  <template #cover>
    <img alt="课程封面" :src="course.coverImage" class="h-48 w-full object-cover" />
  </template>
  
    <template #title>
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-semibold line-clamp-1">{{ course.title }}</h3>
        <span class="text-orange-500 font-bold">¥{{ course.price }}</span>
      </div>
    </template>
    
    <div class="flex items-center text-gray-500 text-sm mb-2">
      <StarOutlined class="text-yellow-400 mr-1" />
      {{ course.rating.toFixed(1) }} ({{ course.reviewCount }})
    </div>
    
    <p class="text-gray-600 text-sm line-clamp-2 mb-4">{{ course.description }}</p>
    
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <Avatar size="small" :src="course.teacher.avatar" />
        <span class="text-sm ml-2">{{ course.teacher.name }}</span>
      </div>
      <Button type="primary" size="small">加入学习</Button>
    </div>
  </a-card>
</template>

<script setup>
import { defineProps } from 'vue'
import { StarOutlined } from '@ant-design/icons-vue'
import { Avatar, Button, Card } from 'ant-design-vue'

const props = defineProps({
  course: { type: Object, required: true }
})
</script>