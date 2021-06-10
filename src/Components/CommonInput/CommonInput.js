import React from 'react';
import './CommonInput.scss';

class CommonInput extends React.Component {
  render() {
    const { id, type, text, placeholder } = this.props;
    const { handleInput, handleValid, value } = this.props;
    const isVaild = handleValid(value);

    return (
      <div className="inputBox">
        <div className="inputTitle">{text}</div>
        <input
          name={id}
          type={type}
          placeholder={placeholder}
          onChange={handleInput}
        />
        {isVaild && <div className="warning">{placeholder}</div>}

        {/* <div className="warning">
          이름에 초성, 숫자, 특수문자를 사용할 수 없습니다
        </div> */}
        {/* {!phoneNum && <div className="warning">잘못된 휴대폰번호입니다</div>} */}
        {/* <div className="warning">
          영문 대소문자, 숫자를 이용해 5자 이상으로 설정해주세요
        </div> */}
        {text === '비밀번호' && (
          <button
            className="passwordView"
            onClick={this.viewPassword}
            style={{
              backgroundImage: `url("/images/view.png")`,
            }}
          ></button>
        )}
      </div>
    );
  }
}

export default CommonInput;
