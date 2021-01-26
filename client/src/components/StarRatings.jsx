import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Stars = styled.span`
  display: flex;
  font-size: 14px;
  vertical-align:baseline;
  vertical-align:-webkit-baseline-middle;
  position: relative;
  overflow: hidden;
`;

const Starswrapper = styled.span`
  display: inline-block;
  position: relative;
  max-height: 48px;

`;

const Starsactive = styled.span`
  color: #FFE000;
  position: relative;
  z-index: 10;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
`;

const Starsinactive = styled.span`
  color: white;
  text-shadow: #000 0px 0px 1px,   #000 0px 0px 1px,   #000 0px 0px 1px,
             #000 0px 0px 1px,   #000 0px 0px 1px,   #000 0px 0px 1px;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-text-stroke: initial;
  /* overflow: hidden; */
`;

const Star = styled.i`
  padding: 1px;
`;

const StarRatings = ({ rating, sizing }) => {
  const percentage = `${rating * 20}%`;
  const fsize = `${sizing}px`;
  return (
    <div>
      <Stars>
        <Starswrapper>
          <Starsactive style={{ width: percentage, fontSize: fsize }}>
            <Star className="fa fa-star" />
            <Star className="fa fa-star" />
            <Star className="fa fa-star" />
            <Star className="fa fa-star" />
            <Star className="fa fa-star" />
          </Starsactive>
          <Starsinactive style={{ fontSize: fsize }}>
            <Star className="fa fa-star" />
            <Star className="fa fa-star" />
            <Star className="fa fa-star" />
            <Star className="fa fa-star" />
            <Star className="fa fa-star" />
          </Starsinactive>
        </Starswrapper>
      </Stars>
    </div>
  );
};

StarRatings.propTypes = {
  rating: PropTypes.number.isRequired,
  sizing: PropTypes.number.isRequired,
};

export default StarRatings;
