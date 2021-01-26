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

  const reviewObject = {};
  const reviews = [];
  let totalFiveStars = 0;
  let totalFourStars = 0;
  let totalThreeStars = 0;
  let totalTwoStars = 0;
  let totalOneStars = 0;
  let totalRating = 0;
  let totalRecommends = 0;

  for (let i = 0; i < faker.random.number({ min: 5, max: 20 }); i += 1) {
    reviews.push({
      title: faker.lorem.words(),
      reviewer: faker.name.firstName(),
      reviewBody: faker.lorem.paragraph(),
      reviewDate: faker.date.recent(),
      dateBought: faker.date.past(),
      rating: faker.random.number({ min: 1, max: 5 }),
      recommend: faker.random.boolean(),
      verifiedPurchase: faker.random.boolean(),
      images: generateImages(),
      helpful: faker.random.number({ min: 0, max: 50 }),
      unhelpful: faker.random.number({ min: 0, max: 25 }),
      features: {
        quality: faker.random.number({ min: 1, max: 5 }),
        value: faker.random.number({ min: 1, max: 5 }),
        easeOfUse: faker.random.number({ min: 1, max: 5 }),
      },
    });
  }
  for (let i = 0; i < reviews.length; i += 1) {
    if (reviews[i].rating === 5) {
      totalFiveStars += 1;
    }
    if (reviews[i].rating === 4) {
      totalFourStars += 1;
    }
    if (reviews[i].rating === 3) {
      totalThreeStars += 1;
    }
    if (reviews[i].rating === 2) {
      totalTwoStars += 1;
    }
    if (reviews[i].rating === 1) {
      totalOneStars += 1;
    }
    if (reviews[i].recommend) {
      totalRecommends += 1;
    }
    totalRating += reviews[i].rating;
  }
  const pros = [];
  const cons = [];

  for (let i = 0; i < 5; i += 1) {
    pros.push({
      word: faker.lorem.word(),
      count: faker.random.number({ min: 1, max: reviews.length }),
    });
    cons.push({
      word: faker.lorem.word(),
      count: faker.random.number({ min: 1, max: reviews.length }),
    });
  }

  reviewObject.reviews = reviews;
  reviewObject.totalReviews = reviews.length;
  reviewObject.totalFiveStars = totalFiveStars;
  reviewObject.totalFourStars = totalFourStars;
  reviewObject.totalThreeStars = totalThreeStars;
  reviewObject.totalTwoStars = totalTwoStars;
  reviewObject.totalOneStars = totalOneStars;
  reviewObject.totalRecommends = totalRecommends;
  reviewObject.averageRating = Math.round((totalRating / reviews.length) * 10) / 10;
  reviewObject.pros = pros;
  reviewObject.cons = cons;

  return reviewObject;
};

console.log('running');
for (let i = 0; i < 100; i += 1) {
  console.log(`at iteration ${i}`);
  const rev = generateReviews();
  const Item = new Product({
    productId: i,
    reviews: rev.reviews,
    totalReviews: rev.totalReviews,
    totalFiveStars: rev.totalFiveStars,
    totalFourStars: rev.totalFourStars,
    totalThreeStars: rev.totalThreeStars,
    totalTwoStars: rev.totalTwoStars,
    totalOneStars: rev.totalOneStars,
    totalRecommends: rev.totalRecommends,
    averageRating: rev.averageRating,
    pros: rev.pros,
    cons: rev.cons,
  });
  Item.save().then((results) => {
    console.log('results are:   ');
    console.log(results);
  }).catch((err) => {
    throw err;
  });
}
