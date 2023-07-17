import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mobilelogo',
      title: 'Mobile Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'link1',
      title: 'Link 1',
      type: 'string',
    }),
    defineField({
      name: 'link2',
      title: 'Link 2',
      type: 'string',
    }),
    defineField({
      name: 'link3',
      title: 'Link 3',
      type: 'string',
    }),
    defineField({
      name: 'link4',
      title: 'Link 4',
      type: 'string',
    }),
    defineField({
      name: 'link5',
      title: 'Link 5',
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
