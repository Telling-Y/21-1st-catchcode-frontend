import React from 'react';
import SizeSelector from '../../Components/SizeSelector/SizeSelector';
import './Detail.scss';

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      result: [],
      priceData: 0,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/detail.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          result: data.result,
        });
      });
  }
  selectPrice = finalPayment => {
    console.log(this);
    return this.setState({
      priceData: finalPayment,
    });
  };

  render() {
    const { result } = this.state;

    return (
      <div className="detailPageWrap">
        <div className="detailContentsWrap">
          <div className="contentPage">
            {result &&
              result.image &&
              result.image.map(src => {
                return <img src={src} alt="제품 이미지" />;
              })}
            <div className="productDetail">
              <div className="productInfo">상품 상세 정보</div>
              <div className="productDescription">
                {result && result.description}
              </div>
            </div>
            <ul className="productContents">
              {result.productContents &&
                result.productContents.map(Content => {
                  return (
                    <li>
                      <div className="contentName">{Content.name}</div>
                      <div className="contentValue">{Content.value}</div>
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="sidePage">
            <div className="stickyDiv">
              <div className="nameSector">
                <div className="productName">{result.name}</div>

                <div className="productCategory">{result.categoryName}</div>
              </div>
              <div className="selectPayment">
                <button className="ehtchWay">Ehtch 구매</button>
                <button className="normalWay">일반 구매</button>
              </div>
              <div className="sizeSelectorWrap">
                <SizeSelector result={result} selectPrice={this.selectPrice} />
              </div>
              <div className="paymentArea">
                <div className="noticePrice">{this.state.priceData}</div>

                <div className="basketWrap">
                  <div className="checkPayment">
                    <div className="deliv">
                      <div className="itemIndex">
                        <i class="fas fa-truck-loading"></i>
                        <div className="itemWord">배송 유형</div>
                      </div>
                      <div className="delivItem">해외직배송</div>
                    </div>
                    <div className="deliv">
                      <div className="itemIndex">
                        <i class="fas fa-parachute-box" />
                        <div className="itemWord">배송 예정일</div>
                      </div>
                      <div className="delivItem">2~4일</div>
                    </div>
                    <div className="deliv">
                      <div className="itemIndex">
                        <i class="fas fa-donate" />
                        <div className="itemWord">예상 배송비</div>
                      </div>
                      <div className="delivItem">무료</div>
                    </div>
                  </div>
                  <button className="putBasket">쇼핑백에 담기</button>
                </div>
              </div>
            </div>
            <div className="bannerDiv">
              <img
                src="https://drive.google.com/file/d/12dmrUY0mEWOycoj9KbjQAAwtalS6Ts-d/view?usp=sharing"
                alt="banner"
              />
            </div>
          </div>
        </div>
        <div className="induceUser">
          <div className="induceItems">
            <i class="fas fa-balance-scale-right" />
            <div>
              전세계 원단을
              <br />단 한 곳에서
            </div>
          </div>
          <div className="induceItems">
            <i class="fas fa-receipt"></i>
            <div>
              똑똑한 가격비교로
              <br />
              찾는 최저가
            </div>
          </div>
          <div className="induceItems">
            <i class="fas fa-briefcase" />
            <div>
              고민없이
              <br />한 눈에 보는 최종금액
            </div>
          </div>
          <div className="induceItems">
            <i class="fas fa-boxes" />
            <div>
              직구도 국내쇼핑처럼
              <br />
              간편한 '엣치구매'
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
