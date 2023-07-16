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
  ],
  preview: {
    select: {
      media: 'image',
    },
  },
})
