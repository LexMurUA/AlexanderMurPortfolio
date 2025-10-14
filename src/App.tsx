import { type Variants, motion } from "framer-motion"
import './App.css'
import { Footer } from './layout/Footer/Footer'
import { Header } from './layout/Header/Header'
import { Main } from './layout/Main/Main'



function App() {
  const variantsMain: Variants = {
    initial: { opacity: 0, y: 50 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },

  }

  return (
    <motion.div variants={variantsMain} initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}>
      <Header />
      <Main />
      <Footer />
    </motion.div>
  )
}

export default App
