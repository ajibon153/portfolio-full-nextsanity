import { motion } from 'framer-motion';
import Image from 'next/future/image';

import { AppWrap } from '../../layout/wrapper';
import { images } from '../../constants';
import style from './Header.module.scss';
import { useEffect } from 'react';
import { useWindowSize } from '../../utility/window';

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
  let windowSize: any = useWindowSize();
  // console.log('window', window);

  return (
    <div id={'home'} className={`${style.app__header} app__flex ${style.home}`}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={style.app__header_info}
      >
        <div className={style.app__header_badge}>
          <div className={`app__flex ${style.badge__cmp}`}>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className={`p-text`}> Hello, I am</p>
              <h1 className='head-text'>
                Aji
                {/* M. Fauji */}
              </h1>
            </div>
          </div>

          <div className={`${style.tag__cmp} app__flex`}>
            <p className={`p-text`}>
              Experience as a Frontend Developer more than 4 years, focused on
              Javascript Framework. A good critical thinker, Fast learner, and
              passionate on graphic design.
            </p>
            {/* <p className={`p-text`}> React.js & Native</p> */}
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={style.app__header_img}
      >
        <Image src={images.profile} alt='profile-img' />
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          // src={images.circle}
          // alt='profile-circle'
          className={style.overlay__circle}
        >
          <Image
            src={images.circle}
            alt='profile-circle'
            // layout={'fill'}
            // className='overlay__circle'
          />
        </motion.div>
      </motion.div>
      {/* {windowSize.width > 1000 && ( */}
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={style.app__header_circles}
      >
        {[images.redux, images.react, images.git].map((circle, i) => (
          <div className='circle-cmp app__flex' key={`circle-${i}`}>
            <Image src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>
      {/* )} */}
    </div>
  );
};

export default AppWrap(Header, 'home');
