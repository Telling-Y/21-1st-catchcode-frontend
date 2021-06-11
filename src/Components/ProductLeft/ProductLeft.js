import { Component } from 'react';
import './ProductLeft.scss';

class ProductLeft extends Component {
  render() {
    return (
      <>
        <img src={this.props.imageUrl} alt=""></img>
      </>
    );
  }
}
export default ProductLeft;
