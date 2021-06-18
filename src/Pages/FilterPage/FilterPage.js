import React from 'react';
import { GET_FILTERPRODUCTS_API, GET_COTEGORIES_API } from '../../config';
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
      close: true,
    };
  }

  handleFetch = newAddress => {
    fetch(`${GET_FILTERPRODUCTS_API}?${newAddress}`)
      .then(res => res.json())
      .then(data => {
        return this.setState({
          productListInfo: data.productListInfo,
        });
      });
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
    this.setState(
      {
        color: e.target.id.replace('#', '%23'),
      },
      () => {
        console.log(this.state.color);
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
    console.log(colorAddress);

    newAdress += minMaxAddress + colorAddress;

    this.handleFetch(newAdress);

    this.setState({
      close: false,
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
            this.handleFetch(
              `${this.state.catchBuyAddress}&${this.state.categoryAddress}`
            );
          }
        )
      : this.setState(
          {
            catchBuyAddress: '',
          },
          () => {
            this.handleFetch(
              `${this.state.catchBuyAddress}&${this.state.categoryAddress}`
            );
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
            this.handleFetch(
              `${this.state.catchBuyAddress}&${this.state.categoryAddress}`
            );
          }
        )
      : this.setState(
          {
            categoryAddress: ``,
          },
          () => {
            this.handleFetch(
              `${this.state.catchBuyAddress}&${this.state.categoryAddress}`
            );
          }
        );
  };

  resetFilterData = e => {
    const { id } = e.target;

    Number(id)
      ? this.setState({
          color: '',
        })
      : this.setState({
          min: '',
          max: '',
        });
  };

  componentDidMount() {
    fetch(`${GET_COTEGORIES_API}`)
      .then(res => res.json())
      .then(data => {
        return this.setState({
          categories: data.productCategories.categories,
        });
      });
    fetch(`${GET_FILTERPRODUCTS_API}`)
      .then(res => res.json())
      .then(data => {
        return this.setState({
          productListInfo: data.productListInfo,
        });
      });
    // props.match.params.id가 공통되어 name이 안써지는 것 같음
    fetch(`${GET_FILTERPRODUCTS_API}?${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        console.log(`data`, data);
        // this.setState({
        //   result: data.productDetails,
        //   prodcutName: data.productDetails.name,
        // });
      });
  }

  render() {
    console.log(this.props);
    return (
      <div className="filterPage">
        <div className="filterWrap">
          <FilterNav
            min={this.state.min}
            max={this.state.max}
            color={this.state.color}
            categories={this.state.categories}
            close={this.state.close}
            putInPrice={this.putInPrice}
            putinColorValue={this.putinColorValue}
            filterDetail={this.filterDetail}
            filterCatchBuy={this.filterCatchBuy}
            filterCategory={this.filterCategory}
            resetFilterData={this.resetFilterData}
          />
          <FilterProducts productListInfo={this.state.productListInfo} />
        </div>
      </div>
    );
  }
}

export default FilterPage;
