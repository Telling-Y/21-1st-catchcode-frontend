import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Dropdown.scss';

class Dropdown extends Component {
  goToDetailCategory = event => {
    console.log(`/products/search?&category=${event.id}`);
    this.props.history.push(`/products/search?category=${event.id}`);
  };

  // gotoDetailCountry = event => {
  //   this.props.history.push(`product/search/?country=${event.id}`);
  // };
  render() {
    return (
      <div
        className="dropDownWrap"
        onPointerLeave={this.props.removeDropDown}
        onMouseEnter={this.props.categoriDropDown}
      >
        <div className="dropDownBox">
          <div className="categori">
            <span>카테고리</span>
            <ul>
              {this.props.result.categories.map(categorie => {
                return (
                  <li key={categorie.id}>
                    <Link
                      onClick={() => {
                        this.goToDetailCategory(categorie);
                      }}
                    >
                      <div className="categoriItems">
                        <img src={categorie.imageUrl} alt={categorie.name} />

                        <span className="categoriName">{categorie.name}</span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* <div className="countryWrap">
            <span>국가별 원단</span>
            <div className="countries">
              {this.props.result.countries.map((result, i) => {
                return (
                  <Link
                    onClick={() => this.moveToDetailCountry(result)}
                    key={i}
                    className="countryItem"
                  >
                    <span>{result.name}</span>
                  </Link>
                );
              })}
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
export default withRouter(Dropdown);
