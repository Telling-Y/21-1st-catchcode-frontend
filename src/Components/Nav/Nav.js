import React from 'react';
import SearchModal from '../Modal/Modal';
import Dropdown from '../Dropdown/Dropdown';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      searchModalValid: false,
      dropDownValid: false,
    };
  }
  dropDownRef = React.createRef();
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

  handleMouseOver = event => {
    console.log(this.dropDownRef.current.contains(event.target));
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
