import react from 'react';
import './FilterProducts.scss';

class FilterProducts extends react.Component {
  changeDeciaml = price => {
    const numPrice = Number(price);
    return Number(numPrice.toFixed()).toLocaleString('ko-KR');
  };

  removeTitleUnderBar = name => {
    return name.slice(name.indexOf('_') + 1, name.length);
  };

  // componentDidMount() {
  //   fetch(`http://localhost.8000/products/search/${this.props.match.params.id}`)
  //     .then(res => res.json())
  //     .then(res => console.log(res));
  // }

  render() {
    const { productListInfo } = this.props;
    console.log(this.props);
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

export default FilterProducts;
