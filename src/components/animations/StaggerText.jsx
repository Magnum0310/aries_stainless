import { motion } from "framer-motion";

const StaggerText = ({ text, className, delay }) => {
  const defaultVariant = {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        delay: delay,
      },
    },
  };
  return (
    <div className={className}>
      <motion.span
        initial="initial"
        animate="animate"
        transition={{
          delayChildren: 0.2,
          staggerChildren: 0.2,
        }}
      >
        {text.split("").map((char) => (
          <motion.span className="inline-block" variants={defaultVariant}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
};

export default StaggerText;
