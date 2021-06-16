import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './MainProductItem.scss';

class MainProductItem extends Component {
  goToDetail = event => {
    this.props.history.push(`/product/Detail/${event}`);
  };
  render() {
    const { product } = this.props;
    return (
      <div className="products">
        {product.map(data => {
          return (
            <Link
              onClick={() => this.goToDetail(data.id)}
              className="item"
              key={data.id}
            >
              <div className="image">
                <img alt="원단사진입니다" src={data.thumbNail} />
              </div>
              <div className="itemContext">
                <div className="title">{data.name}</div>
                <div className="price">{data.price}</div>
                <div className="detail">캐치구매</div>
                <div className="soldout">SOLD OUT</div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default withRouter(MainProductItem);
