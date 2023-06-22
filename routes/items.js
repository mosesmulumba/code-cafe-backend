const { Router } = require('express');

const itemRoutes = Router();

itemRoutes.get('/', (req, res) => {
  setTimeout(
    () => res.json([
      {
        itemId: 'cap cake',
        imageId: 'cap cake',
        title: 'Cup Cake',
        price: 1.95,
        description: 'simple and sweet',
        salePrice: 1,
      },
      {
        itemId: 'cappuccino',
        imageId: 'cappuccino',
        title: 'Cappuccino',
        price: 3.99,
        description: 'May contain milk.',
        salePrice: 0.50,
      },
      {
        itemId: 'coffee',
        imageId: 'coffee',
        title: 'Coffee',
        price: 1.50,
      },
      {
        itemId: 'cookie',
        imageId: 'cookie',
        title: 'Cookies',
        price: 2.50,
      },
      {
        itemId: 'donuts',
        imageId: 'donuts',
        title: 'Donuts',
        price: 2.70,
      },
      {
        itemId: 'french press',
        imageId: 'french press',
        title: 'French Press',
        price: 5.5,
      },
      {
        itemId: 'iced coffee',
        imageId: 'iced coffee',
        title: 'Iced Coffee',
        price: 3.25,
      },
      {
        itemId: 'bagels',
        imageId: 'bagels',
        title: 'Bagel',
        price: 2.75,
      },
      {
        itemId: 'Breakfast Pizza',
        imageId: 'Breakfast Pizza',
        title: 'Breakfast Pizza',
        price: 5.75,
      },
      {
        itemId: 'Breakfast Sandwich',
        imageId: 'Breakfast Sandwich',
        title: 'Breakfast Sandwich',
        price: 3.0,
      },
      {
        itemId: 'Espresso',
        imageId: 'Espresso',
        title: 'Espresso',
        price: 2.75,
      },
      {
        itemId: 'Macarons',
        imageId: 'Macarons',
        title: 'Macarons',
        price: 2.20,
      },
      {
        itemId: 'Peppermint-mocha',
        imageId: 'Peppermint-mocha',
        title: 'Peppermint-mocha',
        price: 4,
      },
      {
        itemId: 'mocha',
        imageId: 'mocha',
        title: 'Mocha',
        price: 1.2,
      },
      {
        itemId: 'candy',
        imageId: 'candy',
        title: 'Candy',
        price: 2,
      },
    ]),
    // Adds a fake server side delay
    500,
  );
});

module.exports = itemRoutes;
