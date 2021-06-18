import React from 'react';
import { Link } from 'react-router-dom';
import { POST_LOGIN_API } from '../../config';
import CommonInput from '../../Components/CommonInput/CommonInput';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      phoneValue: '',
      passwordValue: '',
      phoneError: false,
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleLogin = () => {
    fetch(`${POST_LOGIN_API}`, {
      method: 'POST',
      body: JSON.stringify({
        phone_number: this.state.phoneValue,
        password: this.state.passwordValue,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.result === 'SUCCESS!') {
          this.setState({
            phoneError: false,
          });
          this.props.history.push('/');
        } else if (res.result === 'INVALID USER') {
          this.setState({
            phoneError: true,
          });
        }
      });
  };

  render() {
    const { phoneValue, passwordValue, phoneError } = this.state;

    const isLogin =
      phoneValue.length > 0 && passwordValue.length > 0 ? true : false;
    return (
      <div className="login">
        <article className="borderBox">
          <div className="loginWrap">
            ​<h1 className="title">로그인</h1>
            {LOGIN_DATAS.map(data => {
              return (
                <CommonInput
                  key={data.id}
                  data={data}
                  handleInput={this.handleInput}
                  isWarning={phoneError}
                />
              );
            })}
            ​
            <Link
              className={isLogin ? 'blackButton' : 'grayButton'}
              onClick={isLogin ? this.handleLogin : null}
            >
              로그인
            </Link>
            <Link to="/Sign" className="passowordForgot">
              비밀번호를 잊으셨나요?
            </Link>
            ​<h2 className="title">회원가입</h2>
            <div className="context">
              30초 만에 간단한 가입! 10% 현금캐시백!
            </div>
            ​
            <Link to="/Sign" className="blackButton">
              회원가입
            </Link>
            ​
          </div>
        </article>
      </div>
    );
  }
}

export default Login;

const LOGIN_DATAS = [
  {
    id: 1,
    category: 'login',
    name: 'phoneValue',
    type: 'number',
    text: '휴대폰번호',
    vaild: '휴대폰 번호가 일치하지 않습니다',
    placeholder: '휴대폰번호를 입력해 주세요',
  },
  {
    id: 2,
    category: 'login',
    name: 'passwordValue',
    type: 'password',
    text: '비밀번호',
    placeholder: '비밀번호를 입력해 주세요',
  },
];
