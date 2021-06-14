import { Component } from 'react';
import './Banner.scss';

class Banner extends Component {
  constructor() {
    super();
    this.state = {
      slideIndex: 1,
      speed: 300,
      imageSrc: [
        'https://media.catchfashion.com/images/h_l?id=7nyX_Ei95&t=bp',
        'https://media.catchfashion.com/images/h_l?id=cNIggWKb-&t=bp',
        'https://media.catchfashion.com/images/h_l?id=0WuFzWcj5&t=bp',
        'https://media.catchfashion.com/images/h_l?id=7nyX_Ei95&t=bp',
        'https://media.catchfashion.com/images/h_l?id=cNIggWKb-&t=bp',
      ],
    };
  }

  prevSlide = () => {
    this.state.slideIndex < 1
      ? this.setState({
          slideIndex: this.state.slideIndex - 1,
        })
      : this.setState({
          slideIndex: 3,
        });

    console.log(this.state.slideIndex);
  };

  nextSlide = () => {
    this.state.slideIndex > 3
      ? this.setstate({
          slideIndex: 0,
        })
      : this.setState({
          slideIndex: this.state.slideIndex + 1,
        });
  };

  componentDidMount() {
    setInterval(() => {
      setTimeout(() => {
        this.setState({ slideIndex: this.state.slideIndex + 1 });
      }, 2000);
    }, 2000);
  }

  // componentDidUpdate() {
  //   if (this.state.slideIndex > 3) {
  //     setTimeout(() => {
  //       this.setState(
  //         {
  //           slideIndex: 1,
  //         },
  //         2000
  //       );
  //     });
  //   }
  // }

  render() {
    return (
      <>
        <div className="carouselContainer">
          <div className="slideWrap">
            <div className="slideBox">
              <div
                className="slideList"
                style={{
                  width: this.state.imageSrc.length * 500 + 'px',
                  transition: this.state.speed + `ms`,
                  transform: `translate3d(
                    ${this.state.slideIndex * -500}px, 0px, 0px`,
                }}
              >
                {this.state.imageSrc.map((x, index) => {
                  return (
                    <div className="slide">
                      <img
                        src={x}
                        alt="슬라이드"
                        className="slideItem"
                        id={`${index}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="slideDot">
              {this.state.imageSrc &&
                this.state.imageSrc.map((length, i) => (
                  <div id={i + 1}>
                    <i class="far fa-circle" />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <button className="prev" type="button" onClick={this.prevSlide}>
          prev
        </button>
        <button className="next" type="button" onClick={this.nextSlide}>
          next
        </button>
      </>
    );
  }
}
export default Banner;
