import React from 'react';
import MainProductItem from '../../Components/MainProductItem/MainProuctItem';
import Banner from '../../Components/Banner/Banner';
import { GET_DETAILPAGE_API } from '../../config';
import './Main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
  }
  componentDidMount() {
    fetch(`${GET_DETAILPAGE_API}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          product: data.productList,
        });
      });
  }
  render() {
    const { product } = this.state;
    return (
      <>
        <Banner />
        <main className="productArea">
          <MainProductItem product={product} />
        </main>
      </>
    );
  }
}

export default Main;
