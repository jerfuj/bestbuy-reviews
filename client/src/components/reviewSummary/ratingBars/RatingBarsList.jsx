/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import RatingBar from './RatingBar.jsx';

const Body = styled.div`
  margin: 5px;
`;

const RatingBarsList = ({ numbers, applyFilter }) => {
  const {
    totalFiveStars,
    totalFourStars,
    totalThreeStars,
    totalTwoStars,
    totalOneStars,
    totalReviews,
  } = numbers;

  return (
    <Body>
      <RatingBar category={5} no={totalFiveStars} totalReviews={totalReviews} applyFilter={applyFilter} />
      <RatingBar category={4} no={totalFourStars} totalReviews={totalReviews} applyFilter={applyFilter} />
      <RatingBar category={3} no={totalThreeStars} totalReviews={totalReviews} applyFilter={applyFilter} />
      <RatingBar category={2} no={totalTwoStars} totalReviews={totalReviews} applyFilter={applyFilter} />
      <RatingBar category={1} no={totalOneStars} totalReviews={totalReviews} applyFilter={applyFilter} />
    </Body>
  );
};

RatingBarsList.propTypes = {
  numbers: PropTypes.shape({}).isRequired,
};

export default RatingBarsList;
