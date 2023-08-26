import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'partners',
  title: 'Partners',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      title: 'Title',
      type: 'string',
      name: 'title',
    }),
    defineField({
      title: 'Partner',
      type: 'array',
      name: 'partner',
      of: [
        {
          type: 'object',
          name: 'partner',
          fields: [
            {type: 'image', name: 'image'},
            {type: 'string', name: 'link'},
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      name: 'Title',
      // media: 'image',
    },
  },
})
