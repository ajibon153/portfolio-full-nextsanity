import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'profession',
      title: 'Profession',
      type: 'string',
    }),
    defineField({
      name: 'imgurl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'feedback',
      title: 'Feedback',
      type: 'string',
    }),
    defineField({
      title: 'Hidden ?',
      name: 'hidden',
      type: 'boolean',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    // prepare(selection) {
    //   const {author} = selection
    //   return {...selection, subtitle: author && `by ${author}`}
    // },
  },
})
