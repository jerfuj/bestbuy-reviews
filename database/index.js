const mongodb = 'mongodb://localhost/bestbuy-reviews';

const mongoose = require('mongoose');

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });

const reviewSchema = mongoose.Schema({
  productId: Number,
  totalReviews: Number,
  totalFiveStars: Number,
  totalFourStars: Number,
  totalThreeStars: Number,
  totalTwoStars: Number,
  totalOneStars: Number,
  averageRating: Number,
  totalRecommends: Number,
  pros: [{
    word: String,
    count: Number,
  }],
  cons: [{
    word: String,
    count: Number,
  }],
  reviews: [{
    title: String,
    reviewer: String,
    reviewBody: String,
    reviewDate: Date,
    dateBought: Date,
    rating: Number,
    recommend: Boolean,
    verifiedPurchase: Boolean,
    images: [{
      image: String,
    }],
    helpful: Number,
    unhelpful: Number,
    features: {
      quality: Number,
      value: Number,
      easeOfUse: Number,
    },
  }],
});

const Product = mongoose.model('Review', reviewSchema);

const db = mongoose.connection;

db.on('error', () => {
  // error
});
db.once('open', () => {
  // connected
});

const getAll = (pid, callback) => {
  // console.log('callback is: ', callback);
  Product.find({ productId: pid }, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};

module.exports = {
  Product,
  getAll,
};
