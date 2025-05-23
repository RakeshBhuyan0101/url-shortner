import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      urls : [],

      setUser: (user) => set({ user }),
      setUrls : (urls) => set({urls})
    }),
    {
      name: 'auth-storage', // unique name for localStorage key
    }
  )
)

export default useAuthStore
