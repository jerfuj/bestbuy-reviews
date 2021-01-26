/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';
import Reviews from './reviews/reviews.jsx';
import StarRatings from './StarRatings.jsx';
import ReviewSummary from './reviewSummary/ReviewSummary.jsx';
import testdata from './testdata.js';

const Body = styled.div`
  max-width: 1135px;
  padding-left: 30px;
  padding-right: 30px;
  display: block;
  margin-left: 152.5px;
`;
const Dropdown = styled.div`
  cursor: pointer;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  white-space: no-wrap;
  padding: 24px;
  font-size: 24px;
  border-top: 1px solid #c5cbd5;
  border-bottom: 1px solid #c5cbd5;
`;
const ReviewTitle = styled.div`
  font-weight: bold;
`;

const Icons = styled.div`
  display:flex;
  vertical-align: baseline;
`;
const Chevron = styled.div`
  text-align: right;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: testdata,
      reviews: testdata.reviews,
      dropDown: false,
      filter: 0,
      verified: false,
    };
    // this.showDropdown = this.showDropdown.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.applyVerifiedFilter = this.applyVerifiedFilter.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  // eslint-disable-next-line react/sort-comp
  getProduct() {
    $.get(`http://localhost:3003/api${window.location.pathname}`, (results) => {
      this.setState({
        product: results[0],
        reviews: results[0].reviews,
      });
    });
  }

  handleKeyPress(e) {
    const { dropDown } = this.state;
    if (!dropDown) {
      this.setState({
        dropDown: true,
      });
    } else {
      this.setState({
        dropDown: false,
      });
    }
    e.preventDefault();
  }

  applyFilter(e) {
    e.preventDefault();
    const set = Number(e.target.value);
    const { filter } = this.state;
    if (set === filter) {
      this.setState({
        filter: 0,
      });
    } else {
      this.setState({
        filter: set,
      });
    }
  }

  applyVerifiedFilter(e) {
    e.preventDefault();
    const ver = 'true';
    const { verified } = this.state;
    if (ver === 'true') {
      if (verified) {
        this.setState({
          verified: false,
        });
      } else {
        this.setState({
          verified: true,
        });
      }
    }
    if (ver === true && ver !== verified) {
      this.setState({
        verified: true,
      });
    } else if (ver === false && ver !== verified) {
      this.setState({
        verified: false,
      });
    }
  }

  render() {
    const {
      product,
      reviews,
      dropDown,
      filter,
      verified,
    } = this.state;

    const {
      averageRating,
      totalRecommends,
      totalFiveStars,
      totalFourStars,
      totalThreeStars,
      totalTwoStars,
      totalOneStars,
      totalReviews,
      pros,
      cons,
    } = product;

    const numbers = {
      totalFiveStars,
      totalFourStars,
      totalThreeStars,
      totalTwoStars,
      totalOneStars,
      totalReviews,
    };

    const mentions = {
      pros,
      cons,
    };

    return (
      <Body>
        <Dropdown role="button" tabIndex="0" onClick={this.handleKeyPress} onKeyPress={this.handleKeyPress}>
          <ReviewTitle>Reviews</ReviewTitle>
          <Icons style={{ display: (dropDown ? 'none' : '') }}>
            <StarRatings rating={averageRating} sizing={16} />
            <div>
              (
              {reviews.length}
              )
            </div>
            <Chevron>
              <i className="fas fa-chevron-down" />
            </Chevron>
          </Icons>
        </Dropdown>
        <div style={{ display: (dropDown ? 'block' : 'none') }}>
          <ReviewSummary rating={averageRating} numReviews={reviews.length} recommends={totalRecommends} numbers={numbers} applyFilter={this.applyFilter} mentions={mentions} />
          <Reviews reviews={reviews} filter={filter} verified={verified} applyVerifiedFilter={this.applyVerifiedFilter} />
        </div>
      </Body>
    );
  }
}

export default App;
