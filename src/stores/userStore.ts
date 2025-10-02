import { create } from "zustand"

interface Org {
  id: string
  name: string
  plan_id: string
}

interface User {
  user_id: string
  email: string
  role: string
  organization: Org | null
}

interface State {
  user: User | null
  loading: boolean
  setUser: (user: User) => void
  setLoading: (loading: boolean) => void
}

export const useUserStore = create<State>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading })
}))
