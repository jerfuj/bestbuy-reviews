/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StarRatings from '../../StarRatings.jsx';

const Body = styled.div`
  height: 200px;
  margin: 15px 0px 15px 0px;
  max-width: 200px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
`;

const BigNumber = styled.div`
  font-size: 40px;
  margin: 10px 0px 10px 0px;
`;

const Stars = styled.div`
  margin-top: 2px;
  margin-bottom: 2px;
  height: 24px;
`;

const NumReview = styled.div`
  font-size: 13px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const WriteReview = styled.div`
font-size: 13px;
cursor: pointer;
margin-top: 18px;
margin-bottom: 5px;
border: 1px solid grey;
display: inline-block;
border-radius: 5px;
transition: background-color 250ms linear;
background: #0457c8;
color: white;
&:hover {
  background: #0046be;
  -webkit-transition: background-color 250ms linear;
  -ms-transition: background-color 250ms linear;
  transition: background-color 250ms linear;
}
`;
const Text = styled.div`
  height: 13px;
  margin: auto;
  padding: 10px;
  text-align: center;
`;
const Recs = styled.div`
  font-size: 13px;
`;

const RatingSummary = ({ rating, numReviews, recommends }) => {
  const intRating = Math.round(rating * 10) / 10;
  const rec = Math.round((recommends / numReviews) * 100);
  const recPercent = `${rec}%`;

  return (
    <Body>
      <Title>Customer Rating</Title>
      <BigNumber>
        {intRating}
      </BigNumber>
      <Stars>
        <StarRatings rating={intRating} sizing={24} />
      </Stars>
      <NumReview>
        (
        {numReviews}
        {' '}
        Reviews)
      </NumReview>
      <Recs>
        <b>{recPercent}</b>
        {' '}
        would recommend to a friend.
      </Recs>
      <WriteReview>
        <Text>Write a Review</Text>
      </WriteReview>
    </Body>
  );
};

RatingSummary.propTypes = {
  rating: PropTypes.number.isRequired,
  numReviews: PropTypes.number.isRequired,
  recommends: PropTypes.number.isRequired,
};

export default RatingSummary;
