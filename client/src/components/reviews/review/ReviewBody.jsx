import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Body = styled.div`
  padding: 0.5em;
  marging: 0.5em;
  border: 5px solid grey;
  font-family: Arial, Helvetica, sans-serif;
  `;

class ReviewBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    const { review } = this.state;
    const {
      title,
      rating,
      reviewBody,
    } = review;
    console.log(title);
    return (
      <Body>
        <h1>{title}</h1>
        <p>
          {rating}
          {' '}
          # of stars
        </p>
        <p>{reviewBody}</p>
      </Body>
    );
  }
}

ReviewBody.propTypes = {
  review: PropTypes.shape({}).isRequired,
};

export default ReviewBody;
