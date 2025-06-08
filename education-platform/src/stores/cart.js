import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  
  getters: {
    totalItems: (state) => state.items.length,
    totalPrice: (state) => {
      return state.items.reduce((total, item) => total + item.price, 0)
    }
  },
  
  actions: {
    addToCart(course) {
      const existing = this.items.find(item => item.id === course.id)
      if (!existing) {
        this.items.push({ ...course, quantity: 1 })
      }
    },
    
    removeFromCart(courseId) {
      this.items = this.items.filter(item => item.id !== courseId)
    }
  }
})