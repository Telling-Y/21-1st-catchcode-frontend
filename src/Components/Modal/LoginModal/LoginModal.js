import { Component } from 'react';
import './LoginModal.scss';

class LoginModal extends Component {
  moveToLoginPage = () => {
    // this.state.history.push('/Login');
    console.log(this.props.history);
  };

  render() {
    return (
      <div className="loginModal">
        <button className="mvToSignIn" onClick={() => this.moveToLoginPage()}>
          로그인
        </button>
        <button className="mvToSignup">회원가입</button>
      </div>
    );
  }
}
export default LoginModal;
