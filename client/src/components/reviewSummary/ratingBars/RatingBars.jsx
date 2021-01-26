/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import RatingBarsList from './RatingBarsList.jsx';

const Body = styled.div`
  font-family: roboto,
  margin: 20px;
  padding: 30px;
  max-width: 380px;
`;

const RatingBars = ({ numbers, applyFilter }) => (
  <Body>
    <RatingBarsList numbers={numbers} applyFilter={applyFilter} />
  </Body>
);

RatingBars.propTypes = {
  numbers: PropTypes.shape({}).isRequired,
  applyFilter: PropTypes.func.isRequired,
};

export default RatingBars;
