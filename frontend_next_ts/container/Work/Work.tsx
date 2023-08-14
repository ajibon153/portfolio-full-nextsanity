import { useEffect, useState } from 'react';
import Link from 'next/link';

import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../layout/wrapper';
import { urlFor, client } from '../../helpers/client';

import style from './Work.module.scss';
import { LoadingRoller } from '../../components/Loading/Loading';
import WorkItem from './WorkItem';
import WorkPop from './WorkPop';

const Work = (props: any) => {
  const [ActiveFilter, setActiveFilter] = useState<string>('All');
  const [AnimateCard, setAnimateCard] = useState<any>({ y: 0, opacity: 1 });
  const [Works, setWorks] = useState<any | undefined>();
  const [FilterWork, setFilterWork] = useState<any | undefined>();
  const [LoadingPortfolio, setLoadingPortfolio] = useState<boolean>(true);
  const [PopImage, setPopImage] = useState<boolean>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [Change, setChange] = useState<boolean>(false);

  const { setPortfolio } = props;

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      console.log('data work', data);
      setPortfolio(data);
      setWorks(data);
      setFilterWork(data);
      setLoadingPortfolio(false);
    });
  }, []);

  const handleWorkFilter = async (item: string) => {
    console.log('item', item);

    setActiveFilter(item);
    setChange(false);
    setAnimateCard({ y: 100, opacity: 0 });
    await setTimeout(() => {
      setLoadingPortfolio(true);
    }, 500);

    await setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      if (item === 'All') {
        setFilterWork(Works);
      } else {
        setFilterWork(Works.filter((work: any) => work?.tags?.includes(item)));
      }
      setLoadingPortfolio(false);
      setChange(true);
    }, 700);
  };

  return (
    <div id='work' className=' app__flex'>
      <h2 className='head-text'>
        My Creative <span>Portfolio</span>
      </h2>
      <div className={style.app__work_filter}>
        {/* {!LoadingPortfolio && ( */}
        <>
          {['All', 'React', 'Design', 'Mobile', 'Other'].map((work) => (
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
        {/* )} */}
      </div>

      {LoadingPortfolio ? (
        <LoadingRoller />
      ) : (
        <>
          {FilterWork && (
            <motion.ul
              className={style.app__work_portfolio}
              variants={{
                open: {
                  transition: {
                    staggerChildren: 0.07,
                    // delayChildren: 0.2
                  },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
              // animate={Change ? 'closed' : 'open'}
              // transition={{ ease: 'easeInOut', duration: 1, delayChildren: 1 }}
              // initial={{ opacity: 0, y: 100 }}
              // whileInView={{
              //   opacity: [0, 1],
              //   y: [100, 0],
              // }}
              // variants={{
              //   open: {
              //     opacity: 1,
              //     y: 0,
              //   },
              //   closed: {
              //     opacity: 0,
              //     y: 100,
              //   },
              // }}
            >
              {FilterWork.map((work: any, i: number) => (
                <WorkItem
                  work={work}
                  Change={Change}
                  setIsOpen={setIsOpen}
                  setPopImage={setPopImage}
                  index={i}
                />
              ))}
            </motion.ul>
          )}
        </>
      )}
      <WorkPop
        isOpen={isOpen}
        PopImage={PopImage}
        setPopImage={setPopImage}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg'
);
