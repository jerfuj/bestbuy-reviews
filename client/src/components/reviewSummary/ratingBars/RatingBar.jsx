/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React /* { useState } */ from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Body = styled.div`
  margin: 10px;
  display: flex;
  vertical-align: baseline;
`;

const Checkbox = styled.div`
  margin-left: 5px;
  margin-right: 5px;
`;

const Number = styled.div`
  margin-left: 5px;
  margin-right: 5px;
`;

const Star = styled.div`
  color: #FFE000;
  margin-left: 5px;
  margin-right: 5px;

`;

const Bar = styled.div`
  border-radius: 15px;
  background-color: #e0e6ef;
  width: 218.5px;
  height: 13px;
  margin-left: 5px;
  margin-right: 5px;
`;

const FilledBar = styled.span`
  height: 100%;
  overflow: hidden;
  background-color: #0046be;
  border-radius: 15px;
  display: block;
`;

const ReviewsCount = styled.div`
  margin-left: 5px;
  margin-right: 5px;
`;

const RatingBar = ({
  category, no, totalReviews, applyFilter,
}) => {
  const percentage = `${(no / totalReviews) * 100}%`;
  return (
    <Body>
      <Checkbox>
        <input type="checkbox" content="✔" onClick={applyFilter} value={category} />
      </Checkbox>
      <Number>{category}</Number>
      <Star className="fas fa-star" />
      <Bar>
        <FilledBar style={{ width: percentage }} />
      </Bar>
      <ReviewsCount>{no}</ReviewsCount>
    </Body>
  );
};

RatingBar.propTypes = {
  category: PropTypes.number.isRequired,
  no: PropTypes.number.isRequired,
  totalReviews: PropTypes.number.isRequired,
  applyFilter: PropTypes.func.isRequired,
};

export default RatingBar;
