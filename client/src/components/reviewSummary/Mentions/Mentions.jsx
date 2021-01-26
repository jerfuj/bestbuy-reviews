/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MentionsList from './MentionsList.jsx';

const Body = styled.div`
  display: flex;
  margin: 10px;
`;
const Pros = styled.div`
  font-size: 17px;
  margin-right: 24px;
`;
const Cons = styled.div`
  font-size: 17px;
  margin-right: 24px;
`;
const Mentions = ({ mentions }) => {
  const { pros } = mentions;
  const { cons } = mentions;
  console.log('MENTIONS: ', mentions);
  console.log('in mentions, PROS IS: ', Array.isArray(pros));
  return (
    <Body>
      <Pros>
        Pros Mentioned:
        <MentionsList list={pros} />
      </Pros>
      <Cons>
        Cons Mentioned:
        <MentionsList list={cons} />
      </Cons>
    </Body>
  );
};

Mentions.propTypes = {
  mentions: PropTypes.shape({}).isRequired,
};

export default Mentions;
