import { Component } from 'react';
import './MainProductItem.scss';

class MainProductItem extends Component {
  goToDetail = () => {
    this.state.history.push(` `);
  };
  render() {
    const { product } = this.props;
    return (
      <div className="products">
        {product.map(data => {
          return (
            <div className="item" key={data.id} onClick={() => this.goToDetail}>
              <div className="image">
                <img alt="원단사진입니다" src={data.thumbNail} />
              </div>
              <div className="itemContext">
                <div className="title">{data.name}</div>
                <div className="price">{data.price}</div>
                <div className="detail">캐치구매</div>
                <div className="soldout">SOLD OUT</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MainProductItem;
