import { Component } from 'react';
import './LoginModal.scss';

class LoginModal extends Component {
  moveToLoginPage = () => {
    this.props.history.push('/Login');
  };

  moveToSignPage = () => {
    this.props.history.push(`/Sign`);
  };

  render() {
    return (
      <div className="loginModal">
        <button className="mvToSignIn" onClick={() => this.moveToLoginPage()}>
          로그인
        </button>
        <button className="mvToSignup" onClick={() => this.moveToSignPage()}>
          회원가입
        </button>
      </div>
    );
  }
}
export default LoginModal;
