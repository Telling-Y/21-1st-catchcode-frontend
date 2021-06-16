import { Component } from 'react';
import './MainProductItem.scss';

class MainProductItem extends Component {
  render() {
    return (
      <div className="mainProduct">
        <img
          src="https://media.catchfashion.com/images/h_l?url=https%3A%2F%2Fcdn-images.farfetch-contents.com%2F16%2F06%2F99%2F99%2F16069999_32492034_1000.jpg&t=pl"
          alt="test"
        />

        <div className="productName">testName</div>
        <div className="productPrice">10,000</div>
        <div className="productLabel">
          <div className="catchBuy">엣취구매</div>
          <div className="soldout">Sold out</div>
        </div>
      </div>
    );
  }
}

export default MainProductItem;
