/* eslint-disable import/extensions */
import React from 'react';
// import PropTypes from 'prop-types';

import ReviewsList from './ReviewsList.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;

    this.event = this.event.bind(this);
  }

  event(e) {
    const { reviews } = this.state;
    console.log(reviews);
    e.preventDefault();
  }

  render() {
    const { reviews } = this.state;
    return (
      <div>
        <div>
          <h1>Verified Purchases</h1>
        </div>
        <ReviewsList reviews={reviews} />
      </div>
    );
  }
}

export default Reviews;
