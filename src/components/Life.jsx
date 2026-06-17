import { motion } from 'framer-motion'

// 生活照片（未用于Hero和作品的照片）
const LIFE_PHOTOS = [
  '/images/微信图片_2026-06-17_100427_354.jpg',
  '/images/微信图片_2026-06-17_100442_260.jpg',
  '/images/微信图片_2026-06-17_100514_123.jpg',
  '/images/微信图片_2026-06-17_100517_410.jpg',
  '/images/微信图片_2026-06-17_100537_280.jpg',
  '/images/微信图片_2026-06-17_100541_989.jpg',
  '/images/微信图片_2026-06-17_100545_898.jpg',
  '/images/微信图片_2026-06-17_100556_375.jpg',
  '/images/微信图片_2026-06-17_100601_318.jpg',
  '/images/微信图片_2026-06-17_100604_361.jpg',
  '/images/微信图片_2026-06-17_100614_477.jpg',
  '/images/微信图片_20260617102311_38_2.jpg',
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function Life() {
  return (
    <section id="life" className="py-28 lg:py-40 bg-[#08080d]">
      <div className="section-container">
        {/* 标题区 */}
        <motion.div {...fadeInUp} className="mb-16 lg:mb-24">
          <p className="text-accent/60 text-xs tracking-[0.3em] mb-4 font-light">
            LIFE MOMENTS
          </p>
          <h2 className="section-title">生活瞬间</h2>
          <p className="section-subtitle max-w-2xl">
            镜头下的碎片时光，记录那些值得被记住的瞬间。
          </p>
        </motion.div>

        {/* 照片网格 — PC端4列 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {LIFE_PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.06 * i }}
              className={`card group cursor-pointer ${
                i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className="relative aspect-square overflow-hidden bg-bg-card">
                <img
                  src={photo}
                  alt={`生活瞬间 ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* 悬停暗层 */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-white/80 text-xs tracking-wider font-light">
                    瞬间 {i + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
