import React from 'react';
import MainProductItem from '../../Components/MainProductItem/MainProuctItem';
import Banner from '../../Components/Banner/Banner';
import './Main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
  }
  componentDidMount() {
    fetch('http://10.58.2.153:8000/products')
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
