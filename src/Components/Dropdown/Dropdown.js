import { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';
import './Dropdown.scss';

class Dropdown extends Component {
  goToDetail = event => {
    this.props.history.push(`/product/FilterPage/${event}`);
  };
  render() {
    return (
      <div
        className="dropDownWrap"
        onPointerLeave={this.props.removeDropDown}
        onMouseEnter={this.props.categoriDropDown}
      >
        <div className="categori">
          <ul>
            {this.props.result.categories.map(categorie => {
              return (
                <li key={categorie.id}>
                  <Link
                    onClick={() => {
                      this.goToDetail(categorie.id);
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
        <div className="countryWrap">
          <span>국가별 원단</span>
          <div className="countries">
            {this.props.result.countries.map((result, i) => {
              return (
                <Link to="" key={i} className="countryItem">
                  <span>{result.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Dropdown);
