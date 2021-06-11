import React from 'react';
import ProductLeft from '../../Components/ProductLeft/ProductLeft';
import './Detail.scss';

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
    console.log(this.state.result.products);
    return (
      <div className="detailPageWrap">
        <div className="leftPage">
          {this.state.result.products &&
            this.state.result.products.category &&
            this.state.result.products.map(result => (
              <ProductLeft
                category={result.category}
                description={result.descripotion}
                image={result.image}
              />
            ))}
        </div>
        <div className="rightPage">
          <div className=""></div>
        </div>
      </div>
    );
  }
}

export default Detail;
