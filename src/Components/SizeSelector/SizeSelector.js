import { Component } from 'react';
import './SizeSelector.scss';

class SizeSelector extends Component {
  constructor() {
    super();
    this.state = {
      listStyle: 'none',
      setSize: '사이즈를 선택해주세요',
    };
  }

  changeListStyle = () => {
    this.state.listStyle === 'none'
      ? this.setState({ listStyle: '' })
      : this.setState({ listStyle: 'none' });
  };

  chgSizeText = event => {
    console.log(event);
    !this.state.setSize === '' &&
      this.setState({
        setSize: this.props.result.priceAndSize.sizeName,
      });
  };

  render() {
    return (
      <ul className="sizeSelectorWrap">
        <li className="fixedLi">
          <button className="sizeSelector" onClick={this.changeListStyle}>
            {this.state.setSize}
          </button>
        </li>
        {this.props.result.priceAndSize &&
          this.props.result.priceAndSize.map(result => {
            return (
              <li class="newList" style={{ display: this.state.listStyle }}>
                <button
                  className="setSizeBtn"
                  onClick={(this.changeListStyle, this.chgSizeText)}
                  key={result.sizeId}
                >
                  <div className="propsData size">{result.sizeName}</div>
                  <div className="propsData price">
                    {result.stock === 0 ? 'Soldout' : result.price + '₩'}
                  </div>
                </button>
              </li>
            );
          })}
      </ul>
    );
  }
}
export default SizeSelector;
