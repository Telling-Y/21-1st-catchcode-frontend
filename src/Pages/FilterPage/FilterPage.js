import React from 'react';
import FilterNav from '../../Components/FilterNav/FilterNav';
import FilterProducts from '../../Components/FilterProducts/FilterProducts';
import './FilterPage.scss';

class FilterPage extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      productListInfo: [],
      address: '',
    };
  }

  handleFetch = () => {
    fetch(`http://10.58.6.177:8000/products/search${this.state.address}`)
      .then(res => res.json())
      .then(data => {
        return this.setState({
          productListInfo: data.productListInfo,
        });
      });
  };

  // filterCategories = e => {
  //   console.log(e.target.id);
  //   let numId = Number(e.target.id);
  //   let categoryAddress = '';
  //   let catchBuyAddress = '';
  //   let minMaxAddress = '';
  //   let colorAddress = '';

  //   numId
  //     ? (categoryAddress = `?category=${e.target.id}`)
  //     : (categoryAddress = ``);

  //   if (e.target.className === 'filterButton black' && e.target.id === 1) {
  //     catchBuyAddress = `catch=${e.target.id}`;
  //   }
  //   console.log(catchBuyAddress);
  // };

  componentDidMount() {
    fetch('http://10.58.6.177:8000/products/categories')
      .then(res => res.json())
      .then(data => {
        return this.setState({
          categories: data.productCategories.categories,
        });
      });
    fetch('http://10.58.6.177:8000/products/search')
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
          <FilterNav
            categories={this.state.categories}
            filterCategories={this.filterCategories}
          />
          <FilterProducts productListInfo={this.state.productListInfo} />
        </div>
      </div>
    );
  }
}

export default FilterPage;
