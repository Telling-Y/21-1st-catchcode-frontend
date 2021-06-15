import react from 'react';
import './FilterNav.scss';

class FilterNav extends react.Component {
  constructor() {
    super();
    this.state = {
      min: '',
      max: '',
      isCatchSelect: 0,
      isPriceSelect: false,
      isColorSelect: false,
      arr: [false, true, false, false],
    };
  }
  // 'http://localhost:3000/products/${className}/${id}?categoriesDatas.json' RESTfull API 예시

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
    console.log(typeof e.target.id);
    if (!e.target.id) {
      this.setState({
        max: e.target.value,
      });
    } else {
      this.setState({
        min: e.target.value,
      });
    }
  };

  hedleFilterMenu = idx => {
    const { arr } = this.state;
    console.log(arr.indexOf(true));
    if (arr.indexOf(true) !== -1) {
      this.setState(
        {
          arr: [
            ...arr.slice(0, arr.indexOf(true)),
            false,
            ...arr.slice(arr.indexOf(true) + 1, arr.length),
          ],
        },
        () => {
          console.log(arr);
        }
      );
    }
  };

  componentDidUpdate() {
    const { arr } = this.state;
    this.hedleFilterMenu = idx => {
      this.setState({
        arr: [...arr.slice(0, idx), true, ...arr.slice(idx + 1, arr.lenght)],
      });
    };
  }

  render() {
    const { isCatchSelect, isPriceSelect, isColorSelect, min, max } =
      this.state;
    const { categories } = this.props;
    console.log(min);
    return (
      <div className="filterNav">
        <div className="categoriesBox">
          {categories.map((category, idx) => {
            return (
              <div
                key={category.id}
                id={category.id}
                className={`category ${this.state.arr[idx] && 'select'}`}
                onClick={() => this.hedleFilterMenu(idx)}
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
                    id={0}
                    className="priceInput"
                    type="number"
                    value={this.state.min}
                    onChange={this.putinValue}
                  />
                  <span className="won">원</span>
                </div>
                <div className="priceInputBox">
                  <input
                    id={1}
                    className="priceInput"
                    type="number"
                    value={this.state.max}
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

          <div className="filterButton" onClick={this.hadleColor}>
            색상
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

export default FilterNav;
