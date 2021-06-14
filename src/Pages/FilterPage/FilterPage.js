import React from 'react';
import FilterNav from '../../Components/FilterNav/FilterNav';
import Products from '../../Components/Products/Products';
import './FilterPage.scss';

class FilterPage extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      productListInfo: [],
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
    fetch('http://localhost:3000/data/filterProductListData.json')
      .then(res => res.json())
      .then(data => {
        return this.setState({
          productListInfo: data.productListInfo,
        });
      });
  }
  render() {
    return (
      <div className="filterPage">
        <div className="filterWrap">
          <FilterNav categories={this.state.categories} />
          <Products productListInfo={this.state.productListInfo} />
        </div>
      </div>
    );
  }
}

export default FilterPage;
