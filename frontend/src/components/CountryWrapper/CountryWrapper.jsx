import { useState } from 'react';

import { apiService } from '../../services/api';
import { Loader, ErrorMessage } from '../UiStates/States';
import { CountryBody } from '../CountryBody';
import handleAxiosError from '../../utils/handleAxiosError';

import './CountryWrapper.css';

export default function CountryWrapper() {
    const [countryName, setCountryName] = useState('');
    const [countryData, setCountryData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchCountryData() {
        if (!countryName) {
          return;
        }
        setIsLoading(true);
        try {
            const data = await apiService.getCountry(countryName);
            setCountryData(data[0]);
            setIsLoading(false);
            setError(null)
        } catch (error) {
          setIsLoading(false);
          setCountryData(null);
          if(error.response.status === 404) {
            setError('The requested resource was not found. Please check your input.');
            return;
          }
          setError(handleAxiosError(error));
        }
    }

    return (
      <section className="country-wrapper">
        <div className="form-container">
          <input className="form-container-input" type="text" value={countryName} onChange={(e) => setCountryName(e.target.value)} />
          <button className="form-container-btn" onClick={fetchCountryData}>Get Country Info</button>
        </div>

        <div className="country-wrapper-results">
          {isLoading ? <Loader loaderMessage="Fetching country data..." /> : error ? <ErrorMessage errorMessage={error} /> : 
          countryData ?
          <CountryBody
            name={countryData.name.common} 
            population={countryData.population} 
            region={countryData.region} 
            subRegion={countryData.subregion} 
            capital={countryData?.capital?.length > 0 ? countryData.capital[0] : 'N/A'} 
            nativeName={countryData.nativeName} 
            flag={countryData.flags.png} 
            tld={countryData.tld[0]} 
            currencies={countryData.currencies} 
            languages={countryData.languages} 
          />
         : null }
        </div>
      </section>
    )
}
