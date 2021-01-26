// eslint-disable-next-line no-unused-vars
const testdata = {
  productId: 1,
  totalReviews: 2,
  totalFiveStars: 0,
  totalFourStars: 1,
  totalThreeStars: 1,
  totalTwoStars: 0,
  totalOneStars: 0,
  averageRating: 3.5,
  totalRecommends: 2,
  pros: [{ word: 'good', count: 10 }, { word: 'cool', count: 9 }, { word: 'qwerty', count: 9 }, { word: 'hello', count: 9 }, { word: 'bestbuy', count: 9 }],
  cons: [{ word: 'bad', count: 15 }, { word: 'notcool', count: 9 }, { word: 'qwerty', count: 2 }, { word: 'olleh', count: 1 }, { word: 'buybest', count: 4 }],
  reviews: [
    {
      title: 'Airpods Max So Gud',
      reviewer: 'JohnDoe',
      reviewBody: 'this was so gud. this was so gud. this was so gud. this was so gud.',
      reviewDate: new Date(2021, 1, 20),
      dateBought: new Date(2020, 12, 25),
      rating: 4,
      recommend: true,
      verifiedPurchase: true,
      images: [{
        image: String,
      }],
      helpful: 4,
      unhelpful: 0,
      features: {
        quality: 4,
        value: 4,
        easeOfUse: 4,
      },
    },
    {
      title: 'hello world',
      reviewer: 'janeDoe',
      reviewBody: 'lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem',
      reviewDate: new Date(2021, 1, 1),
      dateBought: new Date(2020, 11, 25),
      rating: 3,
      recommend: true,
      verifiedPurchase: false,
      images: [{
        image: String,
      }],
      helpful: 100,
      unhelpful: 50,
      features: {
        quality: 2,
        value: 5,
        easeOfUse: 5,
      },
    },
  ],
};

export default testdata;
