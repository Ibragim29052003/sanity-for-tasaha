export default {
  name: 'detailProduct',
  title: 'Detail Product',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'shortDescription', title: 'Short Description', type: 'text' },
    { name: 'fullDescription', title: 'Full Description', type: 'text' },
    { name: 'image', title: 'Main Image', type: 'image' },
    { name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image' }] },
    { name: 'videoUrl', title: 'Video URL', type: 'string' },
    { name: 'videoThumbnail', title: 'Video Thumbnail', type: 'image' },
    { name: 'price', title: 'Price', type: 'number' },
    { name: 'oldPrice', title: 'Old Price', type: 'number' },
    { name: 'sizes', title: 'Sizes', type: 'array', of: [{ type: 'string' }] },
    { name: 'wbLink', title: 'WB Link', type: 'url' },
    { name: 'active', title: 'Active', type: 'boolean', initialValue: true },
    
    // категория для правильного отображения
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
  ]
}
