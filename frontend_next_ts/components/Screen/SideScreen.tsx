import React from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import style from './Screen.module.scss';

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

function SideScreen(props: any) {
  const { children, toggle, data } = props;

  return (
    <motion.aside
      className={style.asside}
      initial={{
        width: 0,
        backgroundColor: 'transparent',
        position: 'fixed',
        opacity: 0,
      }}
      animate={{
        width: '100%',
        height: '100vh',
        zIndex: 10,
        backgroundColor: 'black',
        position: 'fixed',
        opacity: 0.1,
      }}
      exit={{
        width: 0,
        opacity: 0,
        transition: { delay: 1, duration: 0.3 },
        height: '100vh',
        position: 'fixed',
        zIndex: -10,
      }}
      onClick={() => toggle()}
    >
      <motion.div
        className={style.container}
        initial='closed'
        animate='open'
        exit='closed'
        variants={sideVariants}
      >
        <p>TEST</p>
        {/* {children} */}
        {/* {links.map(({ name, to, id }) => (
          <motion.a
            key={id}
            href={to}
            whileHover={{ scale: 1.1 }}
            variants={itemVariants}
          >
            {name}
          </motion.a>
        ))} */}
      </motion.div>
    </motion.aside>
  );
}

export default SideScreen;
