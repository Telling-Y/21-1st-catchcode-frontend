import react from 'react';
import { withRouter } from 'react-router-dom';
import './FilterNav.scss';

class FilterNav extends react.Component {
  constructor() {
    super();
    this.state = {
      min: '',
      max: '',
      select: -1,
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

  hadlePrice = () => {
    this.setState({
      isColorSelect: false,
      isPriceSelect: !this.state.isPriceSelect,
    });
  };
  hadleColor = () => {
    this.setState({
      isPriceSelect: false,
      isColorSelect: !this.state.isColorSelect,
    });
  };

  putinValue = e => {
    const idNum = Number(e.target.id);
    if (!idNum) {
      this.setState({
        min: e.target.value,
      });
    } else {
      this.setState({
        max: e.target.value,
      });
    }
  };

  hedleFilterMenu = idx => {
    this.setState({
      select: idx,
    });
  };

  filterCategories = idx => {
    this.props.history.push(
      `/products/search/${this.props.categories[idx].id}`
    );
  };

  render() {
    const { isCatchSelect, isPriceSelect, isColorSelect } = this.state;
    const { categories } = this.props;
    return (
      <div className="filterNav">
        <div className="categoriesBox">
          {categories.map((category, idx) => {
            return (
              <div
                key={category.id}
                id={category.id}
                className={`category ${this.state.select === idx && 'select'}`}
                onClick={
                  (() => this.hedleFilterMenu(idx),
                  () => this.filterCategories(idx))
                }
              >
                {category.name}
              </div>
            );
          })}
        </div>
        <div className="filterButtonBox">
          <div
            className={`filterButton ${isCatchSelect && 'black'}`}
            onClick={this.handleCatch}
          >
            캐치구매
          </div>
          <div className="filterButton">
            <div onClick={this.hadlePrice}>가격</div>
            {isPriceSelect && (
              <div className="filterModal">
                <div className="priceInputBox">
                  <input
                    id="0"
                    className="priceInput"
                    type="number"
                    onChange={this.putinValue}
                  />
                  <span className="won">원</span>
                </div>
                <div className="priceInputBox">
                  <input
                    id="1"
                    className="priceInput"
                    type="number"
                    onChange={this.putinValue}
                  />
                  <span className="won">원</span>
                </div>
                <span className="grayLine"></span>
                <div className="settingBox">
                  <button className="priceReset">초기화</button>
                  <button className="black">저장</button>
                </div>
              </div>
            )}
          </div>

          <div className="filterButton">
            <div onClick={this.hadleColor}>색상</div>
            {isColorSelect && (
              <div className="filterModal">
                <div className="colorBox">
                  <div className="colorCircle"></div>
                  <div className="colorCircle"></div>
                  <div className="colorCircle"></div>
                  <div className="colorCircle"></div>
                  <div className="colorCircle"></div>
                </div>
                <span className="grayLine"></span>
                <div className="settingBox">
                  <button className="priceReset">초기화</button>
                  <button className="black">저장</button>
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
