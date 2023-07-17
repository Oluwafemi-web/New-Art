import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'mission',
      title: 'Our Mission',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Mission Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image',
      title: 'Mission Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'vision',
      title: 'Our Vision',
      type: 'string',
    }),
    defineField({
      name: 'description2',
      title: 'Vision Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image2',
      title: 'Vision Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'goals',
      title: 'Our Goals',
      type: 'string',
    }),
    defineField({
      name: 'description3',
      title: 'Goals Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image3',
      title: 'Goals Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
