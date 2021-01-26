import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RatingBar = styled.div`
  display: inline-flex;
  vertical-align: middle;
  position: relative;
  margin-left: auto;
  margin-right: 0;
`;
const Bar1 = styled.div`
  height: 11px;
  width: 22px;
  border-radius: 10px 0 0 10px;
  border: 1px solid #55555a;
  margin: 0 1px;
`;
const Bar2 = styled.div`
  height: 11px;
  width: 22px;
  border: 1px solid #55555a;
  margin: 0 1px;
`;
const Bar3 = styled.div`
  height: 11px;
  width: 22px;
  border: 1px solid #55555a;
  margin: 0 1px;
`;
const Bar4 = styled.div`
  height: 11px;
  width: 22px;
  border: 1px solid #55555a;
  margin: 0 1px;
`;

const Bar5 = styled.div`
  border-radius: 0 10px 10px 0;
  height: 11px;
  width: 22px;
  border: 1px solid #55555a;
  margin: 0 1px;
`;

const Bar = ({ rating }) => (
  <RatingBar>
    <Bar1 style={{ background: (rating >= 1) ? '#55555a' : 'white', borderColor: (rating >= 1) ? '#55555a' : '#c5cbd5' }} />
    <Bar2 style={{ background: (rating >= 2) ? '#55555a' : 'white', borderColor: (rating >= 2) ? '#55555a' : '#c5cbd5' }} />
    <Bar3 style={{ background: (rating >= 3) ? '#55555a' : 'white', borderColor: (rating >= 3) ? '#55555a' : '#c5cbd5' }} />
    <Bar4 style={{ background: (rating >= 4) ? '#55555a' : 'white', borderColor: (rating >= 4) ? '#55555a' : '#c5cbd5' }} />
    <Bar5 style={{ background: (rating === 5) ? '#55555a' : 'white', borderColor: (rating === 5) ? '#55555a' : '#c5cbd5' }} />
  </RatingBar>
);

Bar.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Bar;
