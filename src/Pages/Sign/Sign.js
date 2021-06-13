import React from 'react';
import CommonInput from '../../Components/CommonInput/CommonInput';
import './Sign.scss';

class Sign extends React.Component {
  constructor() {
    super();

    this.state = {
      // isGenderSelect: true,
      genderNum: 1,
      nameValue: '',
      phoneValue: '',
      passwordValue: '',
      isWarning: [false, false, false],
    };
  }

  seperateGender = e => {
    this.setState({
      // isGenderSelect: e.target.innerText === '남성' ? false : true,
      genderNum: e.target.innerText === '남성' ? 2 : 1,
    });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  validator = inputName => {
    console.log(this.state);
  };

  handleSign = () => {
    this.validator();
    // fetch('http://10.58.2.121:8000/users/signup', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     phone_number: this.state.phoneValue,
    //     password: this.state.passwordValue,
    //     name: this.state.nameValue,
    //     sex: this.state.genderNum,
    //     admin: 1,
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(result => console.log(result));
  };

  render() {
    const { genderNum, isWarning } = this.state;
    const { seperateGender } = this;
    return (
      <div className="sign">
        <article className="borderBox">
          <div className="SignWrap">
            <h1 className="title">회원가입</h1>
            <div className="buttonBox">
              <div className="buttonTitle">성별</div>
              <button
                className={`genderButton ${genderNum === 1 && 'select'}`}
                onClick={seperateGender}
              >
                여성
              </button>
              <button
                className={`genderButton ${genderNum === 2 && 'select'}`}
                onClick={seperateGender}
              >
                남성
              </button>
            </div>
            {SIGN_DATAS.map((data, idx) => {
              return (
                <CommonInput
                  key={idx}
                  data={data}
                  value={this.state[data.name]}
                  handleInput={this.handleInput}
                  isWarning={isWarning}
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
            <button className="blackButton" onClick={this.handleSign}>
              확인
            </button>
          </div>
        </article>
      </div>
    );
  }
}

export default Sign;

const SIGN_DATAS = [
  {
    id: 1,
    name: 'nameValue',
    text: '이름',
    type: 'text',
    placeholder: '이름을 입력해주세요',
  },
  {
    id: 2,
    name: 'phoneValue',
    text: '휴대폰번호',
    type: 'number',
    placeholder: '휴대폰번호를 입력해주세요',
  },
  {
    id: 3,
    name: 'passwordValue',
    text: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력해주세요',
  },
];
