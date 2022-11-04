import { motion } from 'framer-motion';
import { urlFor } from '../../helpers/client';
import { capitalizeFirstLetter } from '../../utility/text';
import { LoadingRoller } from '../../components/Loading/Loading';
import style from './Skills.module.scss';
import { useData } from '../../helpers/api';

const Skills = (props: any) => {
  const { IsLoading, Skills } = props;

  // const { data, isLoading, isFetching } = useData('skill');

  // console.log('data skil', data);

  return (
    <motion.div
      whileInView={{
        opacity: [0, 1],
      }}
      transition={{ duration: 0.5 }}
      className={style.app__skills_list}
    >
      {IsLoading ? (
        <LoadingRoller />
      ) : (
        <>
          {Skills.map((skills: any, i: number) => (
            <div
              className=''
              style={{ width: '100%', margin: '2rem 0' }}
              key={skills.groupName + i}
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
            </div>
          ))}
        </>
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
      <p className='p-text'>{skill.name}</p>
    </motion.div>
  );
};

export default Skills;
export { SkillIcon };
