import React from 'react';
import { withRouter } from 'react-router-dom';
import { GET_DETAILPAGE_API } from '../../config';
import SizeSelector from '../../Components/SizeSelector/SizeSelector';
import './Detail.scss';

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      result: [],
      prodcutName: '',
      btnDisabledValue: false,
      selectedProduct: { size: '', price: 0, stock: 0 },
    };
  }

  componentDidMount() {
    fetch(`${GET_DETAILPAGE_API}/${this.props.match.params.id}`)
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
        stock: finalResult.stock,
      },
      btnDisabledValue: finalResult.stock > 0 && true,
    });
  };
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
        type: '배송비',
        value: '무료',
      },
    ];
    const foot = [
      {
        class: 'fas fa-balance-scale-right',
        word: `전세계 원단을 단 한 곳에서`,
      },
      {
        class: 'fas fa-receipt',
        word: `똑똑한 가격비교로 찾는 최저가`,
      },
      {
        class: 'fas fa-briefcase',
        word: `고민 없이 한 눈에 보는 최종금액`,
      },
      {
        class: 'fas fa-boxes',
        word: `직구도 국내쇼핑처럼 간편한 '캐치구매'`,
      },
    ];

    const opacityCondition = !this.state.btnDisabledValue
      ? 0.3
      : selectedProduct.stock > 0
      ? 1
      : 0.3;

    const soldOutCondition = selectedProduct.price
      ? selectedProduct.stock === 0
        ? 'soldout'
        : selectedProduct.price
      : '';

    return (
      <div className="detailPageWrap">
        <div className="detailContentsWrap">
          <div className="contentPage">
            {result.image &&
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

                <div className="buyTitle">구매</div>

                <div className="sizeSelectorWrap">
                  <SizeSelector
                    result={result}
                    selectedProduct={this.state.selectedProduct}
                    selectProductData={this.selectProductData}
                    checkFinalBtnValid={this.checkFinalBtnValid}
                  />
                </div>
                <div className="updateWrap">
                  <div className="update">최근 업데이트: 41분 전</div>
                  <div className="sizeChart">사이즈 차트</div>
                </div>
                <div className="paymentArea">
                  <div className="noticePrice">
                    <span className="fixedWord">Price :</span>
                    <span className="priceData">{soldOutCondition}</span>
                  </div>

                  <div className="basketWrap">
                    <div className="checkPayment">
                      {induceTap.map((result, i) => {
                        return (
                          <div className="deliv" key={i}>
                            <div className="itemIndex">
                              <i className={result.class} />
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
                      onClick={this.checkBtn}
                      style={{
                        //soldOut 일 때 버튼 비활성화
                        opacity: { opacityCondition },
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
              style={{ width: '23.5rem' }}
            />
          </div>
        </div>
        <div className="induceUser">
          {foot.map((result, index) => {
            return (
              <div className="induceItems" key={index}>
                <i className={result.class} />
                <div className="catchCopyright">{result.word}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Detail);
