import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'group',
      title: 'Group',
      type: 'string',
      options: {
        list: [
          {
            title: 'Framework',
            value: 'framework',
          },
          {
            title: 'Language',
            value: 'language',
          },
          {
            title: 'Styling',
            value: 'style',
          },
          {
            title: 'Database',
            value: 'database',
          },
          {
            title: 'Tech',
            value: 'tech',
          },
          {
            title: 'Design',
            value: 'design',
          },
        ],
      },
    }),
    defineField({
      name: 'level',
      title: 'Skill Level',
      type: 'string',
      options: {
        list: [
          {
            title: 'Advanced',
            value: 'Advanced',
          },
          {
            title: 'Intermediate',
            value: 'intermediate',
          },
          {
            title: 'Basic',
            value: 'basic',
          },
        ],
      },
    }),
    // defineField({
    //   name: 'bgColor',
    //   title: 'BgColor',
    //   type: 'string',
    // }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: 'Hidden ?',
      name: 'hidden',
      type: 'boolean',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      // author: 'author.name',
      media: 'icon',
    },
    // prepare(selection) {
    //   const {author} = selection
    //   return {...selection, subtitle: author && `by ${author}`}
    // },
  },
})
