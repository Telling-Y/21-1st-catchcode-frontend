import { Component } from 'react';
import './SizeSelector.scss';

class SizeSelector extends Component {
  constructor() {
    super();
    this.state = {
      listStyle: 'none',
      setSize: '사이즈를 선택해주세요',
      payPrice: 0,
      btnValid: { buyBtnOpacity: 1, btnDisabledValue: true },
    };
  }

  //사이즈 드랍다운 메뉴 스타일
  changeListStyle = () => {
    this.state.listStyle === 'none'
      ? this.setState({ listStyle: '' })
      : this.setState({ listStyle: 'none' });
  };

  //사이즈 선택 버튼 텍스트 변경, 선택한 가격 데이터 부모 컴포넌트로 송출
  chgSizeText = result => {
    this.setState(
      {
        listStyle: '',
        setSize: result.sizeName,
      },
      () => {
        this.sendPriceToParent(result);
        this.changeListStyle();
        this.sendBtnValidToParent();
      }
    );
  };

  sendBtnValidToParent = () => {
    return this.props.checkFinalBtnValid(this.state.btnValid);
  };

  sendPriceToParent = result => {
    return this.props.selectPrice(result);
  };

  render() {
    const { result } = this.props;
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
        {result.priceAndSize &&
          result.priceAndSize.map((result, i) => {
            return (
              <div
                key={result.sizeId}
                class="showList"
                style={{ display: this.state.listStyle }}
              >
                <button
                  className="setSizeBtn"
                  onClick={() => this.chgSizeText(result)}
                  id={'btnLength' + i}
                  style={{ top: i * 2.8 + `rem` }}
                >
                  <div className="propsData size">{result.sizeName}</div>
                  <div className="propsData price">
                    {result.stock === 0
                      ? 'Soldout'
                      : result.price.split('.')[0] + '₩'}
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
