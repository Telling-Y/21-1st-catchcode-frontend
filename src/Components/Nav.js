import React from 'react';
import SearchModal from './Modal/Modal';
import { Link } from 'react-router-dom';
import './Nav.scss';
import Main from '../../Pages/Main/Main';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      searchModalValid: false,
    };
  }
  searchModalon = event => {
    this.setState({
      searchModalValid: !this.state.searchModalValid,
    });
  };
  render() {
    return (
      <nav>
        <div className="junkDiv">
          <div className="navContainer">
            <div className="navLeft">
              <img src="/images/logo.jpg" alt="logo" className="logo" />
              <div className="searchWrap">
                <i class="fas fa-search" />
                <button className="callSearch" onClick={this.searchModalon}>
                  프리미엄을 캐치하세요!
                </button>
              </div>
            </div>
            <div className="linkTab">
              <div className="linkItemsWrap">
                <Link to="#">홈</Link>
                <Link to="#">쇼핑하기</Link>
              </div>
            </div>
            <div className="userItems">
              <div className="icon">
                <i className="far fa-heart" />
              </div>
              <div className="icon">
                <i class="fas fa-shopping-bag" />
              </div>
              <div className="icon">
                <i class="far fa-user" />
              </div>
            </div>
          </div>
        </div>
        {this.state.searchModalValid && (
          <SearchModal isCheck={this.searchModalValid} />
        )}
      </nav>
    );
  }
}

export default Nav;
