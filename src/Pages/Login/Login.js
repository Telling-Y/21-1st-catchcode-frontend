import React from 'react';
import { Link } from 'react-router-dom';
import Sign from '../Sign/Sign';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      phoneValue: '',
      passwordValue: '',
      isLogin: false,
      ischeckNum: false,
    };
  }

  handleInput = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.activeLogin();
      }
    );
  };

  activeLogin = () => {
    const { phoneValue, passwordValue } = this.state;
    this.setState({
      isLogin: phoneValue && passwordValue ? true : false,
    });
  };

  viewPassword = e => {
    console.log(`e.target.previousElementSibling`, e);
  };

  checkNum = e => {
    if (e.target.value >= 0 || e.target.value <= 9) {
      this.setState({
        phoneValue: Number(e.target.value),
      });
    }
  };

  render() {
    const { phoneValue, passwordValue, isLogin } = this.state;
    console.log(`phoneValue`, phoneValue, typeof phoneValue);
    return (
      <div className="Login">
        <article className="borderBox">
          <div className="loginWrap">
            ​<h1 className="title">로그인</h1>
            <div className="inputBox">
              <div className="inputTitle">휴대폰 번호</div>
              <input
                type="text"
                placeholder="휴대폰 번호를 입력해주세요"
                name="phoneValue"
                onChange={(this.handleInput, this.checkNum)}
                value={phoneValue}
              />
              {/* ​<div className="warning">휴대폰 번호가 일치하지 않습니다</div> */}
            </div>
            <div className="inputBox">
              <div className="inputTitle">비밀번호</div>
              ​
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                name="passwordValue"
                onChange={this.handleInput}
              />
              <button
                className="passwordView"
                onClick={this.viewPassword}
                style={{
                  backgroundImage: `url("/images/view.png")`,
                }}
              ></button>
            </div>
            ​
            <button className={isLogin ? 'blackButton' : 'grayButton'}>
              로그인
            </button>
            <Link to="/Sign" className="passowordForgot">
              비밀번호를 잊으셨나요?
            </Link>
            ​<h1 className="title">회원가입</h1>
            <div className="context">
              30초 만에 간단한 가입! 10% 현금캐시백!
            </div>
            ​<button className="blackButton">회원가입</button>​
          </div>
        </article>
      </div>
    );
  }
}

export default Login;
