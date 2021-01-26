/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ReviewsList from './ReviewsList.jsx';

const Body = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`;

const TopBar = styled.div`
  display: flex;
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid gray;
`;

const VerifiedButton = styled.div`
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  padding-top: 12px;
`;
const Checkbox = styled.div`
  display: inline;
  border: 1px solid grey;
  border-radius: px;
  width: 13px;
  height: 13px;
  font-size: 12px;
  margin: 2px;
`;
const ShowVerifiedPurchasesText = styled.div`
  margin: 2px;
  font-size: 13px;
`;
const Bolded = styled.span`
  font-weight: bold;
`;

const SortDropDown = styled.select`
  position: relative;
  left: 750px;
  height: auto;
  color: #040c13;
  border: 1px solid #c5cbd5;
  border-radius: 4px;
  padding: 7px 40px 8px 12px;
  background-color: #fff;
`;

const Showing = styled.div`
  margin: 8px 0px 8px 4px;
  font-size: 13px;
  color: black;
`;

const ShowMore = styled.div`
  position: relative;
  padding: 24px;
  font-size: 15px;
  display: flex;

`;

const ShowMoreButton = styled.div`
  line-height: 35px;
  width: 250px;
  border: 1px solid #0046be;
  color: #0046be;
  background: #fff;
  text-decoration: none;
  padding: 0 28px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  margin: auto;
`;

const SeeAll = styled.div`
  line-height: 35px;
  width: 250px;
  color: #fff!important;
  background-color: #0046be;
  padding: 0 28px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  margin: auto;
`;
const Reviews = ({
  reviews, filter, verified, applyVerifiedFilter,
}) => {
  const [seeMore, setSeeMore] = useState(false);
  const filteredReviews = [];
  let verifiedReviews = [];
  for (let i = 0; i < reviews.length; i += 1) {
    const revRating = reviews[i].rating;
    if (filter === 0) {
      filteredReviews.push(reviews[i]);
    } else if (revRating === filter) {
      filteredReviews.push(reviews[i]);
    }
  }
  if (verified === true) {
    for (let i = 0; i < filteredReviews.length; i += 1) {
      const verify = filteredReviews[i].verifiedPurchase;
      if (verify) {
        verifiedReviews.push(filteredReviews[i]);
      }
    }
  } else {
    verifiedReviews = filteredReviews;
  }
  let displayNumber = verifiedReviews.length;
  if (displayNumber > 8) {
    displayNumber = 8;
  }
  if (seeMore) {
    if (displayNumber > 16) {
      displayNumber = 16;
    } else {
      displayNumber = verifiedReviews.length;
    }
  }

  return (
    <Body>
      <TopBar>
        <VerifiedButton onClick={applyVerifiedFilter}>
          <Checkbox>
            <i className="fas fa-check" style={{ display: (verified ? '' : 'none') }} />
          </Checkbox>
          <ShowVerifiedPurchasesText>
            Show only
            {' '}
            <Bolded>Verified Purchases</Bolded>
          </ShowVerifiedPurchasesText>
        </VerifiedButton>
        <SortDropDown>
          <option value="0">Most Relevant</option>
          <option value="1">Most Helpful</option>
          <option value="2">Most Recent</option>
          <option value="3">Oldest</option>
          <option value="4">Highest Rated</option>
          <option value="5">Lowest Rated</option>
        </SortDropDown>
      </TopBar>
      <Showing>
        Showing 1 -
        {' '}
        {displayNumber}
        {' '}
        of
        {' '}
        {verifiedReviews.length}
        {' '}
        reviews
      </Showing>
      <ReviewsList reviews={verifiedReviews} filter={filter} showMore={seeMore} />
      <ShowMore>
        <ShowMoreButton onClick={() => { if (!seeMore) { setSeeMore(true); } else { setSeeMore(false); } }} style={{ display: seeMore ? 'none' : '' }}>Show More</ShowMoreButton>
        <SeeAll>See All Customer Reviews</SeeAll>
      </ShowMore>
    </Body>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.number.isRequired,
  verified: PropTypes.bool.isRequired,
  applyVerifiedFilter: PropTypes.func.isRequired,
};

export default Reviews;
