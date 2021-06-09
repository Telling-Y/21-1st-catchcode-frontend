import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.scss';

class Dropdown extends Component {
  render() {
    return (
      <div
        className="dropDownWrap"
        onPointerLeave={this.props.removeDropDown}
        onMouseEnter={this.props.categoriDropDown}
      >
        <div className="categori">
          <ul>
            <li>
              <Link to="#">
                <div className="categoriItems">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/03/11/02/13/shiny-668054_960_720.jpg"
                    alt="실크"
                  />
                  <span className="categoriName">실크</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="categoriItems">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/14/17/56/textile-1824172_960_720.jpg"
                    alt="면"
                  />
                  <span className="categoriName">면</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="categoriItems">
                  <img
                    src="https://us.123rf.com/450wm/samsonovs/samsonovs1506/samsonovs150600052/41296529-배경-빛-자연-린넨-질감-.jpg?ver=6"
                    alt="린넨"
                  />
                  <span className="categoriName">린넨</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="categoriItems">
                  <img
                    src="https://image.freepik.com/free-vector/abstract-geometric-seamless-pattern_1305-1832.jpg"
                    alt="패턴"
                  />
                  <span className="categoriName">패턴</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="countryWrap">
          <span>국가별 원단</span>
          <div className="countries">
            <Link to="#" className="countryItem">
              Greece
            </Link>
            <Link to="#" className="countryItem">
              India
            </Link>
            <Link to="#" className="countryItem">
              Italia
            </Link>
            <Link to="#" className="countryItem">
              Korea
            </Link>
            <Link to="#" className="countryItem">
              China
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Dropdown;
