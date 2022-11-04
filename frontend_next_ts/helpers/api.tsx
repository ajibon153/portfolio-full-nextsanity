import { dateToIndonesia } from '../utility/dateParse';
import { client } from './client';
import { useQuery } from '@tanstack/react-query';

export const useData = (params: string) => {
  if (params === 'skill') return useQuery(['skill'], () => getSkillData());
  if (params === 'skill')
    return useQuery(['experience'], () => getExperienceSkill());
};

export const getSkillData = () => {
  const skillQuery = '*[_type == "skills"]';

  return client.fetch(skillQuery).then((response: any) => {
    const groupBy = response.reduce(
      (entryMap: any, e: any) =>
        entryMap.set(e.group, [...(entryMap.get(e.group) || []), e]),
      new Map()
    );
    let newMap = [...groupBy]
      .map((item: any) => {
        let id = 6;
        if (item[0] === 'framework') id = 1;
        if (item[0] === 'language') id = 2;
        if (item[0] === 'style') id = 3;
        if (item[0] === 'database') id = 4;
        if (item[0] === 'tech') id = 5;

        return {
          id,
          groupName: item[0],
          value: item[1],
        };
      })
      .sort((a, b) => a.id - b.id);

    console.log('newMap', newMap);

    return newMap;
  });
};

export const getExperienceSkill = () => {
  const expQuery = '*[_type == "workExperience"]';

  // if (PureSkills.length > 0)
  client.fetch(expQuery).then((response) => {
    response = response
      .map((dt: any) => {
        let start: any = new Date(dt.start);
        let experience, months;
        let present = dt.present ? true : false;
        let end_date = present ? new Date() : new Date(dt.end);

        months = (end_date.getFullYear() - start.getFullYear()) * 12;
        months -= start.getMonth();
        months += end_date.getMonth();

        let years = Math.floor(months / 12);
        let monthLeft = months % 12;
        experience = ` ${years > 0 ? years + ' Yr' : ''} ${
          monthLeft > 0 ? monthLeft + ' Mo ' : ''
        }`;

        start = dateToIndonesia(start);
        let end = dt.end ? dateToIndonesia(dt.end) : null;

        let skills: any = [];
        // skills = dt.skills
        //   ? dt.skills.map((skill: any) => {
        //       return PureSkills.find(
        //         (dskill: any) => dskill._id === skill._ref
        //       );
        //     })
        //   : [];

        return { ...dt, skills, present, start, end, end_date, experience };
      })
      .reduce(
        (entryMap: any, e: any) =>
          entryMap.set(e.end_date.getFullYear(), [
            ...(entryMap.get(e.end_date.getFullYear()) || []),
            e,
          ]),
        new Map()
      );

    let mapped = [...response]
      .map((res) => {
        return {
          years: res[0],
          works: res[1].map((res2: any) => ({
            ...res2,
            description: res2.description && res2.description.split('- '),
          })),
        };
      })

      .sort((a: any, b: any) => b.years - a.years);

    return mapped;
    // setDataExperiences(mapped);
    // setIsLoadingExperience(false);
  });
};
