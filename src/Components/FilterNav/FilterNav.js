import react from 'react';
import { withRouter } from 'react-router-dom';
import './FilterNav.scss';

class FilterNav extends react.Component {
  constructor() {
    super();
    this.state = {
      select: 0,
      isCatchSelect: 0,
      isPriceSelect: false,
      isColorSelect: false,
    };
  }

  handleCatch = () => {
    this.setState({
      isCatchSelect: !this.state.isCatchSelect,
    });
  };

  handlePrice = () => {
    this.setState({
      isColorSelect: false,
      isPriceSelect: !this.state.isPriceSelect,
    });
  };
  handleColor = () => {
    this.setState({
      isPriceSelect: false,
      isColorSelect: !this.state.isColorSelect,
    });
  };

  handleFilterMenu = idx => {
    this.setState({
      select: idx,
    });
  };

  render() {
    const { isCatchSelect, isPriceSelect, isColorSelect } = this.state;
    const {
      filterCategory,
      filterCatchBuy,
      filterDetail,
      putInPrice,
      putinColorValue,
    } = this.props;
    return (
      <div className="filterNav">
        <div className="categoriesBox">
          {CATEGORIES_NAME.map((category, idx) => {
            return (
              <div
                key={idx}
                id={category.id}
                className={`category ${this.state.select === idx && 'select'}`}
                onClick={e => {
                  this.handleFilterMenu(idx);
                  filterCategory(e);
                }}
              >
                {category.name}
              </div>
            );
          })}
        </div>
        <div className="filterButtonBox">
          <div
            id={isCatchSelect ? 0 : 1}
            className={`filterButton ${isCatchSelect && 'black'}`}
            onClick={e => {
              this.handleCatch();
              filterCatchBuy(e);
            }}
          >
            캐치구매
          </div>
          <div className="filterButton">
            <div onClick={this.handlePrice}>가격</div>
            {isPriceSelect && (
              <div className="filterModal">
                <div className="priceInputBox">
                  <input
                    id="0"
                    className="priceInput"
                    type="number"
                    onChange={putInPrice}
                  />
                  <span className="won">원</span>
                </div>
                <div className="priceInputBox">
                  <input
                    id="1"
                    className="priceInput"
                    type="number"
                    onChange={putInPrice}
                  />
                  <span className="won">원</span>
                </div>
                <span className="grayLine"></span>
                <div className="settingBox">
                  <button className="priceReset">초기화</button>
                  <button className="black" id="0" onClick={filterDetail}>
                    저장
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="filterButton">
            <div onClick={this.handleColor}>색상</div>
            {isColorSelect && (
              <div className="filterModal">
                <div className="colorBox">
                  {PRODUCTS_COLOR.map((data, idx) => {
                    return (
                      <div
                        key={idx}
                        id={data.color}
                        className="colorCircle"
                        style={{ backgroundColor: [data.color] }}
                        onClick={putinColorValue}
                      ></div>
                    );
                  })}
                </div>
                <span className="grayLine"></span>
                <div className="settingBox">
                  <button className="priceReset">초기화</button>
                  <button className="black" id="1" onClick={filterDetail}>
                    저장
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FilterNav);

const CATEGORIES_NAME = [
  { id: 0, name: '전체' },
  { id: 1, name: '면' },
  { id: 2, name: '실크' },
  { id: 3, name: '마' },
  { id: 4, name: '데님' },
  { id: 5, name: '기모' },
  { id: 6, name: '패턴' },
];

const PRODUCTS_COLOR = [
  { id: 0, color: '#79ffdf' },
  { id: 1, color: '#7902df' },
  { id: 2, color: '#790216' },
  { id: 3, color: '#0c02df' },
  { id: 4, color: '#ff99ff' },
  { id: 5, color: '#6666ff' },
  { id: 6, color: '#ff6666' },
  { id: 7, color: '#66ffff' },
];
