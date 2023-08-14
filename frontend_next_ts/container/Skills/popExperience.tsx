import React from 'react';

import style from './Skills.module.scss';

import { motion, AnimatePresence } from 'framer-motion';
import { SkillIcon } from './Skills';
import { urlFor } from '../../helpers/client';
import WorkItem from '../Work/WorkItem';
import { log } from 'console';
import WorkPop from '../Work/WorkPop';

const ulVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.07, staggerDirection: -1 },
  },
};

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      delay: 1,
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const WrapperDiv = (props: any) => {
  const { className, style, children, delay = 0, left, top } = props;

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ x: left ? '110%' : 0, y: top ? -100 : 0, opacity: 0 }}
      animate={{
        x: 0,
        y: 0,
        opacity: 1,
      }}
      exit={{
        x: left ? '110%' : 0,
        y: top ? -100 : 0,
        opacity: 1,
      }}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 1,
        delay: 0.4 + parseInt(`0.${delay}`),
      }}
    >
      {children}
    </motion.div>
  );
};

function PopExperience(props: any) {
  const { exp, Skills, Portfolio } = props;

  const [PopImage, setPopImage] = React.useState<boolean>(null);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <AnimatePresence>
      <>
        <motion.div
          className={style.app__skills_exp_pop}
          style={{ padding: 35, paddingBottom: 100, overflowY: 'scroll' }}
          // animate={isOpen ? 'open' : 'closed'}
          initial={false}
        >
          <div className={style.app__skills_exp_pop_div}>
            <h3>{exp.company}</h3>
          </div>
          <div className={style.app__skills_exp_pop_div}>
            <p>{exp.name}</p>
            <p className='p-text' style={{ fontSize: 12 }}>
              {exp.start} - {exp.present ? 'Present' : exp.end} (
              {exp.experience})
            </p>
          </div>
          <div className={style.app__skills_exp_pop_div}>
            <h4>Job Description</h4>{' '}
            <motion.ul variants={ulVariants}>
              {exp.description?.map((jobdesk: any) => {
                if (jobdesk !== '')
                  return (
                    <motion.li
                      variants={liVariants}
                      // whileHover={{ scale: 1.02 }}
                      // whileTap={{ scale: 0.95 }}
                      key={jobdesk}
                      whileHover={{ scale: 1.03 }}
                      style={{ marginBottom: 16 }}
                    >
                      <p>{jobdesk}</p>
                    </motion.li>
                  );
              })}
            </motion.ul>
          </div>
          <div className={style.app__skills_exp_pop_div}>
            <h4>Skill</h4>
            <div className='app__flex flex__row'>
              {exp?.skills?.map((skill: any) => {
                let foundSkill = Skills.pureSkill.find(
                  (pure: any) => pure._id === skill._ref
                );

                return (
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className={` app__flex ${style.app__skill_tech}`}
                  >
                    <div className={`app__flex `}>
                      <img
                        src={urlFor(foundSkill.icon)}
                        alt={foundSkill.name}
                        width={30}
                      />
                    </div>
                    <p className='p-text' style={{ textAlign: 'center' }}>
                      {foundSkill.name}
                    </p>
                  </motion.div>
                );
                // <SkillIcon skill={skill} />
              })}
            </div>
          </div>
          <div className={style.app__skills_exp_pop_div}>
            <h4>Portfolio</h4>
            <div className='app__flex flex__row'>
              {exp?.portfolio?.map((portofolio: any, i: number) => {
                let foundPortofolio = Portfolio.find(
                  (pure: any) => pure._id === portofolio._ref
                );
                return (
                  <WorkItem
                    work={foundPortofolio}
                    setIsOpen={setIsOpen}
                    setPopImage={setPopImage}
                    index={i}
                    pop
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
      </>

      <WorkPop
        isOpen={isOpen}
        PopImage={PopImage}
        setPopImage={setPopImage}
        setIsOpen={setIsOpen}
      />
    </AnimatePresence>
  );
}

export default PopExperience;
