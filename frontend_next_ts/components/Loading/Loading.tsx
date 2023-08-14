import style from './Loading.module.scss';
import { motion } from 'framer-motion';

const LoadingRoller = () => {
  return (
    <motion.div
      className={style.lds__roller}
      variants={{
        open: {
          opacity: 1,
        },
        closed: {
          opacity: 0,
        },
      }}
      transition={{ ease: 'easeInOut', duration: 0.1 }}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </motion.div>
  );
};

export { LoadingRoller };
