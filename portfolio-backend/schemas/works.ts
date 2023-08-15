import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'works',
  title: 'Works Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({name: 'name', title: 'Job Name', type: 'string'}),
    defineField({
      name: 'type',
      title: 'Employment type',
      type: 'string',
      options: {
        list: [
          {
            title: 'Fulltime',
            value: 'fulltime',
          },
          {
            title: 'Contract',
            value: 'contract',
          },
          {
            title: 'Internship',
            value: 'internship',
          },
          {
            title: 'Freelance',
            value: 'freelance',
          },
          {
            title: 'Self Employee',
            value: 'self employee',
          },
        ],
      },
    }),
    defineField({
      name: 'start',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
    }),
    defineField({
      title: 'I Still work Here',
      name: 'present',
      type: 'boolean',
    }),
    defineField({
      name: 'end',
      title: 'End Date',
      type: 'date',
      hidden: ({document}) => document.present === true,
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'skills'}],
        },
      ],
    }),
    defineField({
      name: 'portfolio',
      title: 'Portfolio',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'portfolio'}],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'company',
      media: 'image',
    },
  },
})
