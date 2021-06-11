import { Component } from 'react';

import './Banner.scss';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerMove: 100,
    };
  }
  render() {
    return (
      <div className="bannerSlideWrap">
        <ul>
          <li className="slideContents sl-1">
            <img
              src="https://media.catchfashion.com/images/h_l?id=cNIggWKb-&t=bp"
              alt="s"
            />
          </li>
          <li className="slideContents sl-2">
            <img
              src="https://media.catchfashion.com/images/h_l?id=0WuFzWcj5&t=bp"
              alt="s"
            />
          </li>
          <li className="slideContents sl-3">
            <img
              src="https://media.catchfashion.com/images/h_l?id=7nyX_Ei95&t=bp"
              alt="s"
            />
          </li>
          <li className="slideContents sl-1">
            <img
              src="https://media.catchfashion.com/images/h_l?id=cNIggWKb-&t=bp"
              alt="s"
            />
          </li>
        </ul>
      </div>
    );
  }
}
export default Banner;
