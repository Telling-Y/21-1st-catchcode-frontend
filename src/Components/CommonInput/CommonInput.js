import React from 'react';
import './CommonInput.scss';

class CommonInput extends React.Component {
  render() {
    const { id, name, category, type, text, placeholder, vaild, vaildText } =
      this.props.data;
    const { handleInput, isWarning } = this.props;
    return (
      <div className="inputBox">
        <label className="inputTitle">{text}</label>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={handleInput}
        />

        {isWarning && id === 1 && <div className="warning">{placeholder}</div>}

        {!vaild && category === 'sign' && (
          <div className="warning">{vaildText}</div>
        )}

        {text === '비밀번호' && (
          <button
            className="passwordView"
            // {`passwordView ${this.state.isView && 'select'}`}
            style={{
              backgroundImage: `url("/images/view.png")`,
            }}
          />
        )}
      </div>
    );
  }
}

export default CommonInput;
