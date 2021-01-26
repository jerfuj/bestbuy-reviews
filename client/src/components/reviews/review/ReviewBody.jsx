/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StarRatings from '../../StarRatings.jsx';
import Images from './Images.jsx';

const Body = styled.div`
  padding: 5px;
  margin: 10px;
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
  color: #040c13;
  float: left;
`;

const TitleBar = styled.div`
  line-height: normal;
  align-content: center;
  display: flex;
  vertical-align:baseline;
  vertical-align:-webkit-baseline-middle;
`;

const Title = styled.h1`
  font-size: 16px;
`;

const Stars = styled.div`
  padding-top: 12px;
  margin-right: 4px;
`;

const VerifiedBar = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  margin-botton: 12px;
`;

const Verified = styled.div`
  color: #1d252c;
  font-weight: bold;
  padding-left: 2px;
  padding-right: 4px;
`;

const DateText = styled.div`
  font-weight: normal,
  color: #d3d3d3;
  display: flex;
  padding-left: 4px;
  padding-right: 2px;
`;

const ReviewText = styled.p`
  max-width: 100ch;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const Buttons = styled.div`
  display: flex;
  color: #0A4ABF;
  vertical-align: baseline;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const Helpful = styled.div`
  cursor: pointer;
  border: 1px solid grey;
  display: inline-block;
  border-radius: 5px;
  transition: background-color 250ms linear;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;

  &:hover {
    background: #0A4ABF;
    color: white;
    -webkit-transition: background-color 250ms linear;
    -ms-transition: background-color 250ms linear;
    transition: background-color 250ms linear;
  }

`;

const Unhelpful = styled.div`
  cursor: pointer;
  padding: 10px;
  margin: 5px;
  &:hover {
    color: grey;
    text-decoration: underline;
  }
`;

const Report = styled.div`
  cursor: pointer;
  padding: 10px;
  margin: 5px;
  &:hover {
    color: grey;
    text-decoration: underline;
  }
`;
const Feedback = styled.div`
padding: 10px;
margin: 5px;
font-family: Arial, Helvetica, sans-serif;
color: black;
`;

const Break = styled.div`
  color: grey;
  padding: 10px 3px 10px 3px;
  margin: 5px 1px 5px 1px;
`;

const Comment = styled.div`
  cursor: pointer;
  padding: 10px;
  margin: 5px;
  &:hover {
    color: grey;
    text-decoration: underline;
  }
`;

const Check = styled.div`
  color: green;
`;

const ReviewBody = ({ review }) => {
  const {
    title,
    rating,
    reviewBody,
    helpful,
    unhelpful,
    verifiedPurchase,
    reviewDate,
    images,
  } = review;
  const roundedRating = Math.round(rating);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const today = new Date();
  const reviewedDate = new Date(reviewDate);
  const timePassed = (today.getTime() - reviewedDate.getTime()) / (1000 * 3600 * 24);
  let dateString;
  if (timePassed < 1) {
    dateString = `Posted ${Math.floor(timePassed * 24)} hour(s) ago.`;
  } else if (timePassed >= 1) {
    dateString = `Posted ${Math.floor(timePassed)} day(s) ago.`;
  } else if (timePassed >= 7) {
    dateString = `Posted ${Math.floor(timePassed / 7)} week(s) ago.`;
  } else if (timePassed >= 30) {
    dateString = `Posted ${Math.floor(timePassed / 30)} month(s) ago.`;
  } else if (timePassed >= 365) {
    dateString = `Posted ${Math.floor(timePassed / 365)} years(s) ago.`;
  }
  return (
    <Body>
      <TitleBar>
        <Stars><StarRatings rating={roundedRating} sizing={12} /></Stars>
        <Title>{title}</Title>
      </TitleBar>
      <VerifiedBar>
        <Verified>
          <div style={{ display: verifiedPurchase ? '' : 'none' }}>
            <i className="far fa-check-circle" />
            {' '}
            Verified Purchase
          </div>
        </Verified>
        <div style={{ display: verifiedPurchase ? '' : 'none' }}>|</div>
        <DateText>
          {dateString}
        </DateText>
      </VerifiedBar>
      <ReviewText>{reviewBody}</ReviewText>
      <Images images={images} />
      <Buttons>
        <Helpful onClick={() => { setFeedbackSent(true); }} style={{ display: (feedbackSent ? 'none' : '') }}>
          Helpful (
          {helpful}
          )
        </Helpful>
        <Feedback style={{ display: (feedbackSent ? '' : 'none') }}>
          <Check className="fas fa-check" />
          {' '}
          Thanks for your feedback.
        </Feedback>
        <Unhelpful onClick={() => { setFeedbackSent(true); }} style={{ display: (feedbackSent ? 'none' : '') }}>
          Unhelpful (
          {unhelpful}
          )
        </Unhelpful>
        <Break>|</Break>
        <Report>Report</Report>
        <Break>|</Break>
        <Comment>Comment</Comment>
      </Buttons>
    </Body>
  );
};

ReviewBody.propTypes = {
  review: PropTypes.shape({}).isRequired,
};

export default ReviewBody;
