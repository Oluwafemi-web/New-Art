import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'video',
  title: 'Index Video',
  type: 'document',
  fields: [
    defineField({
      name: 'video',
      title: 'Index video',
      type: 'file',
    }),
  ],
})
