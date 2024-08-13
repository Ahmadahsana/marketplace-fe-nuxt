import { defineStore } from 'pinia'
import axios from 'axios'

const dataAuth = JSON.parse(localStorage.getItem('dataAuth'))
const backendUrl = import.meta.env.VITE_BACKEND_URL

if (!dataAuth || !dataAuth.data) {
  console.error('No authentication data found.')
}

// Fungsi untuk menyimpan state ke localStorage
function saveStateToLocalStorage(state) {
  localStorage.setItem('cartData', JSON.stringify(state.cartData))
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartData: JSON.parse(localStorage.getItem('cartData')) || {},
    loading: false,
    error: null
  }),
  getters: {
    cartItemsCount: (state) => {
      return Object.values(state.cartData).reduce(
        (count, storeItems) => count + storeItems.length,
        0
      )
    },
    cartItems: (state) => {
      return Object.values(state.cartData).flat()
    },
    totalPrice: (state) => {
      return Object.values(state.cartData).reduce((total, items) => {
        return (
          total +
          items.reduce((sum, item) => {
            return item.selected ? sum + item.produk.harga * item.quantity : sum
          }, 0)
        )
      }, 0)
    }
  },
  actions: {
    async fetchCartData() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get(`${backendUrl}api/order/cart?token=${dataAuth.data}`)
        console.log('Axios response:', response) // Log response dari Axios
        this.cartData = response.data.data
        console.log('cartData after fetch:', this.cartData) // Log cartData setelah diupdate
        saveStateToLocalStorage(this.$state)
      } catch (error) {
        this.error = 'Failed to fetch cart data'
        console.error('Failed to fetch cart data:', error)
      } finally {
        this.loading = false
      }
    },
    async fetchCartDataAfterLogin(token) {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get(`${backendUrl}api/order/cart?token=${token}`)
        // console.log('Axios response:', response) // Log response dari Axios
        this.cartData = response.data.data
        // console.log('cartData after fetch:', this.cartData) // Log cartData setelah diupdate
        saveStateToLocalStorage(this.$state)
      } catch (error) {
        this.error = 'Failed to fetch cart data'
        console.error('Failed to fetch cart data:', error)
      } finally {
        this.loading = false
      }
    },
    toggleAll(selectAll) {
      for (const store in this.cartData) {
        this.cartData[store].forEach((item) => (item.selected = selectAll))
      }
      saveStateToLocalStorage(this.$state)
    },
    toggleStore(store, select) {
      this.cartData[store].forEach((item) => (item.selected = select))
      saveStateToLocalStorage(this.$state)
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--
      }
      saveStateToLocalStorage(this.$state)
    },
    increaseQuantity(item) {
      item.quantity++
      saveStateToLocalStorage(this.$state)
    },
    async addToCart() {
      await this.fetchCartData() // Fetch ulang data keranjang setelah item ditambahkan
    }
  }
})

// import { defineStore } from 'pinia'
// import axios from 'axios'

// const dataAuth = JSON.parse(localStorage.getItem('dataAuth'))
// const backendUrl = import.meta.env.VITE_BACKEND_URL

// if (!dataAuth || !dataAuth.data) {
//   console.error('No authentication data found.')
// }

// export const useCartStore = defineStore('cart', {
//   state: () => ({
//     cartData: {},
//     loading: false,
//     error: null
//   }),
//   getters: {
//     cartItemsCount: (state) => {
//       return Object.values(state.cartData).reduce(
//         (count, storeItems) => count + storeItems.length,
//         0
//       )
//     },
//     cartItems: (state) => {
//       return Object.values(state.cartData).flat()
//     },
//     totalPrice: (state) => {
//       return Object.values(state.cartData).reduce((total, items) => {
//         return (
//           total +
//           items.reduce((sum, item) => {
//             return item.selected ? sum + item.produk.harga * item.quantity : sum
//           }, 0)
//         )
//       }, 0)
//     }
//   },
//   actions: {
//     async fetchCartData() {
//       this.loading = true
//       this.error = null
//       try {
//         const response = await axios.get(`${backendUrl}api/order/cart?token=${dataAuth.data}`)
//         // console.log('Axios response:', response) // Log response dari Axios
//         this.cartData = response.data.data
//         // console.log('cartData after fetch:', this.cartData) // Log cartData setelah diupdate
//       } catch (error) {
//         this.error = 'Failed to fetch cart data'
//         console.error('Failed to fetch cart data:', error)
//       } finally {
//         this.loading = false
//       }
//     },
//     async fetchCartDataAfterLogin(token) {
//       this.loading = true
//       this.error = null
//       try {
//         const response = await axios.get(`${backendUrl}api/order/cart?token=${token}`)
//         // console.log('Axios response:', response) // Log response dari Axios
//         this.cartData = response.data.data
//         // console.log('cartData after fetch:', this.cartData) // Log cartData setelah diupdate
//       } catch (error) {
//         this.error = 'Failed to fetch cart data'
//         console.error('Failed to fetch cart data:', error)
//       } finally {
//         this.loading = false
//       }
//     },
//     toggleAll(selectAll) {
//       for (const store in this.cartData) {
//         this.cartData[store].forEach((item) => (item.selected = selectAll))
//       }
//     },
//     toggleStore(store, select) {
//       this.cartData[store].forEach((item) => (item.selected = select))
//     },
//     decreaseQuantity(item) {
//       if (item.quantity > 1) {
//         item.quantity--
//       }
//     },
//     increaseQuantity(item) {
//       item.quantity++
//     },
//     async addToCart() {
//       await this.fetchCartData() // Fetch ulang data keranjang setelah item ditambahkan
//     }
//   }
// })
