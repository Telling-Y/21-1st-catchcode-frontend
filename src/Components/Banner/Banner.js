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
    this.state.slideIndex > 0
      ? this.setState({
          slideIndex: this.state.slideIndex - 1,
          speed: 300,
        })
      : this.setState({ slideIndex: this.state.slideIndex - 1 });
  };

  nextSlide = () => {
    this.state.slideIndex < 4
      ? this.setState({
          slideIndex: this.state.slideIndex + 1,
          speed: 300,
        })
      : this.setState({ slideIndex: this.state.slideIndex + 1 });
  };

  componentDidMount() {
    setInterval(() => {
      this.state.slideIndex < 4 &&
        setTimeout(() => {
          this.setState({ slideIndex: this.state.slideIndex + 1, speed: 300 });
        }, 2000);
    }, 2000);
  }

  nextSlideTrick = () => {
    this.state.slideIndex === 4 &&
      setTimeout(() => {
        return this.setState({ speed: 0, slideIndex: 1 });
      }, 300);
  };

  prevSlideTrick = () => {
    this.state.slideIndex === 0 &&
      setTimeout(() => {
        return this.setState({ speed: 0, slideIndex: 3 });
      }, 300);
  };

  componentDidUpdate() {
    this.nextSlideTrick();
    this.prevSlideTrick();
  }

  // slidesDot = event => {
  //   this.setState({ slideIndex: event.target.id });
  //   console.log(event.current.id);
  // };

  render() {
    const { imageSrc, speed, slideIndex } = this.state;

    return (
      <>
        <div className="carouselContainer">
          <div className="slideWrap">
            <div className="slideBox">
              <div
                className="slideList"
                style={{
                  width: imageSrc.length * 80 + 'vw',
                  transition: speed + `ms`,
                  transform: `translate3d(
                    ${slideIndex * -80}vw, 0px, 0px`,
                }}
              >
                {imageSrc.map((source, index) => {
                  return (
                    <div className="slide">
                      <img
                        src={source}
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
              {imageSrc &&
                imageSrc.slice(1, imageSrc.length - 1).map((length, i) => (
                  <div id={i} onClick={this.slidesDot}>
                    <i class="far fa-circle" />
                  </div>
                ))}
            </div>
          </div>
          <div className="bannerButton">
            <button className="prev" onClick={this.prevSlide}>
              <i class="fas fa-arrow-left" />
            </button>
            <button className="next" onClick={this.nextSlide}>
              <i class="fas fa-arrow-right" />
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default Banner;
