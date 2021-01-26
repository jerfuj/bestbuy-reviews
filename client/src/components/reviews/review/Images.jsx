/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageList = styled.div`
  display: flex;
  height: 100px;
  margin: 12px;
`;

const ImageDiv = styled.div`
  margin: 2px;
  width: 88px;
`;

const Image = styled.img`
  margin: 2px;
  cursor: pointer;
  &:hover {
    border: 2px solid black;
    width: 76px;
    height: 76px;
`;

const Images = ({ images }) => (
  <ImageList>
    {images.map((image) => <ImageDiv><Image src={image.image} alt="review" width="80" height="80" /></ImageDiv>)}
  </ImageList>
);

export default Images;
