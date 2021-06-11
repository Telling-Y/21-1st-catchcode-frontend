import React from 'react';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="detailPageWrap">
        <div className="leftPage">
          <div className="imgMap">
            <img src="s" alt="junk" />
          </div>
        </div>
        <div className="rightPage">
          <div className=""></div>
        </div>
      </div>
    );
  }
}

export default Detail;
