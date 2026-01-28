export default {
  name: 'catalogProduct',
  title: 'Catalog Product',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'image', title: 'Image', type: 'image'},
    {name: 'price', title: 'Price', type: 'number'},
    {name: 'oldPrice', title: 'Old Price', type: 'number'},
    {name: 'gallery', title: 'Gallery', type: 'array', of: [{type: 'image'}]},
    {name: 'wbLink', title: 'WB Link', type: 'url'},
    {name: 'active', title: 'Active', type: 'boolean', initialValue: true},
    
    // категория для фильтрации
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
  ],
}
