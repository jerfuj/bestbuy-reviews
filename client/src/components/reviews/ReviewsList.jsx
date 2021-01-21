import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import Review from './Review.jsx';

const ReviewsList = ({ reviews }) => (
  <div>
    {reviews.map((review) => (
      <Review review={review} />
    ))}
  </div>
);

ReviewsList.propTypes = {
  reviews: PropTypes.instanceOf(Array).isRequired,
};

export default ReviewsList;
