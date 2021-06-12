import React from 'react';
import SizeSelector from '../../Components/SizeSelector/SizeSelector';
import './Detail.scss';

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      result: [],
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
            <div className="productDetail">{result && result.description}</div>
            <ul className="productContents">
              {result.productContents &&
                result.productContents.map(Content => {
                  return (
                    <li>
                      <span>{Content.name}</span>
                      <span>{Content.value}</span>
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
              <div className="sizeSelectorWrap">
                <SizeSelector result={result} />
              </div>
              <div className="paymentArea">
                <div className="noticePrice">500,000원</div>
                <div>
                  <div className="checkPayment">
                    <div className="deliv">
                      <div className="itemIndex">배송 유형</div>
                      <div className="delivItem">해외직배송</div>
                    </div>
                    <div className="deliv">
                      <div className="itemIndex">배송 예정일</div>
                      <div className="delivItem">2~4일</div>
                    </div>
                    <div className="deliv">
                      <div className="itemIndex">예상 배송비</div>
                      <div className="delivItem">무료</div>
                    </div>
                  </div>
                  <button className="putBasket">쇼핑백에 담기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="induceUSer">
          <div className="induceItems">
            <img src="" alt="" />
            <span>
              전세계 원단을
              <br />단 한 곳에서
            </span>
          </div>
          <div className="induceItems">
            <img src="" alt="" />
            <span>
              똑똑한 가격비교로
              <br />
              찾는 최저가
            </span>
          </div>
          <div className="induceItems">
            <img src="" alt="" />
            <span>
              고민없이
              <br />한 눈에 보는 최종금액
            </span>
          </div>
          <div className="induceItems">
            <img src="" alt="" />
            <span>
              직구도 국내쇼핑처럼
              <br />
              간편한 '엣치구매'
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
