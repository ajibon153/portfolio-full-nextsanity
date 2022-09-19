import { motion } from 'framer-motion';
import Image from 'next/future/image';

import { images } from '../../constants';
import style from './Header.module.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <div
      id={'#home'}
      className={`${style.app__header} ${style.app__flex} ${style.home}`}
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={style.app__header_info}
      >
        <div className={style.app__header_badge}>
          <div className={`app__flex badge_cmp`}>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className={`p-text`}> Hello, I am</p>
              <h1 className='head-text'>Aji M. Fauji</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className={`p-text`}> Web Developer</p>
            <p className={`p-text`}> Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={style.app__header_img}
      >
        <Image src={images.profile} alt='profile-img' />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile-circle'
          className='overlay__circle'
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={style.app__header_circles}
      >
        {[images.flutter, images.redux, images.sass].map((circle, i) => (
          <div className='circle-cmp app__flex' key={`circle-${i}`}>
            <Image src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
