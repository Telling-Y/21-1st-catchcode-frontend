import { Component } from 'react';
import './SearchModal.scss';

class SearchModal extends Component {
  render() {
    return (
      <div className="modalContainer">
        <span>최근 검색어</span>
        <div className="modalToggle">
          <button
            className="closeButton"
            onClick={() => this.props.closeSearchModal()}
          >
            x
          </button>
        </div>
      </div>
    );
  }
}
export default SearchModal;
