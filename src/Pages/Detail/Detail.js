import React from 'react';
import SizeSelector from '../../Components/SizeSelector/SizeSelector';
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
    const { result } = this.state;

    return (
      <div className="detailPageWrap">
        <div className="leftPage">
          {result &&
            result.image &&
            result.image.map(x => {
              return <img src={x} alt="제품 이미지" />;
            })}
        </div>
        <div className="rightPage">
          <div className="nameSector">
            <div className="productName">{result.name}</div>
            <div className="productCategory">{result.category}</div>
          </div>
          <div className="sizeSelectorWrap">
            <SizeSelector result={result} />
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
