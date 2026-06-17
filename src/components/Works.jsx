import { motion } from 'framer-motion'

// 作品数据
const WORKS = [
  {
    img: '/images/微信图片_2026-06-17_100456_612.jpg',
    title: '生日vlog',
    desc: '记录特别的一天，用镜头捕捉温暖的瞬间',
  },
  {
    img: '/images/微信图片_2026-06-17_100500_606.jpg',
    title: '独居vlog',
    desc: '一个人的生活，也可以丰盛而有趣',
  },
  {
    img: '/images/微信图片_2026-06-17_100503_919.jpg',
    title: '跨小年vlog',
    desc: '节日里的烟火气，与朋友一起迎接新年',
  },
  {
    img: '/images/微信图片_2026-06-17_100507_472.jpg',
    title: '《生活在树上vlog》',
    desc: '自然、自由、自在 — 一段关于逃离城市的记录',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: 'easeOut' },
}

export default function Works() {
  return (
    <section id="works" className="py-28 lg:py-40">
      <div className="section-container">
        {/* 标题区 */}
        <motion.div {...fadeInUp} className="mb-16 lg:mb-24">
          <p className="text-accent/60 text-xs tracking-[0.3em] mb-4 font-light">
            SELECTED WORKS
          </p>
          <h2 className="section-title">我的作品</h2>
          <p className="section-subtitle max-w-2xl">
            每一个项目都是一次探索的旅程。专注于创造具有持久价值的作品，
            在细节中追求极致，在简约中传递力量。
          </p>
        </motion.div>

        {/* 个人简介卡片 */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.15 }}
          className="card p-8 lg:p-12 mb-16 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start"
        >
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/30 to-accent/5 flex items-center justify-center border border-accent/20">
              <span className="text-accent text-2xl font-light">陈</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl lg:text-2xl font-light tracking-wide text-text-primary mb-4">
              关于我
            </h3>
            <p className="text-text-secondary leading-relaxed text-sm lg:text-base max-w-3xl">
              我是一名热爱创意与技术的创作者，热爱探索生活中一切浪漫的事物，并通过技术实现脑海里天马行空的想法。这里展示了我近期的部分作品，希望它们能传递出我的审美与态度。
            </p>
            <div className="flex gap-6 mt-6 text-xs tracking-[0.2em] text-text-secondary">
              <span>设计</span>
              <span className="text-border-subtle">|</span>
              <span>摄影</span>
              <span className="text-border-subtle">|</span>
              <span>创意</span>
            </div>
          </div>
        </motion.div>

        {/* 作品卡片网格 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {WORKS.map((work, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 * i }}
              className="card group cursor-pointer"
            >
              {/* 图片区 */}
              <div className="relative aspect-[4/3] overflow-hidden bg-bg-card">
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* 悬停叠层 */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              {/* 文字区 */}
              <div className="p-6 lg:p-8">
                <h3 className="text-lg lg:text-xl font-light tracking-wide text-text-primary mb-2">
                  {work.title}
                </h3>
                <p className="text-sm text-text-secondary font-light tracking-wider">
                  {work.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
