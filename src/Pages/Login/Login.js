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
      isWarning: [false, false],
    };
  }

  checkInputLenght = () => {
    const { phoneValue, passwordValue } = this.state;
    this.setState({
      isLogin: phoneValue.length > 0 && passwordValue.length > 0 ? true : false,
    });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.checkInputLenght();
      }
    );
  };

  handleLogin = () => {
    fetch('http://10.58.2.121:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        phone_number: this.state.phoneValue,
        password: this.state.passwordValue,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.result === 'SUCCESS!') {
          this.goToMain();
        } else if (res.result === 'INVALID USER') {
          // console.log(this.state.isWarning);
          this.setState({
            isWarning: [true, false],
          });
        }
      });
  };

  goToSign = () => {
    this.props.history.push('/Sign');
  };

  goToMain = () => {
    this.props.history.push('/');
  };

  render() {
    const { isLogin, phoneValue, isWarning } = this.state;
    console.log(isWarning);
    return (
      <div className="Login">
        <article className="borderBox">
          <div className="loginWrap">
            ​<h1 className="title">로그인</h1>
            {LOGIN_DATAS.map(data => {
              return (
                <CommonInput
                  key={data.id}
                  data={data}
                  value={this.state[data.name]}
                  handleInput={this.handleInput}
                  isWarning={isWarning}
                />
              );
            })}
            ​
            <button
              className={isLogin ? 'blackButton' : 'grayButton'}
              onClick={isLogin ? this.handleLogin : null}
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

const LOGIN_DATAS = [
  {
    id: 1,
    name: 'phoneValue',
    type: 'number',
    text: '휴대폰번호',
    warning: '휴대폰 번호가 일치하지 않습니다',
    placeholder: '휴대폰번호를 입력해 주세요',
  },
  {
    id: 2,
    name: 'passwordValue',
    type: 'password',
    text: '비밀번호',
    placeholder: '비밀번호를 입력해 주세요',
  },
];
