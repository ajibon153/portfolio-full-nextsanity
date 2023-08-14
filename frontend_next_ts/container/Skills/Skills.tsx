import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { urlFor } from '../../helpers/client';
import { capitalizeFirstLetter } from '../../utility/text';
import { LoadingRoller } from '../../components/Loading/Loading';
import style from './Skills.module.scss';
import { useData } from '../../helpers/api';

const variantBox = {
  hidden: { opacity: 0, top: -100 },
  show: { opacity: 1, top: 0 },
};

const Skills = (props: any) => {
  const { IsLoading, Skills } = props;
  const [SeeMore, setSeeMore] = React.useState(false);
  // const { data, isLoading, isFetching } = useData('skill');

  // console.log('data skil', Skills);

  return (
    <motion.div
      whileInView={{
        opacity: [0, 1],
      }}
      transition={{ duration: 0.5 }}
      className={style.app__skills_list}
      id='skills'
    >
      {IsLoading ? (
        <LoadingRoller />
      ) : (
        <AnimatePresence>
          <motion.div
            layout
            initial={{ width: '100%', height: 800 }}
            style={{ overflow: 'hidden' }}
            data-isOpen={SeeMore}
            animate={{ height: 'auto' }}
            transition={{ duration: 0.4 }}
            exit={{ height: 800 }}
            // id='skills'
          >
            <motion.div layout id={'listskill'}>
              {Skills.groupSkill &&
                Skills.groupSkill.map((skills: any, i: number) => {
                  if (!SeeMore && i > 1) {
                    return;
                  } else
                    return (
                      <motion.div
                        id={'skill' + i}
                        className=''
                        style={{ width: '100%', margin: '2rem 0' }}
                        key={skills.groupName + i}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        variants={variantBox}
                      >
                        <h4 className='bold-text' style={{ margin: '1rem' }}>
                          {capitalizeFirstLetter(skills.groupName)}
                        </h4>
                        <div className={`app__flex ${style.app__skill_group}`}>
                          {skills.value.map((skill: any, i: number) => {
                            if (!skill.hidden)
                              return (
                                <SkillIcon
                                  key={skills.groupName + skill.name + i}
                                  skill={skill}
                                />
                              );
                          })}
                        </div>
                      </motion.div>
                    );
                })}
            </motion.div>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              // setTimeout(() => {
              setSeeMore(!SeeMore);
              // }, 100);
            }}
            style={{ border: 'none', background: 'none' }}
            id={'btnskill'}
          >
            <a
              className={style.buttonSeeMore}
              href={SeeMore ? null : '#skill1'}
            >
              See {SeeMore ? 'Less' : 'More'}
            </a>
          </motion.button>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

const SkillIcon = (props: any) => {
  const { skill } = props;

  return (
    <motion.div
      whileInView={{
        opacity: [0, 1],
      }}
      transition={{
        duration: 0.5,
      }}
      className={`${style.app__skills_item} app__flex`}
    >
      <div
        className='app__flex'
        style={{
          backgroundColor: skill.bgColor,
          boxShadow: '5px 5px 10px rgb(0 0 0 / 20%)',
        }}
      >
        <img src={urlFor(skill.icon)} alt={skill.name} width={50} />
      </div>
      <p className='p-text' style={{ height: 30 }}>
        {skill.name}
      </p>
    </motion.div>
  );
};

export default Skills;
export { SkillIcon };
