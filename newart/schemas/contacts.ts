import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contacts',
  title: 'Contacts',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'heading',
      title: 'Page Heading',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'number',
      title: 'Main Contact Number',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'enquiry',
      title: 'General Enquiries',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'enquiry2',
      title: 'Media Enquiries',
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
