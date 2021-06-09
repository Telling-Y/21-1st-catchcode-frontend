import React from 'react';
import './Sign.scss';

class Sign extends React.Component {
  constructor() {
    super();
    this.state = {
      isGenderSelect: true,
      genderNum: 1,
    };
  }

  seperateGender = e => {
    if (e.target.innerText === '남성') {
      this.setState({
        isGenderSelect: false,
      });
    } else {
      this.setState({
        isGenderSelect: true,
      });
    }
  };

  render() {
    const { isGenderSelect } = this.state;
    return (
      <div className="Sign">
        <article className="borderBox">
          <div className="SignWrap">
            <h1 className="title">회원가입</h1>
            <div className="buttonBox">
              <div className="buttonTitle">성별</div>
              <button
                className={
                  isGenderSelect ? 'genderButton select' : 'genderButton'
                }
                onClick={this.seperateGender}
                id={1}
              >
                여성
              </button>
              <button
                className={
                  !isGenderSelect ? 'genderButton select' : 'genderButton'
                }
                onClick={this.seperateGender}
                id={2}
              >
                남성
              </button>
            </div>
            <div className="inputBox">
              <div className="inputTitle">이름</div>
              <input type="text" placeholder="이름을 입력해주세요" />​
              {/* <div className="warning">
                이름에 초성, 숫자, 특수문자를 사용할 수 없습니다
              </div> */}
            </div>
            <div className="inputBox">
              <div className="inputTitle">휴대폰번호</div>
              <input type="text" placeholder="휴대폰 번호를 입력해주세요" />​
              {/* <div className="warning">잘못된 휴대폰번호입니다</div> */}
            </div>
            <div className="inputBox">
              <div className="inputTitle">비밀번호</div>
              <input type="text" placeholder="비밀번호를 입력해주세요" />​
              {/* <div className="warning">
                영문 대소문자, 숫자를 이용해 5자 이상으로 설정해주세요
              </div> */}
              <button
                className="passwordView"
                style={{
                  backgroundImage: `url("/images/view.png")`,
                }}
              ></button>
            </div>
            <div className="agreeContext">
              회원가입 시
              <li>
                <a>이용약관,</a>
              </li>
              <li>
                <a>개인정보 처리방침,</a>
              </li>
              <li>
                <a>개인정보 활용,</a>
              </li>
              <li>
                <a>마케팅</a>
              </li>
              수신에 동의합니다.
            </div>
            <button className="blackButton">확인</button>
          </div>
        </article>
      </div>
    );
  }
}

export default Sign;
