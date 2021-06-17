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
      categoryAddress: '',
      catchBuyAddress: '',
      min: '',
      max: '',
      color: '',
    };
  }

  handleFetch = newAddress => {
    fetch(`http://10.58.2.153:8000/products/search?${newAddress}`)
      .then(res => res.json())
      .then(
        data => {
          return this.setState({
            productListInfo: data.productListInfo,
          });
        },
        () => {
          console.log(newAddress);
        }
      );
  };

  filterDetail = () => {
    const { min, max, color } = this.state;
    let minMaxAddress = '';
    let colorAddress = '';
    let newAdress = `${this.state.categoryAddress} + ${this.state.catchBuyAddress}`;

    if (max && min) {
      minMaxAddress = `&priceMin=${min}&priceMax=${max}`;
    } else if (min) {
      minMaxAddress = `&priceMin=${min}`;
    } else if (max) {
      minMaxAddress = `&priceMax=${max}`;
    } else {
      minMaxAddress = '';
    }

    color ? (colorAddress = `&color=${color}`) : (colorAddress = '');

    newAdress += minMaxAddress + colorAddress;

    this.handleFetch(newAdress);
  };

  putInPrice = e => {
    const { id, value } = e.target;

    Number(id)
      ? this.setState({
          max: value,
        })
      : this.setState({
          min: value,
        });
  };

  putinColorValue = e => {
    this.setState({
      color: e.target.id.replace('#', '%23'),
    });
  };

  filterCatchBuy = e => {
    const { id } = e.target;
    Number(id)
      ? this.setState(
          {
            catchBuyAddress: `&catch=${id}`,
          },
          () => {
            this.handleFetch(this.state.catchBuyAddress);
          }
        )
      : this.setState(
          {
            catchBuyAddress: '',
          },
          () => {
            this.handleFetch(this.state.catchBuyAddress);
          }
        );
  };

  filterCategory = e => {
    const { id } = e.target;

    Number(id)
      ? this.setState(
          {
            categoryAddress: `&category=${id}`,
          },
          () => {
            this.handleFetch(this.state.categoryAddress);
          }
        )
      : this.setState(
          {
            categoryAddress: ``,
          },
          () => {
            this.handleFetch(this.state.categoryAddress);
          }
        );
  };

  componentDidMount() {
    fetch('http://10.58.2.153:8000/products/categories')
      .then(res => res.json())
      .then(data => {
        return this.setState({
          categories: data.productCategories.categories,
        });
      });
    fetch('http://10.58.2.153:8000/products/search')
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
            putInPrice={this.putInPrice}
            putinColorValue={this.putinColorValue}
            filterDetail={this.filterDetail}
            filterCatchBuy={this.filterCatchBuy}
            filterCategory={this.filterCategory}
          />
          <FilterProducts productListInfo={this.state.productListInfo} />
        </div>
      </div>
    );
  }
}

export default FilterPage;
