/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Body = styled.div`
  cursor: pointer;
  border: 1px solid grey;
  border-radius: 5px;
  transition: background-color 250ms linear;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  background: white;
  color: #0457c8;
  font-size: 13px;
  text-align: center;

  &:hover {
    background: #0046be;
    color: white;
    -webkit-transition: background-color 250ms linear;
    -ms-transition: background-color 250ms linear;
    transition: background-color 250ms linear;
  }
`;

const Mention = ({ word, count }) => {
  // console.log('WORD IS: ', word);
  console.log('COUNT IS: ', count);
  console.log('');
  return (
    <Body>
      {word.word}
      {' '}
      (
      {count}
      )
    </Body>
  );
};

Mention.propTypes = {
  word: PropTypes.shape({}).isRequired,
  count: PropTypes.shape({}).isRequired,
};

export default Mention;
