/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import RatingSummary from './RatingSummary/RatingSummary.jsx';
import RatingBars from './ratingBars/RatingBars.jsx';
import Mentions from './Mentions/Mentions.jsx';

const Body = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid grey;
  padding: 15px;
  display: flex;
  flex-direction: row;
`;

const ReviewSummary = ({
  rating, numReviews, recommends, numbers, applyFilter, mentions,
}) => (
  <Body>
    <RatingSummary rating={rating} numReviews={numReviews} recommends={recommends} />
    <RatingBars numbers={numbers} applyFilter={applyFilter} />
    <Mentions mentions={mentions} />
  </Body>
);

ReviewSummary.propTypes = {
  rating: PropTypes.number.isRequired,
  numReviews: PropTypes.number.isRequired,
  recommends: PropTypes.number.isRequired,
  numbers: PropTypes.shape({}).isRequired,
  applyFilter: PropTypes.func.isRequired,
  mentions: PropTypes.shape({}).isRequired,
};

export default ReviewSummary;
