import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'worldartimage',
  title: 'World Art Image',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'sidetext',
      title: 'Side Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
  preview: {
    select: {
      media: 'image',
    },
  },
})
