import React from 'react'
import { Popular, Vegan } from "../components";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div 
      animate={{ opacity: 1}}
      initial={{ opacity: 0}}
      exit={{ opacity: 0}}
      transition={{ duration: 0.5 }}
    >
        <Popular />
        <Vegan />
    </motion.div>
  )
}

export default Home