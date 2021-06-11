import React from 'react';
import MainProductItem from '../../Components/MainProductItem/MainProuctItem';
import Banner from '../../Components/Banner/Banner';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <>
        <Banner></Banner>
        <main className="productArea">
          {mainProduct.map(item => {
            return <MainProductItem />;
          })}
          <div className=""></div>
        </main>
      </>
    );
  }
}

export default Main;
