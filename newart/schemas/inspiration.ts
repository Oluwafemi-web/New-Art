import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'inspirationitems',
  title: 'Art Inspiration',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      //   media: 'image',
    },
  },
})
