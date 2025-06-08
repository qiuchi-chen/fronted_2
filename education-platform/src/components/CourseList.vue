<template>
  <div class="mb-12">
    <h2 class="text-2xl font-bold mb-6 flex items-center">
      <Icon :type="iconType" class="mr-2" />
      {{ title }}
      <a href="#" class="ml-auto text-blue-500 text-sm">查看全部</a>
    </h2>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <CourseCard v-for="course in courses" :key="course.id" :course="course" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { ArrowRightOutlined } from '@ant-design/icons-vue'
import CourseCard from '@/components/CourseCard.vue'


const Icon = ArrowRightOutlined
</script>