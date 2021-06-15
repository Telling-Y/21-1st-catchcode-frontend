import { Component } from 'react';
import './SizeSelector.scss';

class SizeSelector extends Component {
  constructor() {
    super();
    this.state = {
      listStyle: 'none',
      setSize: '사이즈를 선택해주세요',
      payPrice: 0,
    };
  }

  changeListStyle = () => {
    this.state.listStyle === 'none'
      ? this.setState({ listStyle: '' })
      : this.setState({ listStyle: 'none' });
  };

  chgSizeText = e => {
    this.setState({
      setSize: e.target.innerText.slice(0, 1),
      listStyle: '',
      payPrice: e.target.innerText.slice(1, e.target.innerText.length),
    });
    this.sendPriceToParent();
  };

  sendPriceToParent = () => {
    return this.props.selectPrice(this.state.payPrice);
  };

  render() {
    return (
      <div className="sizeSelectorWrap">
        <div className="fixedLi">
          <button className="sizeSelector" onClick={this.changeListStyle}>
            <div className="setSize">
              {this.state.setSize}
              <i class="fas fa-arrow-down" />
            </div>
          </button>
        </div>
        {this.props.result.priceAndSize &&
          this.props.result.priceAndSize.map((result, i) => {
            return (
              <div class="showList" style={{ display: this.state.listStyle }}>
                <button
                  className="setSizeBtn"
                  onClick={this.chgSizeText}
                  key={result.sizeId}
                  id={'btnLength' + i}
                  style={{ top: i * 2.8 + `rem` }}
                >
                  <div className="propsData size">{result.sizeName}</div>
                  <div className="propsData price">
                    {result.stock === 0 ? 'Soldout' : result.price + '₩'}
                  </div>
                </button>
              </div>
            );
          })}
      </div>
    );
  }
}
export default SizeSelector;
