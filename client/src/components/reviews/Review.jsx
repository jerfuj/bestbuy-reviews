/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Features from './review/Features.jsx';
import ReviewBody from './review/ReviewBody.jsx';

const Body = styled.div`
font-size: 13px;
display: flex;
border-bottom: 1px solid grey;
justify-content: flex-start;

`;
const Feat = styled.div`
  position: relative;
`;
const RevBody = styled.div`
  position: relative;
`;

const Review = ({ review, showMore, index }) => {
  const { features } = review;
  const { reviewer } = review;
  let hide = false;
  if (!showMore) {
    if (index >= 8) {
      hide = true;
    }
  } else if (index >= 16) {
    hide = true;
  }
  return (
    <Body style={{ display: hide ? 'none' : '' }}>
      <Feat>
        <Features features={features} name={reviewer} />
      </Feat>
      <RevBody>
        <ReviewBody review={review} />
      </RevBody>
    </Body>
  );
};

Review.propTypes = {
  review: PropTypes.shape({}).isRequired,
  showMore: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default Review;
