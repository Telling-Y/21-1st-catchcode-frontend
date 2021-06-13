import react from 'react';
import './FilterNav.scss';

class FilterNav extends react.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/categoriesDatas.json')
      .then(res => res.json())
      .then(data => {
        return this.setState({
          categories: data.result.categories,
        });
      });
  }

  // hedleFilterMenu = e => {
  //   console.log(e);
  // };

  render() {
    const { categories } = this.state;
    return (
      <div className="filterNav">
        <div className="categoriesBox">
          {categories.map(category => {
            return (
              <div
                key={category.id}
                id={category.id}
                className="categories"
                // onClick={this.hedleFilterMenu}
              >
                {category.name}
              </div>
            );
          })}
        </div>
        <div className="filterButtonBox">
          <div className="filterButton select">캐치구매</div>
          <div className="filterButton">가격</div>
          <div className="filterButton">색상</div>
        </div>
      </div>
    );
  }
}

export default FilterNav;
