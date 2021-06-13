import React from 'react';
import FilterNav from '../../Components/FilterNav/FilterNav';
import Products from '../../Components/Products/Products';
import './FilterPage.scss';

class FilterPage extends React.Component {
  render() {
    return (
      <div className="filterPage">
        <div className="filterWrap">
          <FilterNav />
          <Products />
        </div>
      </div>
    );
  }
}

export default FilterPage;
