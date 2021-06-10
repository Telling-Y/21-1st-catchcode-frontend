import React from 'react';
import SearchModal from '../Modal/SearchModal/SearchModal';
import Dropdown from '../Dropdown/Dropdown';
import { Link } from 'react-router-dom';
import './Nav.scss';
import LoginModal from '../Modal/LoginModal/LoginModal';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      searchModalValid: false,
      dropDownValid: false,
      loginModalValid: false,
    };
  }
  loginModalon = event => {
    this.setState({
      loginModalValid: true,
    });
  };
  searchModalon = event => {
    this.setState({
      searchModalValid: !this.state.searchModalValid,
    });
  };
  categoriDropDown = event => {
    console.log(event);
    this.setState({
      dropDownValid: true,
    });
  };
  removeDropDown = event => {
    this.setState({
      dropDownValid: false,
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
                <i className="fas fa-search" />
                <button className="callSearch" onClick={this.searchModalon}>
                  프리미엄을 캐치하세요!
                </button>
              </div>
            </div>
            <div className="linkTab">
              <div className="linkItemsWrap">
                <Link to="#">홈</Link>
                <div className="NavDropDownWrap">
                  <Link
                    to="#"
                    onMouseEnter={this.categoriDropDown}
                    onMouseLeave={this.removeDropDown}
                  >
                    쇼핑하기
                  </Link>
                  <div className="fakeElm" />
                </div>

                <Link to="#">캐치태그</Link>
                <Link to="#">이동 후 구매</Link>
              </div>
            </div>
            <div className="userItems">
              <div className="icon">
                <Link to="#">
                  <i className="far fa-heart" />
                </Link>
              </div>
              <div className="icon">
                <Link to="#">
                  <i class="fas fa-shopping-bag" />
                </Link>
              </div>
              <div className="icon" onMouseEnter={this.loginModalValid}>
                <Link to="#">
                  <i class="far fa-user" />
                </Link>
                {this.state.loginModalValid && (
                  <LoginModal isCheck={this.loginModalValid} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="printDropDown">
          {this.state.dropDownValid && (
            <Dropdown
              isCheck={this.dropDownValid}
              removeDropDown={this.removeDropDown}
              categoriDropDown={this.categoriDropDown}
            />
          )}
        </div>
        <div className="printSearchModal">
          {this.state.searchModalValid && (
            <SearchModal isCheck={this.searchModalValid} />
          )}
        </div>
      </nav>
    );
  }
}

export default Nav;
