import PropTypes from 'prop-types';

CountryBody.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  subRegion: PropTypes.string,
  capital: PropTypes.string,
  tld: PropTypes.string.isRequired,
  currencies: PropTypes.object.isRequired,
  languages: PropTypes.object.isRequired
}

import './CountryBody.css'

export default function CountryBody({
  name,
  flag,
  population,
  region,
  subRegion,
  capital,
  tld,
  currencies,
  languages
}) {
  
  function evaluateCurrencies(currencies) {
    if (currencies) {
      const currencyCode = Object.keys(currencies)[0];
      const currencyInfo = currencies[currencyCode];
  
      if (currencyInfo) {
        const currencyName = currencyInfo.name || currencyInfo.currency_name || currencyInfo.currencyName;
        const currencySymbol = currencyInfo.symbol || currencyInfo.currency_symbol || currencyInfo.currencySymbol;
  
        return `(${currencyCode}) ${currencyName}. Symbol: (${currencySymbol})`;
      }
    } else {
      return 'N/A'
    }
  }

  function evaluateLanguages(languagesData) {
    if (languagesData) {
      const languageCode = Object.keys(languagesData)[0];
      const languageName = languagesData[languageCode];
  
      if (languageName) {
        return `${languageName}`
      }
    } else {
      return 'N/A'
    }
  }

  return (
    <div className="country-body">

      <img src={flag} className="country-flag" />

      <article className="country-summary">
        <h2 className="country-name">{name}</h2>
        
        <div className="country-summary-info">
          <div className="country-summary-info-one">
            <div className="country-summary-field">
              <h4 className="country-summary-label">Population:</h4>
              <p className="country=summary-value">{population.toLocaleString()}</p>
            </div>

            <div className="country-summary-field">
              <h4 className="country-summary-label">Region:</h4>
              <p className="country=summary-value">{region}</p>
            </div>

            {subRegion ? 
              <div className="country-summary-field">
                <h4 className="country-summary-label">Sub Region:</h4>
                <p className="country=summary-value">{subRegion}</p>
              </div> : null}

            {capital ? 
            <div className="country-summary-field">
              <h4 className="country-summary-label">Capital:</h4>
              <p className="country=summary-value">{capital}</p>
            </div> : null}
            
          </div>

          <div className="country-summary-info-two">
            <div className="country-summary-field">
              <h4 className="country-summary-label">Top level Domain:</h4>
              <p className="country-summary-value lowercase">{tld}</p>
            </div>
            <div className="country-summary-field">
              <h4 className="country-summary-label">Currencies:</h4>
              <p className="country=summary-value">{evaluateCurrencies(currencies)}</p>
            </div>

            <div className="country-summary-field">
              <h4 className="country-summary-label">Languages:</h4>
              <p className="country=summary-value">{evaluateLanguages(languages)}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}