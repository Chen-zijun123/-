import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlay } from 'react-icons/fi'

const CATEGORIES = [
  {
    key: 'Vlog',
    label: 'Vlog',
    subtitle: '生活记录',
    videos: [
      '陈子君的20岁vlog.mp4',
      '陈子君的独居vlog.mp4',
      '和朋友跨小年vlog.mp4',
      '生活在树上vlog.mp4',
      '南昌行vlog.mp4',
      '时间的意义vlog.mp4',
    ],
  },
  {
    key: '短视频',
    label: '短视频',
    subtitle: '创意短片',
    videos: [
      '凯撒.mp4',
      '凯撒光剑.mp4',
      '极狐.mp4',
      '武神之刃.mp4',
      '练剑1.mp4',
      '练剑2.mp4',
      '读诗.mp4',
      '超兽武装.mp4',
    ],
  },
  {
    key: '音乐',
    label: '音乐',
    subtitle: '旋律瞬间',
    videos: [
      '《Una Mattina》.mp4',
      '《告白气球》前奏.mp4',
      '《梦中的婚礼》.mp4',
      '《江南》.mp4',
    ],
  },
]

const VIDEO_BASE = 'https://github.com/Chen-zijun123/-/releases/download/v1.0'
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

function VideoCard({ src, index, category }) {
  // 去掉 .mp4 后缀作为显示名
  const displayName = src.replace(/\.mp4$/i, '')

  return (
    <motion.div
      {...fadeInUp}
      transition={{ ...fadeInUp.transition, delay: 0.08 * index }}
      className="card group"
    >
      {/* 视频播放区 */}
      <div className="relative aspect-video bg-black">
        <video
          src={`${VIDEO_BASE}/${encodeURIComponent(src)}`}
          className="w-full h-full"
          preload="metadata"
          controls
          playsInline
          crossOrigin="anonymous"
        >
          您的浏览器不支持视频播放
        </video>
      </div>
      {/* 视频名 */}
      <div className="p-4 flex items-center gap-3">
        <FiPlay size={14} className="text-accent/60 flex-shrink-0" />
        <span className="text-sm text-text-secondary font-light tracking-wider truncate">
          {displayName}
        </span>
      </div>
    </motion.div>
  )
}

export default function Videos() {
  const [activeTab, setActiveTab] = useState('Vlog')
  const activeCategory = CATEGORIES.find((c) => c.key === activeTab)

  return (
    <section id="videos" className="py-28 lg:py-40">
      <div className="section-container">
        {/* 标题区 */}
        <motion.div {...fadeInUp} className="mb-16 lg:mb-24">
          <p className="text-accent/60 text-xs tracking-[0.3em] mb-4 font-light">
            VIDEO GALLERY
          </p>
          <h2 className="section-title">视频作品</h2>
          <p className="section-subtitle max-w-2xl">
            我留不住时间，于是记录
          </p>
        </motion.div>

        {/* 分类 Tab */}
        <div className="flex flex-wrap items-center gap-4 mb-12 lg:mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`relative px-6 py-2.5 rounded-full text-sm tracking-[0.15em] transition-all duration-500 ${
                activeTab === cat.key
                  ? 'bg-accent/15 border border-accent/40 text-accent'
                  : 'border border-border-subtle text-text-secondary hover:text-text-primary hover:border-text-secondary'
              }`}
            >
              {cat.label}
              <span className="ml-2 text-xs opacity-50">
                {cat.videos.length}
              </span>
            </button>
          ))}
        </div>

        {/* 当前分类标题 */}
        {activeCategory && (
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-text-secondary/60 text-xs tracking-[0.2em] mb-8 font-light"
          >
            {activeCategory.label} · {activeCategory.subtitle} ·{' '}
            {activeCategory.videos.length} 个视频
          </motion.p>
        )}

        {/* 视频网格 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          >
            {activeCategory?.videos.map((video, i) => (
              <VideoCard
                key={video}
                src={video}
                index={i}
                category={activeCategory.key}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
