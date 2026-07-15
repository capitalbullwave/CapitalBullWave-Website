import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const id = hash ? hash.substring(1) : pathname === '/faq' ? 'faq' : null

    if (!id) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    let attempts = 0
    let timer = null

    const scrollToHash = () => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }

      if (attempts < 3) {
        attempts += 1
        timer = window.setTimeout(scrollToHash, 120)
      }
    }

    scrollToHash()

    return () => {
      if (timer) {
        window.clearTimeout(timer)
      }
    }
  }, [pathname, hash])

  return null
}
