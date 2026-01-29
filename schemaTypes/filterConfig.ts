export default {
  name: 'filterConfig',
  title: 'Filter Config',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Women', value: 'women' },
          { title: 'Men', value: 'men' },
          { title: 'Children', value: 'children' }
        ]
      }
    },
    { name: 'fabrics', title: 'Fabrics', type: 'array', of: [{ type: 'string' }] },
    { name: 'colors', title: 'Colors', type: 'array', of: [{ type: 'string' }] },
    { name: 'sizes', title: 'Sizes', type: 'array', of: [{ type: 'string' }] },
  ],
}