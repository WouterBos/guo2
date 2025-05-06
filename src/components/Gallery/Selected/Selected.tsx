"use client";

import css from "./Selected.module.css";
import { AnimatePresence, motion } from "framer-motion";

export const Selected: React.FC<{ code: string; description: string }> = ({ code, description }) => {
  const variants = {
    visible: { opacity: 1, transition: { duration: .3 } },
    hidden: { opacity: 0, transition: { duration: .1 } }
  }

  return (
    <div className={css.selected}>
      <AnimatePresence mode="wait">
        <motion.div
          key={code}
          initial={variants.hidden}
          animate={variants.visible}
          exit={variants.hidden}
          style={{ width: 'fit-content', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <img src={`/groetenuitoss/photos/${code}.avif`} alt={description} />
          <div className={css.description}>
            <span>{description}</span>
            <div>{code}</div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Selected;
