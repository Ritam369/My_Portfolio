import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

const Dock = ({ children, className }) => {
  return (
    <motion.div
      className={cn(
        "flex h-16 gap-4 rounded-2xl border border-white/10 dark:border-white/10 px-4 shadow-lg bg-white/5 dark:bg-black/5",
        className
      )}
      style={{
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
      }}
    >
      {children}
    </motion.div>
  )
}

const DockIcon = ({ children, className }) => {
  const ref = useRef(null)
  const mouseX = useMotionValue(Infinity)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [48, 64, 48])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={cn("flex items-center justify-center relative", className)}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {children}
    </motion.div>
  )
}

export { Dock, DockIcon }
