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
    fetch('http://127.0.1.1:8000/Main')
      .then(res => res.json())
      .then(data => {
        this.setState({
          product: data.message,
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
