import { useState, useEffect } from 'react'
import axios from 'axios'
import countriesServices from './services/countries'
import CountryName from './components/CountryName'
import Filter from './components/Filter'
import Language from './components/Langaue'
import CountryFlag from './components/CountryFlag'

function App() {
  const [countries, setCountries] = useState([])

  const [filter, setNewFilter] = useState('')

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const countriesToShow = filter.length == 0
    ? [] :
    countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

  useEffect(() => {
    countriesServices.getAllCountries()
      .then((response) => {
        setCountries(response)
      })
  }, [])

  const changeFilter = (country) => {
    setNewFilter(country)
  }

  if (countriesToShow.length === 1) {
    const country = countriesToShow[0]
    console.log(Object.values(country.languages))
    console.log(country.flags)
    return (
      <div>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        <h1>{country.name.common}</h1>
        <p>Capital {country.capital}</p>
        <p>Area {country.area}</p>
        <h3>Languages</h3>
        <ul>
          {Object.entries(country.languages).map(lang => {
            return <Language language={lang[1]} key={lang[0]} />
          })}
        </ul>
        <CountryFlag src={country.flags.svg} alt={country.flags.alt} />
      </div>
    )
  }
  else if (countriesToShow.length <= 10) {
    return (
      <div>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        {countriesToShow.map((country) => {
          return <CountryName name={country.name.common} key={country.cca3} changeFilter={() => { changeFilter(country.name.common) }} />
        })}

      </div>
    );
  }

  else {
    return (
      <div>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        <p>Too many matches, specify another filter</p>
      </div>
    );
  }
}

export default App;
