const mongodb = 'mongodb://localhost/bestbuy-reviews';

const mongoose = require('mongoose');

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });

const reviewSchema = mongoose.Schema({
  productId: Number,
  reviews: [{
    user: [{
      userId: Number,
      username: String,
    }],
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

module.exports = {
  Product,
};
