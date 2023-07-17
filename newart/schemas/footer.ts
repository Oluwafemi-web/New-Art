import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'string',
    }),
    defineField({
      name: 'link1',
      title: 'Quick link 1',
      type: 'string',
    }),
    defineField({
      name: 'link2',
      title: 'Quick link 2',
      type: 'string',
    }),
    defineField({
      name: 'link3',
      title: 'Quick link 3',
      type: 'string',
    }),
    defineField({
      name: 'link4',
      title: 'Quick link 4',
      type: 'string',
    }),
    defineField({
      name: 'connect',
      title: 'Connect',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
    }),
    defineField({
      name: 'youtube',
      title: 'Youtube',
      type: 'string',
    }),
    defineField({
      name: 'visit',
      title: 'Visit',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'number',
      title: 'Phone number',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
