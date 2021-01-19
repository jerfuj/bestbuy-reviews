const faker = require('faker');

const { Product } = require('./index.js');

const generateReviews = () => {
  const generateImages = () => {
    const images = [];
    for (let i = 0; i < Math.random() * 5; i += 1) {
      images.push({
        image: faker.image.imageUrl(),
      });
    }
    return images;
  };
  const reviews = [];
  for (let i = 0; i < Math.random() * 9; i += 1) {
    reviews.push({
      user: {
        userId: faker.random.number(),
        username: faker.name.firstName(),
      },
      title: faker.lorem.words(),
      reviewer: faker.name.firstName(),
      reviewBody: faker.lorem.paragraph(),
      reviewDate: faker.date.recent(),
      dateBought: faker.date.past(),
      rating: Math.floor(Math.random() * 5),
      recommend: faker.random.boolean(),
      verifiedPurchase: faker.random.boolean(),
      images: generateImages(),
      helpful: faker.random.number(),
      unhelpful: faker.random.number(),
      features: {
        quality: Math.floor(Math.random() * 5),
        value: Math.floor(Math.random() * 5),
        easeOfUse: Math.floor(Math.random() * 5),
      },
    });
  }
  return reviews;
};

console.log('running');
for (let i = 0; i < 100; i += 1) {
  console.log(`at iteration ${i}`);
  const Item = new Product({
    productId: i,
    reviews: generateReviews(),
  });
  Item.save().then((results) => {
    console.log('results are:   ');
    console.log(results);
  }).catch((err) => {
    throw err;
  });
}
