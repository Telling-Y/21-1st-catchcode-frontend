import React from 'react';
import { Link } from 'react-router-dom';
import { POST_SIGN_API } from '../../config';
import { regPassword, regName } from '../../utils';
import CommonInput from '../../Components/CommonInput/CommonInput';
import './Sign.scss';

class Sign extends React.Component {
  constructor() {
    super();
    this.state = {
      genderNum: 0,
      nameValue: '',
      phoneValue: '',
      passwordValue: '',
      isVaild: false,
      signData: [
        {
          id: 1,
          category: 'sign',
          name: 'nameValue',
          text: '이름',
          type: 'text',
          vaild: true,
          vaildator: input =>
            input.length > 1 && input.match(regName) ? true : false,
          placeholder: '이름을 입력해주세요',
          vaildText: '이름에 한글, 2글자 이상 입력해주세요',
        },
        {
          id: 2,
          category: 'sign',
          name: 'phoneValue',
          text: '휴대폰번호',
          type: 'number',
          vaild: true,
          vaildator: input => {
            return input.length >= 10 && input.length <= 11;
          },
          placeholder: '휴대폰번호를 입력해주세요',
          vaildText: '-을 제외한 정확한 휴대폰번호를 입력해주세요',
        },
        {
          id: 3,
          category: 'sign',
          name: 'passwordValue',
          text: '비밀번호',
          type: 'password',
          vaild: true,
          vaildator: input => (input.match(regPassword) ? true : false),
          placeholder: '비밀번호를 입력해주세요',
          vaildText: '영문 대소문자, 숫자를 이용해 5자 이상으로 설정해주세요',
        },
      ],
    };
  }

  seperateGender = e => {
    this.setState({
      genderNum: e.target.innerText === '남성' ? 1 : 0,
    });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  mappingVaild = () => {
    let vaildArr = this.state.signData.map(x => x.vaild);
    return vaildArr.every(x => x === true);
  };

  handleSign = () => {
    this.setState(
      {
        signData: this.state.signData.map(ele => {
          return { ...ele, vaild: ele.vaildator(this.state[ele.name]) };
        }),
      },
      () => {
        if (this.mappingVaild()) {
          fetch(`${POST_SIGN_API}`, {
            method: 'POST',
            body: JSON.stringify({
              phone_number: this.state.phoneValue,
              password: this.state.passwordValue,
              name: this.state.nameValue,
              sex: this.state.genderNum,
              admin: 1,
            }),
          })
            .then(res => res.json())
            .then(res => {
              if (res.result === 'SUCCESS!') {
                this.props.history.push('/Login');
              }
            });
        }
      }
    );
  };
  render() {
    const { signData, genderNum } = this.state;
    const { seperateGender } = this;
    return (
      <div className="sign">
        <article className="borderBox">
          <div className="SignWrap">
            <h1 className="title">회원가입</h1>
            <div className="buttonBox">
              <div className="buttonTitle">성별</div>
              <button
                className={`genderButton ${!genderNum && 'select'}`}
                onClick={seperateGender}
              >
                여성
              </button>
              <button
                className={`genderButton ${genderNum && 'select'}`}
                onClick={seperateGender}
              >
                남성
              </button>
            </div>
            {signData.map((data, idx) => {
              return (
                <CommonInput
                  key={idx}
                  data={data}
                  vaild={data.vaild}
                  handleInput={this.handleInput}
                />
              );
            })}

            <div className="agreeContext">
              회원가입 시
              <span>
                <Link to="/">이용약관,</Link>
              </span>
              <span>
                <Link to="/">개인정보 처리방침,</Link>
              </span>
              <span>
                <Link to="/">개인정보 활용,</Link>
              </span>
              <span>
                <Link to="/">마케팅</Link>
              </span>
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
