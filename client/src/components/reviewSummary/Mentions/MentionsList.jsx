/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Mention from './Mention.jsx';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 147px;
`;

const MentionsList = ({ list }) => {
  console.log('list is a: ', typeof list);
  return (
    <Body>
      {list.map((word, count, index) => (
        <Mention word={word} count={count} key={index} />
      ))}
    </Body>
  );
};

MentionsList.propTypes = {
  list: PropTypes.instanceOf(Array).isRequired,
};

export default MentionsList;
