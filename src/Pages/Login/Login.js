import React from 'react';
import { Link } from 'react-router-dom';
import CommonInput from '../../Components/CommonInput/CommonInput';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      phoneValue: '',
      passwordValue: '',
      isLogin: false,
      ischeckNum: false,
      loginData: [
        {
          id: 1,
          type: 'text',
          text: '휴대폰번호',
          placeholder: '휴대폰 번호를 입력해주세요',
        },
        {
          id: 2,
          type: 'text',
          text: '비밀번호',
          placeholder: '비밀번호를 입력해주세요',
          view: false,
        },
      ],
    };
  }

  handleInput = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        return console.log(this.state.phoneValue);
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
    const regex = /^[0-9\b ]{0,20}$/;
    if (regex.test(e.target.value)) {
      this.setState({
        phoneValue: e.target.value,
      });
    }
  };

  goToSign = () => {
    this.props.history.push('/Sign');
  };

  render() {
    const { phoneValue, passwordValue, isLogin, loginData } = this.state;
    console.log(`phoneValue`, phoneValue, typeof phoneValue);
    return (
      <div className="Login">
        <article className="borderBox">
          <div className="loginWrap">
            ​<h1 className="title">로그인</h1>
            {loginData.map(data => {
              return (
                <CommonInput
                  key={data.id}
                  type={data.type}
                  text={data.text}
                  placeholder={data.placeholder}
                  view={data.view}
                  changeInput={this.handleInput}
                />
              );
            })}
            {/* <div className="inputBox">
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
            </div> */}
            ​
            <button
              className={isLogin ? 'blackButton' : 'grayButton'}
              // onClick={this.goToMain}
            >
              로그인
            </button>
            <Link to="/Sign" className="passowordForgot">
              비밀번호를 잊으셨나요?
            </Link>
            ​<h1 className="title">회원가입</h1>
            <div className="context">
              30초 만에 간단한 가입! 10% 현금캐시백!
            </div>
            ​
            <button className="blackButton" onClick={this.goToSign}>
              회원가입
            </button>
            ​
          </div>
        </article>
      </div>
    );
  }
}

export default Login;
