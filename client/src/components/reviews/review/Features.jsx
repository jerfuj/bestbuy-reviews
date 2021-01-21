/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Feat = styled.div`
  padding: 0.5em;
  marging: 0.5em;
  border: 5px solid grey;
  font-family: Arial, Helvetica, sans-serif;
`;

const Features = ({ features }) => (
  <Feat>
    <h1>Features</h1>
    <div>
      <ul>
        <li>
          Quality:
          {features.quality}
        </li>
        <li>
          Value:
          {features.value}
        </li>
        <li>
          Ease of Use:
          {features.easeOfUse}
        </li>
      </ul>
    </div>
  </Feat>
);

Features.propTypes = {
  features: PropTypes.shape({}).isRequired,
};

export default Features;
