import { Component } from 'react';
import './LoginModal.scss';

class LoginModal extends Component {
  render() {
    return (
      <div className="loginModal">
        <button className="mvToSignIn">로그인</button>
        <button className="mvToSignup">회원가입</button>
      </div>
    );
  }
}
export default LoginModal;
