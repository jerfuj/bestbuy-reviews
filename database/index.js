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

const getAll = (pid, callback) => {
  // console.log('callback is: ', callback);
  Product.find({ _id: pid }, (err, results) => {
    if (err) {
      throw err;
    }
    callback(null, results);
  });
};

const updateReview = (value, pid, review, callback) => {
  if (value === 'helpful') {
    Product.updateOne({ _id: pid, 'reviews._id': review }, { $inc: { 'reviews.helpful': 1 } }, (err, results) => {
      if (err) {
        throw err;
      }
      callback(null, results);
    });
  } else if (value === 'unhelpful') {
    Product.updateOne({ _id: pid, 'reviews._id': review }, { $inc: { 'reviews.unhelpful': 1 } }, (err, results) => {
      if (err) {
        throw err;
      }
      callback(null, results);
    });
  }
};

module.exports = {
  Product,
  getAll,
  updateReview,
};
