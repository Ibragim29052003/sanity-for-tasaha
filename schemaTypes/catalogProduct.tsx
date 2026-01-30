import {defineField} from 'sanity'
import React from 'react'
import FilterSelect from '../src/components/FilterSelect'

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

    // категория для фильтрации
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (rule) => rule.required(),
      options: {
        list: [
          {title: 'Women', value: 'women'},
          {title: 'Men', value: 'men'},
          {title: 'Children', value: 'children'},
        ],
      },
    }),
    defineField({
      name: 'fabrics',
      title: 'Fabrics',
      type: 'array',
      of: [defineField({
        name: 'fabric',
        type: 'string',
        components: {
          input: (props: any) => <FilterSelect {...props} fieldName="fabrics" />
        }
      })]
    }),
    defineField({
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [defineField({
        name: 'size',
        type: 'string',
        components: {
          input: (props: any) => <FilterSelect {...props} fieldName="sizes" />
        }
      })]
    }),
    defineField({
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [defineField({
        name: 'color',
        type: 'string',
        components: {
          input: (props: any) => <FilterSelect {...props} fieldName="colors" />
        }
      })]
    }),
    defineField({name: 'isNew', title: 'Is New', type: 'boolean'}),
  ],
}
