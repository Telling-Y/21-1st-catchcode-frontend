import react from 'react';
import './Products.scss';

class Products extends react.Component {
  render() {
    const { productListInfo } = this.props;
    return (
      <div className="products">
        {productListInfo.map(data => {
          return (
            <div className="item" key={data.id}>
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

export default Products;
