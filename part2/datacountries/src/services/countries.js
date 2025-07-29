import axios from 'axios'
const baseUrl = 'https://restcountries.com/v3.1/all?fields=name,capital,area,flags,languages,cca3'

const getAllCountries = () => {
    const request = axios.get(`${baseUrl}`)
    return request.then(response => response.data)
}

export default { getAllCountries }