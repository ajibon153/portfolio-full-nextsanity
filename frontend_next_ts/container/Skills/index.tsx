// import { AiFillEye, AiFillGithub } from 'react-icons/ai';
// import ReactTooltip from 'react-tooltip';
import { useEffect, useState } from 'react';
import { QueryClient, useQuery } from '@tanstack/react-query';

import { AppWrap, MotionWrap } from '../../layout/wrapper';

import style from './Skills.module.scss';
import Experience from './Experience';
import Skills from './Skills';
import { getExperienceSkill, getSkillData } from '../../helpers/api';

const Index = (props: any) => {
  const { initialSkill } = props;

  const [IsLoadingExperience, setIsLoadingExperience] =
    useState<boolean>(false);
  const [DataExperiences, setDataExperiences] = useState<any | undefined>([]);

  const [PureSkills, setPureSkills] = useState<any | undefined>([]);
  const [DataSkills, setDataSkills] = useState<any | undefined>([]);
  const [IsLoadingSkills, setIsLoadingSkills] = useState<boolean>(false);

  // console.log('props', props);

  // console.log('initialExperience', initialExperience);

  // useEffect(() => {
  //   async function loadData() {
  //     let skill = await getSkillData();
  //     setDataSkills(skill);
  //     // setIsLoadingExperience(false);

  //     let experience = await getExperienceSkill();
  //     setDataExperiences(experience);
  //     // setIsLoadingSkills(false);
  //   }
  //   // loadData();
  // }, []);

  return (
    <div id='skills' className='app__flex'>
      <h2 className='head-text'>Skills & Experience</h2>

      <div className={style.app__skills_container}>
        <Skills IsLoading={IsLoadingSkills} Skills={DataSkills} />
        <Experience
          IsLoading={IsLoadingExperience}
          Experiences={DataExperiences}
        />
      </div>
    </div>
  );
};

// export async function getServerSideProps() {
//   return {
//     props: {
//       initialSkill: await getSkillData(),
//       initialExperience: await getExperienceSkill(),
//     },
//   };
// }

export async function getStaticProps() {
  const queryClient = new QueryClient();

  // let initialSkill = await getSkillData();
  // console.log('initialSkill', initialSkill);

  let initialSkill = await queryClient.prefetchQuery(['skill'], getSkillData);
  return {
    props: {
      initialSkill,
      // initialExperience,
    },
  };
}

// export default AppWrap(Skill, 'skills');
export default AppWrap(
  MotionWrap(Index, 'app__skills'),
  'skills',
  'app__whitebg'
);
