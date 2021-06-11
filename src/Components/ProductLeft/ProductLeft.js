import { Component } from 'react';
import './ProductLeft.scss';

class ProductLeft extends Component {
  render() {
    console.log(this.props.imageUrl);
    return (
      <div className="productItem">
        <img src={this.props.imageUrl} alt="" />
        <div className="productExplain">
          <div className="productName">{this.props.description}</div>
        </div>
      </div>
    );
  }
}
export default ProductLeft;
