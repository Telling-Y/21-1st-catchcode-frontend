import react from 'react';
import './Products.scss';

class Products extends react.Component {
  changeDeciaml = price => {
    const numPrice = Number(price);
    return Number(numPrice.toFixed()).toLocaleString('ko-KR');
  };

  removeTitleUnderBar = name => {
    return name.slice(name.indexOf('_') + 1, name.length);
  };

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
                <div className="title">
                  {this.removeTitleUnderBar(data.name)}
                </div>
                <div className="price">{this.changeDeciaml(data.price)}</div>
                {!data.catchCode && <div className="detail">캐치구매</div>}
                {!data.stock && <div className="soldout">SOLD OUT</div>}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Products;
