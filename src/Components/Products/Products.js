import react from 'react';
import './Products.scss';

class Products extends react.Component {
  render() {
    return (
      <div className="products">
        <div className="item">
          <div className="image">
            <img
              alt="원단사진입니다"
              src="https://cdn.pixabay.com/photo/2015/03/11/02/13/shiny-668054_960_720.jpg"
            />
          </div>
          <div className="itemContext">
            <div className="title">ISABEL MARANT</div>
            <div className="price">593,051</div>
            <div className="detailWrap">
              <div className="detail">캐치구매</div>
              <div className="detail">솔드아웃</div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="image">
            <img
              alt="원단사진입니다"
              src="https://cdn.pixabay.com/photo/2016/11/14/17/56/textile-1824172_960_720.jpg"
            />
          </div>
          <div className="itemContext">
            <div className="title">ISABEL MARANT</div>
            <div className="price">593,051</div>
            <div className="detailWrap">
              <div className="detail">캐치구매</div>
              <div className="detail">솔드아웃</div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="image">
            <img
              alt="원단사진입니다"
              src="https://us.123rf.com/450wm/samsonovs/samsonovs1506/samsonovs150600052/41296529-배경-빛-자연-린넨-질감-.jpg?ver=6"
            />
          </div>
          <div className="itemContext">
            <div className="title">ISABEL MARANT</div>
            <div className="price">593,051</div>
            <div className="detailWrap">
              <div className="detail">캐치구매</div>
              <div className="detail">솔드아웃</div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="image">
            <img
              alt="원단사진입니다"
              src="https://image.freepik.com/free-vector/abstract-geometric-seamless-pattern_1305-1832.jpg"
            />
          </div>
          <div className="itemContext">
            <div className="title">ISABEL MARANT</div>
            <div className="price">593,051</div>
            <div className="detailWrap">
              <div className="detail">캐치구매</div>
              <div className="detail">솔드아웃</div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="image">
            <img
              alt="원단사진입니다"
              src="https://cdn.pixabay.com/photo/2015/03/11/02/13/shiny-668054_960_720.jpg"
            />
          </div>
          <div className="itemContext">
            <div className="title">ISABEL MARANT</div>
            <div className="price">593,051</div>
            <div className="detailWrap">
              <div className="detail">캐치구매</div>
              <div className="detail">솔드아웃</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
