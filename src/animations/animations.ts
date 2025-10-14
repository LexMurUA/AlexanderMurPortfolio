import { type Variants, motion } from "framer-motion";

export const variantsProject: Variants = {
  initial: { opacity: 0, x: -50 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

