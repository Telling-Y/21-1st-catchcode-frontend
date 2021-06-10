import React from 'react';
import CommonInput from '../../Components/CommonInput/CommonInput';
import './Sign.scss';

class Sign extends React.Component {
  constructor() {
    super();
    this.state = {
      isGenderSelect: true,
      genderNum: 1,
      nameValue: '',
      phoneValue: '',
      passwordValue: '',
      signData: [
        {
          id: 'nameValue',
          text: '이름',
          placeholder: '이름을 입력해주세요',

          noValue: false,
        },
        {
          id: 'phoneValue',
          text: '휴대폰번호',
          placeholder: '휴대폰번호를 입력해주세요',
        },
        {
          id: 'passwordValue',
          text: '비밀번호',
          placeholder: '비밀번호를 입력해주세요',
          view: false,
        },
      ],
      validator: {
        nameValue: input => input.length >= 6,
        phoneValue: input => input?.includes('@' && '.com'),
        passwordValue: input => input.length >= 8,
      },
    };
  }

  seperateGender = e => {
    this.setState({
      isGenderSelect: e.target.innerText === '남성' ? false : true,
    });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { isGenderSelect, signData } = this.state;
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
              >
                여성
              </button>
              <button
                className={
                  !isGenderSelect ? 'genderButton select' : 'genderButton'
                }
                onClick={this.seperateGender}
              >
                남성
              </button>
            </div>
            {signData.map((data, idx) => {
              return (
                <CommonInput
                  key={idx}
                  text={data.text}
                  placeholder={data.placeholder}
                  view={data.view}
                  id={data.id}
                  noValue={data.noValue}
                  value={this.state[data.id]}
                  handleInput={this.handleInput}
                  handleValid={this.validator[data.id]}
                />
              );
            })}

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
