import { useEffect, useState } from 'react';
import Link from 'next/link';

import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../layout/wrapper';
import { urlFor, client } from '../../helpers/client';

import style from './Work.module.scss';
import { LoadingRoller } from '../../components/Loading/Loading';

const WorkItem = (props: any) => {
  const { AnimateCard, FilterWork, LoadingPortfolio } = props;

  return (
    <>
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
                    <img src={urlFor(work.imgUrl)} alt={work.title} />
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
                    <p className='p-text'>{work.description}</p>
                    {work.tags && (
                      <div className={`app__flex ${style.app__work_tag}`}>
                        <p className='p-text'>{work.tags[0]}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </>
      )}
    </>
  );
};

export default WorkItem;
