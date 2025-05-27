import { create } from 'zustand';

interface AuthState {
  isOpen: boolean;
  activeTab: 'login' | 'register';
  setOpen: (isOpen: boolean) => void;
  setActiveTab: (tab: 'login' | 'register') => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isOpen: false,
  activeTab: 'login',
  setOpen: (isOpen) => set({ isOpen }),
  setActiveTab: (activeTab) => set({ activeTab })
}));