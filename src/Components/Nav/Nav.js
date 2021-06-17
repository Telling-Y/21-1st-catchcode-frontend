import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchModal from '../Modal/SearchModal/SearchModal';
import Dropdown from '../Dropdown/Dropdown';
import LoginModal from '../Modal/LoginModal/LoginModal';
import './Nav.scss';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      searchModalValid: false,
      dropDownValid: false,
      loginModalValid: false,
      inputZIndex: -1,
      result: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.2.153:8000/products/categories')
      .then(res => res.json())
      .then(data => {
        this.setState({
          result: data.productCategories,
        });
      });
  }

  loginModalOn = () => {
    this.setState({
      loginModalValid: true,
    });
  };

  loginModalOff = () => {
    this.setState({
      loginModalValid: false,
    });
  };

  searchModalOn = () => {
    this.setState({
      searchModalValid: !this.state.searchModalValid,
    });
    this.focusInputBox();
  };

  focusInputBox = () => {
    this.setState({ inputZIndex: 1000 });
  };

  categoriDropDown = event => {
    this.setState({
      dropDownValid: true,
    });
  };

  removeDropDown = () => {
    this.setState({
      dropDownValid: false,
    });
  };

  closeSearchModal = () => {
    this.setState({
      searchModalValid: false,
      inputZIndex: -1,
    });
  };

  moveToFilterPage = () => {
    this.props.history.push('/products/search');
  };

  render() {
    return (
      this.state.result && (
        <nav>
          <div className="trickDiv">
            <div className="navContainer">
              <div className="navLeft">
                <Link to="/">
                  <img src="/images/logo.jpg" alt="logo" className="logo" />
                </Link>
                <div className="inputTrickDiv">
                  <div
                    className="realInput"
                    style={{ zIndex: this.state.inputZIndex }}
                  >
                    <input
                      type="text"
                      placeholder="프리미엄을 캐치하세요"
                      className="hideInput"
                    />
                  </div>
                  <div className="searchWrap">
                    <i className="fas fa-search" />
                    <button className="callSearch" onClick={this.searchModalOn}>
                      프리미엄을 캐치하세요!
                    </button>

                    {this.state.searchModalValid && (
                      <SearchModal
                        isCheck={this.state.searchModalValid}
                        closeSearchModal={this.closeSearchModal}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="linkTab">
                <div className="linkItemsWrap">
                  <Link to="/">홈</Link>
                  <Link
                    onClick={() => this.moveToFilterPage()}
                    onMouseEnter={this.categoriDropDown}
                    onMouseLeave={this.removeDropDown}
                  >
                    쇼핑하기
                  </Link>
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
                <div
                  className="icon"
                  onMouseEnter={this.loginModalOn}
                  onMouseLeave={this.loginModalOff}
                >
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

          {this.state.result.categories &&
            this.state.result.categories[0].name &&
            this.state.dropDownValid && (
              <Dropdown
                isCheck={this.dropDownValid}
                result={this.state.result}
                removeDropDown={this.removeDropDown}
                categoriDropDown={this.categoriDropDown}
              />
            )}
        </nav>
      )
    );
  }
}

export default withRouter(Nav);
