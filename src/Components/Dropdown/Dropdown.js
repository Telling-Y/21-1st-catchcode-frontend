import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.scss';

class Dropdown extends Component {
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
                  <Link to="#">
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
            {this.props.result.countries.map(result => {
              return (
                <Link to="#" className="countryItem">
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
export default Dropdown;
