import React from 'react';
import { withRouter } from 'react-router-dom';
import SizeSelector from '../../Components/SizeSelector/SizeSelector';
import './Detail.scss';

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      result: [],
      prodcutName: '',
      btnDisabledValue: false,
      selectedProduct: { size: '', price: 0 },
    };
  }

  componentDidMount() {
    // fetch(`http://10.58.6.177:8000/products/${this.props.match.params.id}`);
    fetch('http://10.58.6.177:8000/products/1')
      .then(res => res.json())
      .then(data => {
        this.setState({
          result: data.productDetails,
          prodcutName: data.productDetails.name,
        });
      });
  }

  selectProductData = finalResult => {
    this.setState({
      selectedProduct: {
        ...this.state.selectedProduct,
        size: finalResult.sizeName,
        price: finalResult.price.split('.')[0] + '₩',
      },
      btnDisabledValue: true,
    });
  };

  // checkFinalBtnValid = () => {
  //   return this.setState({
  //     btnDisabledValue: true,
  //   });
  // };

  render() {
    const { result, selectedProduct } = this.state;
    const induceTap = [
      {
        class: 'fas fa-truck-loading',
        type: '배송유형',
        value: '해외직배송',
      },
      {
        class: 'fas fa-parachute-box',
        type: '배송 예정일',
        value: '2~4일',
      },
      {
        class: 'fas fa-donate',
        type: '예상 배송비',
        value: '무료',
      },
    ];

    return (
      <div className="detailPageWrap">
        <div className="detailContentsWrap">
          <div className="contentPage">
            {result &&
              result.image &&
              result.image.map((src, i) => {
                return <img key={i} src={src} alt="제품 이미지" />;
              })}
            <div className="productDetail">
              <div className="productInfo">상품 상세 정보</div>
              <div className="productDescription">
                {result && result.description}
              </div>
            </div>
            <ul className="productContents">
              {result.productSubstance &&
                result.productSubstance.map((content, i) => {
                  return (
                    <li key={i}>
                      <div className="contentName">{content.name}</div>
                      <div className="contentValue">{content.value}</div>
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="sidePage">
            <div className="rightDiv">
              <div className="stickyDiv">
                <div className="nameSector">
                  <div className="productName">
                    {this.state.prodcutName.split('_')[1]}
                  </div>

                  <div className="productCategory">{result.category}</div>
                </div>

                <div className="forLine" />

                <div className="sizeSelectorWrap">
                  <SizeSelector
                    result={result}
                    selectedProduct={this.state.selectedProduct}
                    selectProductData={this.selectProductData}
                    checkFinalBtnValid={this.checkFinalBtnValid}
                  />
                </div>
                <div className="paymentArea">
                  <div className="noticePrice">
                    <span className="fixedWord">Price :</span>
                    <span className="priceData">
                      {selectedProduct.price ? selectedProduct.price : ''}
                    </span>
                  </div>

                  <div className="basketWrap">
                    <div className="checkPayment">
                      {induceTap.map((result, i) => {
                        return (
                          <div className="deliv" key={i}>
                            <div className="itemIndex">
                              <i class={result.class} />
                              <div className="itemWord">{result.type}</div>
                            </div>
                            <div className="delivItem">{result.value}</div>
                          </div>
                        );
                      })}
                    </div>
                    <button
                      className="putBasket"
                      disabled={!this.state.btnDisabledValue}
                      style={{
                        opacity: !this.state.btnDisabledValue ? 0.3 : 1,
                      }}
                    >
                      쇼핑백에 담기
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <img
              src="http://drive.google.com/uc?export=view&id=12dmrUY0mEWOycoj9KbjQAAwtalS6Ts-d"
              alt="banner"
              style={{ width: '22rem' }}
            />
          </div>
        </div>
        <div className="induceUser">
          <div className="induceItems">
            <i class="fas fa-balance-scale-right" />
            <div className="catchCopyright">
              전세계 원단을
              <br />단 한 곳에서
            </div>
          </div>
          <div className="induceItems">
            <i class="fas fa-receipt"></i>
            <div className="catchCopyright">
              똑똑한 가격비교로
              <br />
              찾는 최저가
            </div>
          </div>
          <div className="induceItems">
            <i class="fas fa-briefcase" />
            <div className="catchCopyright">
              고민 없이
              <br />한 눈에 보는 최종금액
            </div>
          </div>
          <div className="induceItems">
            <i class="fas fa-boxes" />
            <div className="catchCopyright">
              직구도 국내쇼핑처럼
              <br />
              간편한 '캐치구매'
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Detail);
