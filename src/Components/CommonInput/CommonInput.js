import React from 'react';
import './CommonInput.scss';

class CommonInput extends React.Component {
  render() {
    const { name, type, text, placeholder, warning } = this.props.data;
    const { value, handleInput, isWarning } = this.props;
    console.log(isWarning);
    return (
      <div className="inputBox">
        <div className="inputTitle">{text}</div>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={handleInput}
        />
        {isWarning.map(
          (x, idx) =>
            x && (
              <div className="warning" key={idx}>
                {placeholder}
              </div>
            )
        )}
        {/* {isnoValue && <div className="warning">{placeholder}</div>} */}

        {text === '비밀번호' && (
          <button
            className="passwordView"
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
