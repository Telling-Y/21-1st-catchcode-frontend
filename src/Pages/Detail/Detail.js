import React from 'react';
import ProductLeft from '../../Components/ProductLeft/ProductLeft';

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      result: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/detail.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          result: data.result,
        });
      });
  }

  render() {
    return (
      <div className="detailPageWrap">
        <div className="leftPage">
          {/* {this.state.result.products.map(result => ( */}
          <ProductLeft
            id={this.state.result.products.id}
            category={this.state.result.products.category}
            description={this.state.result.products.descripotion}
            imageUrl={this.state.result.products.image}
          />
          {/* ))} */}
        </div>
        <div className="rightPage">
          <div className=""></div>
        </div>
      </div>
    );
  }
}

export default Detail;
