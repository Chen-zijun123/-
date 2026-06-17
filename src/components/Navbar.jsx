import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const NAV_ITEMS = [
  { label: '首页', href: '#hero' },
  { label: '作品', href: '#works' },
  { label: '视频', href: '#videos' },
  { label: '生活', href: '#life' },
  { label: '联系', href: '#footer' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // 滚动超过一屏（Hero高度）的80%后显示毛玻璃
      setScrolled(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg-dark/80 backdrop-blur-xl border-b border-border-subtle shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleClick('#hero') }}
          className="text-xl lg:text-2xl font-light tracking-[0.3em] text-text-primary hover:text-accent transition-colors duration-300"
        >
          PORTFOLIO
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleClick(item.href) }}
              className="text-sm tracking-[0.2em] text-text-secondary hover:text-text-primary transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#footer"
            onClick={(e) => { e.preventDefault(); handleClick('#footer') }}
            className="text-sm tracking-[0.2em] px-5 py-2 border border-accent/40 rounded-full text-accent hover:bg-accent/10 hover:border-accent transition-all duration-300"
          >
            联系我
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-bg-dark/95 backdrop-blur-xl border-b border-border-subtle px-8 py-6 flex flex-col gap-5">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleClick(item.href) }}
              className="text-sm tracking-[0.2em] text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#footer"
            onClick={(e) => { e.preventDefault(); handleClick('#footer') }}
            className="text-sm tracking-[0.2em] text-accent border border-accent/40 rounded-full px-5 py-2 inline-block text-center hover:bg-accent/10 transition-all duration-300"
          >
            联系我
          </a>
        </div>
      </div>
    </nav>
  )
}
