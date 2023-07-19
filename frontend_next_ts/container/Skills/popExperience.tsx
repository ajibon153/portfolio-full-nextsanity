import React from 'react';

import style from './Skills.module.scss';

import { motion, AnimatePresence } from 'framer-motion';
import { SkillIcon } from './Skills';
import { urlFor } from '../../helpers/client';

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

function PopExperience(props: any) {
  const { exp, Skills } = props;
  return (
    <AnimatePresence>
      <>
        <div className={style.app__skills_exp_pop}>
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
            <motion.ul
              variants={ulVariants}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  y: { stiffness: 1000, velocity: -100 },
                },
              }}
              exit={{
                y: 50,
                opacity: 0,
                transition: {
                  y: { stiffness: 1000 },
                },
              }}
            >
              {exp.description.map((jobdesk: any) => {
                if (jobdesk !== '')
                  return (
                    <motion.li
                      variants={liVariants}
                      // whileHover={{ scale: 1.02 }}
                      // whileTap={{ scale: 0.95 }}
                      key={jobdesk}
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
              {exp.skills.map((skill: any) => {
                let foundSkill = Skills.pureSkill.find(
                  (pure: any) => pure._id === skill._ref
                );

                return (
                  <div className={` app__flex ${style.app__skill_tech}`}>
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
                  </div>
                );
                // <SkillIcon skill={skill} />
              })}
            </div>
          </div>
        </div>
      </>
    </AnimatePresence>
  );
}

export default PopExperience;
