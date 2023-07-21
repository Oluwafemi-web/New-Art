import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'visit',
  title: 'Visit',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'icon',
      title: 'Clock icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'opening',
      title: 'Opening Times',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date and time',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'text',
      title: 'Side Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image2',
      title: 'Image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'safe',
      title: 'Staying Safe',
      type: 'string',
    }),
    defineField({
      name: 'safetext',
      title: 'Staying Safe info',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'safeimg',
      title: 'Staying Safe Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'image3',
      title: 'Image 3',
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
