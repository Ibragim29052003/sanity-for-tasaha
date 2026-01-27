import { Rule } from 'sanity'

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
    
    // поле для связи с WB API - артикул товара на Wildberries
    // используется для получения актуальных фото, title, sizes из WB API
    { 
      name: 'nmId', 
      title: 'WB Article (nmID)', 
      type: 'number', 
      description: 'Артикул товара на Wildberries для API запросов',
      validation: (Rule: Rule) => Rule.required() // Обязательное поле
    },
    
    // категория товара для разделения по страницам сайта
    // определяет, на какой странице (women/men/children) будет отображаться товар
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
      }, 
      validation: (Rule: Rule) => Rule.required(),
      description: 'Категория товара для фильтрации по страницам сайта'
    },
    
    // краткое описание для детальной страницы товара
    { 
      name: 'shortDescription', 
      title: 'Short Description', 
      type: 'text', 
      description: 'Краткое описание товара для детальной страницы' 
    },
    
    // полное детальное описание товара
    { 
      name: 'fullDescription', 
      title: 'Full Description', 
      type: 'text', 
      description: 'Полное описание товара с деталями' 
    },
    
    // массив тканей для фильтрации товаров
    // примеры: хлопок, шелк, купра, вискоза
    { 
      name: 'fabrics', 
      title: 'Fabrics', 
      type: 'array', 
      of: [{ type: 'string' }], 
      description: 'Ткани из которых сделан товар (для фильтрации)' 
    },
    
    // массив цветов товара для фильтрации
    { 
      name: 'colors', 
      title: 'Colors', 
      type: 'array', 
      of: [{ type: 'string' }], 
      description: 'Доступные цвета товара (для фильтрации)' 
    },
    
    // массив размеров товара для фильтрации (спросить у мамы)
    { 
      name: 'sizes', 
      title: 'Sizes', 
      type: 'array', 
      of: [{ type: 'string' }], 
      description: 'Доступные размеры товара (для фильтрации)' 
    },
    
    // флаг "новинка" для дополнительной фильтрации
    // позволяет выделять новые товары в каталоге
    { 
      name: 'isNew', 
      title: 'Is New', 
      type: 'boolean', 
      initialValue: false, 
      description: 'Флаг новинки для фильтрации и выделения новых товаров' 
    },
  ],
};
