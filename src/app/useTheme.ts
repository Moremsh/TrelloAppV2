import { useEffect, useState } from "react";


export function useTheme(){
  const [theme , setTheme] = useState<'light' | 'dark'>(()=> localStorage.getItem('theme') as 'light' | 'dark' ?? 'light')

  useEffect(()=>{
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme' , theme)
  },[theme])

  function toggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return {theme,toggleTheme}
}
