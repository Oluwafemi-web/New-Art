import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'indexheading',
  title: 'Index Heading',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'arttitle',
      title: 'World Art Title',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'uptitle',
      title: 'Upcoming Events Title',
      type: 'string',
    }),
    defineField({
      name: 'updescription',
      title: 'Upcoming Events Description',
      type: 'string',
    }),
    defineField({
      name: 'artinspiration',
      title: 'Art Inspiration Title',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'stepstitle',
      title: 'Steps Title',
      type: 'string',
    }),
    defineField({
      name: 'stepsdescription',
      title: 'Steps Description',
      type: 'string',
    }),
    defineField({
      name: 'historytitle',
      title: 'History Title',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'historydescription',
      title: 'History Description',
      type: 'string',
    }),
    defineField({
      name: 'newstitle',
      title: 'News Title',
      type: 'string',
    }),
    defineField({
      name: 'newsdescription',
      title: 'News Description',
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
