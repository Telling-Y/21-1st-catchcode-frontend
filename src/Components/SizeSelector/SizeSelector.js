import { Component } from 'react';
import './SizeSelector.scss';

class SizeSelector extends Component {
  constructor() {
    super();
    this.state = {
      dropDownValid: false,
    };
  }
  dropDownOn = event => {
    this.setState({
      dropDownValid: true,
    });
  };
  render() {
    return (
      <ul className="sizeSelectorWrap">
        <li>
          <div className="sizeSelector" onClick="dropDownOn">
            사이즈를 선택해주세요
          </div>
        </li>
        {this.props.result.priceAndSize &&
          this.props.result.priceAndSize.map(sizeId => {
            return (
              <li>
                <div className="forBtnSt" onClick="dropDown">
                  <div className="sizeId">{sizeId.sizeName}</div>
                  <div className="priceData">{sizeId.price}₩</div>
                </div>
              </li>
            );
          })}
      </ul>
    );
  }
}
export default SizeSelector;
