import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlay } from 'react-icons/fi'

// 每个视频可以是字符串（本地文件路径）或 { name, url } 对象（外部链接）
const CATEGORIES = [
  {
    key: 'Vlog',
    label: 'Vlog',
    subtitle: '生活记录',
    videos: [
      { name: '南昌行vlog', file: 'Vlog/南昌行vlog.mp4' },
    ],
    largeVideos: [
      { name: '陈子君的20岁vlog', url: '' },
      { name: '陈子君的独居vlog', url: '' },
      { name: '和朋友跨小年vlog', url: '' },
      { name: '生活在树上vlog', url: '' },
      { name: '时间的意义vlog', url: '' },
    ],
  },
  {
    key: '短视频',
    label: '短视频',
    subtitle: '创意短片',
    videos: [
      { name: '凯撒', file: '短视频/凯撒.mp4' },
      { name: '凯撒光剑', file: '短视频/凯撒光剑.mp4' },
      { name: '极狐', file: '短视频/极狐.mp4' },
      { name: '武神之刃', file: '短视频/武神之刃.mp4' },
      { name: '练剑1', file: '短视频/练剑1.mp4' },
      { name: '练剑2', file: '短视频/练剑2.mp4' },
      { name: '读诗', file: '短视频/读诗.mp4' },
      { name: '超兽武装', file: '短视频/超兽武装.mp4' },
    ],
  },
  {
    key: '音乐',
    label: '音乐',
    subtitle: '旋律瞬间',
    videos: [
      { name: '《Una Mattina》', file: '音乐/《Una Mattina》.mp4' },
      { name: '《告白气球》前奏', file: '音乐/《告白气球》前奏.mp4' },
      { name: '《江南》', file: '音乐/《江南》.mp4' },
    ],
    largeVideos: [
      { name: '《梦中的婚礼》', url: '' },
    ],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

function VideoCard({ src, index }) {
  const displayName = src.name || src.file?.replace(/\.mp4$/i, '') || ''
  // 本地文件用 /videos/ 路径，外部链接直接用 url
  const videoSrc = src.file ? `/videos/${encodeURIComponent(src.file)}` : (src.url || '')

  return (
    <motion.div
      {...fadeInUp}
      transition={{ ...fadeInUp.transition, delay: 0.08 * index }}
      className="card group"
    >
      <div className="relative aspect-video bg-black">
        {videoSrc ? (
          <video
            src={videoSrc}
            className="w-full h-full"
            preload="metadata"
            controls
            playsInline
            crossOrigin="anonymous"
          >
            您的浏览器不支持视频播放
          </video>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-text-secondary/40 text-sm">
            即将上线
          </div>
        )}
      </div>
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
  const allVideos = activeCategory
    ? [...activeCategory.videos, ...(activeCategory.largeVideos || [])]
    : []

  return (
    <section id="videos" className="py-28 lg:py-40">
      <div className="section-container">
        <motion.div {...fadeInUp} className="mb-16 lg:mb-24">
          <p className="text-accent/60 text-xs tracking-[0.3em] mb-4 font-light">
            VIDEO GALLERY
          </p>
          <h2 className="section-title">视频作品</h2>
          <p className="section-subtitle max-w-2xl">
            我留不住时间，于是记录
          </p>
        </motion.div>

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
                {cat.videos.length + (cat.largeVideos?.length || 0)}
              </span>
            </button>
          ))}
        </div>

        {activeCategory && (
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-text-secondary/60 text-xs tracking-[0.2em] mb-8 font-light"
          >
            {activeCategory.label} · {activeCategory.subtitle} ·{' '}
            {allVideos.length} 个视频
          </motion.p>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          >
            {allVideos.map((video, i) => (
              <VideoCard
                key={video.name || video.file}
                src={video}
                index={i}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
