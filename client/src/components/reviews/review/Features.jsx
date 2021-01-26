/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Bar from './Bar.jsx';

const Body = styled.div`
  margin: 5px;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
  width: 256.250px;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

const Name = styled.div`
  font-size: 15px;
  margin: 7px 10px 12px 0px;
  color: #0A4ABF;
  font-weight: bold;
`;
const FeatureBar = styled.div`
  display: flex;
  margin-top: 10px;
`;
const Label = styled.div`
  max-width: 75px;
`;
const Features = ({ features, name }) => (
  <Body>
    <Name>{name}</Name>
    <Title>Features</Title>
    <div>
      <FeatureBar>
        <Label>Quality</Label>
        {' '}
        <Bar rating={features.quality} />
      </FeatureBar>
      <FeatureBar>
        <Label>Value</Label>
        <Bar rating={features.value} />
      </FeatureBar>
      <FeatureBar>
        <Label>Ease of Use</Label>
        {' '}
        <Bar rating={features.easeOfUse} />
      </FeatureBar>

    </div>
  </Body>
);

Features.propTypes = {
  features: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
};

export default Features;
