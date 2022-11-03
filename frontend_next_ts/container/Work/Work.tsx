import { useEffect, useState } from 'react';

import Image from 'next/future/image';
import Link from 'next/link';

import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../layout/wrapper';
import { urlFor, client } from '../../helpers/client';

import style from './Work.module.scss';
import { LoadingRoller } from '../../components/Loading/Loading';

const Work = () => {
  const [ActiveFilter, setActiveFilter] = useState<string>('All');
  const [AnimateCard, setAnimateCard] = useState<any>({ y: 0, opacity: 1 });
  const [Works, setWorks] = useState<any | undefined>();
  const [FilterWork, setFilterWork] = useState<any | undefined>();
  const [LoadingPortfolio, setLoadingPortfolio] = useState<boolean>(true);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      console.log('data', data);

      setWorks(data);
      setFilterWork(data);
      setLoadingPortfolio(false);
    });
  }, []);

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === 'All') {
        setFilterWork(Works);
      } else {
        setFilterWork(Works.filter((work: any) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div id='work' className=' app__flex'>
      <h2 className='head-text'>
        My Creative <span>Portfolio</span>
      </h2>
      <div className={style.app__work_filter}>
        {!LoadingPortfolio && (
          <>
            {['All', 'UI/UX', 'Web App', 'React'].map((work) => (
              <div
                key={work}
                className={`app__flex p-text ${style.app__work_filter_item} ${
                  ActiveFilter === work ? style.item_active : ''
                }`}
                onClick={() => handleWorkFilter(work)}
              >
                {work}
              </div>
            ))}
          </>
        )}
      </div>

      {LoadingPortfolio ? (
        <LoadingRoller />
      ) : (
        <>
          {FilterWork && (
            <motion.div
              animate={AnimateCard}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              className={style.app__work_portfolio}
              whileInView={{
                opacity: [0, 1],
                y: [100, 0],
              }}
            >
              {FilterWork.map((work: any, i: number) => (
                <div
                  key={work.title + i}
                  className={`app__flex ${style.app__work_item}`}
                >
                  <div className={`app__flex ${style.app__work_img}`}>
                    <Image src={urlFor(work.imgUrl)} alt={work.title} />
                    <motion.div
                      whileHover={{ opacity: [0, 1] }}
                      transition={{
                        duration: 0.25,
                        ease: 'easeInOut',
                        staggerChildren: 0,
                      }}
                      className={`app__flex flex__row ${style.app__work_hover}`}
                    >
                      {work.projectLink && (
                        <Link href={work.projectLink} passHref>
                          <a target='_blank'>
                            <motion.div
                              whileHover={{
                                opacity: [0.3, 1],
                              }}
                              transition={{
                                duration: 0.1,
                                ease: 'easeInOut',
                                // staggerChildren: 0,
                              }}
                              className={`app__flex`}
                            >
                              <AiFillEye />
                            </motion.div>
                          </a>
                        </Link>
                      )}
                      {work.codeLink && (
                        <Link href={work.codeLink} passHref>
                          <a target='_blank'>
                            <motion.div
                              whileInView={{
                                scale: [0.3, 1],
                              }}
                              whileHover={{
                                opacity: [0.3, 1],
                              }}
                              transition={{
                                duration: 0.1,
                                ease: 'easeInOut',
                                // staggerChildren: 0,
                              }}
                              className={`app__flex`}
                            >
                              <AiFillGithub />
                            </motion.div>
                          </a>
                        </Link>
                      )}
                    </motion.div>
                  </div>
                  <div className={`app__flex ${style.app__work_content}`}>
                    <h4 className='bold-text'>{work.title}</h4>
                    <p className='p-text'>{work.description}</p>`
                    <div className={`app__flex ${style.app__work_tag}`}>
                      <p className='p-text'>{work.tags[0]}</p>
                    </div>
                    `
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </>
      )}
    </div>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg'
);
