import { create } from 'zustand'

interface Locale {
    locale: string
    
}
interface Action {
    updateLocale:(locale: Locale['locale']) => void
}

const localeStore = create<Locale & Action>((set) => ({
  locale: 'en',
  updateLocale: (locale) => set(() => ({ locale: locale })),
}))

export default localeStore