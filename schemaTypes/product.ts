export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'price', title: 'Price', type: 'number' },
    { name: 'oldPrice', title: 'Old Price', type: 'number' },
    { name: 'image', title: 'Image', type: 'image' },
    { name: 'wbLink', title: 'WB Link', type: 'url' },
    { name: 'active', title: 'Active', type: 'boolean', initialValue: true },
  ],
};
