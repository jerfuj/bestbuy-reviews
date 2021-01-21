/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Features from './review/Features.jsx';
import ReviewBody from './review/ReviewBody.jsx';

const Review = ({ review }) => {
  const { features } = review;
  return (
    <div>
      <div>
        <Features features={features} />
      </div>
      <div>
        <ReviewBody review={review} />
      </div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape({}).isRequired,
};

export default Review;
