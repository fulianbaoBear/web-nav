import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface AuthState {
  isAuthenticated: boolean
  username: string | null
  login: (username: string, password: string) => boolean
  logout: () => void
}

// 默认用户名和密码（实际项目中应该使用后端验证）
const DEFAULT_USERNAME = 'admin'
const DEFAULT_PASSWORD = 'admin123'

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      username: null,
      
      login: (username: string, password: string) => {
        // 简单的本地验证（实际项目中应该调用后端API）
        if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
          set({ isAuthenticated: true, username })
          return true
        }
        return false
      },
      
      logout: () => {
        set({ isAuthenticated: false, username: null })
      }
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
