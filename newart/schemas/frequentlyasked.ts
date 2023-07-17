import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'frequentlyasked',
  title: 'Frequently Asked',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
