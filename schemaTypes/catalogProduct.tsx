import {defineField} from 'sanity'

export default {
  name: 'catalogProduct',
  title: 'Catalog Product',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'image', title: 'Image', type: 'image'}),
    defineField({name: 'price', title: 'Price', type: 'number'}),
    defineField({name: 'oldPrice', title: 'Old Price', type: 'number'}),
    defineField({name: 'active', title: 'Active', type: 'boolean', initialValue: true}),
  
    defineField({name: 'isNew', title: 'Is New', type: 'boolean'}),
  ],
}
