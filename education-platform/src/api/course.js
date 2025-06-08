// 模拟数据 - 实际项目中应替换为真实API请求
export const getFeaturedCourses = async () => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return [
    {
      id: 1,
      title: "Vue3实战指南",
      price: 99,
      rating: 4.8,
      reviewCount: 234,
      description: "从零到一掌握Vue3核心技术栈，构建企业级应用",
      coverImage: "https://picsum.photos/seed/vue3/400/200",
      teacher: {
        name: "张教授",
        avatar: "https://picsum.photos/seed/teacher1/40/40"
      }
    }
  ]
}

export const getHotCourses = async () => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return [
    {
      id: 1,
      title: "Vue3实战指南",
      price: 99,
      description: "从零到一掌握Vue3核心技术栈，构建企业级应用",
      coverImage: "https://picsum.photos/seed/vue3/400/200"
    },
    {
      id: 2,
      title: "React高级教程",
      price: 129,
      description: "深入学习React生态系统，掌握前端开发精髓",
      coverImage: "https://picsum.photos/seed/react/400/200"
    },
    {
      id: 3,
      title: "Node.js全栈开发",
      price: 159,
      description: "全栈开发实战，打通前后端开发技能",
      coverImage: "https://picsum.photos/seed/nodejs/400/200"
    }
  ]
}

export const getCategories = async () => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return [
    { id: 1, name: "前端开发", icon: "code" },
    { id: 2, name: "后端开发", icon: "server" },
    { id: 3, name: "移动开发", icon: "mobile" },
    { id: 4, name: "数据科学", icon: "chart-bar" }
  ]
}

export const getLearningPaths = async () => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return [
    {
      id: 1,
      title: "Web全栈工程师",
      description: "从前端到后端的完整学习路径",
      duration: "6个月",
      courseCount: 12
    },
    {
      id: 2,
      title: "人工智能工程师",
      description: "AI和机器学习完整课程体系",
      duration: "8个月",
      courseCount: 15
    }
  ]
}

// 其他API函数类似...