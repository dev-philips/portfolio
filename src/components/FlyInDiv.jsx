import React from 'react'
import { motion } from 'framer-motion'

const FlyInDiv = ({ children, direction = 'bottom', delay = 0, once = true, className = '', ...props }) => {

  const directions = {
    bottom: { y: 80, x: 0 },
    left: { x: -80, y: 0 },
    right: { x: 80, y: 0 },
  }

  const initial = { opacity: 0, ...directions[direction] }

  return (

    <motion.div initial={initial} whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once, amount: 0.3 }}
    transition={{
      duration: 0.6,
      delay,
      ease: 'easeOut'
    }}
    style={{ willChange: 'transform, opacity' }}
    className={className}
    {...props}
    >
      { children }
    </motion.div>
  )
}

export default FlyInDiv