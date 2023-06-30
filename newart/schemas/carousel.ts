import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'carousel',
  title: 'Index Carousel',
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
      name: 'mobileimage',
      title: 'Mobile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'maintext',
      title: 'Main Text',
      type: 'text',
    }),
    defineField({
      name: 'subtext',
      title: 'Sub Text',
      type: 'array',
      of: [{type: 'block'}]
    }),
  ],
  preview: {
    select: {
      title: 'maintext',
      media: 'image',
    },
  },
})
