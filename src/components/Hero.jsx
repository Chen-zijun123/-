import { FiArrowDown } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Particles from './Particles'

export default function Hero() {
  const scrollToWorks = () => {
    document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 背景图片 — 渐显动画 + 固定焦点坐标 */}
      <motion.img
        src="/images/微信图片_2026-06-17_100510_915.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: '50% 20%' }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      />

      {/* 粒子动画 — 在图片之上、暗色叠加之下 */}
      <Particles
        particleColors={['#60a5fa', '#93c5fd', '#3b82f6']}
        particleCount={200}
        particleSpread={22}
        speed={0.07}
        particleBaseSize={35}
        moveParticlesOnHover={true}
        particleHoverFactor={0.25}
        alphaParticles={true}
        sizeRandomness={0.9}
        cameraDistance={28}
        disableRotation={false}
        pixelRatio={Math.min(window.devicePixelRatio || 1, 2)}
      />

      {/* 暗色叠加层 — z-10在粒子之上，pointer-events-none 让鼠标事件穿透到粒子 */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/75 via-bg-dark/35 to-bg-dark z-[10] pointer-events-none" />

      {/* 光晕点缀 */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-accent/3 blur-[100px]" />

      {/* 网格线背景 */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(96,165,250,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* 内容 */}
      <div className="relative z-20 text-center px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
        >
          {/* 小标签 */}
          <p className="text-accent/70 text-sm tracking-[0.4em] mb-8 font-light">
            CREATIVE DEVELOPER
          </p>

          {/* 大标题 — 艺术手写字体 */}
          <h1 className="text-text-primary mb-6 leading-tight">
            <span className="block text-3xl lg:text-4xl xl:text-5xl font-light tracking-[0.08em]" style={{ fontFamily: '"Caveat", cursive' }}>
              Hi，这里是
            </span>
            <span className="block mt-3 text-text-primary text-6xl lg:text-8xl xl:text-9xl" style={{ fontFamily: '"Zhi Mang Xing", "Ma Shan Zheng", cursive' }}>
              陈子君
            </span>
          </h1>

          {/* 副标题 */}
          <p className="text-lg lg:text-xl text-text-secondary font-light tracking-wide max-w-xl mx-auto mb-12 leading-relaxed">
            飘飘何所似，天地一沙鸥
          </p>

          {/* CTA 按钮组 */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={scrollToWorks}
              className="group relative px-8 py-3 border border-accent/40 rounded-full text-accent text-sm tracking-[0.2em] transition-all duration-500 overflow-hidden hover:bg-accent hover:text-white hover:border-accent hover:shadow-lg hover:shadow-accent/25"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                探索作品
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* 底部滚动提示 — 延迟出现 */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 2, duration: 0.8 }, y: { repeat: Infinity, duration: 2, ease: 'easeInOut' } }}
      >
        <FiArrowDown className="text-text-secondary/50" size={20} />
      </motion.div>
    </section>
  )
}
