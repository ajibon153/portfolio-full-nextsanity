import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import style from './About.module.scss';

import { AppWrap, MotionWrap } from '../../layout/wrapper';
import { urlFor, client } from '../../helpers/client';
import { LoadingRoller } from '../../components/Loading/Loading';

const About = () => {
  const [Abouts, setAbouts] = useState<any | undefined>([]);
  const [LoadingAbouts, setLoadingAbouts] = useState<boolean>(true);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data: any) => {
      setAbouts(data);
      setLoadingAbouts(false);
    });
  }, []);

  return (
    <div id='about' className='app__flex' style={{ background: 'white' }}>
      <h2 className='head-text'>
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className={style.app__profiles}>
        {LoadingAbouts ? (
          <LoadingRoller />
        ) : (
          <>
            {Abouts.map((about: any, index: number) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, type: 'tween' }}
                className={style.app__profile_item}
                key={about.title + index}
              >
                <img src={urlFor(about.imgUrl)} alt={about.title} />
                <h2 className='bold-text' style={{ marginTop: 20 }}>
                  {about.title}
                </h2>
                <p className='p-text' style={{ marginTop: 10 }}>
                  {about.description}
                </p>
              </motion.div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
