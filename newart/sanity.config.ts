import {defineConfig} from 'sanity'
import {defineField} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {documentInternationalization} from '@sanity/document-internationalization'
export default defineConfig({
  name: 'default',
  title: 'newart',

  projectId: '609mkvpo',
  dataset: 'production',
  schema: {
    types: schemaTypes,
  },

  plugins: [
    deskTool(),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        {id: 'it', title: 'Italian'},
        {id: 'en', title: 'English'},
      ],

      schemaTypes: [
        'about',
        'aboutheader',
        'aboutslider',
        'carousel',
        'collection2013',
        'collection18',
        'collection23',
        'collectionheader',
        'contactheader',
        'exhibition',
        'exhibitionheader',
        'footer',
        'frequentlyasked',
        'history',
        'indexheading',
        'indexnewsitems',
        'inspirationitems',
        'navbar',
        'steps',
        'upcoming',
        'visit',
        'visitheader',
        'worldartimage',
      ],

      languageField: 'language', // defaults to "language"

      weakReferences: true, // defaults to false

      bulkPublish: true, // defaults to false

      metadataFields: [defineField({name: 'slug', type: 'slug'})],

      // Optional
      // Define API Version for all queries
      // https://www.sanity.io/docs/api-versioning
      apiVersion: '2023-05-22',
    }),
  ],
})
