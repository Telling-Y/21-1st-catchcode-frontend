import react from 'react';
import './FilterNav.scss';

class FilterNav extends react.Component {
  constructor() {
    super();
    this.state = {
      isCatchSelect: 0,
      isPriceSelect: false,
      isColorSelect: false,
      arr: [false, false, false, false],
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
      isPriceSelect: !this.state.isPriceSelect,
    });
  };
  hadleColor = () => {
    this.setState({
      isColorSelect: !this.state.isColorSelect,
    });
  };

  hedleFilterMenu = idx => {
    const { arr } = this.state;
    const trueIndex = arr.indexOf(true);
    console.log(trueIndex);
    this.setState(
      {
        arr: [
          ...arr.slice(0, 'true'),
          false,
          ...arr.slice('true' + 1, arr.length),
        ],
      },
      () => {
        this.setState({
          arr: [...arr.slice(0, idx), true, ...arr.slice(idx + 1, arr.lenght)],
        });
      }
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
          <div className="filterButton" onClick={this.hadlePrice}>
            가격
            {isPriceSelect && (
              <div className="filterModal">
                <div className="priceInputBox">
                  <input className="priceInput" value={`원`} />
                  <input className="priceInput" value={`원`} />
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
