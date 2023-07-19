import { motion } from 'framer-motion';

const MotionWrap = (Component: any, classNames: string | undefined = '') =>
  function HOC(props: any) {
    // console.log('MotionWrap', props);

    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${classNames} app__flex`}
      >
        <Component {...props} />
      </motion.div>
    );
  };

export default MotionWrap;
