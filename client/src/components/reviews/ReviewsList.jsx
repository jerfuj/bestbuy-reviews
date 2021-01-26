/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import Review from './Review.jsx';

const ReviewsList = ({ reviews, showMore }) => {
  let maxLength = reviews.length;
  if (maxLength > 8 && !showMore) {
    maxLength = 8;
  } else if (maxLength > 16 && showMore) {
    maxLength = 16;
  }
  const reviewArray = [];
  for (let i = 0; i < maxLength; i += 1) {
    reviewArray.push(reviews[i]);
  }
  return (
    <div>
      {reviewArray.map((review, _id, index) => (
        <Review key={_id} review={review} showMore={showMore} index={index} />
      ))}
    </div>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.instanceOf(Array).isRequired,
  showMore: PropTypes.bool.isRequired,
};

export default ReviewsList;

/*
const ReviewsList = ({ reviews, showMore }) => (
  <div>
    {reviews.map((review, _id, index) => (
      <Review key={_id} review={review} showMore={showMore} index={index} />
    ))}
  </div>
); */
