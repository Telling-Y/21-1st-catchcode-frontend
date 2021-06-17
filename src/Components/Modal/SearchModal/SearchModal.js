import { Component } from 'react';
import './SearchModal.scss';

class SearchModal extends Component {
  render() {
    return (
      <div className="modalContainer">
        <div className="modalToggle">
          <div className="notice">최근 검색어</div>
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
