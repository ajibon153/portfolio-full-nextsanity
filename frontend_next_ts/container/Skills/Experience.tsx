import { motion } from 'framer-motion';
import { LoadingRoller } from '../../components/Loading/Loading';
import { MdOutlineOpenInNew } from 'react-icons/md';
import style from './Skills.module.scss';
import swal from '@sweetalert/with-react';
import { SkillIcon } from './Skills';
import { urlFor } from '../../helpers/client';
import PopExperience from './popExperience';

// import { capitalizeFirstLetter } from '../../utility/text';
// import { dateToIndonesia } from '../../utility/dateParse';

const Experience = (props: any) => {
  const { IsLoading, Experiences, Skills, toggle, Portfolio } = props;
  // console.log('toggl exp', toggle);
  // console.log('Experiences', Experiences);
  // console.log('Skills', Skills);
  console.log('porto Experience', Portfolio);

  const HandlePopUp = (exp: any) => {
    // console.log('exp', exp);

    swal({
      buttons: false,
      content: (
        <PopExperience Skills={Skills} exp={exp} Portfolio={Portfolio} />
      ),
    });
  };

  return (
    <div
      className={style.app__skills_exp}
      style={IsLoading ? { alignItems: 'center' } : { marginTop: '2rem' }}
    >
      {IsLoading ? (
        <LoadingRoller />
      ) : (
        <>
          {Experiences
            ? Experiences.map((experience: any, i: number) => (
                <motion.div
                  className={style.app__skills_exp_item}
                  key={'exp' + experience.years + '_' + 1}
                  whileInView={{
                    opacity: [0, 1],
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                >
                  <div
                    className={style.app__skills_exp_year}
                    style={{ marginTop: '1rem' }}
                  >
                    <p className='bold-text'>{experience.years}</p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                    }}
                  >
                    {experience.works.map((work: any) => (
                      <div
                        key={work.company}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginTop: '1rem',
                        }}
                      >
                        <motion.div className={style.app__skills_exp_works}>
                          <motion.div
                            className={style.app__skills_exp_work}
                            data-tip
                            data-for={work.name}
                          >
                            <h4 className='bold-text'>{work.company}</h4>
                            <p
                              className='p-text'
                              style={{
                                fontWeight: 600,
                              }}
                            >
                              {work.name}
                            </p>
                          </motion.div>
                          <div className={style.app__experience_detail}>
                            <MdOutlineOpenInNew
                              onClick={() => {
                                toggle({ exp: work, Skills, Portfolio });
                                // HandlePopUp(work);
                              }}
                            />
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))
            : null}
        </>
      )}
    </div>
  );
};

export default Experience;
