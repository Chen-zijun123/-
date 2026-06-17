import { motion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'
import { SiWechat } from 'react-icons/si'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: 'easeOut' },
}

export default function Footer() {
  return (
    <footer id="footer" className="py-20 lg:py-28 border-t border-border-subtle">
      <div className="section-container">
        <motion.div {...fadeInUp} className="max-w-2xl mx-auto text-center">
          {/* 大标题 */}
          <p className="text-accent/60 text-xs tracking-[0.3em] mb-6 font-light">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl lg:text-4xl font-light tracking-wider text-text-primary mb-6">
            欢迎你来见证我
          </h2>
          <p className="text-text-secondary font-light leading-relaxed mb-12">
            祝我们，永远少年
          </p>

          {/* 联系方式 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="mailto:2761862455@qq.com"
              className="flex items-center gap-2 px-6 py-3 bg-bg-card border border-border-subtle rounded-full text-text-secondary hover:text-text-primary hover:border-accent/40 transition-all duration-300 text-sm tracking-wider"
            >
              <FiMail size={16} />
              2761862455@qq.com
            </a>
          </div>

          {/* 社交链接 */}
          <div className="flex items-center justify-center gap-12 mb-16">
            <div className="flex items-center gap-2 text-text-secondary text-sm tracking-wider">
              <SiWechat size={18} className="text-accent/60" />
              <span>微信：Chen_zijun123</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary text-sm tracking-wider">
              <FiMail size={18} className="text-accent/60" />
              <span>QQ：2761862455</span>
            </div>
          </div>

          {/* 版权 */}
          <div className="pt-8 border-t border-border-subtle/50">
            <p className="text-xs text-text-secondary/60 tracking-[0.2em] font-light">
              欢迎你来见证我
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
