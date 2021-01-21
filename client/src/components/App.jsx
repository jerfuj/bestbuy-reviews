/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';

// import ReviewSummary from './reviewSummary/ReviewSummary.jsx';
import Reviews from './reviews/reviews.jsx';
import testdata from './testdata.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: testdata,
      dropDown: false,
    };

    // this.showDropdown = this.showDropdown.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    const { dropDown } = this.state;
    console.log('hello');
    if (!dropDown) {
      this.setState({
        dropDown: true,
      });
    } else {
      this.setState({
        dropDown: false,
      });
    }
    const { product } = this.state;
    console.log(product);
    e.preventDefault();
  }

  render() {
    const { dropDown } = this.state;
    const { product } = this.state;
    const { reviews } = product;
    return (
      <div>
        <div role="button" tabIndex="0" className="dropdown" onClick={this.handleKeyPress} onKeyPress={this.handleKeyPress}>
          <div id="child1">
            <h1>Reviews</h1>
            <i className="fas fa-chevron-down" />
          </div>
        </div>
        <div style={{ display: (dropDown ? 'block' : 'none') }}>
          <Reviews reviews={reviews} />
        </div>
      </div>
    );
  }
}

export default App;
