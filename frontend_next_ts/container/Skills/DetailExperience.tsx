import React from 'react';
import style from './Skills.module.scss';
import { urlFor } from '../../helpers/client';

export default function DetailExperience(props: any) {
  const { exp, Skills } = props;

  if (!exp) return;
  return (
    <div className={style.app__skills_exp_pop}>
      <div className={style.app__skills_exp_pop_div}>
        <h3>{exp.company}</h3>
      </div>
      <div className={style.app__skills_exp_pop_div}>
        <p>{exp.name}</p>
        <p className='p-text' style={{ fontSize: 12 }}>
          {exp.start} - {exp.present ? 'Present' : exp.end} ({exp.experience})
        </p>
      </div>
      <div className={style.app__skills_exp_pop_div}>
        <h4>Job Description</h4>
        <ul>
          {exp.description.map((jobdesk: any) => {
            if (jobdesk !== '')
              return (
                <li key={jobdesk}>
                  <p>{jobdesk}</p>
                </li>
              );
          })}
        </ul>
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
  );
}
