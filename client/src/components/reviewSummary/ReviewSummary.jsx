import React from 'react';
// eslint-disable-next-line import/extensions
import RatingSummary from './RatingSummary/RatingSummary.jsx';

class ReviewSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <RatingSummary />
      </div>
    );
  }
}

export default ReviewSummary;
